"use strict";

const ml = (ms, zh, en) => ({ ms, zh, en });

const I18N = {
  title: ml("Jom Teroka Wang!", "一起来探索钱币！", "Let's Explore Money!"),
  subtitle: ml("Alat manipulatif Tahun 2–3 untuk SK dan SJK.", "配合 SK 与 SJK 二至三年级课本的操作工具。", "Hands-on Year 2–3 tools for SK and SJK."),
  soundOn: ml("Bunyi: Buka", "声音：开", "Sound: On"),
  soundOff: ml("Bunyi: Tutup", "声音：关", "Sound: Off"),
  tabMoney: ml("Kenal & Bina", "认识与组合", "Recognise & Build"),
  tabSpend: ml("Bayar", "付款", "Pay"),
  tabManage: ml("Urus Wang", "管理金钱", "Manage Money"),
  chooseActivity: ml("Pilih alat", "选择工具", "Choose a tool"),
  grade: ml("Tahun", "年级", "Year"),
  activity: ml("Alat", "工具", "Tool"),
  teacherMode: ml("Tetapan guru", "老师设置", "Teacher settings"),
  resetTool: ml("Tetapkan semula alat", "重置工具", "Reset tool"),
  tryIt: ml("Mari cuba!", "动手试试！", "Try it!"),
  stepObserve: ml("Perhatikan", "仔细观察", "Observe"),
  stepTry: ml("Gerakkan & cuba", "移动并尝试", "Move & try"),
  stepCheck: ml("Lihat hasil", "观察结果", "See the result"),
  customSettings: ml("Tetapkan nilai demonstrasi", "设置课堂示范金额", "Set a demonstration amount"),
  customHelp: ml("Masukkan jumlah yang hendak digunakan dalam alat semasa.", "输入要在当前工具使用的金额。", "Enter the amount to use in the current tool."),
  ringgit: ml("Ringgit", "令吉", "Ringgit"),
  sen: ml("Sen", "仙", "Sen"),
  cancel: ml("Batal", "取消", "Cancel"),
  useSettings: ml("Gunakan tetapan", "使用设置", "Use settings"),
  listenReady: ml("Dengar hasil", "聆听结果", "Hear result"),
  listenWaiting: ml("Selesaikan dahulu", "完成后聆听", "Complete first"),
};

const ACTIVITIES = {
  identify: { label: ml("Teroka wang Malaysia", "探索马来西亚钱币", "Explore Malaysian money"), scope: ml("Tahun 2 · 4.1 Wang kertas dan duit syiling", "二年级 · 4.1 纸币与硬币", "Year 2 · 4.1 Banknotes and coins"), tip: ml("Pilih wang untuk melihat nilai dan hubungannya.", "选择钱币，观察面额和币值关系。", "Choose money to inspect its value and relationship.") },
  compose: { label: ml("Bina nilai wang", "组合钱币金额", "Build a money value"), scope: ml("Tahun 2–3 · Gabungan wang", "二至三年级 · 钱币组合", "Years 2–3 · Money combinations"), tip: ml("Tambah atau keluarkan wang; jumlah berubah serta-merta.", "加入或移除钱币，总额会即时变化。", "Add or remove money; the total changes instantly.") },
  equivalent: { label: ml("Bina nilai setara", "组合等值金额", "Build an equivalent value"), scope: ml("Tahun 2–3 · Nilai yang sama", "二至三年级 · 相同币值", "Years 2–3 · Equal values"), tip: ml("Bina nilai sasaran tanpa menggunakan wang yang sama nilainya.", "不用与目标相同面额的钱币，组合出等值金额。", "Build the target without using the matching denomination.") },
  foreign: { label: ml("Banding mata wang ASEAN", "比较东盟货币", "Compare ASEAN currencies"), scope: ml("Tahun 3 · 4.6 Mata wang asing", "三年级 · 4.6 外国货币", "Year 3 · 4.6 Foreign currency"), tip: ml("Masukkan kadar semasa yang dibawa oleh guru.", "输入老师提供的当日汇率。", "Enter the current rate supplied by the teacher.") },
  pay: { label: ml("Kaunter bayar tepat", "准确付款柜台", "Exact-payment counter"), scope: ml("Tahun 2–3 · Situasi harian", "二至三年级 · 日常付款情境", "Years 2–3 · Everyday payment"), tip: ml("Gunakan wang Malaysia untuk membayar harga pada label.", "使用马来西亚钱币支付价格牌上的金额。", "Use Malaysian money to pay the labelled price.") },
  needWant: { label: ml("Papan keperluan & kehendak", "需要与想要分类板", "Needs & wants board"), scope: ml("Tahun 2–3 · Simpanan dan perbelanjaan", "二至三年级 · 储蓄与消费", "Years 2–3 · Saving and spending"), tip: ml("Seret kad, atau pilih kad kemudian pilih ruang.", "拖动卡片，或先选卡片再选择区域。", "Drag a card, or select it and then choose a space.") },
  savingPlan: { label: ml("Perancang simpanan", "储蓄规划器", "Savings planner"), scope: ml("Tahun 2–3 · Simpanan terancang", "二至三年级 · 有计划地储蓄", "Years 2–3 · Planned saving"), tip: ml("Laraskan sasaran dan simpanan mingguan.", "调整目标和每周储蓄额。", "Adjust the goal and weekly saving amount.") },
  budget: { label: ml("Papan agihan wang", "金钱分配板", "Money allocation board"), scope: ml("Tahun 2–3 · Pengurusan kewangan", "二至三年级 · 金钱管理", "Years 2–3 · Money management"), tip: ml("Agihkan wang kepada keperluan, simpanan dan kehendak.", "把钱分配给需要、储蓄和想要。", "Allocate money to needs, savings and wants.") },
};

