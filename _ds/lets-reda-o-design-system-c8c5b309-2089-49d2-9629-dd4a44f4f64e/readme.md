# lets redação — Design System

**lets redação** is a Brazilian ENEM essay-writing course (*redação*) taught by **professora
Letícia**, run in partnership with the **Mago do PISM** course. The product in front of students
is the **Intensivo de Redação ENEM**: two live evening classes a week, one corrected essay a
week, a private streaming platform ("nossa plataforma própria"), monitorias, group sessions with
a psychologist in the final stretch, and extra repertoire material — R$180/month, 10% off for
Mago students, deliberately capped at ~5% of the Mago cohort.

The brand voice belongs to one teacher talking to one student. The visual world is cream paper,
lime waves, purple ink, a yellow marker pen and grainy four-point sparkles.

---

## Sources given

| Source | What it is | Notes |
|---|---|---|
| `uploads/Apresentação intensivo.pdf` | The **Intensivo de Redação** sales carousel — 9 pages, A4 portrait (1753 × 2479 px), fully rasterised (no extractable text or vectors) | This is the **only** ground truth. Every colour, layout rule, headline and number in this system was read off these 9 pages. Rendered page images kept in `research/page-01…09.png` |
| `uploads/Captura de tela 2026-07-24 211948 (2) (1).png` | The wordmark, pink script on transparent, 280 × 268 | Copied to `assets/logo-lets-redacao.png` |

**No codebase, no Figma file, no live site and no font files were provided.** There is therefore
no source-defined component inventory — the primitives below were authored from the brand's
visual language (see *Intentional additions*).

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `effects.css`, `base.css`
- `assets/` — wordmark (2 colourways), lime waves and blobs, sparkles, photography, placeholders
- `guidelines/` — 22 foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — reusable primitives (below)
- `ui_kits/site/` — click-through recreation of the Intensivo sales page
- `slides/` — 7 sample carousel pages in the source's A4-portrait format
- `templates/carrossel-vendas/` — **Carrossel de vendas**, a 4-page editable sales-carousel template
- `research/` — rendered source pages, kept for reference
- `SKILL.md` — Agent-Skills wrapper
- `thumbnail.html` — homepage tile

**Components**

| Group | Components |
|---|---|
| `components/core/` | **Button**, **Badge**, **Card**, **Highlight**, **SectionTitle**, **Logo**, **Sparkle**, **WaveShape** |
| `components/content/` | **ResultCard**, **TestimonialBubble**, **PriceCard** |
| `components/forms/` | **Input**, **Select**, **Checkbox** |

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage).

### Intentional additions
The source is print material, so it contains no interactive controls. These were added because
any real surface needs them, and each is derived from a rule the source does establish:

- **Button** — the source has no buttons; the pill shape comes from its badge/score pills, the
  lime fill from the "loudest thing on the page is lime" rule.
- **Input / Select / Checkbox** — needed for enrolment. Pill shells match Button; the checked
  state uses the lime fill + purple tick.
- **Highlight**, **SectionTitle**, **Sparkle**, **WaveShape**, **Logo** — not "new", just the
  source's recurring devices given a name so they stop being hand-copied.
- **PriceCard** — a componentised version of carousel page 8.

---

## CONTENT FUNDAMENTALS

**Language is Brazilian Portuguese. Never translate the brand's copy to English.**

**Voice: one teacher, direct to one student.** The writer alternates between *nós* for the school
("O **nosso** Intensivo", "prezamos pelo atendimento completo") and *você* for the reader
("**você** pode tirar mil", "**você** tem a oportunidade única"). First-person singular appears
only when Letícia herself vouches for something: "**Eu te garanto** que esse é o melhor
investimento que você pode fazer na sua vida hoje."

**Casing.** Display titles are always **lowercase**, even for proper nouns in a title position:
`redação enem`, `alguns resultados`, `detalhes do curso`, `valor do curso`, `feedbacks`. Body
copy is normal sentence case. Only two things get uppercase: acronyms (`ENEM`, `TRI`, `PISM`,
`CPF`) and the occasional shouted noun for emphasis — `QUALQUER CURSO`, `TREINEIROS`,
`INVESTIMENTO de R$180 mensais`. Student names in result tiles are lowercase.

**Emphasis is bold, and bold carries the argument.** A reader skimming only the bold text gets
the whole pitch. Emphasis is set in the same face, one weight up, in the darker purple — never
italics, never underline, never a second typeface, never colour-shifted to lime or pink.

