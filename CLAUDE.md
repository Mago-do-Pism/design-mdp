# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Static HTML/CSS design prototypes for **Mago do Pism** — a Brazilian preparatory course platform. This is a pure Figma-to-HTML design file: no build step, no framework, no package manager. Open files directly in a browser.

## Viewing screens

Open `index.html` in a browser for the full screen index (organized by phase/area). Each card iframe-embeds the actual HTML file scaled to a thumbnail. To view a specific screen, open its HTML file directly.

Print variants exist for several screens (files ending in `-print.html`) — these are formatted for browser Print → Save as PDF.

## Project structure

```
styles/
  tokens.css     — all CSS custom properties (colors, typography, radii, shadows)
  platform.css   — .app-shell grid + sidebar shared by Admin and Alunos areas
  admin.css      — admin-specific component styles
  secretaria.css — secretaria-specific styles
  simulado.css   — fullscreen exam flow styles
assets/          — images and logos referenced by HTML files

admin/           — dashboard screens for admins (alunos, cursos, módulos, equipe)
alunos/          — student-facing platform screens
simulado/        — exam flow (login → início → exam → review → dashboard)
secretaria/      — secretaria screens (matrículas, clientes, faturas, cobrança)
publico/         — public enrollment flow (cadastro → contrato → checkout → confirmação)
auth/            — login and forgot-password screens
orcamento/       — proposal deck using the <deck-stage> web component
export/          — standalone export/print variants
partials/        — reusable HTML snippets (sidebar markup)
tweaks-panel.jsx — reusable React/Babel runtime tweak panel for prototypes with live controls
```

## CSS conventions

All design values must come from `styles/tokens.css`. Never hardcode colors, radii, or shadows — use the CSS custom properties:

- Colors: `--brand-blue`, `--neutral-*`, `--text-primary/secondary/muted`, `--bg-*`, `--border-*`, `--color-success/danger/warn`
- Sidebar dark theme: `--sidebar-bg`, `--sidebar-bg-light`, `--sidebar-bg-deeper`
- Radii: `--radius-xs` through `--radius-pill`
- Shadows: `--shadow-card`, `--shadow-soft`, `--shadow-deep`
- Fonts: `--font-display` (Quicksand), `--font-body` (Montserrat), `--font-mono` (Roboto Mono), `--font-akagi` (Nunito Sans), `--font-othello` (Cormorant Garamond)

## Shared layout shell

Authenticated screens (admin + alunos) use `.app-shell` (a 230px sidebar + `1fr` grid from `platform.css`). The sidebar markup is inline in each HTML file — copy from an existing screen when adding a new one. Active sidebar item gets `.is-active`.

## Reusable primitives (from tokens.css)

- `.btn-primary` / `.btn-primary--minor` / `.btn-ghost` — buttons
- `.input` — text input
- `.field-label` — form field label
- `.screen-nav` — fixed top-left breadcrumb nav used in prototype screens

## Tweaks panel

`tweaks-panel.jsx` is a self-contained React component (loaded via CDN Babel in individual HTML files) for live design controls. Follows the `useTweaks` + `TWEAK_DEFAULTS` pattern documented at the top of that file. The panel communicates with a parent window via `postMessage` for Figma-style edit mode.

## Deck / presentation screens

`orcamento/` uses the `<deck-stage>` web component from `deck-stage.js`. Slides are `<div class="slide">` children; keyboard navigation (←/→, Space, Home/End, number keys) and print-to-PDF are built in. Set the `noscale` attribute to disable auto-scaling.

## Language

All UI text, comments, and file names are in **Brazilian Portuguese**. Keep new screens consistent with this.
