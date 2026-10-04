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
  listenAbsent:!document.getElementById('listenButton'),
  overflow:document.documentElement.scrollWidth-window.innerWidth
}))()`);
if (initial.grades.join(",") !== "2,3,4,5,6") throw new Error(`Unexpected grades: ${initial.grades}`);
if (initial.modes.join(",") !== "money,spend,manage") throw new Error(`Unexpected modes: ${initial.modes}`);
if (!initial.listenAbsent) throw new Error("Listening control should be removed.");
if (initial.images.some(ok => !ok)) throw new Error("Currency image failed.");
if (initial.overflow > 1) throw new Error(`Mobile overflow: ${initial.overflow}px`);

const expected = {
  2:{money:["identify","compose"],spend:["pay"],manage:["needWant","savingPlan","budget"]},
  3:{money:["compose","foreign"],spend:["pay"],manage:["needWant","savingPlan","budget"]},
  4:{money:["foreign"],manage:["ledger","decision"]},
  5:{money:["operationMat","operationMachine"]},
  6:{spend:["shopLab","offerLab"],manage:["balanceSheet"]}
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
  document.querySelector('[data-money=rm50]').click(); document.querySelector('[data-money=rm5]').click(); document.querySelector('[data-money=rm1]').click(); document.querySelector('[data-money=sen50]').click();
  const exact={total:document.querySelector('.wallet-total strong').textContent,summary:document.getElementById('liveSummary').textContent}; const before2=state.tool.target; document.getElementById('randomTarget').click(); const year2={before:before2,target:state.tool.target,cleared:document.querySelector('.wallet-total strong').textContent};
  grade.value='3'; grade.dispatchEvent(new Event('change',{bubbles:true})); document.querySelector('[data-mode=money]').click(); activity.value='compose'; activity.dispatchEvent(new Event('change',{bubbles:true})); const before3=state.tool.target; document.getElementById('randomTarget').click(); const year3={before:before3,target:state.tool.target,cleared:document.querySelector('.wallet-total strong').textContent};
  return {exact,year2,year3};
})()`);
if (moneyTool.exact.total !== "RM56.50" || !moneyTool.exact.summary.includes("tepat") || moneyTool.year2.target === moneyTool.year2.before || moneyTool.year2.target < 50 || moneyTool.year2.target > 10000 || moneyTool.year2.target % 5 || moneyTool.year2.cleared !== "RM0.00" || moneyTool.year3.target === moneyTool.year3.before || moneyTool.year3.target < 1000 || moneyTool.year3.target > 100000 || moneyTool.year3.target % 5 || moneyTool.year3.cleared !== "RM0.00") throw new Error(`Money tool failed: ${JSON.stringify(moneyTool)}`);

const board = await evaluate(`(() => {
  document.querySelector('[data-mode=manage]').click(); const activity=document.getElementById('activitySelect'); activity.value='needWant'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  const firstSet=[...state.tool.itemIds]; const category=id=>BOARD_ITEMS.find(item=>item[0]===id)[3]; const first=firstSet[0], second=firstSet[1];
  document.querySelector('[data-item="'+first+'"]').click(); const selected=document.querySelector('[data-item="'+first+'"]').classList.contains('selected'); document.querySelector('[data-bin='+category(first)+']').click();
  const transfer=new DataTransfer(); const secondCard=document.querySelector('[data-item="'+second+'"]'); secondCard.dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer:transfer})); document.querySelector('[data-bin='+category(second)+']').dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:transfer}));
  const clickMoved=!!document.querySelector('[data-bin='+category(first)+'] [data-item="'+first+'"]'); const dragMoved=!!document.querySelector('[data-bin='+category(second)+'] [data-item="'+second+'"]');
  for(const id of firstSet.slice(2)){ document.querySelector('[data-item="'+id+'"]').click(); document.querySelector('[data-bin='+category(id)+']').click(); }
  const completed=!!document.querySelector('.classification-result'); const summary=document.getElementById('liveSummary').textContent; const before=[...state.tool.itemIds].sort().join(','); document.getElementById('newBoardSet').click(); const after=[...state.tool.itemIds].sort().join(',');
  return {selected,clickMoved,dragMoved,completed,summary,changed:before!==after,count:state.tool.itemIds.length,bank:BOARD_ITEMS.length,balanced:state.tool.itemIds.filter(id=>category(id)==='need').length===3,listenAbsent:!document.getElementById('listenButton'),overflow:document.documentElement.scrollWidth-window.innerWidth};
})()`);
if (!board.selected || !board.clickMoved || !board.dragMoved || !board.completed || !board.summary.includes('6') || !board.changed || board.count !== 6 || board.bank !== 20 || !board.balanced || !board.listenAbsent || board.overflow > 1) throw new Error(`Board interaction failed: ${JSON.stringify(board)}`);

