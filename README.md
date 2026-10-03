# dinobooks.kz

Landing page for Dinobooks: English books for international schools and children in Kazakhstan.

Static site built with [Astro](https://astro.build). No backend, no database, no environment variables.

| URL    | Language |
| ------ | -------- |
| `/`    | English  |
| `/kk/` | Kazakh   |
| `/ru/` | Russian  |

Visitors who open `/` are sent to the version that matches their system language (Kazakh, Russian or English, in the order of their own preferences). If none of their languages match, they stay on English. A language picked by hand in the switcher is remembered in the browser and takes priority.

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # static files → dist/
npm run preview   # serve dist/ locally to check the build
```

`dist/` is plain HTML/CSS/images and can be hosted anywhere (nginx, Netlify, Vercel, Cloudflare Pages, GitHub Pages, any shared hosting).

## Where things live

- `src/i18n/content.ts`: all text in all three languages, plus contacts, school names and publishers. Most edits happen here.
- `src/components/`: page sections (Header, Hero, Shelf, Clients, Schools, Parents, Faq, Contact, Footer).
- `src/styles/global.css`: design tokens (colours, type scale, spacing) and the reasons behind them.
- `public/`: favicon, link-preview images (`og-ru.png`, `og-kk.png`, `og-en.png`), robots.txt, sitemap.xml.

## Design rules

The site was built against the [kill-ai-slop](https://github.com/yetone/kill-ai-slop) catalogue: one accent colour (Dinobooks green), no gradients, glass, icon tiles, emoji or invented stats; hierarchy from type size and spacing. To re-check after edits:

```bash
git clone https://github.com/yetone/kill-ai-slop /tmp/kill-ai-slop
node /tmp/kill-ai-slop/skill/scripts/scan.mjs src
```