const GRADE_MODES = {
  2: { money: ["identify", "compose", "equivalent"], spend: ["pay"], manage: ["needWant", "savingPlan", "budget"] },
  3: { money: ["compose", "equivalent", "foreign"], spend: ["pay"], manage: ["needWant", "savingPlan", "budget"] },
};
const MODE_LABELS = { money: I18N.tabMoney, spend: I18N.tabSpend, manage: I18N.tabManage };

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
  grade: document.querySelector("#gradeSelect"), activity: document.querySelector("#activitySelect"), sideTitle: document.querySelector("#sideTitle"),
  scope: document.querySelector("#scopeNote"), tip: document.querySelector("#tipBox span:last-child"), title: document.querySelector("#activityTitle"),
  badge: document.querySelector("#gradeBadge"), challenge: document.querySelector("#challengePanel"), stage: document.querySelector("#visualStage"),
  controls: document.querySelector("#controlArea"), summary: document.querySelector("#liveSummary"), listen: document.querySelector("#listenButton"),
  sound: document.querySelector("#soundToggle"), reset: document.querySelector("#resetToolButton"), teacher: document.querySelector("#teacherButton"),
  dialog: document.querySelector("#teacherDialog"), ringgit: document.querySelector("#teacherRinggit"), sen: document.querySelector("#teacherSen"),
  preview: document.querySelector("#teacherPreview"), teacherError: document.querySelector("#teacherError"), useSettings: document.querySelector("#useTeacherSettings"),
};

const state = { lang: "ms", grade: 2, mode: "money", activity: "identify", sound: true, teacherAmount: 5650, tool: null, narration: "" };
let audioContext;
const tr = key => I18N[key][state.lang];
const loc = value => typeof value === "string" ? value : value[state.lang];
const money = sen => `RM${(Number(sen) / 100).toFixed(2)}`;
const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || 0));
const gradeName = n => state.lang === "ms" ? `Tahun ${n}` : state.lang === "zh" ? `${n}年级` : `Year ${n}`;

function beep(type = "tap") {
  if (!state.sound) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  const notes = type === "done" ? [[523, .07], [659, .07], [784, .13]] : type === "coin" ? [[1100, .04], [780, .06]] : [[500, .035]];
  notes.forEach(([frequency, duration], index) => {
    const osc = audioContext.createOscillator(); const gain = audioContext.createGain(); const start = audioContext.currentTime + index * .075;
    osc.type = type === "coin" ? "triangle" : "sine"; osc.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, start); gain.gain.exponentialRampToValueAtTime(.1, start + .008); gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(start); osc.stop(start + duration + .02);
  });
}

function speak(text) {
  if (!state.sound || !text || !window.speechSynthesis) return;
  speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.lang === "ms" ? "ms-MY" : state.lang === "zh" ? "zh-CN" : "en-GB"; utterance.rate = .86; utterance.pitch = 1.05;
  speechSynthesis.speak(utterance);
}

function setNarration(text = "") {
  state.narration = text; els.listen.disabled = !text;
  els.listen.querySelector("span").textContent = tr(text ? "listenReady" : "listenWaiting");
  els.listen.title = text ? tr("listenReady") : tr("listenWaiting");
}