> Não é exagero afirmar que a **redação é a matéria mais importante do ENEM.** Mas por que?
>
> Isso ocorre porque **a redação é a única área em que você pode pontuar mil pontos**, pois ela
> independe do sistema de TRI…

**Rhythm.** Short question → longer explanation → one-line bold conclusion. Paragraphs are 1–4
sentences with a blank line between them; text is justified. Exclamation marks are frequent and
sincere (one per paragraph is normal). Rhetorical questions open sections ("Mas por que?").

**Scarcity is stated plainly with real numbers,** never with fake countdowns: "O curso começa no
dia 02/07, e as vagas são realmente limitadas, porque prezamos pelo atendimento completo a cada
aluno." · "Temos vagas para apenas 5% dos alunos que estão conosco hoje." · "10% de desconto."

**Proof is quoted raw.** Testimonials are pasted screenshots with the students' typos,
`kkkkk` laughter, timestamps and emoji left intact. The brand does **not** clean them up, and
does **not** set them in the brand typeface — that unretouched quality *is* the argument.

**Emoji.** Never in brand-authored copy. Always preserved inside quoted student messages
(💜 ❤️ 🫶 💙 🤍 are the ones that actually appear). Do not add emoji to headings, buttons or nav.

**Vibe:** warm, magical, competent. The magic register ("a magia chegou a redação", the sparkles,
"Mago do PISM") is always paired with a hard number — never whimsy on its own.

**Copy patterns worth reusing**
- CTA: `garanta sua vaga` (lowercase, imperative, no "clique aqui")
- Eyebrow: `redação enem`
- Tagline: `a magia chegou a redação!`
- Reassurance: `redação é mais fácil do que você imagina`

---

## VISUAL FOUNDATIONS

### Colour
Five hues, no more. Cream is the page, lime is the energy, purple is the ink, yellow is the
marker, pink is the wordmark.

- **Cream** `#FFFAEA` — the default background of every layout. Cards sit on it in `#FFFCF2`.
- **Lime** `#C6F87F` — never text, never a fill behind text. It is *shape*: waves, corner blobs,
  the pills behind result photos, and the single loudest CTA.
- **Purple** — `#5B1E80` for body ink, `#3F0F5C` for bold emphasis, `#A860C8` for lilac section
  titles, `#D88FE8` as a full-bleed inverted background (exactly one page in nine).
- **Yellow** `#FFED8E` — only ever the marker band behind a title, or a sparkle.
- **Pink** `#E56CB8` — wordmark only. Not a UI colour.
- **Neutral greys** — reserved for pasted chat screenshots. Using grey anywhere else breaks the
  world.

Two background colours per artefact, maximum: cream plus one inverted lilac moment.

### Typography
Source fonts were not supplied. Substitutions in use (**please send the real files** — see
*Caveats*):
- **Display** → `Comfortaa`. The original is a 70s-flavoured geometric round display with swash
  alternates (see the `f` and `k` in "feedbacks", the `ç` in "redação"). Always lowercase, always
  centred on slides, weight 500 for section titles and 700 for the one deep headline per page.
- **Body** → `Archivo`. The original is a compact bold neo-grotesque with high x-height. 400 for
  running copy, 700 for emphasis. Justified paragraphs on slides; ragged-right on screens.
- **Script** → `Caveat`, only for the tagline set beside the wordmark. Never for UI.

One display size per page; no mixed-weight headlines; no letter-spaced uppercase headings.

### Layout
Fixed-page thinking, inherited from the carousel: a centred column, generous side gutters
(~10% of page width), a centred section title at the top, and the wordmark pinned to the
bottom centre of every page. On screens this becomes a `max-width: 1000–1180px` centred column
with a sticky translucent-cream header and a deep-purple footer. Content is 1 or 2 columns —
never 3+ of text. Spacing is a 4px scale; 24px between paragraphs, 24px card padding,
40px page gutter.

### Backgrounds & artwork
Never a flat empty page and never a gradient. Every layout carries **lime artwork bleeding off
at least one edge** — the horizontal wave band, the shorter upper wave, or one of three corner
blobs — plus **1–3 four-point sparkles** dropped into the empty corners. These are real raster
assets with visible film grain (`assets/wave-*.png`, `assets/blob-*.png`, `assets/sparkle-*.png`).
Do not redraw them as SVG, do not recolour them, do not rotate or non-proportionally stretch
them. There are no repeating patterns, no textures behind text, no gradients anywhere.

