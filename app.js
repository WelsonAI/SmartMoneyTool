"use strict";

const ml = (ms, zh, en) => ({ ms, zh, en });

const I18N = {
  title: ml("Jom Teroka Wang!", "一起来探索金钱！", "Let's Explore Money!"),
  subtitle: ml("Alat manipulatif untuk lihat, cuba dan faham.", "动手操作、观察变化、理解理财。", "Hands-on tools to try, observe and understand."),
  soundOn: ml("Bunyi: Buka", "声音：开", "Sound: On"),
  soundOff: ml("Bunyi: Tutup", "声音：关", "Sound: Off"),
  tabMoney: ml("Kenal & Bina", "认识与组合", "Recognise & Build"),
  tabSpend: ml("Bayar & Belanja", "付款与消费", "Pay & Spend"),
  tabManage: ml("Urus Wang", "管理金钱", "Manage Money"),
  tabFinance: ml("Celik Kewangan", "金融常识", "Financial Skills"),
  chooseActivity: ml("Pilih alat", "选择工具", "Choose a tool"),
  grade: ml("Tahun", "年级", "Year"),
  activity: ml("Alat", "工具", "Tool"),
  teacherMode: ml("Tetapan guru", "老师设置", "Teacher settings"),
  resetTool: ml("Tetapkan semula alat", "重置工具", "Reset tool"),
  tryIt: ml("Mari cuba!", "动手试试！", "Try it!"),
  listen: ml("Dengar", "聆听", "Listen"),
  stepObserve: ml("Perhatikan", "仔细观察", "Observe"),
  stepTry: ml("Gerakkan & cuba", "移动并尝试", "Move & try"),
  stepCheck: ml("Lihat perubahan", "观察变化", "See what changes"),
  customSettings: ml("Tetapkan nilai demonstrasi", "设置课堂示范数值", "Set demonstration values"),
  customHelp: ml("Gunakan nilai ini dalam alat semasa untuk demonstrasi kelas.", "把这些数值应用到当前工具，方便课堂示范。", "Apply these values to the current tool for a class demonstration."),
  ringgit: ml("Ringgit", "令吉", "Ringgit"),
  sen: ml("Sen", "仙", "Sen"),
  rate: ml("Kadar (%)", "比率（%）", "Rate (%)"),
  period: ml("Tempoh", "期数", "Periods"),
  cancel: ml("Batal", "取消", "Cancel"),
  useSettings: ml("Gunakan tetapan", "使用设置", "Use settings"),
};

const ACTIVITIES = {
  identify: { label: ml("Teroka wang Malaysia", "探索马来西亚钱币", "Explore Malaysian money"), scope: ml("Tahun 2 · Wang hingga RM100", "二年级 · 金额至 RM100", "Year 2 · Money up to RM100"), tip: ml("Sentuh setiap wang untuk melihat nilainya dengan dekat.", "点击每种钱币，近距离观察它的面额。", "Tap each note or coin to inspect its value.") },
  compose: { label: ml("Bina jumlah wang", "组合金额", "Build an amount"), scope: ml("Tahun 2–3 · Gabungan wang", "二至三年级 · 钱币组合", "Years 2–3 · Money combinations"), tip: ml("Tambah dan keluarkan wang; jumlah berubah serta-merta.", "加入或移除钱币，总额会即时变化。", "Add and remove money; the total changes instantly.") },
  equivalent: { label: ml("Bina nilai setara", "组合等值金额", "Build an equivalent value"), scope: ml("Tahun 2–3 · Nilai yang sama", "二至三年级 · 相同币值", "Years 2–3 · Equal values"), tip: ml("Cari beberapa gabungan berlainan yang bernilai sama.", "尝试用不同钱币组成相同金额。", "Make the same value in several different ways.") },
  foreign: { label: ml("Penukar mata wang", "货币换算模拟器", "Currency converter"), scope: ml("Tahun 3–4 · Mata wang serantau", "三至四年级 · 区域货币", "Years 3–4 · Regional currencies"), tip: ml("Ubah jumlah dan mata wang untuk melihat anggaran pertukaran.", "调整金额和货币，观察模拟换算。", "Change the amount and currency to see a sample conversion.") },
  pay: { label: ml("Kaunter bayar tepat", "准确付款柜台", "Exact-payment counter"), scope: ml("Tahun 2–3 · Situasi harian", "二至三年级 · 日常付款", "Years 2–3 · Everyday payment"), tip: ml("Pilih wang sebenar untuk membayar barang pada tanda harga.", "选择真实钱币，支付价格牌上的金额。", "Choose real money to pay the price on the tag.") },
  methods: { label: ml("Simulator cara pembayaran", "付款方式模拟器", "Payment-method simulator"), scope: ml("Tahun 3–4 · Tunai dan tanpa tunai", "三至四年级 · 现金与无现金", "Years 3–4 · Cash and cashless"), tip: ml("Cuba tunai, kad, QR, pindahan dan cek di kaunter.", "在柜台模拟现金、银行卡、QR、转账和支票。", "Try cash, card, QR, transfer and cheque at the counter.") },
  receipt: { label: ml("Studio resit dan bil", "收据与账单工作室", "Receipt and bill studio"), scope: ml("Tahun 4–5 · Dokumen urus niaga", "四至五年级 · 交易文件", "Years 4–5 · Transaction documents"), tip: ml("Tukar butiran dan lihat dokumen dikemas kini.", "修改资料，观察文件即时更新。", "Change the details and watch the document update.") },
  needWant: { label: ml("Papan keperluan & kehendak", "需要与想要分类板", "Needs & wants board"), scope: ml("Tahun 2–3 · Pengurusan wang", "二至三年级 · 金钱管理", "Years 2–3 · Money management"), tip: ml("Pindahkan kad ke ruang pilihan dan bincangkan sebabnya.", "把卡片移到你选择的区域，并讨论原因。", "Move cards into either space and discuss your reasons.") },
  savingPlan: { label: ml("Perancang matlamat simpanan", "储蓄目标规划器", "Savings-goal planner"), scope: ml("Tahun 2 · Simpanan terancang", "二年级 · 有计划地储蓄", "Year 2 · Planned saving"), tip: ml("Laraskan sasaran dan simpanan mingguan.", "调整目标和每周储蓄额。", "Adjust the goal and weekly saving amount.") },
  budget: { label: ml("Papan agihan bajet", "预算分配板", "Budget allocation board"), scope: ml("Tahun 3–5 · Agih dan imbang", "三至五年级 · 分配与平衡", "Years 3–5 · Allocate and balance"), tip: ml("Agihkan pendapatan; perhatikan baki atau lebihan belanja.", "分配收入，观察余额或超支。", "Allocate income and watch the balance or overspend.") },
  wiseChoice: { label: ml("Meja banding barang", "商品比较台", "Product comparison desk"), scope: ml("Tahun 4 · Harga, kualiti dan jaminan", "四年级 · 价格、品质与保修", "Year 4 · Price, quality and warranty"), tip: ml("Laraskan ciri dua barang untuk membandingkan nilai.", "调整两件商品的条件，比较价值。", "Adjust two products' features to compare value.") },
  cashless: { label: ml("Dompet digital & kad", "电子钱包与银行卡", "Digital wallet & card"), scope: ml("Tahun 3 · Bayaran tanpa tunai", "三年级 · 无现金付款", "Year 3 · Cashless payment"), tip: ml("Tambah nilai dan buat bayaran untuk melihat baki berubah.", "充值并付款，观察余额变化。", "Top up and pay to see the balance change.") },
  cashCredit: { label: ml("Pembelian tunai atau kredit", "现金与信贷购买模拟器", "Cash or credit purchase"), scope: ml("Tahun 4–5 · Kos pembelian", "四至五年级 · 购买成本", "Years 4–5 · Purchase cost"), tip: ml("Ubah deposit, kadar dan tempoh untuk melihat jumlah kos.", "调整首付、利率和期限，观察总成本。", "Change deposit, rate and term to see the total cost.") },
  saveInvest: { label: ml("Pembahagi simpanan & pelaburan", "储蓄与投资分配器", "Saving & investment splitter"), scope: ml("Tahun 5 · Risiko dan pulangan", "五年级 · 风险与回报", "Year 5 · Risk and return"), tip: ml("Ubah agihan dan senario pulangan.", "调整资金分配和回报情境。", "Change the split and return scenario.") },
  simpleCompound: { label: ml("Makmal faedah", "利息实验室", "Interest lab"), scope: ml("Tahun 5 · Faedah mudah dan kompaun", "五年级 · 单利与复利", "Year 5 · Simple and compound interest"), tip: ml("Laraskan modal, kadar dan tempoh; bandingkan pertumbuhan.", "调整本金、利率和时间，比较增长。", "Adjust principal, rate and time; compare growth.") },
  creditDebt: { label: ml("Simulator pembayaran hutang", "债务偿还模拟器", "Debt repayment simulator"), scope: ml("Tahun 5 · Bayaran balik", "五年级 · 偿还计划", "Year 5 · Repayment"), tip: ml("Ubah pinjaman dan tempoh untuk melihat ansuran.", "调整贷款与期限，观察每月还款。", "Change the loan and term to see the instalment.") },
  financialDecision: { label: ml("Pemeriksa kemampuan", "负担能力检查器", "Affordability checker"), scope: ml("Tahun 6 · Keputusan bertanggungjawab", "六年级 · 负责任的决定", "Year 6 · Responsible decisions"), tip: ml("Masukkan pendapatan, komitmen dan pembelian yang dirancang.", "输入收入、固定开销和计划购买金额。", "Enter income, commitments and a planned purchase.") },
  profitLoss: { label: ml("Kalkulator untung rugi", "盈亏计算器", "Profit and loss calculator"), scope: ml("Tahun 6 · Kos dan jualan", "六年级 · 成本与销售", "Year 6 · Cost and sales"), tip: ml("Ubah kos, harga jual dan kuantiti.", "调整成本、售价和数量。", "Change cost, selling price and quantity.") },
  discount: { label: ml("Mesin diskaun & baucar", "折扣与礼券计算器", "Discount & voucher machine"), scope: ml("Tahun 6 · Pembelian bijak", "六年级 · 精明消费", "Year 6 · Smart buying"), tip: ml("Gabungkan diskaun, baucar dan rebat untuk melihat harga akhir.", "组合折扣、礼券和回扣，观察最终价格。", "Combine a discount, voucher and rebate to see the final price.") },
  documents: { label: ml("Pembina dokumen kewangan", "财务文件生成器", "Financial document builder"), scope: ml("Tahun 6 · Bil, invois dan resit", "六年级 · 账单、发票与收据", "Year 6 · Bills, invoices and receipts"), tip: ml("Tukar jenis dokumen dan butiran transaksi.", "切换文件类型并修改交易资料。", "Switch document type and edit the transaction details.") },
  assetsLiabilities: { label: ml("Pembina kedudukan kewangan", "财务状况构建器", "Financial position builder"), scope: ml("Tahun 6 · Aset dan liabiliti", "六年级 · 资产与负债", "Year 6 · Assets and liabilities"), tip: ml("Laraskan aset dan hutang untuk melihat nilai bersih.", "调整资产与债务，观察净值。", "Adjust assets and debts to see net worth.") },
  insurance: { label: ml("Simulator perlindungan", "保障模拟器", "Protection simulator"), scope: ml("Tahun 6 · Insurans dan takaful", "六年级 · 保险与伊斯兰保险", "Year 6 · Insurance and takaful"), tip: ml("Ubah kerugian, perlindungan dan deduktibel.", "调整损失、保额和自付额。", "Change the loss, coverage and deductible.") },
};