function applyStaticLanguage() {
  document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { if (I18N[el.dataset.i18n]) el.textContent = tr(el.dataset.i18n); });
  els.sound.querySelector("span:last-child").textContent = tr(state.sound ? "soundOn" : "soundOff");
  document.querySelectorAll("[data-lang]").forEach(button => button.classList.toggle("active", button.dataset.lang === state.lang));
  [...els.grade.options].forEach((option, index) => { option.textContent = gradeName(index + 2); }); setNarration(state.narration);
}

function refreshNavigation({ keepActivity = false } = {}) {
  const modes = GRADE_MODES[state.grade];
  if (!modes[state.mode]?.length) state.mode = Object.keys(modes).find(mode => modes[mode].length);
  document.querySelectorAll("[data-mode]").forEach(button => { button.disabled = !modes[button.dataset.mode]?.length; button.classList.toggle("active", button.dataset.mode === state.mode); });
  const list = modes[state.mode]; if (!keepActivity || !list.includes(state.activity)) state.activity = list[0];
  els.activity.replaceChildren(...list.map(id => Object.assign(document.createElement("option"), { value: id, textContent: loc(ACTIVITIES[id].label) })));
  els.activity.value = state.activity; els.sideTitle.textContent = loc(MODE_LABELS[state.mode]); els.scope.textContent = loc(ACTIVITIES[state.activity].scope);
  els.tip.textContent = loc(ACTIVITIES[state.activity].tip); els.title.textContent = loc(ACTIVITIES[state.activity].label);
  els.badge.textContent = state.lang === "zh" ? `${state.grade}年级` : `${state.lang === "ms" ? "T" : "Y"}${state.grade}`;
}

function setChallenge(title, sub = "") { els.challenge.innerHTML = `<div><div class="challenge-kicker">${tr("tryIt")}</div><div class="challenge-text">${title}</div>${sub ? `<div class="challenge-sub">${sub}</div>` : ""}</div>`; }
function setSummary(text, tone = "neutral") { els.summary.className = `feedback ${tone}`; els.summary.innerHTML = text; }
function moneyPicture(item, extra = "") { return `<span class="money-picture ${item.kind} ${extra}"><img src="${item.image}" alt="${item.label}" draggable="false"><span class="contoh">CONTOH</span></span>`; }
function moneyBank(items = MONEY) { return `<div class="money-bank">${items.map(item => `<button type="button" class="money-card ${item.kind === "coin" ? "coin-card" : ""}" data-money="${item.id}">${moneyPicture(item)}<span class="money-label">${item.label}</span></button>`).join("")}</div>`; }
function slider(id, label, min, max, step, value) { return `<label class="range-control" for="${id}"><span>${label}</span><strong>${value}</strong><input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${value}"></label>`; }
function metric(label, value, cls = "") { return `<div class="metric ${cls}"><span>${label}</span><strong>${value}</strong></div>`; }

function defaults(activity) {
  const amount = state.teacherAmount;
  return {
    identify: { selected: "rm1", interacted: false }, compose: { target: amount, wallet: [] }, equivalent: { target: state.grade === 2 ? 1000 : 5000, wallet: [] },
    pay: { target: amount, wallet: [] }, foreign: { rm: 10, currency: "sgd", rate: .31, interacted: false }, needWant: { places: {}, selected: null, interacted: false },
    savingPlan: { goal: 100, saved: 20, weekly: 5, interacted: false }, budget: { income: state.grade === 2 ? 100 : 200, needs: 50, saving: 20, wants: 20, interacted: false },
  }[activity];
}

function changeTool(mutator, sound = "tap") { mutator(state.tool); beep(sound); renderTool(); }

