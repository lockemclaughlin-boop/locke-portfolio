# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **Vidconvert Studios** (performance-marketing / video agency). Pure static site — no build step, no package manager, no dependencies installed locally.

## Running it

Open `index.html` directly in a browser, or serve the directory with any static server:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

There is no `npm`, no test suite, no linter. React, ReactDOM, and `@babel/standalone` are loaded from `unpkg` CDN at the top of `index.html` and JSX is transpiled in-browser via `<script type="text/babel">`.

## Architecture — important quirk

**`index.html` is the source of truth.** It contains the complete, currently-shipping app inline in one `<script type="text/babel">` block (~730 lines of JSX). Everything renders from there.

The sibling `.jsx` files (`app.jsx`, `illustrations.jsx`, `sections-1.jsx`, `sections-2.jsx`, `sections-3.jsx`) are **not loaded** by `index.html` and are not in sync with it. They look like an earlier split-file draft kept around as scratch. Concrete drift to be aware of:

- `app.jsx` omits the `Founder` section that `index.html` actually renders.
- `sections-3.jsx`'s `Work` uses a `cases` array with brand/stat data; `index.html`'s `Work` uses a simpler `videos` array pointing at `videos/*.mp4`.

When asked to change the site, edit `index.html`. Only touch the `.jsx` files if the user explicitly asks — and flag the divergence so the user can decide whether to delete them or resync.

## Component layout (inside `index.html`)

The inline script is organized in commented sections in this order:

1. Illustrations / SVG primitives — `Logo`, `Star`, `Funnel`, `Puzzle`, `BarChart`, `Target`, `Bolt`, `Smiley`, `Avatar`
2. `VideoCard` — hover-to-play `<video>` wrapper used by the Work grid
3. Page sections — `Nav`, `Hero`, `ClientBar`, `Approach` (+ `ApproachCard`), `Banner`, `Process`, `Work`, `Voices`, `Founder`, `CTA`, `Footer`
4. `App` — composes the sections in render order and mounts to `#root`

`React.useState` / `useEffect` / `useRef` are used directly off the global `React` (no destructuring at top — that pattern only exists in the unused `sections-1.jsx`).

## Design system (`styles.css`)

Dark cream-on-near-black with a yellow accent. Use the CSS variables rather than hard-coding hex values:

- Surfaces: `--bg` `#0E0D0B`, `--bg-2` `#18170F`, `--cream` `#F4EFE6`, `--ink` `#0E0D0B`
- Accent + brand: `--accent` `#FFD60A`, `--c-blue`, `--c-coral`, `--c-mint`, `--c-violet`
- Type: `--display` (Bricolage Grotesque), `--body` (Space Grotesk), `--mono` (JetBrains Mono)
- Reusable classes: `.container`, `.section` (+ `.section-cream` for inverted), `.eyebrow`, `.display` with `.h-xl/lg/md/sm`, `.btn` (+ `.btn-primary` / `.btn-ghost`), `.chip`, `.sticker`, `.hi` (yellow rotated highlight), `.bg-dots` / `.bg-dots-dark`, `.marquee` + `.marquee-track`

Custom one-off styles (`.video-card`, `wordPop` keyframes, `.word-lit`) live in the `<style>` block at the top of `index.html`.

## Assets

- `videos/*.mp4` — referenced by the `Work` section's `videos` array. Adding a new case study = drop the file in `videos/` and add an entry to that array.
- `locke.jpeg` — used by the `Founder` section.
