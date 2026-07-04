# Product Requirement Document (PRD)

## 1. Project Overview & Context
- **Project Name:** Heavy Vehicle Accessory & Fiberglass Manufacturing Website
- **Target Audience:** Truck/Heavy vehicle owners, logistics companies, individual long-haul drivers, and industrial partners looking for heavy vehicle customization.
- **Core Objective:** Establish a highly modern, semi-corporate digital presence highlighting the company's two key strengths: high-quality custom fiberglass spoiler (rüzgarlık) manufacturing and premium heavy vehicle accessory sales/installation.

## 2. Design System & Google Stitch Theme Tokens
- **Vibe:** "Industrial Power Meets Modern Aesthetics." Sleek, high-end automotive feel (similar to premium electric vehicle or high-performance racing brands), moving away from outdated, traditional industrial workshop layouts.
- **Color Palette (Multi-Shade Red Integration):**
  - `Primary Red:` Vivid Racing Red (`#E31E24`) for dominant call-to-actions, primary highlights, and core brand identifiers.
  - `Deep Corporate Red:` Dark Burgundy (`#8B0000` / `#4A0E17`) used for card gradients, structural headers, and subtle background text shadowing to introduce professional depth.
  - `Accent Coral Red:` Vibrant Red-Coral (`#FF4D4D`) dedicated purely to hover states, interactive toggles, and notification badges.
  - `Neutral Backgrounds:` Rich Anthracite Charcoal (`#1A1A1A`) and Dark Slate (`#121212`) to act as a dark-mode canvas that makes the red accents stand out powerfully.
- **Typography:** Bold, technical sans-serif headings paired with ultra-clean, highly legible geometric body text optimized for mobile viewports.

## 3. Recommended Frontend Architecture (Stitch Compatibility)
- **Framework & Layout:** React / Next.js structured utilizing utility-first semantic styling through **Tailwind CSS**.
- **Interactive Layers:** Enhanced using state-driven UI blocks, micro-interactions for button frames, and hardware-accelerated transitions via **Framer Motion** or **GSAP**.

## 4. Detailed Component & Page Requirements

### 4.1. Home Page (Ana Sayfa)
- **Hero Canvas:** Immersive full-screen background showing high-resolution imagery or looped raw cinematic video of heavy vehicles with custom aerodynamics.
- **Core Value Proposition Text:** *"Yolların Gücüne Estetik Katıyoruz."* (Adding Aesthetics to the Power of the Roads).
- **Primary CTA Split:** High-contrast buttons pointing directly to "Explore Services" and "Instant WhatsApp Consultation".
- **Dynamic Metrics Counter:** Animated numerical blocks showcasing:
  - *"1000+ Delivered Spoilers"*
  - *"50+ Premium Accessory Categories"*
- **Quick-Contact Floating Strip:** Ubiquitous, non-intrusive direct communication bar anchoring core business touchpoints.

### 4.2. About Us (Hakkımızda)
- **The Workshop Story:** A compelling narrative capturing the custom, handcrafted precision of fiberglass mold making combined with scaled modern engineering.
- **Unique Selling Proposition (USP) Grid:** Three-column icon matrix with clean, modern vector icons detailing:
  - *In-House Manufacturing (Kendi Üretimimiz)*
  - *Master Craftsmanship (Usta İşçilik)*
  - *Long-Haul Durability (Dayanıklı Malzeme)*
- **Interactive Workshop Gallery:** Clean lightbox-ready image grid detailing behind-the-scenes engineering and finalized installations.

### 4.3. Services (Hizmetler)
- **Segmented Layout Architecture:** Distinct, deeply detailed sections or custom toggle states separating the two primary operational wings:
  1. **Fiberglass Spoiler Production:** Focus on truck brand compatibility (Scania, Volvo, Mercedes, etc.), aerodynamic efficiency coefficients, and structural fuel savings.
  2. **Accessory Sales & Installation:** Highly organized showcase of chrome parts, custom heavy vehicle lighting rigs, protective mats, and custom cabin retrofits.
- **Interactive Component Spec ("Before/After Slider"):** An interactive visual comparison UI block allowing prospective drivers to swipe between a stock heavy vehicle frame and a fully customized, spoiler-fitted rig.

### 4.4. Contact & Inquiries (İletişim)
- **Localized Mapping Integration:** Styled, low-saturation dark map layout utilizing localized pinpoints matching the physical industrial workshop location.
- **Smart Validation Inquiry Form:** Modern data-input layout collecting user's heavy vehicle model, exact service required, and dynamic contact validation.