const GRADE_MODES = {
  2: { money: ["identify", "compose", "equivalent"], spend: ["pay"], manage: ["needWant", "savingPlan"], finance: [] },
  3: { money: ["compose", "equivalent", "foreign"], spend: ["pay", "methods"], manage: ["needWant", "budget"], finance: ["cashless"] },
  4: { money: ["foreign"], spend: ["methods", "receipt"], manage: ["budget", "wiseChoice"], finance: ["cashCredit"] },
  5: { money: [], spend: ["receipt"], manage: ["budget"], finance: ["saveInvest", "simpleCompound", "creditDebt"] },
  6: { money: [], spend: ["discount", "documents"], manage: ["financialDecision"], finance: ["profitLoss", "assetsLiabilities", "insurance"] },
};

const MODE_LABELS = { money: I18N.tabMoney, spend: I18N.tabSpend, manage: I18N.tabManage, finance: I18N.tabFinance };

const MONEY = [
  { id: "rm100", value: 10000, label: "RM100", kind: "note", image: "assets/rm100.png" },
  { id: "rm50", value: 5000, label: "RM50", kind: "note", image: "assets/rm50.png" },
  { id: "rm20", value: 2000, label: "RM20", kind: "note", image: "assets/rm20.png" },
  { id: "rm10", value: 1000, label: "RM10", kind: "note", image: "assets/rm10.png" },
  { id: "rm5", value: 500, label: "RM5", kind: "note", image: "assets/rm5.png" },
  { id: "rm1", value: 100, label: "RM1", kind: "note", image: "assets/rm1.png" },
  { id: "sen50", value: 50, label: "50 sen", kind: "coin", image: "assets/sen50.png" },
  { id: "sen20", value: 20, label: "20 sen", kind: "coin", image: "assets/sen20.png" },
  { id: "sen10", value: 10, label: "10 sen", kind: "coin", image: "assets/sen10.png" },
  { id: "sen5", value: 5, label: "5 sen", kind: "coin", image: "assets/sen5.png" },
];

const els = {
  grade: document.querySelector("#gradeSelect"), activity: document.querySelector("#activitySelect"),
  sideTitle: document.querySelector("#sideTitle"), scope: document.querySelector("#scopeNote"), tip: document.querySelector("#tipBox span:last-child"),
  title: document.querySelector("#activityTitle"), badge: document.querySelector("#gradeBadge"), challenge: document.querySelector("#challengePanel"),
  stage: document.querySelector("#visualStage"), controls: document.querySelector("#controlArea"), summary: document.querySelector("#liveSummary"),
  listen: document.querySelector("#listenButton"), sound: document.querySelector("#soundToggle"), reset: document.querySelector("#resetToolButton"),
  teacher: document.querySelector("#teacherButton"), dialog: document.querySelector("#teacherDialog"), ringgit: document.querySelector("#teacherRinggit"),
  sen: document.querySelector("#teacherSen"), rate: document.querySelector("#teacherRate"), period: document.querySelector("#teacherPeriod"),
  preview: document.querySelector("#teacherPreview"), teacherError: document.querySelector("#teacherError"), useSettings: document.querySelector("#useTeacherSettings"),
};

const state = { lang: "ms", grade: 2, mode: "money", activity: "identify", sound: true, teacher: { amount: 1250, rate: 5, period: 5 }, tool: null };
let audioContext;

function tr(key) { return I18N[key][state.lang]; }
function loc(value) { return typeof value === "string" ? value : value[state.lang]; }
function money(sen) { return `RM${(Number(sen) / 100).toFixed(2)}`; }
function gradeName(n) { return state.lang === "ms" ? `Tahun ${n}` : state.lang === "zh" ? `${n}年级` : `Year ${n}`; }
function clamp(value, min, max) { return Math.min(max, Math.max(min, Number(value) || 0)); }

function beep(type = "tap") {
  if (!state.sound) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const now = audioContext.currentTime;
  const notes = type === "done" ? [[523, .07], [659, .07], [784, .13]] : type === "coin" ? [[1100, .04], [780, .06]] : [[500, .035]];
  notes.forEach(([frequency, duration], index) => {
    const osc = audioContext.createOscillator(); const gain = audioContext.createGain(); const start = now + index * .075;
    osc.type = type === "coin" ? "triangle" : "sine"; osc.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, start); gain.gain.exponentialRampToValueAtTime(.1, start + .008); gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(start); osc.stop(start + duration + .02);
  });
}

function speak(text) {
  if (!state.sound || !window.speechSynthesis) return;
  speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.lang === "ms" ? "ms-MY" : state.lang === "zh" ? "zh-CN" : "en-GB";
  utterance.rate = .88; utterance.pitch = 1.06; speechSynthesis.speak(utterance);
}

function applyStaticLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { if (I18N[el.dataset.i18n]) el.textContent = tr(el.dataset.i18n); });
  els.sound.querySelector("span:last-child").textContent = tr(state.sound ? "soundOn" : "soundOff");
  document.querySelectorAll("[data-lang]").forEach(button => button.classList.toggle("active", button.dataset.lang === state.lang));
  [...els.grade.options].forEach((option, index) => { option.textContent = gradeName(index + 2); });
}

function refreshNavigation({ keepActivity = false } = {}) {
  const modes = GRADE_MODES[state.grade];
  if (!modes[state.mode].length) state.mode = Object.keys(modes).find(mode => modes[mode].length);
  document.querySelectorAll("[data-mode]").forEach(button => {
    button.disabled = !modes[button.dataset.mode].length; button.classList.toggle("active", button.dataset.mode === state.mode);
  });
  const list = modes[state.mode];
  if (!keepActivity || !list.includes(state.activity)) state.activity = list[0];
  els.activity.replaceChildren(...list.map(id => Object.assign(document.createElement("option"), { value: id, textContent: loc(ACTIVITIES[id].label) })));
  els.activity.value = state.activity; els.sideTitle.textContent = loc(MODE_LABELS[state.mode]);
  els.scope.textContent = loc(ACTIVITIES[state.activity].scope); els.tip.textContent = loc(ACTIVITIES[state.activity].tip);
  els.title.textContent = loc(ACTIVITIES[state.activity].label); els.badge.textContent = state.lang === "zh" ? `${state.grade}年级` : `${state.lang === "ms" ? "T" : "Y"}${state.grade}`;
}

