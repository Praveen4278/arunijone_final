# Mobile View Fixing Guide

## Overview

This document defines the standard process for fixing the mobile view of every page in the combined-site. The goal is to make each page's mobile view match the **layout** of the corresponding `arunijone-main` reference page exactly, while using the **content** (text, images, stats) from the combined-site desktop sections.

---

## Reference Files

| Combined-site page | Reference mobile layout | Desktop content source |
|---|---|---|
| `pages/home/Homemob.tsx` | `arunijone-main/src/pages/Homemob.tsx` | `pages/home/sections/` |
| `pages/about/About.tsx` (mobile) | `arunijone-main/src/pages/Aboutmob.tsx` | `pages/about/sections/` |
| `pages/service/ServicePage.tsx` (mobile) | `arunijone-main/src/pages/Productsmob.tsx` | `pages/service/` |
| `pages/Portfolio4.tsx` (mobile) | `arunijone-main/src/pages/p4mob.tsx` | `pages/Portfolio4.tsx` desktop |
| `pages/Blog.tsx` (mobile) | No reference — use home mobile patterns | — |
| `pages/Contact.tsx` (mobile) | No reference — use home mobile patterns | — |

---

## Core Rules (Apply to Every Page)

### 1. Layout vs Content
- **Keep** all absolute positions, heights, widths, border-radius, container structure from the `arunijone-main` reference.
- **Swap** only content: text strings, image `src` paths, stat numbers, badge labels.

### 2. Elements to Delete
Remove anything present in mobile but NOT in the combined-site desktop:
- `MobStatHighlights` component
- Bottom nav bar (`Frame_281`)
- Contact forms (unless the page IS the contact page)
- Any placeholder gradient overlays (`rgba(0,0,0,0.2)`) — replace with real images

### 3. Elements to Add
Add anything present in desktop but NOT in original mobile:
- Quality Commitment paragraph (home)
- Business Ecosystem & Capabilities sections
- Any extra desktop-only sections

### 4. Gap Fix Pattern
When removing content between two absolutely-positioned elements, recalculate the lower element's `top` to close the gap.
- Formula: `new top = old top - removed element height - gap`
- Example: removing subtext (h-65, gap-30) moved button from `top-427` to `top-327`

### 5. Image Swap Pattern
Original mobile used empty gradient overlays as placeholders. Replace with real images:
```tsx
// Before (placeholder)
<div className="absolute bg-[linear-gradient(0deg,rgba(0,0,0,0.20)...)] h-[155px] w-full" />

// After (real image)
<div className="absolute overflow-hidden h-[155px] w-full rounded-[15.26px]">
  <img className="absolute w-full h-full object-cover" src="/figmaAssets/image-xxx.png" />
</div>
```

---

## Asset Paths

| Type | Path |
|---|---|
| Figma/desktop assets | `/figmaAssets/` |
| Mobile-specific assets | `/assets/homemob/images/` |
| Blog/project images | `/assets/Home/images/` |

---

## Collapsed Pill Fix Pattern

The most common bug. Caused by a fixed `h-[Xpx]` AND `py-[Ypx]` on the same element where `2Y > X`.

**Rule**: Never put both a fixed height AND vertical padding on the same pill div. Use one or the other:
- Use **fixed height only** → remove `py-*`
- Use **padding only** → remove `h-[Xpx]`

The Figma spec uses padding-driven sizing (`padding: 13.3px 18.78px`) with no fixed height on pills. Always follow the spec.

```tsx
// WRONG — collapsed
<div className="h-[34.81px] py-[13px] flex ...">

// CORRECT — padding drives height
<div className="flex ... px-[18.78px] py-[13.3px] rounded-[18.53px]">

// CORRECT — fixed height, no padding
<div className="h-[34.81px] flex items-center ...">
```

Also add `flex-shrink-0` to icon circles inside pills to prevent them collapsing.

---

## Badge Fix Pattern

When changing badge text (e.g. "project" → "our services"), always update the badge container width and inner span width to fit the new text. Use `whitespace-nowrap` on the text span.

```tsx
// Badge container — width must fit text + padding
<div className="border h-[30px] w-[120px] ... rounded-[228.83px]">
  <span className="whitespace-nowrap ... absolute left-[calc(50%-Xpx)]">
    our services
  </span>
</div>
```

