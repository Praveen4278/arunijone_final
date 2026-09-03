# Debug Session: ecosystem-pill-icon-tint
Status: [OPEN]
Created: 2026-09-03
Symptom: Icons in "Our Ecosystem" pill-shaped components (Product, Service, Partner) display with a dull/slight bluish tint instead of pure white.
Expected: Icons should render as solid pure white (#FFFFFF) with no tint.

---
## Step 1 - Hypotheses (Falsifiable)

1. **H1 - CSS Opacity**: Parent pill container or `<img>` wrapper has an `opacity < 1` being applied (e.g., from Tailwind class or inline style), causing the white icon to blend with the blue pill background and appear bluish.
2. **H2 - SVG Fill Override**: The SVG files themselves have `fill` attributes not set to pure white (#FFFFFF), or have a `<mask>` with non-white fill, or have a semi-transparent layer.
3. **H3 - CSS Filter Property**: A `filter: brightness(...)`, `saturate(...)`, `grayscale(...)`, `hue-rotate(...)`, `drop-shadow(...)` or composite filter is applied to the icon or its ancestors.
4. **H4 - Background Color Overlay / Mix-Blend-Mode**: A pseudo-element (`::before`/`::after`) with semi-transparent blue background, or `mix-blend-mode: multiply/screen/overlay` on the icon/wrapper, is blending the white icon with blue.
5. **H5 - Object-Fit + Rendering Artifact**: The `<img>` uses `object-fit: contain` combined with a non-transparent padding/margin box, or `background-color` is being set on the image wrapper (even accidentally via utility classes).

---
## Step 2 - Evidence Logs
(TBD)