function setChallenge(title, sub = "") {
  els.challenge.innerHTML = `<div><div class="challenge-kicker">${tr("tryIt")}</div><div class="challenge-text">${title}</div>${sub ? `<div class="challenge-sub">${sub}</div>` : ""}</div>`;
}
function setSummary(text, tone = "neutral") { els.summary.className = `feedback ${tone}`; els.summary.innerHTML = text; }
function moneyPicture(item, extra = "") { return `<span class="money-picture ${item.kind} ${extra}"><img src="${item.image}" alt="${item.label}" draggable="false"><span class="contoh">CONTOH</span></span>`; }
function moneyBank(items = MONEY) { return `<div class="money-bank">${items.map(item => `<button type="button" class="money-card ${item.kind === "coin" ? "coin-card" : ""}" data-money="${item.id}">${moneyPicture(item)}<span class="money-label">${item.label}</span></button>`).join("")}</div>`; }
function slider(id, label, min, max, step, value, suffix = "") { return `<label class="range-control" for="${id}"><span>${label}</span><strong>${value}${suffix}</strong><input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}"></label>`; }
function metric(label, value, cls = "") { return `<div class="metric ${cls}"><span>${label}</span><strong>${value}</strong></div>`; }

function defaults(activity) {
  const amount = state.teacher.amount;
  const values = {
    identify: { selected: "rm1" }, compose: { target: amount, wallet: [] }, equivalent: { target: 1000, wallet: [] }, pay: { target: amount, wallet: [] },
    foreign: { rm: 20, currency: "sgd" }, methods: { price: amount, method: "cash", wallet: [], paid: false },
    receipt: { type: "receipt", qty: 2, unit: 600 }, documents: { type: "invoice", qty: 3, unit: 750 },
    needWant: { places: {} }, savingPlan: { goal: Math.max(50, Math.round(amount / 100)), saved: 10, weekly: 5 },
    budget: { income: Math.max(100, Math.round(amount / 100)), needs: 50, saving: 20, learning: 15, wants: 10 },
    wiseChoice: { aPrice: 45, aQuality: 3, aWarranty: 6, bPrice: 60, bQuality: 5, bWarranty: 18 },
    cashless: { balance: Math.max(50, Math.round(amount / 100)), amount: 12, log: [] },
    cashCredit: { price: Math.max(100, Math.round(amount / 100) * 10), deposit: 50, rate: state.teacher.rate, months: state.teacher.period * 12 },
    saveInvest: { capital: Math.max(100, Math.round(amount / 100) * 10), investPct: 40, saveRate: 2, investReturn: 7 },
    simpleCompound: { principal: Math.max(100, Math.round(amount / 100) * 10), rate: state.teacher.rate, years: state.teacher.period },
    creditDebt: { loan: Math.max(500, Math.round(amount / 100) * 50), rate: state.teacher.rate, months: state.teacher.period * 12 },
    financialDecision: { income: 2500, commitments: 1500, saving: 300, purchase: Math.max(100, Math.round(amount / 100) * 20) },
    profitLoss: { cost: 8, price: 12, qty: 20 }, discount: { original: Math.max(50, Math.round(amount / 100) * 10), percent: 20, voucher: 10, rebate: 5 },
    assetsLiabilities: { cash: 800, savings: 2500, property: 8000, card: 500, loan: 3000 },
    insurance: { loss: 5000, coverage: 4000, deductible: 500, premium: 40 },
  };
  return structuredClone(values[activity]);
}

function changeTool(mutator, sound = "tap") { mutator(state.tool); beep(sound); renderTool(); }

function renderIdentify() {
  const item = MONEY.find(x => x.id === state.tool.selected);
  setChallenge(loc(ml("Sentuh wang untuk meneroka", "点击钱币进行探索", "Tap money to explore")), loc(ml("Tiada pemarkahan — lihat, banding dan bincang.", "没有评分——观察、比较并讨论。", "No scoring — inspect, compare and discuss.")));
  const relation = item.value >= 100 ? `${item.label} = ${item.value / 100} ${loc(ml("ringgit", "令吉", "ringgit"))}` : `${item.label} = ${item.value} ${loc(ml("sen", "仙", "sen"))}`;
  els.stage.innerHTML = `<div class="explorer-layout"><div class="money-hero">${moneyPicture(item)}<span class="source-note">${loc(ml("Imej: Bank Negara Malaysia", "图片：马来西亚国家银行", "Images: Bank Negara Malaysia"))}</span></div><div class="inspect-card"><span>${loc(ml("Nilai", "面额", "Value"))}</span><strong>${item.label}</strong><p>${relation}</p></div></div>`;
  els.controls.innerHTML = moneyBank();
  els.controls.querySelectorAll("[data-money]").forEach(button => button.addEventListener("click", () => changeTool(tool => { tool.selected = button.dataset.money; }, "coin")));
  setSummary(loc(ml("Bandingkan saiz, warna dan unit pada setiap wang.", "比较每种钱币的大小、颜色和单位。", "Compare the size, colour and unit on each piece of money.")));
}

function renderMoneyBuilder(kind) {
  const tool = state.tool; const total = tool.wallet.reduce((sum, id) => sum + MONEY.find(x => x.id === id).value, 0); const diff = tool.target - total;
  const availableMoney = kind === "equivalent" ? MONEY.filter(item => item.value !== tool.target) : MONEY;
  const product = tool.target > 5000 ? ["🎒", ml("Beg sekolah", "书包", "School bag")] : tool.target > 1500 ? ["🧴", ml("Botol minuman", "水壶", "Water bottle")] : ["📚", ml("Buku cerita", "故事书", "Storybook")];
  const title = kind === "pay" ? `${loc(product[1])} · ${money(tool.target)}` : `${loc(ml("Jumlah sasaran", "目标金额", "Target amount"))}: ${money(tool.target)}`;
  const sub = kind === "equivalent" ? loc(ml("Cipta lebih daripada satu gabungan.", "尝试组合出不止一种方式。", "Try more than one combination.")) : loc(ml("Klik wang untuk menambah; klik wang dalam dulang untuk mengeluarkan.", "点击钱币加入；点击托盘中的钱币移除。", "Tap money to add it; tap money in the tray to remove it."));
  setChallenge(title, sub);
  const productCard = kind === "pay" ? `<div class="product-scene"><span class="product-art">${product[0]}</span><div><strong>${loc(product[1])}</strong><span class="price-tag">${money(tool.target)}</span></div></div>` : "";
  const tray = tool.wallet.length ? tool.wallet.map((id, index) => { const item = MONEY.find(x => x.id === id); return `<button type="button" class="wallet-item" data-remove="${index}" aria-label="${item.label}">${moneyPicture(item)}</button>`; }).join("") : `<span class="wallet-empty">${loc(ml("Dulang masih kosong", "托盘还是空的", "The tray is empty"))}</span>`;
  els.stage.innerHTML = `<div class="money-builder">${productCard}<div class="wallet-total"><span>${loc(ml("Jumlah di kaunter", "柜台上的总额", "Total on counter"))}</span><strong>${money(total)}</strong></div><div class="wallet-tray">${tray}</div>${moneyBank(availableMoney)}</div>`;
  els.controls.innerHTML = `<button type="button" class="secondary-button compact" id="clearWallet">↻ ${loc(ml("Kosongkan dulang", "清空托盘", "Clear tray"))}</button>`;
  els.stage.querySelectorAll("[data-money]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.wallet.push(button.dataset.money); }, "coin")));
  els.stage.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.wallet.splice(Number(button.dataset.remove), 1); })));
  document.querySelector("#clearWallet").addEventListener("click", () => changeTool(t => { t.wallet = []; }));
  if (diff === 0) setSummary(`✨ ${loc(ml("Jumlah tepat! Cuba bina dengan gabungan lain.", "金额刚刚好！再尝试另一种组合。", "Exact amount! Now try another combination."))}`, "success");
  else if (diff > 0) setSummary(`${loc(ml("Masih perlu", "还需要", "Still needed"))} <strong>${money(diff)}</strong>`);
  else setSummary(`${loc(ml("Lebih sebanyak", "多出了", "Extra amount"))} <strong>${money(-diff)}</strong>`, "attention");
}