function renderIdentify() {
  const item = MONEY.find(x => x.id === state.tool.selected);
  setChallenge(loc(ml("Pilih satu wang untuk diperhatikan", "选择一种钱币仔细观察", "Choose one piece of money to inspect")), loc(ml("Bandingkan nombor, unit, warna dan saiz.", "比较数字、单位、颜色和大小。", "Compare the number, unit, colour and size.")));
  const relation = item.value >= 100 ? `${item.label} = ${item.value / 100} ${loc(ml("ringgit", "令吉", "ringgit"))}` : `${item.label} = ${item.value} ${loc(ml("sen", "仙", "sen"))}`;
  els.stage.innerHTML = `<div class="explorer-layout"><div class="money-hero">${moneyPicture(item)}<span class="source-note">${loc(ml("Imej: Bank Negara Malaysia", "图片：马来西亚国家银行", "Images: Bank Negara Malaysia"))}</span></div><div class="inspect-card"><span>${loc(ml("Nilai", "面额", "Value"))}</span><strong>${item.label}</strong><p>${relation}</p></div></div>`;
  els.controls.innerHTML = moneyBank();
  els.controls.querySelectorAll("[data-money]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.selected = button.dataset.money; t.interacted = true; }, "coin")));
  setSummary(loc(ml("Pilih wang lain untuk membuat perbandingan.", "选择其他钱币进行比较。", "Choose another piece of money to compare.")));
  if (state.tool.interacted) setNarration(loc(ml(`Wang yang dipilih ialah ${item.label}. ${relation}.`, `选择的是 ${item.label}。${relation}。`, `The selected money is ${item.label}. ${relation}.`)));
}

function walletTotal(wallet) { return wallet.reduce((sum, id) => sum + MONEY.find(x => x.id === id).value, 0); }
function walletExpression(wallet) { return wallet.map(id => MONEY.find(x => x.id === id).label).join(" + "); }

function renderMoneyBuilder(kind) {
  const t = state.tool; const total = walletTotal(t.wallet); const diff = t.target - total; const available = kind === "equivalent" ? MONEY.filter(item => item.value !== t.target) : MONEY;
  const product = t.target > 5000 ? ["🎒", ml("Beg sekolah", "书包", "School bag")] : t.target > 1500 ? ["🧴", ml("Botol minuman", "水壶", "Water bottle")] : ["📚", ml("Buku cerita", "故事书", "Storybook")];
  const title = kind === "pay" ? `${loc(product[1])} · ${money(t.target)}` : `${loc(ml("Jumlah sasaran", "目标金额", "Target amount"))}: ${money(t.target)}`;
  setChallenge(title, kind === "equivalent" ? loc(ml("Gunakan gabungan wang yang berlainan.", "使用不同的钱币组合。", "Use a different combination of money.")) : loc(ml("Klik wang untuk menambah; klik wang dalam dulang untuk mengeluarkan.", "点击钱币加入；点击托盘中的钱币移除。", "Tap money to add it; tap money in the tray to remove it.")));
  const tray = t.wallet.length ? t.wallet.map((id, index) => { const item = MONEY.find(x => x.id === id); return `<button type="button" class="wallet-item" data-remove="${index}" aria-label="${item.label}">${moneyPicture(item)}</button>`; }).join("") : `<span class="wallet-empty">${loc(ml("Dulang masih kosong", "托盘还是空的", "The tray is empty"))}</span>`;
  const productCard = kind === "pay" ? `<div class="product-scene"><span class="product-art">${product[0]}</span><div><strong>${loc(product[1])}</strong><span class="price-tag">${money(t.target)}</span></div></div>` : "";
  els.stage.innerHTML = `<div class="money-builder">${productCard}<div class="wallet-total"><span>${loc(ml("Jumlah di dalam dulang", "托盘里的总额", "Total in tray"))}</span><strong>${money(total)}</strong></div><div class="wallet-tray">${tray}</div>${moneyBank(available)}</div>`;
  els.controls.innerHTML = `<button type="button" class="secondary-button compact" id="clearWallet">↻ ${loc(ml("Kosongkan dulang", "清空托盘", "Clear tray"))}</button>`;
  els.stage.querySelectorAll("[data-money]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.wallet.push(button.dataset.money); }, "coin")));
  els.stage.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => changeTool(x => { x.wallet.splice(Number(button.dataset.remove), 1); })));
  document.querySelector("#clearWallet").addEventListener("click", () => changeTool(x => { x.wallet = []; }));
  if (diff === 0) setSummary(`✨ ${loc(ml("Jumlah tepat. Cuba bina dengan cara lain.", "金额刚刚好。再尝试另一种组合。", "Exact amount. Try another combination."))}`, "success");
  else if (diff > 0) setSummary(`${loc(ml("Masih perlu", "还需要", "Still needed"))} <strong>${money(diff)}</strong>`);
  else setSummary(`${loc(ml("Melebihi sasaran sebanyak", "超过目标", "Over the target by"))} <strong>${money(-diff)}</strong>`, "attention");
  if (t.wallet.length) {
    const process = `${walletExpression(t.wallet)} = ${money(total)}`;
    const result = diff === 0 ? ml("Jumlah ini sama dengan sasaran.", "这个总额等于目标金额。", "This total matches the target.") : diff > 0 ? ml(`Masih perlu ${money(diff)}.`, `还需要 ${money(diff)}。`, `${money(diff)} is still needed.`) : ml(`Jumlah ini lebih ${money(-diff)}.`, `这个总额多了 ${money(-diff)}。`, `This total is ${money(-diff)} over.`);
    setNarration(`${process}. ${loc(result)}`);
  }
}

