# Spec: Services Pill + Portfolio 5–8

## Problem

The Services entry in the "Our Ecosystem" pill row is non-interactive across the site (`onClick={() => {}}`). There are no portfolio pages for Services work, so there is nowhere to navigate when the user selects a service card. The product/temple card in the "Our Products" section only links to a single case study, leaving a gap in showcasing 4 service offerings.

## Users

- **Site visitors** exploring the site (Home / About / Explore pages) on desktop and mobile.
- **Client** (Arunijone) uploading final content before launch.

## Goals

1. Add `/portfolio5`–`/portfolio8` as four full case-study pages that duplicate the UX/UI pattern of `/portfolio1`.
2. Register all four routes in `App.tsx`.
3. In **ServicePage.tsx** (Explore page), make the Services pill clickable: it should (a) show the active blue state, (b) render a new "OUR SERVICES" section below with 4 service logo cards navigating to `/portfolio5`–`/portfolio8`, plus (c) in the ecosystem pill itself, switching the active state between Products/Services/Partners shows the 4 service cards below the pills when Services is active.
4. In **Homemob.tsx** and **About.tsx**, wire the Services pill in the "Our Ecosystem" section so (a) the blue highlight switches to Services and (b) 4 service logo cards render below the pills when Services is selected.
5. All spacing, padding, gap, radii, typography, and card visual treatment match the existing Products/Product-card style exactly on desktop and mobile.

## Non-Goals

- Redesign any existing section (Portfolio1, Products cards, Ecosystem pill styling).
- Add Partners cards or content (remains onClick={() => {}} unless user specifies later).
- Refactor ecosystem pills into a shared mobile component (Homemob, About, ServicePage each have inline markup — preserve the per-file inline approach).
- Modify Portfolio2, Portfolio3, Portfolio4, or any Blog/FAQ page.
- Create new mobile-only ecosystem tab-wrapper component for cross-page reuse.

## Functional Requirements

### FR-01 Portfolio page factory
Create `Portfolio5.tsx`, `Portfolio6.tsx`, `Portfolio7.tsx`, `Portfolio8.tsx`. Each page must be a structural duplicate of `Portfolio1.tsx` with only the following per-page swaps:
- Nav bar (unchanged, same as Portfolio1).
- Hero heading string (page title) is unique per page.
- Hero desktop image path is unique per page.
- Hero mobile image path is unique per page.
- `PortfolioMetadata` metadata values (client name, duration, release, site URL) are unique per page via prop (extend component if needed, otherwise per-page override).
- `PortfolioMetadataMobile` same per-page metadata (extend via prop if needed).
- Inner pill sections (Overview, Research, Creative, Design, Marketing, Development) reuse the existing `portfolio1/sections/*` and `portfolio1/mob/*` components **unchanged** — no per-pill content swapping for v1.
- Inner `MobPillContent` milestone/quote/faq text blocks for each of the 6 pills use the same text as Portfolio1 for v1 (contenteditable-by-client later).

### FR-02 Routes
In `App.tsx`, add four new `<Route>` entries:
- `/portfolio5` → `Portfolio5`
- `/portfolio6` → `Portfolio6`
- `/portfolio7` → `Portfolio7`
- `/portfolio8` → `Portfolio8`

### FR-03 ServicePage (Explore) — Desktop "OUR SERVICES" section
In `ServicePage.tsx` desktop view, below the "OUR ECOSYSTEM" row (after `BusinessEcosystemAndCapabilitiesSection`) and adjacent to the existing "OUR PRODUCTS" section, add a new section with the **exact same layout/treatment as the "OUR PRODUCTS" section**:
- Badge pill: label `OUR SERVICES`, matching dimensions, border, radius, uppercase letter-spacing of the "OUR PRODUCTS" badge.
- Heading and description in the same layout pattern (side-by-side on desktop: heading left 106 + body right 107–120) as the Products section.  Use a sensible default heading/description if client content is pending.
- Logo-grid container: 4 cards in a single row (same row gap, column gap, top-offset as Products card grid per Figma).
- Each card has the exact same style as the single temple card in the Products section (white bg, rounded `17.38px`, `height: 320`, `width: 33.33%` → 4 cards so `width: calc((100% - 3 * gap) / 4)` or equivalent), clickable with `cursor: pointer`, navigate to `/portfolio5`–`/portfolio8` and call `window.scrollTo(0, 0)`.