function renderForeign() {
  const currencies = { sgd: ["🇸🇬", "SGD", .31], thb: ["🇹🇭", "THB", 7.6], idr: ["🇮🇩", "IDR", 3750], usd: ["🇺🇸", "USD", .24] }; const [flag, code, rate] = currencies[state.tool.currency];
  setChallenge(loc(ml("Cuba penukaran mata wang", "模拟货币换算", "Try a currency conversion")), loc(ml("Kadar contoh untuk pembelajaran, bukan kadar langsung.", "课堂示例汇率，并非实时汇率。", "Classroom sample rates, not live rates.")));
  els.stage.innerHTML = `<div class="converter"><div class="currency-card"><span>🇲🇾</span><strong>${money(state.tool.rm * 100)}</strong><small>MYR</small></div><div class="relation-arrow">⇄</div><div class="currency-card accent"><span>${flag}</span><strong>${(state.tool.rm * rate).toLocaleString(undefined, { maximumFractionDigits: code === "IDR" ? 0 : 2 })}</strong><small>${code}</small></div></div>`;
  els.controls.innerHTML = `${slider("foreignAmount", loc(ml("Jumlah MYR", "马币金额", "MYR amount")), 1, 100, 1, state.tool.rm, "")}<div class="segmented">${Object.entries(currencies).map(([id, c]) => `<button type="button" data-currency="${id}" class="${id === state.tool.currency ? "active" : ""}">${c[0]} ${c[1]}</button>`).join("")}</div>`;
  document.querySelector("#foreignAmount").addEventListener("change", event => changeTool(t => { t.rm = Number(event.target.value); }));
  els.controls.querySelectorAll("[data-currency]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.currency = button.dataset.currency; })));
  setSummary(`1 MYR ≈ ${rate.toLocaleString()} ${code} · ${loc(ml("Gunakan kadar semasa untuk urusan sebenar.", "实际交易请使用当日汇率。", "Use the current rate for real transactions."))}`);
}

const PAYMENT_METHODS = {
  cash: [ml("Tunai", "现金", "Cash"), "cash"], card: [ml("Kad", "银行卡", "Card"), "card"], qr: [ml("E-dompet / QR", "电子钱包／QR", "E-wallet / QR"), "qr"],
  transfer: [ml("Pindahan bank", "银行转账", "Bank transfer"), "transfer"], cheque: [ml("Cek", "支票", "Cheque"), "cheque"],
};

function methodVisual(type, small = false) {
  if (type === "cash") return `<div class="method-visual ${small ? "small" : ""}">${moneyPicture(MONEY.find(x => x.id === "rm5"))}</div>`;
  if (type === "qr") return `<div class="method-visual ${small ? "small" : ""}"><span class="phone-shape">📱<i class="qr-mark">▦</i></span></div>`;
  if (type === "cheque") return `<div class="method-visual ${small ? "small" : ""}"><span class="cheque-shape">CEK <i>RM</i></span></div>`;
  if (type === "transfer") return `<div class="method-visual ${small ? "small" : ""}"><span class="bank-shape">🏦<i>⇄</i></span></div>`;
  return `<div class="method-visual ${small ? "small" : ""}"><span class="card-shape">💳</span></div>`;
}

function renderMethods() {
  const tool = state.tool; const total = tool.wallet.reduce((sum, id) => sum + MONEY.find(x => x.id === id).value, 0);
  setChallenge(`${loc(ml("Jumlah di kaunter", "柜台金额", "Checkout total"))}: ${money(tool.price)}`, loc(ml("Pilih satu cara, kemudian lakukan langkah pembayarannya.", "选择一种方式，然后实际完成付款步骤。", "Choose a method, then perform its payment step.")));
  const tabs = `<div class="method-tabs">${Object.entries(PAYMENT_METHODS).map(([id, data]) => `<button type="button" data-method="${id}" class="method-tab ${id === tool.method ? "active" : ""}">${methodVisual(data[1], true)}<span>${loc(data[0])}</span></button>`).join("")}</div>`;
  let simulator = "";
  if (tool.method === "cash") {
    const tray = tool.wallet.length ? tool.wallet.map((id, index) => { const item = MONEY.find(x => x.id === id); return `<button type="button" class="wallet-item" data-remove="${index}">${moneyPicture(item)}</button>`; }).join("") : `<span class="wallet-empty">${loc(ml("Letakkan wang tunai di sini", "把现金放在这里", "Place cash here"))}</span>`;
    simulator = `<div class="checkout-simulator"><div class="simulator-device cash-register">🧾 <strong>${money(tool.price)}</strong></div><div class="wallet-total"><span>${loc(ml("Tunai diberi", "已付现金", "Cash tendered"))}</span><strong>${money(total)}</strong></div><div class="wallet-tray">${tray}</div>${moneyBank(MONEY.filter(x => x.value <= 5000))}</div>`;
  } else {
    const action = tool.method === "card" ? ml("Sentuh kad pada terminal", "把卡贴近终端", "Tap card on terminal") : tool.method === "qr" ? ml("Imbas kod QR", "扫描二维码", "Scan QR code") : tool.method === "transfer" ? ml("Hantar pindahan", "发送转账", "Send transfer") : ml("Tandatangan dan serah cek", "签名并交付支票", "Sign and hand over cheque");
    simulator = `<div class="digital-checkout">${methodVisual(tool.method)}<div class="payment-screen"><span>${loc(PAYMENT_METHODS[tool.method][0])}</span><strong>${money(tool.price)}</strong><button type="button" class="primary-button" id="completePayment">${loc(action)}</button></div></div>`;
  }
  els.stage.innerHTML = `${tabs}${simulator}`;
  els.controls.innerHTML = `<button type="button" class="secondary-button compact" id="clearPayment">↻ ${loc(ml("Mulakan transaksi semula", "重新开始交易", "Restart transaction"))}</button>`;
  els.stage.querySelectorAll("[data-method]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.method = button.dataset.method; t.wallet = []; t.paid = false; })));
  els.stage.querySelectorAll("[data-money]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.wallet.push(button.dataset.money); t.paid = false; }, "coin")));
  els.stage.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.wallet.splice(Number(button.dataset.remove), 1); t.paid = false; })));
  document.querySelector("#completePayment")?.addEventListener("click", () => changeTool(t => { t.paid = true; }, "done"));
  document.querySelector("#clearPayment").addEventListener("click", () => changeTool(t => { t.wallet = []; t.paid = false; }));
  if (tool.method === "cash") {
    if (total >= tool.price) setSummary(`${loc(ml("Bayaran diterima", "付款已收到", "Payment received"))} · ${loc(ml("Baki", "找零", "Change"))}: <strong>${money(total - tool.price)}</strong>`, "success");
    else setSummary(`${loc(ml("Tambah lagi", "还需加入", "Add"))} <strong>${money(tool.price - total)}</strong> ${loc(ml("untuk membayar", "即可付款", "to pay"))}`);
  } else if (tool.paid) setSummary(`✓ ${loc(ml("Transaksi selesai. Bincangkan jejak digital dan keselamatan.", "交易完成。讨论数字记录与付款安全。", "Transaction complete. Discuss the digital record and safety."))}`, "success");
  else setSummary(loc(ml("Gunakan alat pada skrin untuk melengkapkan simulasi.", "使用屏幕上的工具完成模拟。", "Use the on-screen device to complete the simulation.")));
}

function renderDocumentStudio(activity) {
  const tool = state.tool; const total = tool.qty * tool.unit;
  setChallenge(loc(ml("Bina dokumen urus niaga", "制作交易文件", "Build a transaction document")), loc(ml("Ubah jenis, kuantiti dan harga.", "修改类型、数量和价格。", "Change the type, quantity and price.")));
  const names = { receipt: ml("RESIT · TELAH DIBAYAR", "收据 · 已付款", "RECEIPT · PAID"), bill: ml("BIL · PERLU DIBAYAR", "账单 · 应付", "BILL · AMOUNT DUE"), invoice: ml("INVOIS · PERMINTAAN BAYARAN", "发票 · 付款请求", "INVOICE · PAYMENT REQUEST") };
  const date = "04-10-2026";
  els.stage.innerHTML = `<div class="document-card live-document"><h3>${loc(ml("KEDAI CERIA", "欢乐商店", "HAPPY SHOP"))}</h3><div class="doc-stamp">${loc(names[tool.type])}</div><div class="document-row"><span>${loc(ml("Tarikh", "日期", "Date"))}</span><span>${date}</span></div><div class="document-row"><span>${loc(ml("Alat tulis", "文具", "Stationery"))} × ${tool.qty}</span><span>${money(total)}</span></div><div class="document-row"><span>${loc(ml("Harga seunit", "单价", "Unit price"))}</span><span>${money(tool.unit)}</span></div><div class="document-row total"><span>${loc(ml("JUMLAH", "总额", "TOTAL"))}</span><span>${money(total)}</span></div></div>`;
  const allowed = activity === "receipt" ? [["receipt", ml("Resit", "收据", "Receipt")], ["bill", ml("Bil", "账单", "Bill")]] : [["receipt", ml("Resit", "收据", "Receipt")], ["bill", ml("Bil", "账单", "Bill")], ["invoice", ml("Invois", "发票", "Invoice")]];
  els.controls.innerHTML = `<div class="field-grid"><label>${loc(ml("Jenis dokumen", "文件类型", "Document type"))}<select id="docType">${allowed.map(([id, name]) => `<option value="${id}" ${id === tool.type ? "selected" : ""}>${loc(name)}</option>`).join("")}</select></label><label>${loc(ml("Kuantiti", "数量", "Quantity"))}<input id="docQty" type="number" min="1" max="20" value="${tool.qty}"></label><label>${loc(ml("Harga seunit (RM)", "单价（RM）", "Unit price (RM)"))}<input id="docUnit" type="number" min="0.5" max="500" step="0.5" value="${tool.unit / 100}"></label></div>`;
  document.querySelector("#docType").addEventListener("change", event => changeTool(t => { t.type = event.target.value; }));
  document.querySelector("#docQty").addEventListener("change", event => changeTool(t => { t.qty = clamp(event.target.value, 1, 20); }));
  document.querySelector("#docUnit").addEventListener("change", event => changeTool(t => { t.unit = Math.round(clamp(event.target.value, .5, 500) * 100); }));
  const explanations = { receipt: ml("Resit merekodkan bayaran yang sudah dibuat.", "收据记录已经完成的付款。", "A receipt records a payment already made."), bill: ml("Bil menunjukkan jumlah yang masih perlu dibayar.", "账单显示仍需支付的金额。", "A bill shows an amount still due."), invoice: ml("Invois meminta bayaran bagi barang atau perkhidmatan.", "发票针对商品或服务提出付款要求。", "An invoice requests payment for goods or services.") };
  setSummary(loc(explanations[tool.type]));
}

