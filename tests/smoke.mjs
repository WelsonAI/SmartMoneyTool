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
  activities:[...document.querySelectorAll('#activitySelect option')].map(x=>x.value),
  images:[...document.querySelectorAll('.money-picture img')].map(x=>({src:x.getAttribute('src'),ok:x.complete&&x.naturalWidth>0})),
  contoh:document.querySelectorAll('.contoh').length,
  overflow:document.documentElement.scrollWidth-window.innerWidth,
  legacy:['checkButton','nextButton','answerArea','feedback'].filter(id=>document.getElementById(id))
}))()`);
if (initial.grades.join(",") !== "2,3,4,5,6") throw new Error(`Unexpected grades: ${initial.grades}`);
if (!initial.activities.includes("identify")) throw new Error("Year 2 money explorer missing.");
if (initial.images.some(x => !x.ok)) throw new Error(`Currency image failed: ${JSON.stringify(initial.images)}`);
if (!initial.contoh) throw new Error("CONTOH marker missing.");
if (initial.overflow > 1) throw new Error(`Mobile overflow: ${initial.overflow}px`);
if (initial.legacy.length) throw new Error(`Legacy assessment UI remains: ${initial.legacy}`);

const expected = {
  2:{money:["identify","compose","equivalent"],spend:["pay"],manage:["needWant","savingPlan"]},
  3:{money:["compose","equivalent","foreign"],spend:["pay","methods"],manage:["needWant","budget"],finance:["cashless"]},
  4:{money:["foreign"],spend:["methods","receipt"],manage:["budget","wiseChoice"],finance:["cashCredit"]},
  5:{spend:["receipt"],manage:["budget"],finance:["saveInvest","simpleCompound","creditDebt"]},
  6:{spend:["discount","documents"],manage:["financialDecision"],finance:["profitLoss","assetsLiabilities","insurance"]}
};
const coverage = [];
for (const [grade, modes] of Object.entries(expected)) {
  for (const [mode, activities] of Object.entries(modes)) {
    const result = await evaluate(`(() => {
      const gradeSelect=document.getElementById('gradeSelect'); gradeSelect.value=${JSON.stringify(grade)}; gradeSelect.dispatchEvent(new Event('change',{bubbles:true}));
      document.querySelector('[data-mode=${mode}]').click();
      const list=[...document.querySelectorAll('#activitySelect option')].map(x=>x.value);
      const checks=[];
      for(const value of list){
        const select=document.getElementById('activitySelect'); select.value=value; select.dispatchEvent(new Event('change',{bubbles:true}));
        checks.push({value,stage:document.querySelectorAll('#visualStage > *').length,interactive:document.querySelectorAll('#visualStage button,#controlArea button,#controlArea input,#controlArea select').length,summary:document.getElementById('liveSummary').textContent.trim().length,overflow:document.documentElement.scrollWidth-window.innerWidth});
      }
      return {list,checks,overflow:document.documentElement.scrollWidth-window.innerWidth};
    })()`);
    if (result.list.join(",") !== activities.join(",")) throw new Error(`${grade}/${mode}: ${result.list}`);
    if (result.checks.some(x => !x.stage || !x.interactive || !x.summary || x.overflow > 1)) throw new Error(`${grade}/${mode} incomplete: ${JSON.stringify(result.checks)}`);
    if (result.overflow > 1) throw new Error(`${grade}/${mode} overflow ${result.overflow}px`);
    coverage.push(...result.checks.map(x => x.value));
  }
}

const practical = await evaluate(`(() => {
  const grade=document.getElementById('gradeSelect'); grade.value='2'; grade.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-mode=money]').click();
  const activity=document.getElementById('activitySelect'); activity.value='compose'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-money=rm5]').click();
  return {total:document.querySelector('.wallet-total strong').textContent,items:document.querySelectorAll('.wallet-item').length,summary:document.getElementById('liveSummary').textContent};
})()`);
if (practical.total !== "RM5.00" || practical.items !== 1) throw new Error(`Money manipulation failed: ${JSON.stringify(practical)}`);

const teacher = await evaluate(`(() => {
  document.getElementById('teacherButton').click();
  document.getElementById('teacherRinggit').value='56'; document.getElementById('teacherSen').value='50';
  document.getElementById('teacherRate').value='6'; document.getElementById('teacherPeriod').value='4';
  document.getElementById('useTeacherSettings').click();
  return {open:document.getElementById('teacherDialog').open,target:document.querySelector('.challenge-text').textContent,cards:document.querySelectorAll('[data-money]').length};
})()`);
if (teacher.open || !teacher.target.includes("56.50") || teacher.cards < 4) throw new Error(`Teacher settings failed: ${JSON.stringify(teacher)}`);

const zh = await evaluate(`(() => { document.querySelector('[data-lang=zh]').click(); return {lang:document.documentElement.lang,title:document.querySelector('h1').textContent,tool:document.getElementById('activityTitle').textContent,overflow:document.documentElement.scrollWidth-window.innerWidth}; })()`);
if (zh.lang !== "zh-Hans" || !zh.title.includes("金钱") || zh.overflow > 1) throw new Error(`Chinese UI failed: ${JSON.stringify(zh)}`);
if (errors.length) throw new Error(`Runtime errors: ${errors.join(" | ")}`);
console.log(JSON.stringify({ ok: true, uniqueTools: new Set(coverage).size, initial, practical, teacher, zh }, null, 2));
socket.close();