const teacher = await evaluate(`(() => {
  document.querySelector('[data-mode=spend]').click(); document.getElementById('teacherButton').click(); document.getElementById('teacherRinggit').value='56'; document.getElementById('teacherSen').value='50'; document.getElementById('useTeacherSettings').click();
  return {open:document.getElementById('teacherDialog').open,target:document.querySelector('.challenge-text').textContent};
})()`);
if (teacher.open || !teacher.target.includes("56.50")) throw new Error(`Teacher setting failed: ${JSON.stringify(teacher)}`);

const upperYears = await evaluate(`(() => {
  const choose=(grade,mode,activity)=>{ const g=document.getElementById('gradeSelect'); g.value=grade; g.dispatchEvent(new Event('change',{bubbles:true})); document.querySelector('[data-mode='+mode+']').click(); const a=document.getElementById('activitySelect'); a.value=activity; a.dispatchEvent(new Event('change',{bubbles:true})); };
  choose('4','manage','ledger'); document.getElementById('ledgerLabel').value='Tambang'; document.getElementById('ledgerAmount').value='7'; document.getElementById('ledgerType').value='expense'; document.getElementById('addLedger').click(); const ledger={rows:document.querySelectorAll('.ledger-sheet tbody tr').length};
  choose('4','manage','decision'); document.querySelector('[data-choice=meal]').click(); document.querySelector('[data-decision-bin=buy]').click(); const decision={moved:!!document.querySelector('[data-decision-bin=buy] [data-choice=meal]')};
  choose('5','money','operationMat'); document.querySelector('[data-op=×]').click(); const operation={result:document.querySelector('.operation-card.result').textContent};
  choose('5','money','operationMachine'); document.getElementById('machineMultiplier').value='4'; document.getElementById('machineMultiplier').dispatchEvent(new Event('change',{bubbles:true})); const machine={result:document.querySelector('.machine-step.result strong').textContent};
  choose('6','spend','shopLab'); document.getElementById('shopPrice').value='15'; document.getElementById('shopPrice').dispatchEvent(new Event('change',{bubbles:true})); const shop={summary:document.getElementById('liveSummary').textContent};
  choose('6','spend','offerLab'); document.getElementById('offerDiscount').value='30'; document.getElementById('offerDiscount').dispatchEvent(new Event('change',{bubbles:true})); const offer={receipt:document.querySelector('.receipt-lab footer strong').textContent};
  choose('6','manage','balanceSheet'); document.getElementById('debtLoan').value='2000'; document.getElementById('debtLoan').dispatchEvent(new Event('change',{bubbles:true})); const balance={summary:document.getElementById('liveSummary').textContent,overflow:document.documentElement.scrollWidth-window.innerWidth};
  return {ledger,decision,operation,machine,shop,offer,balance};
})()`);
if (upperYears.ledger.rows !== 3 || !upperYears.decision.moved || !upperYears.operation.result || !upperYears.machine.result || !upperYears.shop.summary || !upperYears.offer.receipt || upperYears.balance.overflow > 1) throw new Error(`Upper-year tools failed: ${JSON.stringify(upperYears)}`);

const zh = await evaluate(`(() => { document.querySelector('[data-lang=zh]').click(); return {lang:document.documentElement.lang,title:document.querySelector('h1').textContent,overflow:document.documentElement.scrollWidth-window.innerWidth}; })()`);
if (zh.lang !== "zh-Hans" || !zh.title.includes("钱币") || zh.overflow > 1) throw new Error(`Chinese UI failed: ${JSON.stringify(zh)}`);
if (errors.length) throw new Error(`Runtime errors: ${errors.join(" | ")}`);
console.log(JSON.stringify({ ok:true, uniqueTools:new Set(coverage).size, initial, moneyTool, board, teacher, upperYears, zh }, null, 2));
socket.close();
