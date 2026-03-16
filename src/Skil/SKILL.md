---
name: aistrading-website-wireframe
description: >
  Design system and wireframe specification for the AIS Trading Inc website redesign.
  Use this skill whenever someone asks to build, update, or extend the AIS Trading Inc
  website wireframe, landing page, or any UI component based on this design system.
  Also use when asked to apply the AIS Trading white-and-green design system to new
  sections, export files, or generate developer-ready HTML from the wireframe.
---

# AIS Trading Inc — Website Wireframe Skill

This skill captures the full design system and implementation instructions for the
AIS Trading Inc landing page wireframe (v3). Use it to build new sections, hand off
to developers, or extend the design.

---

## Design Brief

**Company:** AIS Trading Inc — global exporter of Southern Yellow Pine, Eastern White Pine,
Hardwood logs and lumber. Est. 2018, Toronto, Canada.

**Target audience:** International lumber buyers (Middle East, Pakistan, global ports).

**Primary CTA:** "Request a quote" — drive buyers to contact the team directly.

**Design direction:** White & clean, minimal, professional. Green accent (#1A7A3C) used
sparingly on CTAs, borders, tags. No gradients. No dark backgrounds.

---

## Color System

| Token           | Value     | Use                                     |
| --------------- | --------- | --------------------------------------- |
| `--brand`       | `#1A7A3C` | Primary CTAs, borders, tags, avatars    |
| `--brand-light` | `#F0F9F4` | Section backgrounds, badges, highlights |
| `--brand-mid`   | `#2EAA57` | Hover states, dots                      |
| White           | `#FFFFFF` | Main backgrounds                        |
| Off-white       | `#FAFAFA` | Alternating section backgrounds         |
| Border light    | `#F0F0F0` | Section dividers                        |
| Border card     | `#EBEBEB` | Card borders                            |
| Text primary    | `#111111` | Headings                                |
| Text secondary  | `#666666` | Body, descriptions                      |
| Text muted      | `#888888` | Labels, captions                        |

---

## Typography

- **Font stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **H1 hero:** 38px, weight 600, line-height 1.18, letter-spacing -0.02em
- **H2 section titles:** 22px, weight 600, letter-spacing -0.01em
- **Section tag:** 11px, weight 700, uppercase, letter-spacing 0.1em, color `--brand`
- **Body / descriptions:** 14–16px, weight 400, line-height 1.6–1.65
- **Cards / labels:** 12–13px
- **Mobile H1:** 27px

---

## Page Sections (in order)

### 1. Navigation

- Logo left: `AIS <em>Trading</em> Inc` — "Trading" in `--brand` green
- Links: Products · Gallery · Services · Team · Contact
- CTA button right: "Request a quote" — green filled
- Mobile: hamburger collapses nav links and CTA

### 2. Hero

- Tag pill: "Est. 2018 · Toronto, Canada" with green dot
- H1: "Global exporters of **premium** North American lumber" — "premium" in green italic
- Subtext: One-liner about product range and delivery
- Dual CTA: primary "Request a quote" + outline "View products"
- Trust bar (4 stats): 6+ Years · 4 Products · 24h Response · CIF/CFR

### 3. Gallery (alt background)

- 3×2 photo grid, `aspect-ratio: 4/3`, `border-radius: 10px`
- Caption overlay: `rgba(0,0,0,0.45)`, 11px white bold text
- Photos: SYP Lumber · SYP Stock · White Ash Hardwood · EWP Logs · Container Loading
- 6th slot: placeholder for log yard photo (HEIC → convert to JPG)

### 4. Products (white background)

- 4-column auto-fit grid (`minmax(220px, 1fr)`)
- Each card: green top border (3px), icon chip, name, spec bullets, grade badge
- Products: S4S SYP (KDHT) · Rough SYP · Eastern White Pine & Logs · Hardwoods

### 5. Services (alt background)

- 4-column auto-fit grid
- Numbered circles (01–04) in green
- Services: International Export · Document Prep · CIF/CFR Rates · Custom Packaging

### 6. Team (white background)

- 3-column grid
- Avatar circle (initials, green background), name, role, email, location pill

### 7. Contact (alt background)

- Two-column office card layout
- Each card: green top border, office tag, name, address, email, green phone button
- Offices: Toronto (main) · Lahore, Pakistan (representative)

### 8. Footer

- Logo left, copyright right
- White background, top border `#f0f0f0`

---

## Component Patterns

### Section wrapper

```html
<section class="wf-section">
  <!-- white bg -->
  <section class="wf-section alt"><!-- #FAFAFA bg --></section>
</section>
```

### Section header

```html
<div class="wf-section-head">
  <span class="wf-stag">SECTION NAME</span>
  <h2 class="wf-stitle">Title here</h2>
  <p class="wf-ssub">Optional subtitle.</p>
</div>
```

### Product card

```html
<div class="prod-card">
  <div class="prod-icon"><svg>...</svg></div>
  <div class="prod-name">Product Name</div>
  <div class="prod-spec">Spec line 1</div>
  <div class="prod-spec">Spec line 2</div>
  <span class="prod-grade">Grade Badge</span>
</div>
```

### Service card

```html
<div class="svc-card">
  <div class="svc-num">01</div>
  <div class="svc-title">Service Name</div>
  <div class="svc-desc">Description text.</div>
</div>
```

### Office contact card

```html
<div class="office">
  <div class="o-tag">LABEL</div>
  <div class="o-name">Company Name</div>
  <div class="o-detail">Address<br />Email</div>
  <div class="o-phone">
    <!-- phone icon SVG -->
    +X XXX XXX XXXX
  </div>
</div>
```

### Gallery image slot

```html
<div class="gal-img">
  <img src="..." alt="Caption text" />
  <div class="gal-cap">Caption text</div>
</div>
```

---

## Mobile Breakpoints

Apply these overrides when `.frame.mobile` class is active (or at `max-width: 500px`):

| Element         | Desktop          | Mobile    |
| --------------- | ---------------- | --------- |
| Nav links + CTA | visible          | hidden    |
| Hamburger       | hidden           | visible   |
| H1              | 38px             | 27px      |
| Hero padding    | 72px 32px 56px   | 40px 20px |
| Section padding | 52px 32px        | 36px 20px |
| All grids       | auto-fit columns | 1 column  |
| Gallery grid    | 3 columns        | 2 columns |
| Trust bar gap   | 40px             | 20px      |
| Footer          | row              | column    |

---

## CSS Variables Quick Reference

```css
:root {
  --brand: #1a7a3c;
  --brand-light: #f0f9f4;
  --brand-mid: #2eaa57;
}
```

---

## Developer Handoff Notes

1. **Images are base64-embedded** in the HTML export for portability. In production,
   replace `src="data:image/jpeg;base64,..."` with actual CDN/server paths.

2. **Log yard photo** (6th gallery slot) was in HEIC format and needs to be re-exported
   as JPG before use. Placeholder slot is at position [5] in `.gal-grid`.

3. **No JS framework required** — the desktop/mobile toggle is a single `className`
   swap. All animations can be CSS transitions.

4. **Fonts** — uses system fonts for zero loading overhead. For a more branded feel,
   consider adding Google Fonts `Inter` or `DM Sans`.

5. **Anchor links** — nav links reference `#products`, `#gallery`, `#services`,
   `#team`, `#contact`. Add smooth scrolling: `html { scroll-behavior: smooth }`.

6. **CTA wiring** — "Request a quote" should scroll to `#contact` or open a modal
   with a contact form. The form fields should include: Name, Company, Port of
   discharge, Product/grade/quantity, Email.

---

## Files

| File                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| `aistrading_wireframe_v3.html` | Standalone HTML with embedded photos, desktop/mobile toggle |
| `SKILL.md`                     | This file — design system spec and developer instructions   |

---

## Change Log

| Version | Changes                                                                     |
| ------- | --------------------------------------------------------------------------- |
| v1      | Initial wireframe from site analysis                                        |
| v2      | Bright green color scheme, gallery placeholders, simplified contact section |
| v3      | White/clean theme, 5 real photos embedded, HEIC note for log yard photo     |
