---
name: Apex Industrial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e7bdb8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#ae8883'
  outline-variant: '#5d3f3c'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690006'
  primary-container: '#e31e24'
  on-primary-container: '#fffafa'
  inverse-primary: '#c00014'
  secondary: '#ffb3b6'
  on-secondary: '#591a22'
  secondary-container: '#793239'
  on-secondary-container: '#fe9ea3'
  tertiary: '#ffb3ae'
  on-tertiary: '#68000b'
  tertiary-container: '#da3236'
  on-tertiary-container: '#fffaff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#ffdada'
  secondary-fixed-dim: '#ffb3b6'
  on-secondary-fixed: '#3d040e'
  on-secondary-fixed-variant: '#763037'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930014'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
  background-slate: '#121212'
  text-silver: '#E0E0E0'
  border-zinc: '#2A2A2A'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1440px
---

## Brand & Style

The design system embodies the concept of "Industrial Power Meets Modern Aesthetics," drawing inspiration from high-performance automotive engineering and premium heavy machinery. It is designed to evoke a sense of precision, durability, and raw power while maintaining the sleek, sophisticated interface expected of a modern high-end brand.

The chosen style is **High-Contrast / Bold** with a foundation in **Minimalism**. It utilizes a dark-mode-by-default architecture to create a "hardware-accelerated" feel, where vibrant reds slash through deep charcoal backgrounds like light trails on a highway. The visual language is structured, utilizing technical grids and sharp execution to reflect the engineering excellence of custom fiberglass manufacturing.

Key characteristics:
- **Atmosphere:** Dark, immersive, and high-fidelity.
- **Visual Cues:** Metallic glints, subtle carbon fiber textures, and precision-engineered layouts.
- **Motion:** Fast, snapped transitions and micro-interactions that feel responsive and mechanical.

## Colors

This design system utilizes a high-octane red palette set against an ultra-dark industrial canvas. 

- **Primary Red (#E31E24):** The "Racing Red." Used for dominant actions, branding, and highlighting core value propositions. It represents energy and the heat of manufacturing.
- **Deep Corporate Red (#4A0E17):** Provides professional depth. Use this for gradients, surface layering, and structural accents to prevent the UI from feeling flat.
- **Accent Coral (#FF4D4D):** A high-visibility variant reserved exclusively for interactive states (hover, active) and critical notifications.
- **Neutral Core:** The interface relies on **Anthracite Charcoal (#1A1A1A)** for primary surfaces and **Dark Slate (#121212)** for background depth, ensuring a true dark-mode experience that maximizes the luminosity of the reds.

Text should primarily use **Text Silver (#E0E0E0)** for high legibility against dark backgrounds, avoiding pure white to reduce eye strain in low-light industrial environments.

## Typography

The typography strategy balances technical precision with modern readability.

- **Headlines (Space Grotesk):** A geometric, technical sans-serif that feels futuristic and engineered. High-level displays use heavy weights and tight letter-spacing to command attention.
- **Body (Hanken Grotesk):** An ultra-clean geometric face chosen for its exceptional legibility on mobile devices. It maintains the professional aesthetic without sacrificing comfort during long-form reading.
- **Labels (JetBrains Mono):** Used for technical specs, dynamic metrics, and secondary navigation. This monospaced font reinforces the "industrial workshop" and "engineering" narrative.

For mobile, ensure headlines scale aggressively to maintain a single-column impact, while body text remains slightly larger (16px minimum) to assist drivers and operators using devices in varying lighting conditions.

## Layout & Spacing

The design system utilizes a **Fluid Grid** model built on an 8px base unit. 

- **Desktop:** A 12-column grid with 24px gutters. Sections should utilize wide margins (64px+) to create a premium, spacious feel that allows product photography to breathe.
- **Mobile:** A 4-column grid with 16px margins. Content is primarily stacked, with horizontal scrolling reserved for "Service Cards" or "Gallery" items to maximize vertical real estate.
- **Rhythm:** Use large vertical gaps (80px - 120px) between major sections to emphasize the transition between the fiberglass workshop story and the accessory catalog. 

Interactive elements should follow a strict "Safety Zone" approach, ensuring touch targets are a minimum of 48x48px for users in active industrial environments.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional soft shadows.

1.  **Base Layer:** Dark Slate (#121212) for the canvas.
2.  **Surface Layer:** Anthracite Charcoal (#1A1A1A) for cards and containers.
3.  **Accent Outlines:** Use 1px borders in Zinc (#2A2A2A) or subtle Deep Burgundy gradients to define edges.
4.  **Interactive Depth:** On hover, use a "Glow" effect rather than an elevation shadow. Apply a soft, outer-glow using Primary Red (#E31E24) at 20% opacity to simulate light reflecting off a polished automotive surface.
5.  **Overlays:** Modal backgrounds should use a heavy backdrop blur (12px+) with a 60% opacity black tint to maintain focus on the hardware specs.

## Shapes

The shape language is **Soft (0.25rem)**, mirroring the precision-cut edges of fiberglass molds and metallic vehicle components.

- **Standard Elements:** 4px (0.25rem) radius for buttons and input fields to keep them looking sharp and technical.
- **Containers:** 8px (0.5rem) for cards and images to provide a slight modern refinement.
- **Structural:** Use hard 0px angles for full-width sections or "Hero" dividers to emphasize structural integrity and strength.
- **Icons:** Use linear, technical icons with a 2px stroke weight. Avoid rounded terminals; prefer sharp or mitered joins.

## Components

### Buttons
- **Primary:** Solid Primary Red (#E31E24) with Silver text. 4px radius. On hover, transitions to Accent Coral (#FF4D4D) with a slight horizontal expansion.
- **Secondary:** Transparent with a 1px Primary Red border. On hover, fills with a Deep Burgundy gradient.
- **CTA Floating:** Ubiquitous WhatsApp bar should be Anthracite with a Primary Red accent stripe on the left edge.

### Input Fields
- Dark Slate background with a Zinc border. 
- On focus, the border flashes Primary Red and the label (in JetBrains Mono) shifts to a technical "active" state.

### Cards (Service & Product)
- Subtle carbon-fiber texture background (low opacity, 5%).
- 1px top border in Deep Burgundy to create a "metallic lip" effect.
- Content should be bottom-aligned to allow product imagery to dominate the top 70% of the card.

### Before/After Slider
- A high-contrast central handle in Primary Red.
- Comparison labels (e.g., "STOCK" vs "AERODYNAMIC") in JetBrains Mono at the top corners.

### Dynamic Metrics
- Large Space Grotesk numbers.
- Underlined with a 2px Primary Red "power bar" that animates in length based on the value.