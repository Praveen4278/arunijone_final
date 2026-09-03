# Mobile Homepage Parity Process

## Goal
Make `Homemob.tsx` (combined-site) match the **layout** of `arunijone-main/src/pages/Homemob.tsx` exactly, but with **content** (text, images, stats) swapped to match the combined-site desktop sections.

---

## Core Rules

1. **Keep all absolute positions, heights, widths, border-radius, and container structure** from the original `arunijone-main` mobile file — never change layout values.
2. **Only swap content**: text strings, image `src` paths, stat numbers, badge labels.
3. **Elements in mobile but NOT in desktop** must be deleted (e.g. `MobStatHighlights`, bottom nav bar `Frame_281`, contact form).
4. **Elements in desktop but NOT in mobile** must be added (e.g. Quality Commitment paragraph, Business Ecosystem & Capabilities section).
5. **Gap fix pattern**: When removing content between two absolutely-positioned elements, recalculate the lower element's `top` to close the gap. Example: removing subtext (h-65, gap-30) moved button from `top-427` to `top-327`.

---

## Asset Paths

| Type | Path |
|------|------|
| Figma/desktop assets | `/figmaAssets/` |
| Mobile-specific assets | `/assets/homemob/images/` |
| Blog/project images | `/assets/Home/images/` |

---

## Section-by-Section Changes

### 1. Hero (`_274_951__Section`, h-901)
- **bg**: `rgba(246,247,249)` (grey)
- **Heading**: "For Those Who Demand #1 Quality" — `top-25`, `h-272`, centered
- **Button**: "My NGO" with `/figmaAssets/vector.svg` icon — moved to `top-327` (was `top-427` after removing subtext of h-65 + gap-30)
- **Image card**: `top-calc(100%*0.58)`, `h-41.2%` — uses `/figmaAssets/image-266.png` with `scaleX(-1)` mirror

### 2. About Us (`_274_996__Section`, h-1156)
- All absolute positions unchanged
- **Images**: replaced empty gradient overlays with real images:
  - Full-width top image: `/figmaAssets/image-259.png`
  - Right half image: `/figmaAssets/testimonial-1.png`
  - Bottom-left image: `/figmaAssets/testimonial-1.png`
  - Bottom-right image: `/figmaAssets/image-257.png`
- **Stat**: `95%` → `100%`
- **Stat copy**: updated to desktop copy (client satisfaction text)

### 3. Quality Commitment (added, not in original mobile)
- Flex column, centered, `px-5 py-10`
- Paragraph text matching desktop hero subtext

### 4. Business Ecosystem & Capabilities (added, not in original mobile)
- Two panels: "Our Ecosystem" (Products/Services/Partners) and "Our Expertise" (Research/Design/Development/Creative/Marketing)
- Pill-style tags with blue text on white bg

### 5. Success Stories (`_274_1036__Section`, h-625)
- **Badge**: `"project"` → `"our services"`
- **Button**: `"See More"` → `"View All"` (both duplicate span instances)
- **Carousel image**: `image_26.png` → `/figmaAssets/image-box.svg` (full cover `<img>`)
- **Logo strip**: replaced 8 old mobile placeholder logos with desktop logos:
  - `/figmaAssets/image-26.png` (46×46)
  - `/figmaAssets/image-10-1.png` (53×38)
  - `/figmaAssets/frame-1171276921.svg` (full cover)
  - `/figmaAssets/image-1.png` (62×49)
  - `/figmaAssets/image-47.png` (118×34)
  - Resora (text + `/figmaAssets/vector-1.svg` icon, Poppins 600, #1F64FF)
  - `/figmaAssets/image-242.png` (56×61)
  - `/figmaAssets/image-63.png` (110×31)
  - Container changed from fixed `w-[975.60px]` to `w-[calc(100%-16px)]` with `overflow-x-auto`

### 6. Latest Insights (`_274_1073__Section`)
- **Section height**: expanded from `h-792` to `h-1250` to fit two cards
- **Card 1** (My Rameswaram Trip): unchanged, uses `/assets/homemob/images/image_26.png`
- **Card 2** (Seafsoft): added at `top-695`, same layout as Card 1, uses `/assets/Home/images/image_10.png`

### 7. Contact (`_274_1113__Section`)
- **Badge**: `"Contact me"` → `"Contact Us"`
- **Icons**: replaced multi-SVG absolute-positioned vectors with single figmaAsset SVGs:
  - Email: `/figmaAssets/svg-10.svg`
  - Phone: `/figmaAssets/svg-6.svg`
  - Location: `/figmaAssets/svg-8.svg`
- **Phone**: `+91 85085 10983` → `+91 9489456581`
- **Location**: `Rameswaram, Tamilnadu` → `Rameswaram`

### 8. Footer (`MobFooter`)
- No changes needed — already has correct nav links, copyright, and structure matching desktop.

---

## Image Swap Pattern

Original mobile used empty gradient overlays as placeholders:
```tsx
// Before (placeholder)
<div className="absolute bg-[linear-gradient(0deg,rgba(0,0,0,0.2)...)] h-[155px] w-full" />

// After (real image)
<div className="absolute overflow-hidden h-[155px] w-full ...">
  <img className="absolute w-full h-full object-cover" src="/figmaAssets/image-259.png" />
</div>
```

## Carousel/Logo Strip Pattern

Old mobile logo strip used fixed pixel width (`w-[975.60px]`) causing overflow. Desktop logos use:
```tsx
className="absolute bg-white h-[62px] w-[calc(100%-16px)] flex flex-row ... overflow-x-auto"
```
Each logo cell is `flex-shrink-0` with explicit width/height per asset.