const BOARD_ITEMS = [
  ["rice", "🍚", ml("Makanan", "食物", "Food")], ["book", "📒", ml("Buku sekolah", "课本", "School book")], ["water", "💧", ml("Air minuman", "饮用水", "Drinking water")],
  ["game", "🎮", ml("Permainan", "电子游戏", "Game")], ["toy", "🧸", ml("Mainan baharu", "新玩具", "New toy")], ["shoes", "👟", ml("Kasut", "鞋子", "Shoes")],
];

function renderNeedWant() {
  setChallenge(loc(ml("Pindahkan setiap kad", "移动每张卡片", "Move every card")), loc(ml("Klik kad untuk memindahkannya: belum pilih → keperluan → kehendak.", "点击卡片移动：未分类 → 需要 → 想要。", "Tap a card to move it: unplaced → need → want.")));
  const groups = ["pool", "need", "want"].map(group => {
    const title = group === "pool" ? ml("Belum dipilih", "未分类", "Unplaced") : group === "need" ? ml("Keperluan", "需要", "Needs") : ml("Kehendak", "想要", "Wants");
    const cards = BOARD_ITEMS.filter(([id]) => (state.tool.places[id] || "pool") === group).map(([id, icon, label]) => `<button type="button" class="sort-item-card" data-item="${id}"><span>${icon}</span><strong>${loc(label)}</strong></button>`).join("");
    return `<div class="sort-bin ${group}"><h3>${loc(title)}</h3><div class="sort-items">${cards || `<small>${loc(ml("Ruang kosong", "空白区域", "Empty space"))}</small>`}</div></div>`;
  }).join("");
  els.stage.innerHTML = `<div class="sort-board">${groups}</div>`; els.controls.innerHTML = "";
  els.stage.querySelectorAll("[data-item]").forEach(button => button.addEventListener("click", () => changeTool(t => { const current = t.places[button.dataset.item] || "pool"; t.places[button.dataset.item] = current === "pool" ? "need" : current === "need" ? "want" : "pool"; })));
  const placed = Object.values(state.tool.places).filter(x => x !== "pool").length;
  setSummary(`${placed}/6 ${loc(ml("kad sudah dipindahkan. Tiada pemarkahan — bincangkan konteks dan sebab pilihan.", "张卡片已移动。没有评分——请讨论情境与选择原因。", "cards moved. No scoring — discuss context and reasons."))}`);
}

function renderSavingPlan() {
  const t = state.tool; const remaining = Math.max(0, t.goal - t.saved); const weeks = t.weekly ? Math.ceil(remaining / t.weekly) : 0; const pct = Math.min(100, t.saved / t.goal * 100);
  setChallenge(loc(ml("Rancang simpanan untuk basikal", "规划脚踏车储蓄", "Plan savings for a bicycle")), loc(ml("Gerakkan kawalan dan lihat tempoh berubah.", "移动控制器，观察所需时间变化。", "Move the controls and watch the time change.")));
  els.stage.innerHTML = `<div class="goal-scene"><span>🚲</span><div class="goal-ring" style="--progress:${pct * 3.6}deg"><strong>${Math.round(pct)}%</strong></div><div class="goal-stats">${metric(loc(ml("Sasaran", "目标", "Goal")), money(t.goal * 100))}${metric(loc(ml("Sudah disimpan", "已有储蓄", "Already saved")), money(t.saved * 100))}${metric(loc(ml("Minggu diperlukan", "所需周数", "Weeks needed")), weeks)}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("saveGoal", loc(ml("Harga sasaran (RM)", "目标价格（RM）", "Goal price (RM)")), 20, 500, 5, t.goal)}${slider("saveCurrent", loc(ml("Simpanan semasa (RM)", "目前储蓄（RM）", "Current savings (RM)")), 0, t.goal, 5, t.saved)}${slider("saveWeekly", loc(ml("Simpan setiap minggu (RM)", "每周储蓄（RM）", "Save each week (RM)")), 1, 50, 1, t.weekly)}</div>`;
  [["saveGoal", "goal"], ["saveCurrent", "saved"], ["saveWeekly", "weekly"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); if (x.saved > x.goal) x.saved = x.goal; })));
  setSummary(remaining ? `${loc(ml("Baki sasaran", "距离目标还差", "Remaining goal"))}: <strong>${money(remaining * 100)}</strong> · ${weeks} ${loc(ml("minggu", "周", "weeks"))}` : `🎉 ${loc(ml("Matlamat sudah dicapai!", "目标已达成！", "Goal reached!"))}`, remaining ? "neutral" : "success");
}