function renderForeign() {
  const data = { sgd: ["🇸🇬", "SGD", .31], thb: ["🇹🇭", "THB", 7.6], idr: ["🇮🇩", "IDR", 3750] }; const [flag, code] = data[state.tool.currency]; const converted = state.tool.rm * state.tool.rate;
  setChallenge(loc(ml("Bandingkan RM1 dengan mata wang ASEAN", "比较 RM1 与东盟货币", "Compare RM1 with ASEAN currencies")), loc(ml("Guru masukkan kadar semasa sebelum aktiviti.", "活动前由老师输入当日汇率。", "The teacher enters the current rate before the activity.")));
  els.stage.innerHTML = `<div class="converter"><div class="currency-card"><span>🇲🇾</span><strong>${money(state.tool.rm * 100)}</strong><small>MYR</small></div><div class="relation-arrow">⇄</div><div class="currency-card accent"><span>${flag}</span><strong>${converted.toLocaleString(undefined, { maximumFractionDigits: code === "IDR" ? 0 : 2 })}</strong><small>${code}</small></div></div>`;
  els.controls.innerHTML = `<div class="field-grid foreign-fields"><label>${loc(ml("Jumlah MYR", "马币金额", "MYR amount"))}<input id="foreignAmount" type="number" min="1" max="100" value="${state.tool.rm}"></label><label>${loc(ml(`Kadar: 1 MYR = ? ${code}`, `汇率：1 MYR = ? ${code}`, `Rate: 1 MYR = ? ${code}`))}<input id="foreignRate" type="number" min="0.0001" step="0.01" value="${state.tool.rate}"></label></div><div class="segmented">${Object.entries(data).map(([id, value]) => `<button type="button" data-currency="${id}" class="${id === state.tool.currency ? "active" : ""}">${value[0]} ${value[1]}</button>`).join("")}</div>`;
  document.querySelector("#foreignAmount").addEventListener("change", event => changeTool(t => { t.rm = clamp(event.target.value, 1, 100); t.interacted = true; }));
  document.querySelector("#foreignRate").addEventListener("change", event => changeTool(t => { t.rate = Math.max(.0001, Number(event.target.value) || .0001); t.interacted = true; }));
  els.controls.querySelectorAll("[data-currency]").forEach(button => button.addEventListener("click", () => changeTool(t => { t.currency = button.dataset.currency; t.rate = data[t.currency][2]; t.interacted = true; })));
  setSummary(`${loc(ml("Pengiraan", "计算过程", "Calculation"))}: ${state.tool.rm} × ${state.tool.rate} = ${converted.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${code}`);
  if (state.tool.interacted) setNarration(loc(ml(`${state.tool.rm} ringgit didarab dengan kadar ${state.tool.rate}, sama dengan ${converted.toFixed(2)} ${code}.`, `${state.tool.rm} 令吉乘以汇率 ${state.tool.rate}，等于 ${converted.toFixed(2)} ${code}。`, `${state.tool.rm} ringgit multiplied by the rate ${state.tool.rate} equals ${converted.toFixed(2)} ${code}.`)));
}

const BOARD_ITEMS = [
  ["rice", "🍚", ml("Makanan", "食物", "Food")], ["book", "📒", ml("Buku sekolah", "课本", "School book")], ["water", "💧", ml("Air minuman", "饮用水", "Drinking water")],
  ["game", "🎮", ml("Permainan", "电子游戏", "Game")], ["toy", "🧸", ml("Mainan baharu", "新玩具", "New toy")], ["shoes", "👟", ml("Kasut", "鞋子", "Shoes")],
];

function moveBoardItem(id, place) { changeTool(t => { t.places[id] = place; t.selected = null; t.interacted = true; }, "coin"); }

