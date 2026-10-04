# SmartMoneyTool

An interactive Malaysian primary-school money toolkit for Years 2–6, available in Bahasa Melayu, Chinese and English. The scope follows the KSSR money units used by SK and SJK and favours concrete manipulation over broad but shallow topic coverage.

## Learning progression

- **Year 2:** recognise Malaysian notes and coins up to RM100, determine and compose values, pay exact amounts, and explore basic saving and spending decisions.
- **Year 3:** compose money values, pay in daily situations, compare ASEAN currencies using a teacher-supplied current rate, and explore needs, wants and planned saving.
- **Year 4:** compare foreign currencies, keep a running income-and-expense record, and move purchases across a decision board while observing the effect on the balance.
- **Year 5:** build basic money operations and run values through a two-step combined-operation machine.
- **Year 6:** model cost, sales, profit or loss; construct a live discount-and-tax receipt; and compare assets with liabilities.

## Features

- Official current-series Malaysian banknote and coin images
- Click-to-compose money tray with a live total and real Malaysian currency images
- A real drag-and-drop needs-and-wants board that draws six balanced random cards from a bank of twenty situations, with an accessible tap-card-then-tap-space alternative
- Savings and money-allocation tools with visible calculations
- Grade-specific tools aligned to the Year 2–6 KSSR money standards used by SK and SJK
- Teacher-controlled demonstration amounts
- Bahasa Melayu, Chinese and English interface
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
- [KPM-linked Year 4 SK, SJKC and SJKT digital textbooks](https://sites.google.com/moe-dl.edu.my/ppd-batu-pahat-sains-matematik/buku-teks-digital-bidang-sains-matematik/buku-teks-sekolah-rendah/matematik-tahun-4)
- [KSSR Mathematics Year 4](https://www.tcer.my/wp-content/uploads/2021/01/KSSR-MATEMATIK-TAHUN-4-DIJAJARKAN-NEW.pdf)
- [KSSR Mathematics Year 5](https://asiemodel.net/wp-content/uploads/2022/08/009_DSKP_KSSR_Semakan_2017_Matematik_Thn5-print.pdf)
- [KSSR Mathematics Year 6](https://asiemodel.net/wp-content/uploads/2022/08/3.-DSKP-MATEMATIK-TAHUN-6_isbn.pdf)

## Run locally

Open `index.html` in a modern browser. No build step is required.

## Verification

`tests/smoke.mjs` checks all fourteen distinct tools, currency assets, exact RM56.50 composition, random drag-and-drop boards, upper-year simulations, teacher settings, language switching and mobile overflow through the Chrome DevTools Protocol.