function renderBudget() {
  const t = state.tool; const spent = t.needs + t.saving + t.learning + t.wants; const balance = t.income - spent;
  setChallenge(loc(ml("Agihkan pendapatan bulanan", "分配每月收入", "Allocate monthly income")), loc(ml("Setiap peluncur mengubah baki.", "每个滑杆都会改变余额。", "Every slider changes the balance.")));
  const cats = [["needs", "🏠", ml("Keperluan", "需要", "Needs")], ["saving", "🐷", ml("Simpanan", "储蓄", "Savings")], ["learning", "📚", ml("Pembelajaran", "学习", "Learning")], ["wants", "🎈", ml("Kehendak", "想要", "Wants")]];
  els.stage.innerHTML = `<div class="budget-board"><div class="budget-income">${loc(ml("Pendapatan", "收入", "Income"))}<strong>${money(t.income * 100)}</strong></div><div class="budget-pots">${cats.map(([key, icon, label]) => `<div class="budget-pot"><span>${icon}</span><strong>${loc(label)}</strong><b>${money(t[key] * 100)}</b><i style="height:${Math.min(100, t[key] / t.income * 180)}%"></i></div>`).join("")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("budgetIncome", loc(ml("Pendapatan (RM)", "收入（RM）", "Income (RM)")), 50, 1000, 10, t.income)}${cats.map(([key,, label]) => slider(`budget-${key}`, loc(label), 0, 500, 5, t[key])).join("")}</div>`;
  document.querySelector("#budgetIncome").addEventListener("change", event => changeTool(x => { x.income = Number(event.target.value); }));
  cats.forEach(([key]) => document.querySelector(`#budget-${key}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(balance >= 0 ? `${loc(ml("Baki belum diagih", "未分配余额", "Unallocated balance"))}: <strong>${money(balance * 100)}</strong>` : `${loc(ml("Perbelanjaan melebihi pendapatan sebanyak", "支出超过收入", "Spending exceeds income by"))} <strong>${money(-balance * 100)}</strong>`, balance >= 0 ? "success" : "attention");
}

function renderWiseChoice() {
  const t = state.tool; const scoreA = (t.aQuality * 20 + t.aWarranty) / t.aPrice; const scoreB = (t.bQuality * 20 + t.bWarranty) / t.bPrice;
  setChallenge(loc(ml("Bandingkan dua beg sekolah", "比较两个书包", "Compare two school bags")), loc(ml("Nilai bukan harga sahaja — lihat kualiti dan jaminan.", "价值不只看价格——也要看品质和保修。", "Value is not only price — inspect quality and warranty.")));
  const product = (id, icon, price, quality, warranty, score) => `<div class="compare-card ${score === Math.max(scoreA, scoreB) ? "highlight" : ""}"><span class="product-art">${icon}</span><h3>${loc(ml(`Beg ${id}`, `书包 ${id}`, `Bag ${id}`))}</h3>${metric(loc(ml("Harga", "价格", "Price")), money(price * 100))}${metric(loc(ml("Kualiti", "品质", "Quality")), `${"★".repeat(quality)}${"☆".repeat(5 - quality)}`)}${metric(loc(ml("Jaminan", "保修", "Warranty")), `${warranty} ${loc(ml("bulan", "个月", "months"))}`)}<small>${loc(ml("Indeks nilai", "价值指数", "Value index"))}: ${score.toFixed(2)}</small></div>`;
  els.stage.innerHTML = `<div class="compare-grid">${product("A", "🎒", t.aPrice, t.aQuality, t.aWarranty, scoreA)}${product("B", "💼", t.bPrice, t.bQuality, t.bWarranty, scoreB)}</div>`;
  els.controls.innerHTML = `<div class="compare-controls"><fieldset><legend>A</legend>${slider("aPrice", loc(ml("Harga", "价格", "Price")), 20, 120, 5, t.aPrice)}${slider("aQuality", loc(ml("Kualiti", "品质", "Quality")), 1, 5, 1, t.aQuality)}${slider("aWarranty", loc(ml("Jaminan (bulan)", "保修（月）", "Warranty (months)")), 0, 24, 3, t.aWarranty)}</fieldset><fieldset><legend>B</legend>${slider("bPrice", loc(ml("Harga", "价格", "Price")), 20, 120, 5, t.bPrice)}${slider("bQuality", loc(ml("Kualiti", "品质", "Quality")), 1, 5, 1, t.bQuality)}${slider("bWarranty", loc(ml("Jaminan (bulan)", "保修（月）", "Warranty (months)")), 0, 24, 3, t.bWarranty)}</fieldset></div>`;
  ["aPrice", "aQuality", "aWarranty", "bPrice", "bQuality", "bWarranty"].forEach(key => document.querySelector(`#${key}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(loc(ml("Indeks membantu perbandingan, tetapi keperluan dan bajet masih perlu dipertimbangkan.", "指数帮助比较，但仍要考虑需要与预算。", "The index supports comparison, but needs and budget still matter.")));
}

function renderCashless() {
  const t = state.tool;
  setChallenge(loc(ml("Cuba dompet digital", "模拟电子钱包", "Try a digital wallet")), loc(ml("Tambah nilai atau buat bayaran; baki bukan wang percuma.", "充值或付款；余额并不是免费的钱。", "Top up or pay; the balance is not free money.")));
  els.stage.innerHTML = `<div class="phone-wallet"><div class="phone-top">9:41 <span>▮▮▮</span></div><div class="wallet-app"><span>📱</span><small>${loc(ml("Baki tersedia", "可用余额", "Available balance"))}</small><strong>${money(t.balance * 100)}</strong><div class="mini-card">💳 SMART WALLET</div></div><div class="transaction-log">${t.log.slice(-3).reverse().map(row => `<div><span>${row[0]}</span><strong>${row[1]}</strong></div>`).join("") || `<small>${loc(ml("Belum ada transaksi", "还没有交易", "No transactions yet"))}</small>`}</div></div>`;
  els.controls.innerHTML = `${slider("cashlessAmount", loc(ml("Jumlah transaksi (RM)", "交易金额（RM）", "Transaction amount (RM)")), 1, 50, 1, t.amount)}<div class="action-grid"><button type="button" class="secondary-button" id="topUp">＋ ${loc(ml("Tambah nilai", "充值", "Top up"))}</button><button type="button" class="primary-button" id="payQr">▦ ${loc(ml("Bayar dengan QR", "使用 QR 付款", "Pay with QR"))}</button><button type="button" class="primary-button" id="payCard">💳 ${loc(ml("Sentuh kad", "感应银行卡", "Tap card"))}</button></div>`;
  document.querySelector("#cashlessAmount").addEventListener("change", event => changeTool(x => { x.amount = Number(event.target.value); }));
  document.querySelector("#topUp").addEventListener("click", () => changeTool(x => { x.balance += x.amount; x.log.push([loc(ml("Tambah nilai", "充值", "Top up")), `+${money(x.amount * 100)}`]); }, "done"));
  const pay = method => changeTool(x => { if (x.balance >= x.amount) { x.balance -= x.amount; x.log.push([method, `−${money(x.amount * 100)}`]); } }, "done");
  document.querySelector("#payQr").addEventListener("click", () => pay(loc(ml("Bayaran QR", "QR 付款", "QR payment"))));
  document.querySelector("#payCard").addEventListener("click", () => pay(loc(ml("Bayaran kad", "银行卡付款", "Card payment"))));
  setSummary(`${loc(ml("Setiap bayaran menolak wang daripada baki.", "每次付款都会从余额中扣除金额。", "Every payment deducts money from the balance."))} ${t.balance < t.amount ? loc(ml("Tambah nilai untuk transaksi seterusnya.", "请充值后再进行下一笔交易。", "Top up for the next transaction.")) : ""}`);
}

function renderCashCredit() {
  const t = state.tool; const borrowed = Math.max(0, t.price - t.deposit); const interest = borrowed * t.rate / 100 * (t.months / 12); const total = t.deposit + borrowed + interest; const monthly = t.months ? (borrowed + interest) / t.months : 0;
  setChallenge(loc(ml("Bandingkan tunai dan kredit", "比较现金与信贷", "Compare cash and credit")), loc(ml("Kredit menambah kos apabila faedah dikenakan.", "信贷在计算利息后会增加成本。", "Credit adds cost when interest is charged.")));
  els.stage.innerHTML = `<div class="compare-grid"><div class="compare-card"><span class="product-art">💵</span><h3>${loc(ml("Bayar tunai", "现金付款", "Pay cash"))}</h3>${metric(loc(ml("Bayar sekarang", "现在支付", "Pay now")), money(t.price * 100))}${metric(loc(ml("Hutang", "债务", "Debt")), money(0))}</div><div class="compare-card"><span class="product-art">💳</span><h3>${loc(ml("Bayar secara kredit", "信贷付款", "Pay by credit"))}</h3>${metric(loc(ml("Deposit", "首付", "Deposit")), money(t.deposit * 100))}${metric(loc(ml("Ansuran bulanan", "每月分期", "Monthly instalment")), money(monthly * 100))}${metric(loc(ml("Jumlah keseluruhan", "总成本", "Total cost")), money(total * 100), "accent")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("creditPrice", loc(ml("Harga barang (RM)", "商品价格（RM）", "Item price (RM)")), 100, 2000, 50, t.price)}${slider("creditDeposit", loc(ml("Deposit (RM)", "首付（RM）", "Deposit (RM)")), 0, t.price, 10, t.deposit)}${slider("creditRate", loc(ml("Kadar setahun", "年利率", "Annual rate")), 0, 20, .5, t.rate, "%")}${slider("creditMonths", loc(ml("Tempoh (bulan)", "期限（月）", "Term (months)")), 6, 60, 6, t.months)}</div>`;
  [["creditPrice", "price"], ["creditDeposit", "deposit"], ["creditRate", "rate"], ["creditMonths", "months"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); if (x.deposit > x.price) x.deposit = x.price; })));
  setSummary(`${loc(ml("Kos faedah", "利息成本", "Interest cost"))}: <strong>${money(interest * 100)}</strong> · ${loc(ml("Baca syarat sebenar sebelum meminjam.", "借贷前应阅读实际条款。", "Read actual terms before borrowing."))}`);
}