function renderNeedWant() {
  setChallenge(loc(ml("Seret kad ke ruang pilihan", "把卡片拖到所选区域", "Drag cards into a chosen space")), loc(ml("Pada skrin sentuh: pilih kad, kemudian tekan Keperluan atau Kehendak.", "触控屏：先选卡片，再点击“需要”或“想要”。", "On a touch screen: select a card, then tap Needs or Wants.")));
  const groups = ["pool", "need", "want"].map(group => {
    const title = group === "pool" ? ml("Belum diletakkan", "尚未分类", "Not placed") : group === "need" ? ml("Keperluan", "需要", "Needs") : ml("Kehendak", "想要", "Wants");
    const cards = BOARD_ITEMS.filter(([id]) => (state.tool.places[id] || "pool") === group).map(([id, icon, label]) => `<button type="button" draggable="true" class="sort-item-card ${state.tool.selected === id ? "selected" : ""}" data-item="${id}"><span>${icon}</span><strong>${loc(label)}</strong><i>⠿</i></button>`).join("");
    return `<div class="sort-bin ${group}" data-bin="${group}" role="button" tabindex="0"><h3>${loc(title)}</h3><div class="sort-items">${cards || `<small>${loc(ml("Lepaskan kad di sini", "把卡片放在这里", "Drop a card here"))}</small>`}</div></div>`;
  }).join("");
  els.stage.innerHTML = `<div class="sort-board">${groups}</div>`;
  els.controls.innerHTML = `<div class="board-actions"><button type="button" class="secondary-button compact" id="clearBoard">↻ ${loc(ml("Kembalikan semua kad", "放回所有卡片", "Return all cards"))}</button></div>`;
  els.stage.querySelectorAll("[data-item]").forEach(card => {
    card.addEventListener("click", event => { event.stopPropagation(); changeTool(t => { t.selected = t.selected === card.dataset.item ? null : card.dataset.item; }); });
    card.addEventListener("dragstart", event => { event.dataTransfer.setData("text/plain", card.dataset.item); event.dataTransfer.effectAllowed = "move"; card.classList.add("dragging"); });
    card.addEventListener("dragend", () => card.classList.remove("dragging"));
  });
  els.stage.querySelectorAll("[data-bin]").forEach(bin => {
    bin.addEventListener("dragover", event => { event.preventDefault(); bin.classList.add("is-over"); });
    bin.addEventListener("dragleave", () => bin.classList.remove("is-over"));
    bin.addEventListener("drop", event => { event.preventDefault(); bin.classList.remove("is-over"); const id = event.dataTransfer.getData("text/plain"); if (id) moveBoardItem(id, bin.dataset.bin); });
    bin.addEventListener("click", () => { if (state.tool.selected) moveBoardItem(state.tool.selected, bin.dataset.bin); });
    bin.addEventListener("keydown", event => { if ((event.key === "Enter" || event.key === " ") && state.tool.selected) { event.preventDefault(); moveBoardItem(state.tool.selected, bin.dataset.bin); } });
  });
  document.querySelector("#clearBoard").addEventListener("click", () => changeTool(t => { t.places = {}; t.selected = null; t.interacted = false; }));
  const placed = BOARD_ITEMS.filter(([id]) => (state.tool.places[id] || "pool") !== "pool").length;
  const selectedName = BOARD_ITEMS.find(([id]) => id === state.tool.selected)?.[2];
  setSummary(selectedName ? `${loc(ml("Dipilih", "已选择", "Selected"))}: <strong>${loc(selectedName)}</strong> · ${loc(ml("Sekarang pilih satu ruang.", "现在选择一个区域。", "Now choose a space."))}` : `${placed}/6 ${loc(ml("kad telah diletakkan.", "张卡片已分类。", "cards placed."))}`);
  if (state.tool.interacted && placed) {
    const names = place => BOARD_ITEMS.filter(([id]) => state.tool.places[id] === place).map(([, , label]) => loc(label)).join(", ") || loc(ml("tiada", "没有", "none"));
    setNarration(loc(ml(`Kamu meletakkan ${names("need")} sebagai keperluan, dan ${names("want")} sebagai kehendak. Bincangkan sebab bagi setiap pilihan.`, `你把${names("need")}放在“需要”，把${names("want")}放在“想要”。请说明每项选择的原因。`, `You placed ${names("need")} under needs, and ${names("want")} under wants. Discuss the reason for each choice.`)));
  }
}