### FR-04 ServicePage (Explore) — Mobile "OUR SERVICES" section
In `ServicePage.tsx` mobile view, add an "OUR SERVICES" section in the same column layout as the existing "our products" mobile section (lines 203–248):
- Badge `our services` (same size/style/capitalization as `our products` badge).
- Heading + Description text block same dimensions/typography as mobile Products.
- 4 stacked cards, each `h-[230px] w-full rounded-[15.26px] bg-white` flex-centered — same treatment as the single `image_26` mobile product card.
- Each card navigates to `/portfolio5`–`/portfolio8` with `window.scrollTo(0, 0)`.

### FR-05 BusinessEcosystemAndCapabilitiesSection — active state + card content
The desktop ecosystem pill component `BusinessEcosystemAndCapabilitiesSection`:
- Lift the `selectedEco` state so it can be controlled externally (or add a callback/consumer-pattern prop so the hosting page can react to pill clicks).
- When `selectedEco === "Products"`: below the pills, render the same single temple card currently shown in ServicePage/Products (render the card inline inside the component when in use on About page). **Or** keep the current behavior of no inline cards for About (About does not show the temple cards currently) — choose the simpler path: add a `showInlineCards?: boolean` prop that renders cards below the pills when true. When Services is active + showInlineCards=true, render 4 service logo cards inline below the pills with same row-layout as FR-03.
- Services active background = `#0161FE`, icon circle bg = `rgba(255,255,255,0.3)`, label text = `#FFFFFF` (same exact toggle logic as Products today).
- Container height in SectionPanel must switch from fixed `height` to `min-height` or auto when inline cards are shown, to avoid content clipping (preserve existing exact spacing 40 under pills matching the section layout).

### FR-06 Homemob.tsx ecosystem — Services toggle + cards
Mobile-only inline ecosystem in `Homemob.tsx` lines 225–284:
- Add `useState` hook: `const [ecoActive, setEcoActive] = useState<"products"|"services"|"partners">("products");`
- Clicking Services pill → `setEcoActive("services")` + the **exact same blue active treatment** as the Products pill today (bg = `#0161FE`, icon-circle-fill = `rgba(255,255,255,0.3)`, icon paths fill = `white`, label = `white`). Clicking Products returns to Products active; Partners shows its active state too (though no cards yet).
- Inactive Products/Services state = exact same style Services inactive is using today (white bg, `#0161FE` circle-fill, `#0161FE` label).
- Below the pill-row container (after line 281), render 4 service logo cards stacked when `ecoActive === "services"` with same styling as the mobile Products card (`h-[230px] w-full rounded-[15.26px] bg-white`, logo centered `object-contain`).  Each card navigates to `/portfolio5`–`/portfolio8` + `window.scrollTo(0, 0)`.
- When `ecoActive === "products"`, render a single Products card (same style) linking to `/portfolio1` to match the current experience.
- Ecosystem container `height: 376` must become `h-auto` or increase to accommodate 4 stacked cards when services is active (min 4 * 245 ~ 980px).

### FR-07 About.tsx mobile ecosystem — Services toggle + cards
Mobile ecosystem in `About.tsx` lines 161–199: mirror the same exact wiring as FR-06:
- Add `ecoActive` useState, wire Services onClick to setServices active with matching blue/white toggle vs inactive Products white/blue.
- Show 4 stacked service logo cards when Services active below the pills; show 1 Products card when Products active.
- Increase ecosystem container `h-[376px]` → auto/min-height or increased value.