---

## Button Fix Pattern

Buttons with nested `absolute`-positioned text inside `overflow-hidden` containers will have invisible text. Replace with simple flex layout:

```tsx
// WRONG — text invisible
<div className="absolute h-[46px] w-[136px] bg-[#0161FE] rounded-[95px]">
  <div className="absolute overflow-hidden h-[calc(100%-6px)] w-[60px] left-[...] top-[...]">
    <span className="absolute left-[...] top-[...]">View All</span>
  </div>
</div>

// CORRECT — simple flex
<div className="absolute h-[46px] w-[136px] bg-[#0161FE] rounded-[95px] flex items-center justify-center gap-[6px]">
  <span className="whitespace-nowrap text-white text-[14px]">View All</span>
  <img src="/assets/homemob/images/vector_15.svg" alt="" />
</div>
```

---

## MobBanner WhatsApp Pill

The shared `MobBanner` component is already fixed. Do not re-add `py-*` to the WhatsApp pill. The correct structure is:

```tsx
<a className="absolute right-[6px] bg-[rgba(37,211,102,1.00)] flex flex-row justify-center items-center gap-2 px-3 rounded-[95.74px]"
   style={{ top: "calc(50% - 15px)", height: 30 }}>
  <img src={iconSrc} style={{ width: 18, height: 18, flexShrink: 0 }} />
  <span className="whitespace-nowrap text-white text-[13px] font-semibold">WhatsApp</span>
</a>
```

---

## Figma Spec Reading Guide

When given a Figma CSS spec, map it to the mobile page as follows:

| Figma property | Tailwind equivalent |
|---|---|
| `display: flex; flex-direction: column` | `flex flex-col` |
| `align-items: center` | `items-center` |
| `gap: 25px` | `gap-[25px]` |
| `padding: 13.3px 18.78px` | `px-[18.78px] py-[13.3px]` |
| `border-radius: 18.53px` | `rounded-[18.53px]` |
| `font-weight: 510` | `font-[510]` |
| `letter-spacing: 1.79px` | `tracking-[1.79px]` |
| `position: absolute; left: calc(50% - Xpx/2)` | `absolute left-[calc(50%-Xpx/2)]` or `left-1/2 -translate-x-1/2` |
| `background: #0161FE` | `bg-[#0161FE]` |
| `color: #FFFFFF` | `text-white` |
| `text-transform: uppercase` | `uppercase` |
| `text-transform: capitalize` | `capitalize` |

---

## Pages Still Needing Mobile Views

The following pages exist in combined-site but do NOT yet have a dedicated mobile layout file. Each needs a `[PageName]mob.tsx` created following the rules above:

- [ ] `pages/about/` — needs `Aboutmob.tsx` (reference: `arunijone-main/src/pages/Aboutmob.tsx`)
- [ ] `pages/service/` — needs `Servicemob.tsx` (reference: `arunijone-main/src/pages/Productsmob.tsx`)
- [ ] `pages/Portfolio4.tsx` — needs mobile section (reference: `arunijone-main/src/pages/p4mob.tsx`)
- [ ] `pages/Blog.tsx` — needs mobile layout
- [ ] `pages/Contact.tsx` — needs mobile layout
- [ ] `pages/FAQ.tsx` — needs mobile layout
- [ ] `pages/Portfolio1.tsx` through `Portfolio3.tsx` — need mobile layouts

---

## Step-by-Step Process for Each Page

1. **Read** the reference `arunijone-main` mobile file for the page
2. **Read** the combined-site desktop sections for content
3. **Map** differences section by section (badge text, images, stats, added/removed elements)
4. **Create** or update the mobile file — keep layout, swap content
5. **Check** for collapsed pills (fixed height + padding conflict)
6. **Check** for invisible button text (nested absolute in overflow-hidden)
7. **Check** badge widths fit new text with `whitespace-nowrap`
8. **Verify** image placeholders replaced with real assets

---

## Completed Pages

- [x] `pages/home/Homemob.tsx` — fully fixed (hero, about, ecosystem, expertise, success stories, latest insights, contact, footer)
- [x] `components/MobBanner.tsx` — WhatsApp pill fixed (applies to all pages)