function renderSavingPlan() {
  const t = state.tool; const remaining = Math.max(0, t.goal - t.saved); const weeks = t.weekly ? Math.ceil(remaining / t.weekly) : 0; const pct = Math.min(100, t.saved / t.goal * 100);
  setChallenge(loc(ml("Rancang simpanan untuk basikal", "规划脚踏车储蓄", "Plan savings for a bicycle")), loc(ml("Ubah nilai dan lihat cara tempoh dikira.", "调整数值，观察所需时间的计算过程。", "Change the values and see how the time is calculated.")));
  els.stage.innerHTML = `<div class="goal-scene"><span>🚲</span><div class="goal-ring" style="--progress:${pct * 3.6}deg"><strong>${Math.round(pct)}%</strong></div><div class="goal-stats">${metric(loc(ml("Sasaran", "目标", "Goal")), money(t.goal * 100))}${metric(loc(ml("Sudah disimpan", "已有储蓄", "Already saved")), money(t.saved * 100))}${metric(loc(ml("Minggu diperlukan", "所需周数", "Weeks needed")), weeks)}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("saveGoal", loc(ml("Harga sasaran (RM)", "目标价格（RM）", "Goal price (RM)")), 20, 500, 5, t.goal)}${slider("saveCurrent", loc(ml("Simpanan semasa (RM)", "目前储蓄（RM）", "Current savings (RM)")), 0, t.goal, 5, t.saved)}${slider("saveWeekly", loc(ml("Simpan setiap minggu (RM)", "每周储蓄（RM）", "Save each week (RM)")), 1, 50, 1, t.weekly)}</div>`;
  [["saveGoal", "goal"], ["saveCurrent", "saved"], ["saveWeekly", "weekly"]].forEach(([id, key]) => document.querySelector(`#${id}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.saved = Math.min(x.saved, x.goal); x.interacted = true; })));
  setSummary(remaining ? `${money(t.goal * 100)} − ${money(t.saved * 100)} = <strong>${money(remaining * 100)}</strong>; ${money(remaining * 100)} ÷ ${money(t.weekly * 100)} = <strong>${weeks}</strong> ${loc(ml("minggu", "周", "weeks"))}` : `🎉 ${loc(ml("Matlamat sudah dicapai.", "目标已经达成。", "The goal has been reached."))}`, remaining ? "neutral" : "success");
  if (t.interacted) setNarration(loc(ml(`Sasaran ${money(t.goal * 100)} tolak simpanan semasa ${money(t.saved * 100)} bersamaan baki ${money(remaining * 100)}. Baki dibahagi ${money(t.weekly * 100)} seminggu, jadi perlu ${weeks} minggu.`, `目标 ${money(t.goal * 100)} 减去目前储蓄 ${money(t.saved * 100)}，还差 ${money(remaining * 100)}。每周储蓄 ${money(t.weekly * 100)}，所以需要 ${weeks} 周。`, `The goal ${money(t.goal * 100)} minus current savings ${money(t.saved * 100)} leaves ${money(remaining * 100)}. At ${money(t.weekly * 100)} per week, it takes ${weeks} weeks.`)));
}

function renderBudget() {
  const t = state.tool; const allocated = t.needs + t.saving + t.wants; const balance = t.income - allocated;
  setChallenge(loc(ml("Agihkan wang yang diterima", "分配收到的钱", "Allocate the money received")), loc(ml("Gerakkan setiap peluncur dan perhatikan baki.", "移动每个滑杆并观察余额。", "Move each slider and watch the balance.")));
  const cats = [["needs", "🏠", ml("Keperluan", "需要", "Needs")], ["saving", "🐷", ml("Simpanan", "储蓄", "Savings")], ["wants", "🎈", ml("Kehendak", "想要", "Wants")]];
  els.stage.innerHTML = `<div class="budget-board"><div class="budget-income">${loc(ml("Wang diterima", "收到的钱", "Money received"))}<strong>${money(t.income * 100)}</strong></div><div class="budget-pots three">${cats.map(([key, icon, label]) => `<div class="budget-pot"><span>${icon}</span><strong>${loc(label)}</strong><b>${money(t[key] * 100)}</b><i style="height:${Math.min(100, t[key] / t.income * 180)}%"></i></div>`).join("")}</div></div>`;
  els.controls.innerHTML = `<div class="range-grid">${slider("budgetIncome", loc(ml("Wang diterima (RM)", "收到的钱（RM）", "Money received (RM)")), 20, 1000, 10, t.income)}${cats.map(([key,, label]) => slider(`budget-${key}`, loc(label), 0, 500, 5, t[key])).join("")}</div>`;
  document.querySelector("#budgetIncome").addEventListener("change", event => changeTool(x => { x.income = Number(event.target.value); x.interacted = true; }));
  cats.forEach(([key]) => document.querySelector(`#budget-${key}`).addEventListener("change", event => changeTool(x => { x[key] = Number(event.target.value); x.interacted = true; })));
  setSummary(balance >= 0 ? `${money(t.income * 100)} − ${money(t.needs * 100)} − ${money(t.saving * 100)} − ${money(t.wants * 100)} = <strong>${money(balance * 100)}</strong>` : `${loc(ml("Melebihi jumlah sebanyak", "超出总额", "Over the total by"))} <strong>${money(-balance * 100)}</strong>`, balance >= 0 ? "success" : "attention");
  if (t.interacted) setNarration(loc(ml(`Wang diterima ${money(t.income * 100)}. Tolak keperluan ${money(t.needs * 100)}, simpanan ${money(t.saving * 100)}, dan kehendak ${money(t.wants * 100)}. Baki ialah ${money(balance * 100)}.`, `收到 ${money(t.income * 100)}。减去需要 ${money(t.needs * 100)}、储蓄 ${money(t.saving * 100)}和想要 ${money(t.wants * 100)}，余额是 ${money(balance * 100)}。`, `Start with ${money(t.income * 100)}. Subtract needs ${money(t.needs * 100)}, savings ${money(t.saving * 100)}, and wants ${money(t.wants * 100)}. The balance is ${money(balance * 100)}.`)));
}

function renderTool() {
  els.stage.replaceChildren(); els.controls.replaceChildren(); setNarration();
  const renderers = { identify: renderIdentify, compose: () => renderMoneyBuilder("compose"), equivalent: () => renderMoneyBuilder("equivalent"), foreign: renderForeign, pay: () => renderMoneyBuilder("pay"), needWant: renderNeedWant, savingPlan: renderSavingPlan, budget: renderBudget };
  renderers[state.activity]();
}

function startTool() { applyStaticLanguage(); refreshNavigation({ keepActivity: true }); state.tool ||= defaults(state.activity); renderTool(); }

function updateTeacherPreview() {
  const amount = Math.round(clamp(els.ringgit.value, 0, 10000) * 100 + clamp(els.sen.value, 0, 95)); els.preview.textContent = money(amount); els.teacherError.textContent = "";
}

function applyTeacherSettings() {
  const amount = Math.round(clamp(els.ringgit.value, 0, 10000) * 100 + clamp(els.sen.value, 0, 95)); const max = state.grade === 2 ? 10000 : 1000000;
  if (amount < 5 || amount > max || amount % 5) { els.teacherError.textContent = loc(state.grade === 2 ? ml("Tahun 2 menggunakan jumlah 5 sen hingga RM100, dalam gandaan 5 sen.", "二年级使用 5 仙至 RM100，仙数须为 5 的倍数。", "Year 2 uses 5 sen to RM100 in multiples of 5 sen.") : ml("Tahun 3 menggunakan jumlah hingga RM10 000, dalam gandaan 5 sen.", "三年级使用不超过 RM10,000 的金额，仙数须为 5 的倍数。", "Year 3 uses amounts up to RM10,000 in multiples of 5 sen.")); return; }
  state.teacherAmount = amount; els.dialog.close(); state.tool = defaults(state.activity); beep("done"); renderTool();
}

document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => { state.lang = button.dataset.lang; beep(); applyStaticLanguage(); refreshNavigation({ keepActivity: true }); renderTool(); }));
document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => { if (button.disabled) return; state.mode = button.dataset.mode; state.activity = GRADE_MODES[state.grade][state.mode][0]; state.tool = null; beep(); startTool(); }));
els.grade.addEventListener("change", () => { state.grade = Number(els.grade.value); state.tool = null; beep(); refreshNavigation(); startTool(); });
els.activity.addEventListener("change", () => { state.activity = els.activity.value; state.tool = null; beep(); refreshNavigation({ keepActivity: true }); startTool(); });
els.reset.addEventListener("click", () => { state.tool = defaults(state.activity); beep(); renderTool(); });
els.listen.addEventListener("click", () => speak(state.narration));
els.sound.addEventListener("click", () => { state.sound = !state.sound; els.sound.setAttribute("aria-pressed", String(state.sound)); applyStaticLanguage(); if (state.sound) beep("done"); });
els.teacher.addEventListener("click", () => { els.ringgit.value = Math.floor(state.teacherAmount / 100); els.sen.value = state.teacherAmount % 100; updateTeacherPreview(); els.dialog.showModal(); beep(); });
[els.ringgit, els.sen].forEach(input => input.addEventListener("input", updateTeacherPreview)); els.useSettings.addEventListener("click", applyTeacherSettings);

applyStaticLanguage(); refreshNavigation(); state.tool = defaults(state.activity); renderTool();
