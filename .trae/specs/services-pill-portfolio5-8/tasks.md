# Services Pill + Portfolio 5-8 — Implementation Plan

## Task 1: Extend PortfolioMetadata components to accept override props
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Read `PortfolioMetadata.tsx` and `PortfolioMetadataMobile.tsx`.
  - Add an optional props interface (e.g. `clientName?`, `duration?`, `releaseDate?`, `siteUrl?`, `assetBasePath?`) with fallbacks to the current hardcoded values (MyRameswaramTrip).
  - Ensure default behavior remains identical to today for Portfolio1.
- **Acceptance Criteria Addressed**: AC-01, AC-11
- **Test Requirements**:
  - `rule` TR-1.1: Rendering `<PortfolioMetadata />` with no props still shows MyRameswaramTrip metadata (compare screenshot to before).
  - `rule` TR-1.2: Rendering with `siteUrl="example.com"` shows `example.com` in the Site field.
  - `rule` TR-1.3: Mobile equivalent check — `PortfolioMetadataMobile` with props overrides, defaults unchanged.
- **Notes**: Keep component signature backward compatible; do not break Portfolio1.

---

## Task 2: Create Portfolio5–8.tsx as structural duplicates of Portfolio1
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - Copy `Portfolio1.tsx` → `Portfolio5.tsx`, `Portfolio6.tsx`, `Portfolio7.tsx`, `Portfolio8.tsx`.
  - In each file, change:
    - Page title string (hero heading, both desktop & mobile) to a unique placeholder:
      - P5: `Service 1 – UX/UI Design & Development Platform`
      - P6: `Service 2 – Digital Marketing & SEO Solution`
      - P7: `Service 3 – Brand Identity & Creative Direction`
      - P8: `Service 4 – Full-Stack Engineering & Scalability`
    - Desktop hero image src (unique placeholder paths under `/assets/services/images/`):
      - P5: `/assets/services/images/service_hero_5.png`
      - P6: `/assets/services/images/service_hero_6.png`
      - P7: `/assets/services/images/service_hero_7.png`
      - P8: `/assets/services/images/service_hero_8.png`
    - Mobile hero image src (same unique paths or with `_mobile` suffix).
    - Pass unique metadata to `<PortfolioMetadata>` and `<PortfolioMetadataMobile>`:
      - P5: `clientName: "Client Alpha"`, `duration: "4 Months"`, `release: "2025"`, `siteUrl: "service1.example.com"`
      - P6: `clientName: "Client Beta"`, `duration: "3 Months"`, `release: "2025"`, `siteUrl: "service2.example.com"`
      - P7: `clientName: "Client Gamma"`, `duration: "5 Months"`, `release: "2024"`, `siteUrl: "service3.example.com"`
      - P8: `clientName: "Client Delta"`, `duration: "6 Months"`, `release: "2024"`, `siteUrl: "service4.example.com"`
    - Export default with unique function name per file.
  - Placeholder images do NOT need to be real PNG files on disk at impl time (404 is acceptable visual state). Do place the service logo placeholder files in Task 5.
- **Acceptance Criteria Addressed**: AC-01, AC-11
- **Test Requirements**:
  - `rule` TR-2.1: All 4 new files exist and `import` without type errors (`GetDiagnostics` returns empty; `tsc --noEmit` passes).
  - `rule` TR-2.2: Hero heading strings differ across P5–P8 (grep all 4, compare).
  - `rule` TR-2.3: Hero image paths differ across P5–P8.
  - `rubric` TR-2.4: Structural equivalence; scale 0–2; 0 = layout deviates from P1, 1 = one section missing, 2 = all sections present visually matching P1; threshold = 2. Evidence: rendered screenshot overlay with P1.

---

## Task 3: Register /portfolio5–/portfolio8 routes in App.tsx
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2 (components must exist)
- **Description**:
  - Import Portfolio5..Portfolio8 in `App.tsx`.
  - Add 4 `<Route path="/portfolio5" component={Portfolio5} />` entries, matching style of the portfolio1-4 lines (position: after the existing portfolio4 line, before contact/faq).
- **Acceptance Criteria Addressed**: AC-02
- **Test Requirements**:
  - `rule` TR-3.1: `grep -n "portfolio[5-8]" App.tsx` returns exactly 4 hits each with `path="/portfolioN"` + `component={PortfolioN}`.
  - `rule` TR-3.2: Visiting each URL in browser renders without a 404 or blank page (or, if no dev server, imports resolve without error in tsc).

---