function renderSaveInvest() {
  const t = state.tool; const invested = t.capital * t.investPct / 100; const saved = t.capital - invested; const savingEnd = saved * (1 + t.saveRate / 100); const investEnd = invested * (1 + t.investReturn / 100); const totalEnd = savingEnd + investEnd;
  setChallenge(loc(ml("Agihkan wang antara simpanan dan pelaburan", "在储蓄与投资之间分配资金", "Split money between saving and investing")), loc(ml("Pulangan pelaburan boleh positif atau negatif.", "投资回报可能为正，也可能为负。", "Investment returns can be positive or negative.")));
  els.stage.innerHTML = `<div class="allocation"><div class="allocation-bar"><i style="width:${100 - t.investPct}%"></i><b style="width:${t.investPct}%"></b></div><div class="compare-grid"><div class="compare-card">🏦<h3>${loc(ml("Simpanan", "储蓄", "Savings"))}</h3>${metric(loc(ml("Diperuntukkan", "分配金额", "Allocated")), money(saved * 100))}${metric(loc(ml("Selepas setahun", "一年后", "After one year")), money(savingEnd * 100))}</div><div class="compare-card">📈<h3>${loc(ml("Pelaburan", "投资", "Investment"))}</h3>${metric(loc(ml("Diperuntukkan", "分配金额", "Allocated")), money(invested * 100))}${metric(loc(ml("Selepas setahun", "一年后", "After one year")), money(investEnd * 100))}</div></div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("siCapital", loc(ml("Modal (RM)", "本金（RM）", "Capital (RM)")), 100, 5000, 100, t.capital)}${slider("siSplit", loc(ml("Bahagian pelaburan", "投资比例", "Investment share")), 0, 100, 5, t.investPct, "%")}${slider("siSaveRate", loc(ml("Kadar simpanan", "储蓄利率", "Savings rate")), 0, 8, .5, t.saveRate, "%")}${slider("siReturn", loc(ml("Senario pulangan pelaburan", "投资回报情境", "Investment return scenario")), -20, 20, 1, t.investReturn, "%")}</div>`;
  [["siCapital", "capital"], ["siSplit", "investPct"], ["siSaveRate", "saveRate"], ["siReturn", "investReturn"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(`${loc(ml("Jumlah simulasi selepas setahun", "模拟一年后的总额", "Simulated total after one year"))}: <strong>${money(totalEnd * 100)}</strong> · ${loc(ml("Pulangan sebenar tidak dijamin.", "实际回报不受保证。", "Actual returns are not guaranteed."))}`);
}

function growthBars(simple, compound, principal, years) {
  const max = Math.max(...compound, principal); return `<div class="growth-chart">${Array.from({ length: years + 1 }, (_, year) => `<div class="growth-column"><div class="growth-bars"><i style="height:${simple[year] / max * 100}%"></i><b style="height:${compound[year] / max * 100}%"></b></div><small>${year}</small></div>`).join("")}</div>`;
}

function renderInterest() {
  const t = state.tool; const simple = []; const compound = [];
  for (let y = 0; y <= t.years; y++) { simple.push(t.principal * (1 + t.rate / 100 * y)); compound.push(t.principal * Math.pow(1 + t.rate / 100, y)); }
  setChallenge(loc(ml("Bandingkan pertumbuhan faedah", "比较利息增长", "Compare interest growth")), loc(ml("Hijau = mudah · jingga = kompaun", "绿色＝单利 · 橙色＝复利", "Green = simple · orange = compound")));
  els.stage.innerHTML = `<div class="chart-wrap">${growthBars(simple, compound, t.principal, t.years)}<div class="chart-legend"><span><i></i>${loc(ml("Faedah mudah", "单利", "Simple"))}</span><span><b></b>${loc(ml("Faedah kompaun", "复利", "Compound"))}</span></div><div class="metric-row">${metric(loc(ml("Mudah", "单利", "Simple")), money(simple.at(-1) * 100))}${metric(loc(ml("Kompaun", "复利", "Compound")), money(compound.at(-1) * 100), "accent")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("intPrincipal", loc(ml("Modal (RM)", "本金（RM）", "Principal (RM)")), 100, 5000, 100, t.principal)}${slider("intRate", loc(ml("Kadar setahun", "年利率", "Annual rate")), 0, 15, .5, t.rate, "%")}${slider("intYears", loc(ml("Tempoh (tahun)", "时间（年）", "Time (years)")), 1, 15, 1, t.years)}</div>`;
  [["intPrincipal", "principal"], ["intRate", "rate"], ["intYears", "years"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(`${loc(ml("Perbezaan selepas tempoh ini", "期末差额", "Difference at the end"))}: <strong>${money((compound.at(-1) - simple.at(-1)) * 100)}</strong>`);
}

function renderDebt() {
  const t = state.tool; const monthlyRate = t.rate / 1200; const payment = monthlyRate ? t.loan * monthlyRate / (1 - Math.pow(1 + monthlyRate, -t.months)) : t.loan / t.months; const total = payment * t.months; const interest = total - t.loan;
  setChallenge(loc(ml("Lihat kesan tempoh hutang", "观察债务期限的影响", "See how loan term changes debt")), loc(ml("Tempoh lebih panjang biasanya mengurangkan ansuran tetapi menambah kos.", "期限越长，月供通常越低，但总成本更高。", "A longer term usually lowers payments but raises total cost.")));
  const remainingAt = month => monthlyRate ? Math.max(0, t.loan * Math.pow(1 + monthlyRate, month) - payment * (Math.pow(1 + monthlyRate, month) - 1) / monthlyRate) : Math.max(0, t.loan - payment * month);
  const samples = [1, Math.ceil(t.months / 2), t.months].map(month => `<div class="timeline-stop"><b>${month}</b><span>${loc(ml("bulan", "月", "month"))}</span><strong>${money(remainingAt(month) * 100)}</strong></div>`).join("");
  els.stage.innerHTML = `<div class="debt-card">${metric(loc(ml("Pinjaman", "贷款", "Loan")), money(t.loan * 100))}${metric(loc(ml("Ansuran anggaran", "估计月供", "Estimated payment")), money(payment * 100), "accent")}${metric(loc(ml("Jumlah faedah", "总利息", "Total interest")), money(interest * 100))}<div class="debt-timeline">${samples}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("debtLoan", loc(ml("Jumlah pinjaman (RM)", "贷款额（RM）", "Loan amount (RM)")), 500, 20000, 500, t.loan)}${slider("debtRate", loc(ml("Kadar setahun", "年利率", "Annual rate")), 0, 20, .5, t.rate, "%")}${slider("debtMonths", loc(ml("Tempoh (bulan)", "期限（月）", "Term (months)")), 6, 84, 6, t.months)}</div>`;
  [["debtLoan", "loan"], ["debtRate", "rate"], ["debtMonths", "months"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(`${loc(ml("Jumlah dibayar balik", "偿还总额", "Total repaid"))}: <strong>${money(total * 100)}</strong> · ${loc(ml("Anggaran pendidikan sahaja.", "仅供教学估算。", "Educational estimate only."))}`);
}

function renderDecision() {
  const t = state.tool; const available = t.income - t.commitments - t.saving; const after = available - t.purchase;
  setChallenge(loc(ml("Uji kemampuan sebelum membeli", "购买前测试负担能力", "Test affordability before buying")), loc(ml("Lihat wang yang tinggal selepas komitmen dan simpanan.", "观察固定开销与储蓄后剩余的钱。", "See what remains after commitments and saving.")));
  els.stage.innerHTML = `<div class="cashflow"><div class="cashflow-source">${loc(ml("Pendapatan", "收入", "Income"))}<strong>${money(t.income * 100)}</strong></div><div class="cashflow-arrow">→</div><div class="cashflow-stack"><span>🏠 ${money(t.commitments * 100)}</span><span>🐷 ${money(t.saving * 100)}</span><span>🛍️ ${money(t.purchase * 100)}</span></div><div class="cashflow-arrow">→</div><div class="cashflow-result ${after < 0 ? "negative" : ""}">${loc(ml("Baki", "余额", "Balance"))}<strong>${money(after * 100)}</strong></div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("decIncome", loc(ml("Pendapatan (RM)", "收入（RM）", "Income (RM)")), 500, 6000, 100, t.income)}${slider("decCommitments", loc(ml("Komitmen (RM)", "固定开销（RM）", "Commitments (RM)")), 0, 5000, 100, t.commitments)}${slider("decSaving", loc(ml("Simpanan (RM)", "储蓄（RM）", "Savings (RM)")), 0, 2000, 50, t.saving)}${slider("decPurchase", loc(ml("Pembelian dirancang (RM)", "计划购买（RM）", "Planned purchase (RM)")), 0, 3000, 50, t.purchase)}</div>`;
  [["decIncome", "income"], ["decCommitments", "commitments"], ["decSaving", "saving"], ["decPurchase", "purchase"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(after >= 0 ? `${loc(ml("Pembelian muat dalam aliran tunai simulasi. Baki", "这项购买在模拟现金流范围内。余额", "The purchase fits the simulated cash flow. Balance"))}: <strong>${money(after * 100)}</strong>` : `${loc(ml("Kekurangan", "资金不足", "Shortfall"))}: <strong>${money(-after * 100)}</strong> · ${loc(ml("Laraskan rancangan.", "请调整计划。", "Adjust the plan."))}`, after >= 0 ? "success" : "attention");
}

function renderProfitLoss() {
  const t = state.tool; const revenue = t.price * t.qty; const costs = t.cost * t.qty; const result = revenue - costs;
  setChallenge(loc(ml("Jalankan gerai mini", "经营迷你摊位", "Run a mini stall")), loc(ml("Ubah kos, harga jual dan jumlah jualan.", "调整成本、售价和销售数量。", "Change cost, selling price and sales volume.")));
  els.stage.innerHTML = `<div class="stall-scene"><span class="stall">🏪</span><div class="metric-row">${metric(loc(ml("Jumlah kos", "总成本", "Total cost")), money(costs * 100))}${metric(loc(ml("Hasil jualan", "销售收入", "Sales revenue")), money(revenue * 100))}${metric(result >= 0 ? loc(ml("Untung", "盈利", "Profit")) : loc(ml("Rugi", "亏损", "Loss")), money(Math.abs(result) * 100), result >= 0 ? "positive" : "negative")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("plCost", loc(ml("Kos seunit (RM)", "单位成本（RM）", "Cost per unit (RM)")), 1, 50, 1, t.cost)}${slider("plPrice", loc(ml("Harga jual seunit (RM)", "单位售价（RM）", "Selling price (RM)")), 1, 80, 1, t.price)}${slider("plQty", loc(ml("Kuantiti dijual", "销售数量", "Quantity sold")), 1, 100, 1, t.qty)}</div>`;
  [["plCost", "cost"], ["plPrice", "price"], ["plQty", "qty"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(`${result >= 0 ? loc(ml("Untung", "盈利", "Profit")) : loc(ml("Rugi", "亏损", "Loss"))} = ${loc(ml("hasil jualan − jumlah kos", "销售收入 − 总成本", "sales revenue − total cost"))}`);
}

function renderDiscount() {
  const t = state.tool; const discount = t.original * t.percent / 100; const afterDiscount = t.original - discount; const payable = Math.max(0, afterDiscount - t.voucher); const final = Math.max(0, payable - t.rebate); const saved = t.original - final;
  setChallenge(loc(ml("Gabungkan tawaran kedai", "组合商店优惠", "Combine shop offers")), loc(ml("Lihat urutan harga asal → diskaun → baucar → rebat.", "观察原价 → 折扣 → 礼券 → 回扣。", "Follow original price → discount → voucher → rebate.")));
  els.stage.innerHTML = `<div class="price-flow">${metric(loc(ml("Harga asal", "原价", "Original")), money(t.original * 100))}<span>− ${money(discount * 100)}</span>${metric(loc(ml("Selepas diskaun", "折后价", "After discount")), money(afterDiscount * 100))}<span>− ${money(t.voucher * 100)}</span>${metric(loc(ml("Bayar di kaunter", "柜台付款", "Pay at counter")), money(payable * 100))}<span>− ${money(t.rebate * 100)}</span>${metric(loc(ml("Kos akhir", "最终成本", "Final cost")), money(final * 100), "accent")}</div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("discOriginal", loc(ml("Harga asal (RM)", "原价（RM）", "Original price (RM)")), 20, 1000, 10, t.original)}${slider("discPercent", loc(ml("Diskaun", "折扣", "Discount")), 0, 70, 5, t.percent, "%")}${slider("discVoucher", loc(ml("Baucar (RM)", "礼券（RM）", "Voucher (RM)")), 0, 100, 5, t.voucher)}${slider("discRebate", loc(ml("Rebat (RM)", "回扣（RM）", "Rebate (RM)")), 0, 100, 5, t.rebate)}</div>`;
  [["discOriginal", "original"], ["discPercent", "percent"], ["discVoucher", "voucher"], ["discRebate", "rebate"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(`${loc(ml("Jumlah dijimatkan", "总共节省", "Total saved"))}: <strong>${money(saved * 100)}</strong>` , "success");
}

function renderAssets() {
  const t = state.tool; const assets = t.cash + t.savings + t.property; const debts = t.card + t.loan; const net = assets - debts;
  setChallenge(loc(ml("Bina gambaran kedudukan kewangan", "构建财务状况图", "Build a financial position")), loc(ml("Nilai bersih = aset − liabiliti.", "净值＝资产 − 负债。", "Net worth = assets − liabilities.")));
  const side = (title, icon, rows, total, cls) => `<div class="balance-side ${cls}"><h3>${icon} ${title}</h3>${rows.map(([label, value]) => `<div><span>${label}</span><strong>${money(value * 100)}</strong></div>`).join("")}<footer>${loc(ml("Jumlah", "总额", "Total"))}: ${money(total * 100)}</footer></div>`;
  els.stage.innerHTML = `<div class="balance-board">${side(loc(ml("Aset", "资产", "Assets")), "🏠", [[loc(ml("Tunai", "现金", "Cash")), t.cash], [loc(ml("Simpanan", "储蓄", "Savings")), t.savings], [loc(ml("Harta", "财产", "Property")), t.property]], assets, "assets")}${side(loc(ml("Liabiliti", "负债", "Liabilities")), "🧾", [[loc(ml("Baki kad", "卡债", "Card balance")), t.card], [loc(ml("Pinjaman", "贷款", "Loan")), t.loan]], debts, "debts")}</div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("assetCash", loc(ml("Tunai", "现金", "Cash")), 0, 5000, 100, t.cash)}${slider("assetSavings", loc(ml("Simpanan", "储蓄", "Savings")), 0, 10000, 100, t.savings)}${slider("assetProperty", loc(ml("Harta", "财产", "Property")), 0, 20000, 500, t.property)}${slider("assetCard", loc(ml("Baki kad", "卡债", "Card balance")), 0, 5000, 100, t.card)}${slider("assetLoan", loc(ml("Pinjaman", "贷款", "Loan")), 0, 15000, 500, t.loan)}</div>`;
  [["assetCash", "cash"], ["assetSavings", "savings"], ["assetProperty", "property"], ["assetCard", "card"], ["assetLoan", "loan"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(`${loc(ml("Nilai bersih", "净值", "Net worth"))}: <strong>${net < 0 ? "−" : ""}${money(Math.abs(net) * 100)}</strong>`, net >= 0 ? "success" : "attention");
}

function renderInsurance() {
  const t = state.tool; const claimable = Math.max(0, t.loss - t.deductible); const payout = Math.min(t.coverage, claimable); const self = t.loss - payout;
  setChallenge(loc(ml("Simulasikan perlindungan kewangan", "模拟财务保障", "Simulate financial protection")), loc(ml("Lihat bagaimana had perlindungan dan deduktibel mempengaruhi bayaran.", "观察保额与自付额如何影响赔付。", "See how coverage and deductible affect payment.")));
  els.stage.innerHTML = `<div class="protection-scene"><span class="shield">🛡️</span><div class="claim-flow">${metric(loc(ml("Kerugian", "损失", "Loss")), money(t.loss * 100))}<span>→</span>${metric(loc(ml("Bayaran perlindungan", "保障赔付", "Protection payout")), money(payout * 100), "positive")}<span>＋</span>${metric(loc(ml("Ditanggung sendiri", "自行承担", "Paid by you")), money(self * 100), "negative")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("insLoss", loc(ml("Jumlah kerugian (RM)", "损失金额（RM）", "Loss amount (RM)")), 500, 20000, 500, t.loss)}${slider("insCoverage", loc(ml("Had perlindungan (RM)", "保障上限（RM）", "Coverage limit (RM)")), 500, 20000, 500, t.coverage)}${slider("insDeductible", loc(ml("Deduktibel (RM)", "自付额（RM）", "Deductible (RM)")), 0, 5000, 100, t.deductible)}${slider("insPremium", loc(ml("Sumbangan / premium bulanan (RM)", "每月供款／保费（RM）", "Monthly contribution / premium (RM)")), 10, 300, 10, t.premium)}</div>`;
  [["insLoss", "loss"], ["insCoverage", "coverage"], ["insDeductible", "deductible"], ["insPremium", "premium"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); })));
  setSummary(`${loc(ml("Kos premium setahun", "一年保费", "Annual premium cost"))}: <strong>${money(t.premium * 12 * 100)}</strong> · ${loc(ml("Simulasi ringkas; polisi sebenar mempunyai syarat khusus.", "这是简化模拟；实际保单有具体条款。", "Simplified simulation; real policies have specific terms."))}`);
}

function renderTool() {
  els.stage.replaceChildren(); els.controls.replaceChildren();
  const renderers = {
    identify: renderIdentify, compose: () => renderMoneyBuilder("compose"), equivalent: () => renderMoneyBuilder("equivalent"), foreign: renderForeign,
    pay: () => renderMoneyBuilder("pay"), methods: renderMethods, receipt: () => renderDocumentStudio("receipt"), documents: () => renderDocumentStudio("documents"),
    needWant: renderNeedWant, savingPlan: renderSavingPlan, budget: renderBudget, wiseChoice: renderWiseChoice, cashless: renderCashless,
    cashCredit: renderCashCredit, saveInvest: renderSaveInvest, simpleCompound: renderInterest, creditDebt: renderDebt,
    financialDecision: renderDecision, profitLoss: renderProfitLoss, discount: renderDiscount, assetsLiabilities: renderAssets, insurance: renderInsurance,
  };
  renderers[state.activity]();
}

function startTool({ preserve = false } = {}) {
  applyStaticLanguage(); refreshNavigation({ keepActivity: true });
  if (!preserve || !state.tool) state.tool = defaults(state.activity);
  renderTool();
}

function updateTeacherPreview() {
  const amount = Math.round(clamp(els.ringgit.value, 0, 50000) * 100 + clamp(els.sen.value, 0, 95));
  const rate = clamp(els.rate.value, 0, 30); const period = clamp(els.period.value, 1, 20);
  els.preview.textContent = `${money(amount)} · ${rate}% · ${period}`; els.teacherError.textContent = "";
}

function applyTeacherSettings() {
  const amount = Math.round(clamp(els.ringgit.value, 0, 50000) * 100 + clamp(els.sen.value, 0, 95));
  if (amount < 5 || amount > 5000000 || amount % 5) { els.teacherError.textContent = loc(ml("Jumlah mesti sekurang-kurangnya 5 sen dan sen dalam gandaan 5.", "金额至少为 5 仙，仙数必须是 5 的倍数。", "Use at least 5 sen and a sen value in multiples of 5.")); return; }
  state.teacher = { amount, rate: clamp(els.rate.value, 0, 30), period: clamp(els.period.value, 1, 20) };
  els.dialog.close(); state.tool = defaults(state.activity); beep("done"); renderTool();
}

document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => { state.lang = button.dataset.lang; beep(); applyStaticLanguage(); refreshNavigation({ keepActivity: true }); renderTool(); }));
document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { if (button.disabled) return; state.mode = button.dataset.mode; state.activity = GRADE_MODES[state.grade][state.mode][0]; state.tool = null; beep(); startTool(); }));
els.grade.addEventListener("change", () => { state.grade = Number(els.grade.value); state.tool = null; beep(); refreshNavigation(); startTool(); });
els.activity.addEventListener("change", () => { state.activity = els.activity.value; state.tool = null; beep(); refreshNavigation({ keepActivity: true }); startTool(); });
els.reset.addEventListener("click", () => { state.tool = defaults(state.activity); beep(); renderTool(); });
els.listen.addEventListener("click", () => speak(`${els.title.textContent}. ${els.challenge.textContent}`));
els.sound.addEventListener("click", () => { state.sound = !state.sound; els.sound.setAttribute("aria-pressed", String(state.sound)); applyStaticLanguage(); if (state.sound) beep("done"); });
els.teacher.addEventListener("click", () => { els.ringgit.value = Math.floor(state.teacher.amount / 100); els.sen.value = state.teacher.amount % 100; els.rate.value = state.teacher.rate; els.period.value = state.teacher.period; updateTeacherPreview(); els.dialog.showModal(); beep(); });
[els.ringgit, els.sen, els.rate, els.period].forEach(input => input.addEventListener("input", updateTeacherPreview));
els.useSettings.addEventListener("click", applyTeacherSettings);

applyStaticLanguage(); refreshNavigation(); state.tool = defaults(state.activity); renderTool();