### FR-08 ServicePage.tsx mobile ecosystem — Services toggle + cards
Mobile ecosystem inside `ServicePage.tsx` lines 161–200: mirror FR-06/FR-07 wiring.
- Add `ecoActive` useState; Services click activates Services blue state; below pills render 4 service cards (stacked) vs 1 product card.

### FR-09 Logo card style parity (desktop)
Desktop logo card CSS: **must exactly match** the single temple card treatment in `ServicePage.tsx` lines 126–132:
- `bg-white rounded-[17.38px] h-[320px] relative overflow-hidden cursor-pointer`
- Logo image: `absolute object-contain h-[222px] w-[180px] left-[calc(50%-90px)] top-[calc(50%-111px)]`
- 4 cards per row: width = 25% minus gap adjustments, consistent gap.

### FR-10 Logo card style parity (mobile)
Mobile stacked cards (used everywhere above) exactly match `ServicePage.tsx` lines 241–246:
- `h-[230px] w-full rounded-[15.26px] bg-white flex justify-center items-center cursor-pointer`
- `img` inner: `h-[160px] w-[140px] object-contain`

### FR-11 Navigation behavior
Every click on a service logo card, on any page, must:
1. Call `navigate('/portfolioN')` where N = 5..8.
2. Immediately call `window.scrollTo(0, 0)`.
Exact same pattern used by the Products card today (`navigate('/portfolio1')` + `scrollTo(0,0)`).

### FR-12 Active pill visual parity (all pages, mobile + desktop)
The blue active pill state must match pixel-identical to the Products active pill in each file:
- **Mobile Homemob today (Products):** `bg-[#0161FE]`, icon wrapper `<rect>` fill = `rgba(255,255,255,0.3)`, paths fill = `white`, label = `text-white` (`15px / leading-24`).
- **Mobile Homemob today (Services inactive):** `bg-white`, icon wrapper `<rect>` = `#0161FE`, paths fill = `white`, label = `text-[#0161FE]` (`15px / leading-22`).
- **Desktop BusinessEcosystemAndCapabilitiesSection (active today):** `background: #0161FE`, icon-circle fill = `#4D90FE` (active variant), labelBase color = `#FFFFFF`.
- **Desktop BusinessEcosystemAndCapabilitiesSection (inactive today):** `background: #FFFFFF`, icon-circle fill = `#0161FE`, labelBase color = `#0161FE`.
Apply identical logic to the Services & Partners pill on every file.

## Constraints, Dependencies, Assumptions

### Constraints
- Layout fidelity to existing Product card pattern is non-negotiable (project profile says pixel-perfect 1:1).
- No new Tailwind plugins or new npm dependencies.
- All content strings (placeholders) for headings/titles/metadata use English.
- Portfolio5–8 *reuse* all 6 inner pill sections (`OverviewSection` etc.) from Portfolio1 verbatim. Reuse via import; do not duplicate section files.

### Dependencies
- Client must provide final content for 4 service logos + 4 hero images + 4 titles + metadata. Until provided, we use **sensible placeholder assets with canonical filenames** and placeholder heading text in "SERVICE #1 TITLE" style so UI is complete.

### Assumptions
- `PortfolioMetadata` currently contains hardcoded myrameswaramtrip content — we assume it's acceptable to add an optional props interface to override for Portfolio5–8. If not possible, duplicate+rename the metadata component per page is the fallback.
- The `BusinessEcosystemAndCapabilitiesSection` used on About page today shows NO cards under the pills (only the 3 pills).  The user asks only Homemob, About, ServicePage ecosystem buttons be wired to highlight Services + show 4 cards — we interpret this as: on the About page *mobile* section, add the inline cards toggle logic (FR-07 applies mobile; desktop About still shows no inline cards).

