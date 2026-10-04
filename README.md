# SmartMoneyTool

An interactive Malaysian primary-school money toolkit for Years 2–3, available in Bahasa Melayu, Chinese and English. The scope follows the KSSR money units used by SK and SJK and favours concrete manipulation over broad but shallow topic coverage.

## Learning progression

- **Year 2:** recognise Malaysian notes and coins up to RM100, determine and compose values, pay exact amounts, and explore basic saving and spending decisions.
- **Year 3:** compose money values, pay in daily situations, compare ASEAN currencies using a teacher-supplied current rate, and explore needs, wants and planned saving.

Formal addition, subtraction, multiplication and division practice is intentionally reserved for the separate Block Operations Tool.

## Features

- Official current-series Malaysian banknote and coin images
- Click-to-compose money tray with a live total and real Malaysian currency images
- A real drag-and-drop needs-and-wants board with an accessible tap-card-then-tap-space alternative
- Savings and money-allocation tools with visible calculations
- Grade-specific tools aligned to the Year 2 and Year 3 KSSR money standards used by SK and SJK
- Teacher-controlled demonstration amounts
- Bahasa Melayu, Chinese and English interface
- Spoken calculation process and result only after the learner has interacted
- Responsive desktop and mobile layout

## Currency image sources

Currency images are sourced from Bank Negara Malaysia and are displayed as electronic educational references without changing the original currency design.

- [Current Banknote Series](https://www.bnm.gov.my/currency/banknotes)
- [Current Coin Series](https://www.bnm.gov.my/currency/coins)
- [Guidelines on Reproduction of Malaysian Currency Image](https://www.bnm.gov.my/documents/20124/39730/en_reproduction_guide.pdf)

The interface adds a visible `CONTOH` web overlay and credits Bank Negara Malaysia. Images remain single-sided and are not presented at physical print size.

## Curriculum references

- [KPM-linked Year 2 SK, SJKC and SJKT digital textbooks](https://sites.google.com/moe-dl.edu.my/ppd-batu-pahat-sains-matematik/buku-teks-digital-bidang-sains-matematik/buku-teks-sekolah-rendah/matematik-tahun-2)
- [KSSR Mathematics Year 2: Money](https://c.zoom-a.com/cache/dbp/refpub/1668665030212/DSKP-Th2-MM.pdf)
- [KSSR Mathematics Year 3: Money](https://c.zoom-a.com/cache/dbp/refpub/1668664885340/DSKP-Th3-MM.pdf)

## Run locally

Open `index.html` in a modern browser. No build step is required.

## Verification

`tests/smoke.mjs` checks the eight retained tools, currency assets, exact RM56.50 composition, result-only narration, needs-and-wants placement, teacher settings, language switching and mobile overflow through the Chrome DevTools Protocol.