## Task 4: Create service logo placeholder assets + directory
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Create directory `public/assets/services/images/`.
  - Create 4 placeholder logo image files (or at minimum 4 copies of the existing temple logo `image_26.png`) named:
    - `services_logo_1.png` (P5)
    - `services_logo_2.png` (P6)
    - `services_logo_3.png` (P7)
    - `services_logo_4.png` (P8)
  - Reuse `image_26.png` as temp placeholder by copying.
- **Acceptance Criteria Addressed**: AC-12
- **Test Requirements**:
  - `rule` TR-4.1: `ls public/assets/services/images/` lists 4 png files.
  - `rule` TR-4.2: Files load at their URLs (e.g. `/assets/services/images/services_logo_1.png`) in the browser.

---

## Task 5: ServicePage.tsx — Desktop "OUR SERVICES" section
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4 (logo paths), Task 3 (routes exist for navigation)
- **Description**:
  - In `ServicePage.tsx` desktop view (inside the `<main>` flex-column, immediately adjacent after the existing "OUR PRODUCTS" section `<div>` block ending around line 134), add a new sibling section `<div>` containing the "OUR SERVICES" block.
  - Structure it **pixel-identically** to the "OUR PRODUCTS" desktop section above it:
    - Same outer wrapper: `bg-[#F6F7F9] rounded-[23.69px] flex flex-col items-center gap-[60px] px-[49px] py-[50px]`.
    - Badge `border: 0.969561px solid #202833`, border-radius `236.844`, label uppercase letter-spacing, text `OUR SERVICES`.
    - Heading + description 2-column layout (same gap `532` center between, heading width/height dimensions, font sizes, line heights match PRODUCTS section's 106 + 114–120 exactly).
    - Cards container: same "Logo grid — 1 card" wrapper as PRODUCTS but with 4 cards in a row; each card uses exact same div classes and inline styles as the temple card (lines 126–132):
      - `relative overflow-hidden bg-white rounded-[17.38px] cursor-pointer h-[320px]`
      - `width: calc((100% - 3 * gap) / 4)` (choose gap matching the PRODUCTS layout, same outer wrapper flex-row).
    - Each card's `<img src>` = `/assets/services/images/services_logo_N.png` (1..4).
    - Each card `onClick`: `() => { navigate('/portfolioN'); window.scrollTo(0, 0); }` for N=5..8.
- **Acceptance Criteria Addressed**: AC-03, AC-09, AC-10
- **Test Requirements**:
  - `rule` TR-5.1: "OUR SERVICES" desktop section renders, contains 4 clickable cards, each navigate to portfolioN with scroll reset.
  - `rule` TR-5.2: Card div CSS classes match 100% with PRODUCTS card (same `rounded`, same `h-[320px]`, same inner img positioning).
  - `rubric` TR-5.3: Layout fidelity vs PRODUCTS card section 0–2, threshold 2 (see AC-08). Evidence: side-by-side screenshots with rulers.

---

## Task 6: ServicePage.tsx — Mobile "OUR SERVICES" section
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4, Task 3
- **Description**:
  - In `ServicePage.tsx` mobile view (inside the `<div className="w-[calc(100%-16px)]...">`, after the "Projects" products card group block ending ~line 248, before `<MobFooter />`), add a sibling div matching the "our products" mobile section treatment exactly:
    - Outer `bg-[#F6F7F9] w-full rounded-[22.88px] pb-[35px]`.
    - Badge `our services` with **identical** size/style/capitalization as `our products` mobile badge (136×32, border `228.83 radius`, letter spacing 1.716px).
    - Heading + Description same dimensions.
    - Cards flex-col gap `[15px] w-[calc(100%-16px)] mx-auto mt-[30px]` — 4 stacked cards, each `h-[230px] w-full rounded-[15.26px] bg-white flex justify-center items-center cursor-pointer`, img inner `h-[160px] w-[140px] object-contain`.
    - Click = navigate + reset scroll to /portfolio5..8.
- **Acceptance Criteria Addressed**: AC-04
- **Test Requirements**:
  - `rule` TR-6.1: 4 stacked cards render in mobile ServicePage under "our services".
  - `rule` TR-6.2: Each card click navigates to correct URL + scrolls to top.
  - `rule` TR-6.3: Card classes exactly mirror the mobile Products card (h-[230px], rounded, img sizing).

---

## Task 7: Extend BusinessEcosystemAndCapabilitiesSection with inline cards capability + Services active parity
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4
- **Description**:
  - In `BusinessEcosystemAndCapabilitiesSection.tsx`:
    - Add optional prop `showInlineCards?: boolean` defaulting to false for About page backward compat.
    - Change the SectionPanel `height` prop / wrapper to accept `minHeight` OR add extra block below pills inside the same container (`h-auto` for dynamic content).
    - In SectionPanel after the pills row (line 135 region), add conditional card rendering when `showInlineCards`:
      - if `selectedEco === "Products"` → 1 temple card (image_26.png, nav /portfolio1)
      - if `selectedEco === "Services"` → 4 service logo cards in a row (same card style as desktop ServicePage FR-03 card widths)
      - if `selectedEco === "Partners"` → no cards yet (empty)
    - Pass `gap: 40` style between pills row and cards block, matching heading-to-pills spacing.
  - Update `ServicePage.tsx` desktop `<BusinessEcosystemAndCapabilitiesSection />` call to pass `showInlineCards={true}`.
  - Leave `About.tsx` desktop call with default `showInlineCards={false}` so current About desktop behavior is preserved (no inline cards).
- **Acceptance Criteria Addressed**: AC-05, AC-07
- **Test Requirements**:
  - `rule` TR-7.1: Clicking Services pill flips highlight to blue (same bg/color as Products); clicking Products flips back.
  - `rule` TR-7.2: When `showInlineCards`=true + Services active → 4 cards render inline below the 3 pills; when Products → 1 temple card.
  - `rule` TR-7.3: About desktop (prop not set) shows no cards, height is preserved.

---

## Task 8: Homemob.tsx mobile ecosystem pill toggle + inline service cards
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4
- **Description**:
  - In `Homemob.tsx` (around lines 225–284, the "Business Ecosystem" block):
    - Add `useState<"products"|"services"|"partners">("products")`.
    - Apply the active/inactive conditional className pattern **identical to today's Products active**:
      - active → `bg-[#0161FE]`, icon `<rect>` fill = `rgba(255,255,255,0.3)`, paths fill = `white`, label = `text-white`, keep widths/dimensions same.
      - inactive → `bg-white`, icon rect fill = `#0161FE`, paths fill = `white`, label = `text-[#0161FE]`, plus existing `border: "0.1px solid rgba(142,131,131,0.3)"`.
    - Wrap onClick handlers.
    - After the pills rows (after line ~281), add a conditional block at same level:
      - ecoActive === "products" → render 1 temple card (h-[230px] w-full, style identical to ServicePage mobile products card) linking to /portfolio1.
      - ecoActive === "services" → render 4 stacked service logo cards linking to /portfolio5..8.
      - ecoActive === "partners" → render nothing.
    - Change the ecosystem outer `<div style={{ height: 376 }}>` → `minHeight: 376` + `h-auto` so it grows with 4 stacked cards.
- **Acceptance Criteria Addressed**: AC-05, AC-06, AC-08, AC-12
- **Test Requirements**:
  - `rule` TR-8.1: 2-state screenshots: (1) products active → 1 temple card; (2) services active → blue services pill + 4 stacked cards below pills.
  - `rule` TR-8.2: Click on each of 4 service cards → URL changes to /portfolio5..8 → `scrollY===0`.
  - `rule` TR-8.3: Clicking Products while Services active flips visual highlight back to Products + shows 1 temple card.

---

## Task 9: About.tsx mobile ecosystem pill toggle + inline service cards
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4
- **Description**:
  - In `About.tsx` mobile ecosystem block (lines ~160–200): repeat Task 8 logic verbatim.
  - useState for ecoActive, flip active styles with same pixel rules, add 1-product-card vs 4-service-card conditional below the pills, grow the h-[376px] to min-height + auto.
- **Acceptance Criteria Addressed**: AC-05, AC-06
- **Test Requirements**:
  - `rule` TR-9.1: Services click → blue highlight + 4 cards; Products click → back.
  - `rule` TR-9.2: Card navigation to /portfolio5..8 + scroll reset.

---

## Task 10: ServicePage.tsx mobile ecosystem pill toggle + inline cards
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4
- **Description**:
  - In `ServicePage.tsx` mobile ecosystem block (lines ~160–199): repeat Task 8 logic verbatim.
  - Same useState, same conditional rendering, same min-height fix.
- **Acceptance Criteria Addressed**: AC-05, AC-06
- **Test Requirements**:
  - `rule` TR-10.1: Services click → blue highlight + 4 cards rendered under pills.
  - `rule` TR-10.2: Card navigation correct for 4 portfolio URLs.

---

## Task 11: Global type & build verification
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Tasks 1–10
- **Description**:
  - Run `GetDiagnostics`, run `npx tsc --noEmit`, run a `vite build` (if network/deps allow) or at minimum `npx tsc`.
  - Fix any residual errors from above tasks (import path typos, unused imports, wrong prop names).
- **Acceptance Criteria Addressed**: AC-09, AC-10
- **Test Requirements**:
  - `rule` TR-11.1: `GetDiagnostics` returns `[]` (zero errors).
  - `rule` TR-11.2: `npx tsc --noEmit` returns exit code 0.
