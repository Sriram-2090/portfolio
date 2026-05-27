# Portfolio Project Context

## Project Overview
**Lumen.** is a portfolio/landing website for a mental health early detection mobile application. The core proposition of Lumen is that it silently learns a user's behavioral baseline on-device and monitors for sustained changes that could signify early mental health risks (e.g. depression or anxiety) in a private, passive way.

## Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (using `@import "tailwindcss"` and the `@theme` directive in `src/index.css`)
- **Routing**: `react-router-dom` v7 (floating bottom dock navigation)
- **Animation**: `framer-motion` v12 (for page transitions, lamp effect, scroll-reveals, count-up animations)
- **Icons**: `lucide-react`

## Theme & Aesthetic
- **Current Concept**: "Clinical Gold" (sleek dark mode using gold/yellow accents and charcoal background).
- **Core Files**:
  - `src/index.css`: Defines the design system custom variables (`--sys-*`) and Tailwind theme configurations.
  - `src/App.jsx`: Main entry point, loads pages inside custom `AnimatePresence`.
  - `src/components/Navigation.jsx`: Fixed floating bottom dock menu with spring-based active states.
  - `src/pages/Home.jsx`: Hero with `LampContainer` Aceternity effect, bento grid features, counting stats.
  - `src/pages/HowItWorks.jsx`: Timeline layout for step-by-step description of how the system works.
  - `src/pages/Demo.jsx`: Phone mockup displaying the active app interface and core characteristics.
  - `src/pages/Team.jsx`: Initials-based grid of key researchers and core mission detail.
  - `src/pages/Download.jsx`: APK download screen with instruction guides for installation.

## Ongoing Task: Ultimate UI/UX Visual Revamp ("Plastic Surgery")
**Goal**: Complete visual overhaul of the portfolio to match elite showcases like `open-design.ai` / `opendesigner.io` with a strict dark theme, rich 3D interactions, and luxurious color grading.
- **Strict Dark Theme Only (Matte Black & Chrome Monochrome)**: Enforce absolute dark mode utilizing a 5% lighter luxury carbon matte black background (`#0E0E10`), soft silver-grey frosted glass (`#1A1A1E`), and pure white highlights.
- **Typography Consistency**: Preserve your original typography (**Fredoka** for headings, **Poppins** for body and general text).
- **Cinematic Canvas Cursor Dynamics**:
  - Implement a highly optimized HTML5 2D Canvas in `<BackgroundDynamics />` running smoothly inside a `requestAnimationFrame` render loop at high FPS.
  - **Liquid-Light Trails**: Captures cursor moves to render glowing, tapered white energy streaks with spring-inertia fade-outs.
  - **Subtle Ripple Waves**: Spawns delicate, thin expanding circular wave lines that decay organically on mouse acceleration.
  - **Ambient Drifting Haze**: Draws slowly morphing, volumetric smoke-like spotlights that breathe and distort based on mouse speed.
  - **Thin Optical Streaks**: Draws slow, horizontal chrome lines floating across the view to build spatial atmospheric depth.
- **Satisfying 3D Content-Driven Icons**:
  - Replaced flat bento graphics with highly relatable, custom animated 3D components (`ThreeDIcons.jsx`):
  - **ThreeDBaseline**: Undulating 3D sine-wave grid oscillating in a flawless, hypnotic phase loop (representing behavioral baselines).
  - **ThreeDPassiveCollection**: Floating 3D mobile phone chassis with concentric silver data wave arches expanding from its center (representing background sensor logging).
  - **ThreeDPrivateProcessing**: Floating 3D security shield centerpiece with concentric orbital guard rings and satisfying inbound accelerating data particles that dissolve inside (representing local, secure data containment).
- **3D Animations**:
  - Implement dynamic **3D Tilt Cards** (`TiltCard.jsx`) with mouse-interaction custom border spotlight glows that follow the cursor on hover.
  - Implement immersive **3D Page Transitions** within a `1200px` perspective space, translating across the Z-axis, applying spring-loaded entry rotations, and soft blurs.
  - Upgrade timeline nodes, phone mockups, and layout structures to render in spatial 3D.

## Recent UI/UX Enhancements (Completed)
- **Seamless Page Transitions (Border Line Removal)**: Removed all horizontal separating border lines (`border-t border-white/[0.04]`) between sections and components in `Home.jsx`, `HowItWorks.jsx`, `Demo.jsx`, and `Team.jsx` to achieve a pure, border-free visual scroll transition.
- **Floating Navbar Smooth Scroll Reset & Precision Scroll Engine**: Integrated a custom click handler into `Navigation.jsx` links. In addition to the instant scroll reset in `App.jsx` on path changes, clicking any navbar route now triggers a smooth scroll to the top of the viewport (`top: 0`, `behavior: 'smooth'`) only on the current route, while instantly resetting on different route changes. Upgraded the entire routing scroll engine by disabling browser-native scroll restoration (`window.history.scrollRestoration = 'manual'`), adding a direct scroll reset upon `PageTransition` mounting, and removing CSS-level `scroll-behavior: smooth;` which previously overrode programmatic transitions and caused visual scrolling lags during route transitions.
- **Official GitHub Releases & Native Download Integrations**: Updated the Dev Build download card in `Download.jsx` to natively open the official GitHub releases page (`https://github.com/Sparrow375/Mental-Health-Detection-ML/releases/latest`) in a secure new tab. Upgraded the User Build download link using React Router's official `<Link reloadDocument download="..." to="...">` component to bypass single-page application routing interceptions. Implemented an absolute Z-depth extrusion style (`transform: 'translateZ(30px)'`, `relative z-30 pointer-events-auto`) on both buttons to resolve the browser hardware-acceleration click hit-test bugs caused by parent 3D card tilt rotations.
- **Interactive Draggable Floating Navbar**: Converted the bottom floating navigation dock into a fully draggable, interactive viewport widget. Bound it within the viewport boundaries via `dragConstraints` mapped to a full-screen `fixed inset-0` pointer-events-none layout. Configured spring-based physics, smooth momentum-based drag glide (`dragMomentum`), elastic stretch thresholds (`dragElastic`), and high-end visual states (scaling up by 5% and casting a deep lifted ambient drop shadow while dragged). Framer Motion's built-in drag drag-threshold automatically prevents links from misfiring when dragging is initiated.
- **Satisfying 3D Spatial Concept-Relatable Navbar Icons**: Fully re-engineered the navbar icons from standard flat Lucide shapes into highly satisfying, customized 3D micro-animations mapped directly to each route's core concept:
  - **Home**: A 3D isometric architectural house structural skeleton with vertical support columns, a floating gabled roof that programmatically lifts up on hover/active, and a central glowing core representing safe on-device data containment.
  - **How It Works**: A 3D isometric process timeline featuring three rising stepped pillars (representing sleep data collection, baseline analysis, and warning alerts) that bounce in a springy sequential wave on hover, with a traveling data pulse that climbs the stairs in a continuous loop.
  - **Team**: Three overlapping layered 3D parallax discs (embossed with researcher initials L, M, and N) that float apart along different coordinate vectors and Z-depths on hover.
  - **Demo**: A miniature 3D phone chassis whose screen plane extrudes outward along the Z-axis and illuminates when hovered or active.
  - **Beta (Download)**: A floating downward chevron arrow pointing at a solid horizontal platform, compressing downward and expanding concentric wave ripples on the plate.
  - These customized widgets are fully reactive to route active/hover states, casting fluid, expanding silver-white underlay backglow shadows in 3D container space.
