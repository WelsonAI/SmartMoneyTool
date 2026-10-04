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

const textbookAlignment = await evaluate(`(() => {
  const choose=(grade,mode,activity)=>{ const g=document.getElementById('gradeSelect'); g.value=grade; g.dispatchEvent(new Event('change',{bubbles:true})); document.querySelector('[data-mode='+mode+']').click(); const a=document.getElementById('activitySelect'); a.value=activity; a.dispatchEvent(new Event('change',{bubbles:true})); };
  choose('2','money','identify'); const identify={observations:document.querySelectorAll('.observation-list span').length,hasSenConversion:/100 sen|100 仙/.test(document.getElementById('visualStage').textContent)};
  choose('2','manage','budget'); const budget={pots:[...document.querySelectorAll('.budget-pot strong')].map(x=>x.textContent),values:[state.tool.saving,state.tool.spending,state.tool.donation],hasUndefined:document.getElementById('visualStage').textContent.includes('undefined')};
  choose('2','money','operationMat'); const operation={maximum:Number(document.getElementById('opA').max)}; document.querySelector('[data-op="×"]').click(); operation.factorMaximum=Number(document.getElementById('opB').max); operation.result=Number(document.querySelector('.operation-card.result').textContent.replace(/[^0-9.]/g,''));
  choose('6','manage','interestDividend'); const returns={summary:document.getElementById('liveSummary').textContent,years:[...document.querySelectorAll('.yearly-return strong')].map(x=>x.textContent)};
  choose('6','manage','insurance'); const insurance={lanes:document.querySelectorAll('.risk-lane').length,nodes:document.querySelectorAll('.risk-node').length,comparisonRows:document.querySelectorAll('.risk-compare-table > div').length,hasProtectionCatalog:!!document.querySelector('.protection-grid')};
  return {identify,budget,operation,returns,insurance};
})()`);
if (textbookAlignment.identify.observations < 4 || textbookAlignment.identify.hasSenConversion || textbookAlignment.budget.pots.slice(0,3).join(',') !== 'Simpanan,Perbelanjaan,Derma' || textbookAlignment.budget.values.some(value => !Number.isFinite(value)) || textbookAlignment.budget.hasUndefined || textbookAlignment.operation.maximum !== 100 || textbookAlignment.operation.result > 100 || textbookAlignment.returns.years.join(',') !== 'RM3570.00,RM3641.40' || !textbookAlignment.returns.summary.includes('RM3641.40') || textbookAlignment.insurance.lanes !== 2 || textbookAlignment.insurance.nodes !== 4 || textbookAlignment.insurance.comparisonRows !== 4 || textbookAlignment.insurance.hasProtectionCatalog) throw new Error(`Textbook alignment failed: ${JSON.stringify(textbookAlignment)}`);