### Photography
Warm, bright, natural daylight, no filter and no grain overlay. The professora is always a
**cut-out on cream** (`assets/photo-leticia-hero.png` has a real alpha channel), overlapping the
lime wave so the figure sits *in* the artwork rather than on top of it. Student photos in result
tiles are hard-edged squares (no rounding, no crop mask) with two lime or yellow pills tucked
behind their left and right edges. Books and props are held to camera and kept in frame — they
are part of the message. Cool tones, duotones and black-and-white do not appear.

### Cards, borders, radii
Cards are **flat**: a cream fill, a 24px radius, no border, **no shadow at all**. Separation comes
from fill contrast alone. Radii: 6px small controls, 10px chat bubbles, 16px textareas, 24px
cards, 32–44px large panels, fully-pill for buttons, badges and inputs. Borders are used only as
a 2px purple rule on outline buttons and focused fields, or a 1px `rgba(91,30,128,.14)` hairline.
There is no left-accent-border card pattern, no colour-coded stripe, no inner shadow.

### Transparency & blur
Used in exactly two places, both additions for screen: the sticky header
(`--veil-cream`, 82% cream + 10px backdrop blur) and the modal scrim (`--veil-purple`,
55% deep purple). Never blur behind body text; never a frosted card.

### Motion & states
Motion is quiet — this is print DNA. 200ms `cubic-bezier(.22,.61,.36,1)` on colour and transform;
420ms for anything entering. Fades and short slides only: no bounce, no spring, no parallax, no
scroll-jacking, no looping animation behind text.

- **Hover:** the fill goes one step *darker* (purple-800 → purple-900, lime-400 → lime-500).
  Ghost and outline buttons pick up a `--purple-100` wash. Never a lift, never a shadow, never
  an opacity fade.
- **Press:** `scale(0.975)`, nothing else.
- **Focus:** `--ring-focus` — a 3px lilac halo plus a 2px purple ring. Never removed.
- **Disabled:** `opacity: .4`, `cursor: not-allowed`. No grey substitution.
- **Selected nav:** a 2px lime underline and the ink darkening to purple-900.
- **Text selection:** yellow marker background.

---

## ICONOGRAPHY

**The brand has no icon set, and none was supplied.** Across all nine source pages there is not a
single UI icon, glyph, arrow, checkmark or pictogram. What does the work instead:

1. **The four-point sparkle** — the only recurring symbol. A grainy raster star in purple, yellow
   or lime, 26–150px, used decoratively 1–3 times per page. Shipped as
   `assets/sparkle-purple.png`, `sparkle-yellow.png`, `sparkle-yellow-pair.png`. Use
   `<Sparkle>`; never redraw it.
2. **Lime waves and blobs** — `assets/wave-lime-band.png`, `wave-lime-upper.png`,
   `blob-lime-top-left.png`, `blob-lime-bottom-left.png`, `blob-lime-bottom-right.png`. Use
   `<WaveShape>`.
3. **The lime pill** — the shape tucked behind result-tile photos, and the shape of every button
   and badge. Where another system would use an icon, this brand uses a coloured pill.
4. **Emoji** — only ever inside quoted student messages, rendered by the system font, exactly as
   the student typed them. Never brand-authored.
5. **Unicode as UI** — the only characters used as controls in this system are `×` (modal close)
   and CSS-border chevrons/ticks in `Select` and `Checkbox`. Both are flagged additions.

**No icon font, no SVG sprite, no PNG icon set exists.** Rules for consumers:
- Do **not** hand-roll SVG icons to fill the gap, and do not substitute emoji for icons.
- If a surface genuinely needs functional icons (a lesson player, a file list), use
  **Lucide** from CDN (`https://unpkg.com/lucide@latest`) at `stroke-width: 2`, sized 20/24px,
  coloured `var(--text-body)` — round line caps to sit with the geometric display face.
  **This is a flagged substitution, not brand canon.** Ask for the brand's real icons first.

---

## Caveats / what we could not do

1. **Fonts are substitutes.** Comfortaa / Archivo / Caveat stand in for the real display, body
   and script faces. Please send the actual font files (or their names) — the display face in
   particular has swash alternates that Comfortaa does not have.
2. **Student photography is not included.** The source shows nine named students' faces; those
   are not reproduced here. `ResultCard` and the result slides use
   `assets/placeholder-square.png`.
3. **No icon set exists** (see above).
4. **The student platform was never shown.** No lesson player, correction view, dashboard or
   checkout appears in the source, so none was invented. `ui_kits/site/EnrollModal.jsx` is a
   flagged interaction stub.
5. **Webfont binaries are not vendored.** `tokens/fonts.css` pulls the substitute families from
   Google Fonts, so the compiler reports 0 local `@font-face` rules. Once real font files
   arrive they should be dropped into `assets/fonts/` and declared there.
