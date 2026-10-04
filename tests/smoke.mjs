const endpoint = process.argv[2] || "http://127.0.0.1:9444";
const targetUrl = process.argv[3] || "file:///C:/Users/User/Desktop/SmartMoneyTool/index.html";

const targets = await fetch(`${endpoint}/json/list`).then(r => r.json());
const target = targets.find(x => x.type === "page");
if (!target) throw new Error("No browser page target.");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
let id = 0; const pending = new Map(); const errors = [];
socket.addEventListener("message", event => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) { const p = pending.get(msg.id); pending.delete(msg.id); msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result); }
  if (msg.method === "Runtime.exceptionThrown") errors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text);
});
function send(method, params = {}) { const callId = ++id; socket.send(JSON.stringify({ id: callId, method, params })); return new Promise((resolve, reject) => pending.set(callId, { resolve, reject })); }
async function evaluate(expression) { const out = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }); if (out.exceptionDetails) throw new Error(out.exceptionDetails.exception?.description || out.exceptionDetails.text); return out.result.value; }
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send("Page.navigate", { url: targetUrl }); await new Promise(r => setTimeout(r, 900));

const initial = await evaluate(`(() => ({
  grades:[...document.querySelectorAll('#gradeSelect option')].map(x=>x.value),
  modes:[...document.querySelectorAll('[data-mode]')].map(x=>x.dataset.mode),
  activities:[...document.querySelectorAll('#activitySelect option')].map(x=>x.value),
  images:[...document.querySelectorAll('.money-picture img')].map(x=>x.complete&&x.naturalWidth>0),
  listenDisabled:document.getElementById('listenButton').disabled,
  overflow:document.documentElement.scrollWidth-window.innerWidth
}))()`);
if (initial.grades.join(",") !== "2,3") throw new Error(`Unexpected grades: ${initial.grades}`);
if (initial.modes.join(",") !== "money,spend,manage") throw new Error(`Unexpected modes: ${initial.modes}`);
if (!initial.listenDisabled) throw new Error("Result narration should wait for an interaction.");
if (initial.images.some(ok => !ok)) throw new Error("Currency image failed.");
if (initial.overflow > 1) throw new Error(`Mobile overflow: ${initial.overflow}px`);

const expected = {
  2:{money:["identify","compose","equivalent"],spend:["pay"],manage:["needWant","savingPlan","budget"]},
  3:{money:["compose","equivalent","foreign"],spend:["pay"],manage:["needWant","savingPlan","budget"]}
};
const coverage = [];
for (const [grade, modes] of Object.entries(expected)) {
  for (const [mode, activities] of Object.entries(modes)) {
    const result = await evaluate(`(() => {
      const gradeSelect=document.getElementById('gradeSelect'); gradeSelect.value=${JSON.stringify(grade)}; gradeSelect.dispatchEvent(new Event('change',{bubbles:true}));
      document.querySelector('[data-mode=${mode}]').click();
      const list=[...document.querySelectorAll('#activitySelect option')].map(x=>x.value); const checks=[];
      for(const value of list){
        const select=document.getElementById('activitySelect'); select.value=value; select.dispatchEvent(new Event('change',{bubbles:true}));
        checks.push({value,stage:document.querySelectorAll('#visualStage > *').length,interactive:document.querySelectorAll('#visualStage button,#controlArea button,#controlArea input').length,summary:document.getElementById('liveSummary').textContent.trim().length,overflow:document.documentElement.scrollWidth-window.innerWidth});
      }
      return {list,checks};
    })()`);
    if (result.list.join(",") !== activities.join(",")) throw new Error(`${grade}/${mode}: ${result.list}`);
    if (result.checks.some(x => !x.stage || !x.interactive || !x.summary || x.overflow > 1)) throw new Error(`${grade}/${mode} incomplete: ${JSON.stringify(result.checks)}`);
    coverage.push(...result.checks.map(x => x.value));
  }
}

const moneyTool = await evaluate(`(() => {
  const grade=document.getElementById('gradeSelect'); grade.value='2'; grade.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-mode=money]').click(); const activity=document.getElementById('activitySelect'); activity.value='compose'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  const before=document.getElementById('listenButton').disabled; document.querySelector('[data-money=rm50]').click(); document.querySelector('[data-money=rm5]').click(); document.querySelector('[data-money=rm1]').click(); document.querySelector('[data-money=sen50]').click();
  return {before,after:document.getElementById('listenButton').disabled,total:document.querySelector('.wallet-total strong').textContent,summary:document.getElementById('liveSummary').textContent};
})()`);
if (!moneyTool.before || moneyTool.after || moneyTool.total !== "RM56.50" || !moneyTool.summary.includes("tepat")) throw new Error(`Money tool failed: ${JSON.stringify(moneyTool)}`);

const board = await evaluate(`(() => {
  document.querySelector('[data-mode=manage]').click(); const activity=document.getElementById('activitySelect'); activity.value='needWant'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-item=rice]').click(); const selected=document.querySelector('[data-item=rice]').classList.contains('selected'); document.querySelector('[data-bin=need]').click();
  const transfer=new DataTransfer(); const game=document.querySelector('[data-item=game]'); game.dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer:transfer})); document.querySelector('[data-bin=want]').dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:transfer}));
  return {selected,moved:!!document.querySelector('[data-bin=need] [data-item=rice]'),dragged:!!document.querySelector('[data-bin=want] [data-item=game]'),listen:!document.getElementById('listenButton').disabled,pool:!!document.querySelector('[data-bin=pool] [data-item=rice]')};
})()`);
if (!board.selected || !board.moved || !board.dragged || !board.listen || board.pool) throw new Error(`Board interaction failed: ${JSON.stringify(board)}`);

const teacher = await evaluate(`(() => {
  document.querySelector('[data-mode=spend]').click(); document.getElementById('teacherButton').click(); document.getElementById('teacherRinggit').value='56'; document.getElementById('teacherSen').value='50'; document.getElementById('useTeacherSettings').click();
  return {open:document.getElementById('teacherDialog').open,target:document.querySelector('.challenge-text').textContent};
})()`);
if (teacher.open || !teacher.target.includes("56.50")) throw new Error(`Teacher setting failed: ${JSON.stringify(teacher)}`);

const zh = await evaluate(`(() => { document.querySelector('[data-lang=zh]').click(); return {lang:document.documentElement.lang,title:document.querySelector('h1').textContent,overflow:document.documentElement.scrollWidth-window.innerWidth}; })()`);
if (zh.lang !== "zh-Hans" || !zh.title.includes("钱币") || zh.overflow > 1) throw new Error(`Chinese UI failed: ${JSON.stringify(zh)}`);
if (errors.length) throw new Error(`Runtime errors: ${errors.join(" | ")}`);
console.log(JSON.stringify({ ok:true, uniqueTools:new Set(coverage).size, initial, moneyTool, board, teacher, zh }, null, 2));
socket.close();