const expected = {
  2:{money:["identify","compose","operationMat"],spend:["pay"],manage:["savingPlan","budget"]},
  3:{money:["compose","operationMat","foreign"],spend:["pay"],manage:["needWant","savingPlan","budget"]},
  4:{money:["operationMat","operationMachine","foreign"],spend:["paymentMethods"],manage:["ledger","decision"]},
  5:{money:["operationMat","operationMachine"],manage:["saveInvest","simpleCompound","creditDebt"]},
  6:{spend:["shopLab","offerLab","documents"],manage:["balanceSheet","interestDividend","insurance"]}
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
if (new Set(coverage).size !== 21) throw new Error(`Unexpected unique tool count: ${new Set(coverage).size}`);

const moneyTool = await evaluate(`(() => {
  const grade=document.getElementById('gradeSelect'); grade.value='2'; grade.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-mode=money]').click(); const activity=document.getElementById('activitySelect'); activity.value='compose'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-money=rm50]').click(); document.querySelector('[data-money=rm5]').click(); document.querySelector('[data-money=rm1]').click(); document.querySelector('[data-money=sen50]').click();
  const exact={total:document.querySelector('.wallet-total strong').textContent,summary:document.getElementById('liveSummary').textContent}; const before2=state.tool.target; document.getElementById('randomTarget').click(); const year2={before:before2,target:state.tool.target,cleared:document.querySelector('.wallet-total strong').textContent};
  grade.value='3'; grade.dispatchEvent(new Event('change',{bubbles:true})); document.querySelector('[data-mode=money]').click(); activity.value='compose'; activity.dispatchEvent(new Event('change',{bubbles:true})); const before3=state.tool.target; document.getElementById('randomTarget').click(); const year3={before:before3,target:state.tool.target,cleared:document.querySelector('.wallet-total strong').textContent};
  return {exact,year2,year3};
})()`);
if (moneyTool.exact.total !== "RM56.50" || !moneyTool.exact.summary.includes("tepat") || moneyTool.year2.target === moneyTool.year2.before || moneyTool.year2.target < 50 || moneyTool.year2.target > 10000 || moneyTool.year2.target % 5 || moneyTool.year2.cleared !== "RM0.00" || moneyTool.year3.target === moneyTool.year3.before || moneyTool.year3.target < 1000 || moneyTool.year3.target > 100000 || moneyTool.year3.target % 5 || moneyTool.year3.cleared !== "RM0.00") throw new Error(`Money tool failed: ${JSON.stringify(moneyTool)}`);

const purchaseTool = await evaluate(`(() => {
  const grade=document.getElementById('gradeSelect'); grade.value='2'; grade.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-mode=spend]').click(); const activity=document.getElementById('activitySelect'); activity.value='pay'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  const initial={product:state.tool.productId,target:state.tool.target,banner:!!document.querySelector('.challenge-product'),separateCard:!!document.querySelector('.product-scene'),price:document.querySelector('.challenge-price')?.textContent};
  document.querySelector('[data-money=rm1]').click(); document.getElementById('randomPurchase').click();
  const year2={product:state.tool.productId,target:state.tool.target,cleared:document.querySelector('.wallet-total strong').textContent,price:document.querySelector('.challenge-price')?.textContent};
  grade.value='3'; grade.dispatchEvent(new Event('change',{bubbles:true})); document.querySelector('[data-mode=spend]').click(); activity.value='pay'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  const before3={product:state.tool.productId,target:state.tool.target}; document.querySelector('[data-money=rm1]').click(); document.getElementById('randomPurchase').click();
  const year3={product:state.tool.productId,target:state.tool.target,cleared:document.querySelector('.wallet-total strong').textContent,price:document.querySelector('.challenge-price')?.textContent};
  return {initial,year2,before3,year3,bank:SHOP_PRODUCTS.length,overflow:document.documentElement.scrollWidth-window.innerWidth};
})()`);
if (!purchaseTool.initial.banner || purchaseTool.initial.separateCard || !purchaseTool.initial.price?.includes('56.50') || purchaseTool.year2.product === purchaseTool.initial.product || purchaseTool.year2.target < 50 || purchaseTool.year2.target > 10000 || purchaseTool.year2.target % 5 || purchaseTool.year2.cleared !== "RM0.00" || purchaseTool.year2.price !== `RM${(purchaseTool.year2.target / 100).toFixed(2)}` || purchaseTool.year3.product === purchaseTool.before3.product || purchaseTool.year3.target < 50 || purchaseTool.year3.target > 100000 || purchaseTool.year3.target % 5 || purchaseTool.year3.cleared !== "RM0.00" || purchaseTool.year3.price !== `RM${(purchaseTool.year3.target / 100).toFixed(2)}` || purchaseTool.bank !== 15 || purchaseTool.overflow > 1) throw new Error(`Purchase tool failed: ${JSON.stringify(purchaseTool)}`);

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
  choose('4','manage','decision'); const choice=state.tool.itemIds[0]; const beforeSet=[...state.tool.itemIds].sort().join(','); const beforePrices=JSON.stringify(state.tool.prices); document.querySelector('[data-choice='+choice+']').click(); document.querySelector('[data-decision-bin=buy]').click(); const moved=!!document.querySelector('[data-decision-bin=buy] [data-choice='+choice+']'); document.getElementById('newDecisionSet').click(); const decision={moved,changed:beforeSet!==[...state.tool.itemIds].sort().join(',')||beforePrices!==JSON.stringify(state.tool.prices),count:state.tool.itemIds.length,bank:DECISION_ITEMS.length,prices:Object.values(state.tool.prices),cleared:Object.keys(state.tool.places).length===0};
  choose('4','spend','paymentMethods'); document.querySelector('[data-method=card]').click(); document.getElementById('nextMethodStep').click(); document.getElementById('nextMethodStep').click(); document.getElementById('nextMethodStep').click(); const paymentMethods={method:state.tool.method,step:state.tool.step,steps:document.querySelectorAll('.method-step').length,summary:document.getElementById('liveSummary').textContent};
  choose('5','money','operationMat'); document.querySelector('[data-op=×]').click(); const operation={result:document.querySelector('.operation-card.result').textContent};
  choose('5','money','operationMachine'); document.getElementById('machineMultiplier').value='4'; document.getElementById('machineMultiplier').dispatchEvent(new Event('change',{bubbles:true})); const machine={result:document.querySelector('.machine-step.result strong').textContent};
  choose('5','manage','saveInvest'); document.querySelector('[data-feature=risk]').click(); const saveInvest={feature:state.tool.feature,cards:document.querySelectorAll('.compare-card').length,summary:document.getElementById('liveSummary').textContent};
  choose('5','manage','simpleCompound'); document.getElementById('intYears').value='10'; document.getElementById('intYears').dispatchEvent(new Event('change',{bubbles:true})); const interest={columns:document.querySelectorAll('.growth-column').length,summary:document.getElementById('liveSummary').textContent};
  choose('5','manage','creditDebt'); document.getElementById('creditMonthly').value='120'; document.getElementById('creditMonthly').dispatchEvent(new Event('change',{bubbles:true})); const debt={cards:document.querySelectorAll('.cash-credit-board .compare-card').length,difference:document.querySelector('.credit-difference strong')?.textContent,summary:document.getElementById('liveSummary').textContent};
  choose('6','spend','shopLab'); document.getElementById('shopPrice').value='15'; document.getElementById('shopPrice').dispatchEvent(new Event('change',{bubbles:true})); const shop={summary:document.getElementById('liveSummary').textContent};
  choose('6','spend','offerLab'); document.getElementById('offerDiscount').value='30'; document.getElementById('offerDiscount').dispatchEvent(new Event('change',{bubbles:true})); const offer={receipt:document.querySelector('.receipt-lab footer strong').textContent};
  choose('6','spend','documents'); document.getElementById('docType').value='invoice'; document.getElementById('docType').dispatchEvent(new Event('change',{bubbles:true})); document.getElementById('docQty').value='4'; document.getElementById('docQty').dispatchEvent(new Event('change',{bubbles:true})); const documents={stamp:document.querySelector('.doc-stamp').textContent,total:document.querySelector('.document-row.total').textContent};
  choose('6','manage','balanceSheet'); document.getElementById('debtLoan').value='2000'; document.getElementById('debtLoan').dispatchEvent(new Event('change',{bubbles:true})); const balance={summary:document.getElementById('liveSummary').textContent,overflow:document.documentElement.scrollWidth-window.innerWidth};
  choose('6','manage','interestDividend'); document.querySelector('[data-return-type=dividend]').click(); document.getElementById('returnRate').value='8'; document.getElementById('returnRate').dispatchEvent(new Event('change',{bubbles:true})); const interestDividend={type:state.tool.type,metrics:document.querySelectorAll('.return-flow .metric').length,summary:document.getElementById('liveSummary').textContent};
  choose('6','manage','insurance'); const riskTransfer=new DataTransfer(); document.querySelector('[data-risk-token=insurance]').dispatchEvent(new DragEvent('dragstart',{bubbles:true,dataTransfer:riskTransfer})); document.querySelector('[data-risk-drop=insurance]').dispatchEvent(new DragEvent('drop',{bubbles:true,cancelable:true,dataTransfer:riskTransfer})); const dragMoved=state.tool.moved.insurance; document.querySelector('[data-risk-token=takaful]').click(); document.querySelector('[data-risk-drop=takaful]').click(); const bothPaid=state.tool.step===1; document.getElementById('riskLoss').click(); document.querySelector('[data-risk-token=insurance]').click(); document.querySelector('[data-risk-drop=insurance]').click(); document.querySelector('[data-risk-token=takaful]').click(); document.querySelector('[data-risk-drop=takaful]').click(); const insurance={step:state.tool.step,dragMoved,bothPaid,bothProtected:state.tool.step===3,rows:document.querySelectorAll('.risk-compare-table > div').length,summary:document.getElementById('liveSummary').textContent,overflow:document.documentElement.scrollWidth-window.innerWidth};
  return {ledger,decision,paymentMethods,operation,machine,saveInvest,interest,debt,shop,offer,documents,balance,interestDividend,insurance};
})()`);
if (upperYears.ledger.rows !== 3 || !upperYears.decision.moved || !upperYears.decision.changed || upperYears.decision.count !== 6 || upperYears.decision.bank !== 24 || !upperYears.decision.prices.every(value => value % 5 === 0) || !upperYears.decision.cleared || upperYears.paymentMethods.method !== 'card' || upperYears.paymentMethods.step !== 3 || upperYears.paymentMethods.steps !== 3 || !upperYears.paymentMethods.summary || !upperYears.operation.result || !upperYears.machine.result || upperYears.saveInvest.feature !== 'risk' || upperYears.saveInvest.cards !== 2 || !upperYears.saveInvest.summary || upperYears.interest.columns !== 11 || !upperYears.interest.summary || upperYears.debt.cards !== 2 || !upperYears.debt.difference || !upperYears.debt.summary || !upperYears.shop.summary || !upperYears.offer.receipt || !upperYears.documents.stamp.includes('INVOIS') || !upperYears.documents.total || upperYears.balance.overflow > 1 || upperYears.interestDividend.type !== 'dividend' || upperYears.interestDividend.metrics !== 3 || !upperYears.interestDividend.summary || !upperYears.insurance.dragMoved || !upperYears.insurance.bothPaid || !upperYears.insurance.bothProtected || upperYears.insurance.rows !== 4 || !upperYears.insurance.summary || upperYears.insurance.overflow > 1) throw new Error(`Upper-year tools failed: ${JSON.stringify(upperYears)}`);

const zh = await evaluate(`(() => { document.querySelector('[data-lang=zh]').click(); return {lang:document.documentElement.lang,title:document.querySelector('h1').textContent,overflow:document.documentElement.scrollWidth-window.innerWidth}; })()`);
if (zh.lang !== "zh-Hans" || !zh.title.includes("钱币") || zh.overflow > 1) throw new Error(`Chinese UI failed: ${JSON.stringify(zh)}`);
if (errors.length) throw new Error(`Runtime errors: ${errors.join(" | ")}`);
console.log(JSON.stringify({ ok:true, uniqueTools:new Set(coverage).size, initial, textbookAlignment, moneyTool, purchaseTool, board, teacher, upperYears, zh }, null, 2));
socket.close();