### Open Questions
1. **OQ-01:** What are the exact client-provided filenames for 4 service logo images and 4 portfolio hero/mobile images? (Using placeholders until answered.)
2. **OQ-02:** What are the 4 service project titles + site URLs + metadata (client name, duration, release date)? (Using placeholders.)
3. **OQ-03:** In the desktop ecosystem section on About + ServicePage pages, should inline cards show below the pills when switching Products ↔ Services, or only via the separate "OUR PRODUCTS"/"OUR SERVICES" sections? Interpretation: ServicePage gets both a) the inline toggle inside ecosystem section AND b) the separate full sections (to match how Services Page already has separate Our Products section below Ecosystem). About page desktop: do NOT add inline cards (mobile only, per FR-07).

## Acceptance Criteria

All ACs are typed as `rule` (binary verifiable) or `rubric` (evaluative).

| ID | Type | Criteria |
|---|---|---|
| AC-01 | rule | Visiting `/portfolio5`, `/portfolio6`, `/portfolio7`, `/portfolio8` each renders a full page (nav + hero w/ unique heading + unique hero image + expertise pill bar + dynamic section per pill + footer) that visually matches `/portfolio1` layout. Evidence: browser URL navigation + screenshot comparison |
| AC-02 | rule | `App.tsx` contains four `<Route path="/portfolioN" component={PortfolioN}/>` entries (N=5..8). Evidence: `grep "portfolio[5-8]" App.tsx` |
| AC-03 | rule | ServicePage desktop: below the "OUR ECOSYSTEM" section there is an "OUR SERVICES" section containing 4 logo cards in a row; each card visually matches the existing "OUR PRODUCTS" temple card in size (height, radius) and logo centering. Evidence: screenshot of ServicePage desktop scrolled to Services section + CSS property diff of card divs |
| AC-04 | rule | ServicePage mobile: there is an "our services" section (same layout treatment as "our products" mobile) with 4 stacked cards navigating to portfolio5-8. Evidence: screenshot + navigate by click = URL changes + scrollY resets to 0 |
| AC-05 | rule | Clicking Services ecosystem pill (all 3 files: Homemob, About, ServicePage mobile) shows Services in the blue active state matching Products active visual; clicking Products returns Products to blue active state. Evidence: click-through recording or 2-state screenshot per file |
| AC-06 | rule | When Services is the active pill inside Homemob, About, ServicePage mobile ecosystem sections, 4 service logo cards render stacked directly below the pills; each card navigates to `/portfolio5..8` with `window.scrollTo(0,0)`. Evidence: click each card, confirm URL + scroll reset |
| AC-07 | rule | BusinessEcosystemAndCapabilitiesSection supports an external consumer of the selected pill state OR renders 4 inline service cards below pills when a prop like `showInlineCards` is true; Services active visuals match Products active visuals (bg, icon fill, label color). Evidence: component code + screenshot in Services-active state |
| AC-08 | rubric | **Layout fidelity (0-2):** desktop 4-card row gap, radii, padding, font-size match Product section exactly; mobile 4-stack also exactly matches. `2` = no visual discrepancy vs the existing product card pattern at standard zoom levels; `1` = one minor spacing/font-size delta ≤ 2px unnoticeable without rulers; `0` = ≥2 obvious spacing/radius mismatches. Pass threshold = 2 |
| AC-09 | rule | TypeScript `npx tsc --noEmit` passes (exit code 0) after all edits. Evidence: command result |
| AC-10 | rule | VS Code diagnostics (GetDiagnostics) returns zero error entries. Evidence: tool output `[]` |
| AC-11 | rule | Portfolio5–8 hero headings are each unique strings (placeholder if client content pending), desktop/mobile hero image paths are unique per page (placeholders). Evidence: diff the four new Portfolio files — hero heading and image src strings differ across 5,6,7,8 |
| AC-12 | rule | All 4 service logo cards share the canonical placeholder file paths under `/assets/services/images/` (5 files: logo_1 .. logo_4). Evidence: directory created + files consumed as `<img src>` |
