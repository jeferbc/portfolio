# Unice Theme Styles & CSS Utilities Reference

Complete catalog of SCSS variables, color system, typography, animations, utilities, and theme overrides.

---

## SCSS File Structure

**Entry point:** `src/index.scss` imports `public/assets/scss/app.scss`

**Import chain in `app.scss`:**

```
flaticon.scss
font-awesome.scss
color-1.scss          ← primary color theme (imports theme/_variable.scss + theme partials)
themify.scss
slick.scss
slick-theme.scss
landing.scss
react-18-image-lightbox/style.css
```

**Theme partials** (imported via `color-1.scss`):

```
theme/_variable.scss        ← CSS custom properties and SCSS variables
theme/_nav.scss             ← Navigation styles
theme/_inner-page.scss      ← Inner page section styles
theme/_keyframes.scss       ← Animation keyframes
theme/_responsive.scss      ← Responsive breakpoints
theme/_customize.scss       ← Theme customizer panel
theme/_theme-dark.scss      ← Dark mode overrides (~2300 lines)
theme/_theme-rtl.scss       ← RTL overrides (~2300 lines)
```

---

## CSS Custom Properties

**Defined on `:root`** in `theme/_variable.scss`:

```css
--primary:   #357fef    /* Main brand blue */
--secondary: #4e4e4e    /* Dark gray (text) */
--light:     #13B8EA    /* Cyan accent */
--dark:      #4E56F3    /* Purple accent */
```

Usage: `color: var(--primary);`, `background: var(--secondary);`, etc.

These are overridden by `CommonLayout` to `#000` for inner pages.

---

## Color System

### Base Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `$white` | `#fff` | Backgrounds, text |
| `$black` | `#000` | Text, borders |
| `$primary` | `#357fef` | Brand blue, headings, buttons, links |
| `$secondary` | `#4e4e4e` | Body text, secondary headings |
| `$light` | `#13B8EA` | Cyan accent |
| `$dark` | `#4E56F3` | Purple accent |
| `$success` | `#35b53e` | Success states |
| `$heart` | `#fb3b64` | Like/love icon color |

### Gray Palette

| Variable | Value |
|----------|-------|
| `$gray` | `#808080` |
| `$light-gray` | various lighter shades |
| `$gray2` through `$gray18` | Fine-tuned gray shades down to `#757575` |

### Background / Light Shades

| Variable | Value | Usage |
|----------|-------|-------|
| `$bg-light` | `#f5f5f8` | Section backgrounds |
| `$bg-light1` | `#d0edff` | Light blue background |
| `$bg-light2` | `#f1e7e6` | Light pink background |
| `$border-light` | `#f5f5f8` | Light borders |
| `$light-white` | `#f7f7f7` | Subtle off-white |
| `$white2` through `$white11` | 11 white variations for subtle layering |

### Extended Palette

| Category | Variables |
|----------|-----------|
| **Yellows** | `#ffa200`, `#ffd200`, `#dce400`, `#c0882f` (wedding gold), `#ECC878` |
| **Blues** | `#41a3ff`, `#3c84ad`, `#0f2469`, `#0072bb`, `#357fef` |
| **Reds** | `#fb3b64`, `#61131f`, `#e3154f` (event accent) |

### Alert / Status Colors

| Variable | Value |
|----------|-------|
| `$alert-primary` | `#004085` |
| `$alert-secondary` | `#383d41` |
| `$alert-success` | `#155724` |
| `$alert-info` | `#0c5460` |
| `$alert-warning` | `#856404` |
| `$alert-danger` | `#721c24` |
| `$alert-dark` | `#1b1e21` |

---

## Typography

### Font Families

| Font | Usage |
|------|-------|
| `"Poppins", sans-serif` | Primary body and headings |
| `"Capriola", sans-serif` | H1/H2 headings (premium look) |
| `"Work Sans", sans-serif` | Event theme variant |
| `"Roboto", sans-serif` | Landing page alternative |
| `"Montserrat", sans-serif` | Landing page headings |
| `"Raleway", sans-serif` | Alternate sans-serif |

All loaded via Google Fonts in the root layout.

### Heading Sizes (Fluid Typography)

All headings use `calc()` with viewport scaling between 300px and 1920px viewports:

| Element | Formula | Approx Range |
|---------|---------|--------------|
| `h1` | `calc(22px + (50 - 22) * ((100vw - 300px) / (1920 - 300)))` | 22px - 50px |
| `h2` | `calc(20px + (36 - 20) * ((100vw - 300px) / (1920 - 300)))` | 20px - 36px |
| `h3` | `calc(18px + (26 - 18) * ((100vw - 300px) / (1920 - 300)))` | 18px - 26px |
| `h4`-`h6` | Responsive calc with adjusted ranges | Varies |
| `body/p` | `calc(13px + (14 - 13) * ((100vw - 300px) / (1920 - 300)))` | 13px - 14px |

### Heading Styles

| Element | Weight | Color | Extra |
|---------|--------|-------|-------|
| `h1` | 400-700 | White (headers) or Primary | letter-spacing: 2px |
| `h2` | 600 | Primary (`#357fef`) | line-height: 0.9 |
| `h3` | 700 | Primary or Secondary | |
| `body/p` | 400 | Secondary (`#4e4e4e`) | line-height: 1.8 |

### Text Utility Classes

| Class | Effect |
|-------|--------|
| `.small-text` | Smaller font, max 40px |
| `.bold-text` | `font-weight: 600` |
| `.theme-color` | `color: $primary` (#357fef) |
| `.text-white` | White text |
| `.copyright-text` | Copyright-styled text |

---

## Responsive Breakpoints

Defined in `theme/_responsive.scss` using `max-width` media queries:

| Breakpoint | Target |
|------------|--------|
| `1600px` | Large desktop adjustments |
| `1470px` | Container max-width: 1440px |
| `1430px` | Collection filter adjustments |
| `1400px` | Various optimizations |
| `1366px` | Tablet landscape |
| `1199px` | Standard tablet |
| `991px` | Mobile landscape / iPad |
| `768px` | Tablet portrait |
| `767px` | Mobile adjustments |
| `575px` | Small mobile |
| `480px` | Extra small devices |
| `420px` | Minimal mobile |
| `360px` | Ultra-compact phones |

---

## Animation Keyframes

Defined in `theme/_keyframes.scss`:

| Animation Name | Effect | Duration | Usage |
|----------------|--------|----------|-------|
| `movebounce` | 360deg rotation loop | — | Spinning icons/loaders |
| `changedir` | Path animation (position shifts) | 30s | Portfolio elements |
| `changedir-rev` | Reverse path animation | 30s | Portfolio elements |
| `ripple1/2/3` | Expanding ripple with opacity fade | — | Scale 1.5x to 8.5x |
| `move-img` | Background position shift (0 to 1360px) | — | Sprite animations |
| `move-img-reverse` | Reverse background shift | — | Sprite animations |
| `moveright` | Vertical bounce (Y-axis 20px) | — | Floating elements |
| `rightFadeInOut` | X-axis slide + fade (translateX 1000px to 0) | — | Entry animations |
| `movej` | Micro-jitter (plus/minus 5px X) | — | Subtle movement |
| `btndown` | Vertical pulse (plus/minus 10px) | — | Button bounce |
| `fadeInRight` | Slide in from 100% right | — | Entry animations |
| `falling` | Diagonal descent with translate3D | — | Particle effects |

### Landing Page Animations (in `landing.scss`)

| Animation Name | Effect |
|----------------|--------|
| `smoothScroll` | Header slide-down animation |
| `loader` | Grid-based loader (9 boxes with staggered delays) |
| `hom-suar` | Up/down float (20px bounce) |
| `hom-ract` | Diagonal path + scale transform |
| `hom-round` | Scale pulse with position shift |
| `hom-sib` | Long-duration curved path (30s) |
| `hom-cloud` | Horizontal drift |

---

## Spacing & Layout Utilities

### Section Padding

| Context | Padding |
|---------|---------|
| `.landing-page section` | `80px 0` |
| Standard inner sections | `50px 0` |

### Container Constraints

| Context | Max Width |
|---------|-----------|
| `.container` (landing) | `1440px` |
| Above `1470px` breakpoint | Enforced `1440px` |

### Margin Classes

| Class | Effect |
|-------|--------|
| `.m-x-auto` | `margin-right: auto; margin-left: auto` |
| `.m-r-auto` | `margin-right: auto` |
| `.m-l-auto` | `margin-left: auto` |
| `.m-r-5` | `margin-right: 5px` |
| `.m-r-10` | `margin-right: 10px` |
| `.m-r-15` | `margin-right: 15px` |
| `.m-r-25` | `margin-right: 25px` |
| `.m-l-15` | `margin-left: 15px` |

Standard Bootstrap 5 spacing utilities (`.ms-*`, `.me-*`, `.ps-*`, `.pe-*`, `.px-*`, `.py-*`) are also available.

### Display / Flex

Standard Bootstrap 5 flex utilities apply: `.d-flex`, `.flex-grow-1`, `.justify-content-center`, `.align-items-center`, `.d-block`, `.d-none`, etc.

---

## Component CSS Classes

### Navigation (`_nav.scss`)

```scss
nav              /* padding: 30px 0; display: flex; justify-content: flex-end */
.logo            /* align-items: flex-start */
.simple-menu     /* min-width: auto !important */
```

### Landing Page Sections (`landing.scss`)

| Class | Description |
|-------|-------------|
| `.top-header` | Full-height header with 20px padding, logo with 50px left margin, bold nav links. |
| `.purchase-block` | CTA block with `background-color: #f6f4ff`, purchase button in `#6e4dde`. |
| `.landing-tabs` | Tabbed navigation: active tabs get `background-color: #6e4dde`, white text, `border-radius: 25px`, `padding: 10px 25px`. |
| `.portfolio-section` | Portfolio area with `background-color: #fbfafe`, 30px image margins, relative slick dots. |
| `.inside_box` | Feature cards with `box-shadow: 0 0 10px 0px rgba(220,220,220,0.47)`, 30px padding, centered text, white bg. |
| `.advance-feature` | Feature section with `background-color: #fbfafe`, centered text, 0.8s transition, subtle icon shadow. |
| `.testimonial-main` | Testimonial container with `background-color: #f2edfb`. Left panel uses `background-color: #8648db`, 50px padding. |
| `.rate-us-section` | Rating section with `background-color: #fbfafe`. Person circles: 175x175px, 50% border-radius, subtle purple bg. |
| `.footer-main` | Footer with 20px vertical padding. `.footer-right p` right-aligned. |
| `.tap-top` | Scroll-to-top button: 50x50px, `background: linear-gradient(to top, #ba38d2, #6851df)`, 100% border-radius. |

### Text-as-Background Pattern

```scss
.text-as-bg h1   /* opacity: 0.03; font-size: calc(100px + (260 - 100) * ...); font-weight: 800 */
```

### Layout Demo Previews

| Class | Description |
|-------|-------------|
| `.image-1` through `.image-13` | Demo preview background images, each referencing `/assets/images/landing/demo/X.png` |
| `.layout-images` | Container for demo previews, `height: 500px` |
| `.app-preview` | Hover effects for app preview sections |
| `.preview-header` | Transitions on hover: `transform: translate 18%` |
| `.coming-soons` | Grayed out items: `opacity: 0.5` |

---

## Shadow Effects

| Usage | Value |
|-------|-------|
| Primary shadow color | `rgba(134, 72, 219, 0.2)` |
| Dark mode borders | `box-shadow: 0 0 30px $border-color` |
| SVG shadows | `filter: drop-shadow(0 0 5px $border-color)` |
| Inside box | `box-shadow: 0 0 10px 0px rgba(220, 220, 220, 0.47)` |
| Feature icons | `box-shadow: 0 0 3px rgba(134, 72, 219, 0.2)` |
| Theme panel | `box-shadow: 0 0 7px 1px rgba(158, 158, 158, 0.2)` |

## Gradient Effects

```scss
/* Text gradient */
background: linear-gradient(to right, $dark 15%, $light 85%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

/* Tap-to-top button gradient */
background: linear-gradient(to top, #ba38d2, #6851df);
```

---

## Dark Mode

**Activation:** `body.dark { }` — toggled via the Customizer component.

**File:** `theme/_theme-dark.scss` (~2300 lines)

### Dark Mode Color Scheme

| Variable | Value | Usage |
|----------|-------|-------|
| `$light-color` | `#191f3c` | Primary dark background |
| `$dark-color` | `#1c2440` | Darker layer/cards |
| `$white-1` | `#f1f3f5` | Brightest text |
| `$white-2` | `#eaedef` | Secondary bright text |
| `$white-3` | `#e7eaec` | Tertiary text |
| `$white-4` | `#dee2e6` | Muted text |
| `$white-5` | `#cfd4da` | Subtle/placeholder text |
| `$border-color` | `rgba(255, 255, 255, 0.08)` | Subtle borders |

### Key Dark Mode Overrides

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Body background | `#fff` | `#191f3c` |
| Card/section bg | `#fff` / `#f5f5f8` | `#1c2440` |
| Text color | `#4e4e4e` | `#cfd4da` to `#f1f3f5` |
| Borders | Various | `rgba(255, 255, 255, 0.08)` |
| Form inputs | Default | `background: #1c2440; border-color: rgba(255,255,255,0.08)` |
| `.bg-white` | `#fff` | `#191f3c !important` |
| `.bg-light-inner` | Light | `#1c2440 !important` |
| `.bg-theme`, `.bg-pink` | Themed | `#1c2440` |
| Pagination | Default | `background: #1c2440; color: #cfd4da` |
| Pagination active | Primary | `background-color: #357fef` |

---

## RTL Mode

**Activation:** `body.rtl { direction: rtl; text-align: right; }` — toggled via the Customizer.

**File:** `theme/_theme-rtl.scss` (~2300 lines)

### Key RTL Transformations

| Property | LTR | RTL |
|----------|-----|-----|
| Text direction | `ltr` | `rtl` |
| Text alignment | `text-align: left` | `text-align: right` |
| `.m-r-auto` | `margin-right: auto` | `margin-left: auto` |
| `.ms-auto` / `.me-auto` | Start/end | Swapped |
| `.float-end` | `float: right` | `float: left !important` |
| `.text-start` | `text-align: left` | `text-align: right !important` |
| `.text-end` | `text-align: right` | `text-align: left !important` |
| Submenu position | `left: 100%` | `right: 100%; left: unset` |
| Border sides | Left borders | Right borders (swapped) |
| All left/right spacing | Normal | Inverted |
| Images (some) | Normal | `transform: scalex(-1)` for mirroring |
| Sliders | RTL | `direction: ltr` (kept LTR) |

RTL responsive overrides span lines 2066-2930 for all breakpoints.

---

## Icon Systems

### Themify Icons

- **Font:** `'themify'`
- **200+ icons** via Unicode points (e.g., `$user: "\e602"`, `$heart: "\e634"`, `$menu: "\e68e"`, `$home: "\e69b"`)
- **Mixin:** `@include icon($i, $m:10px, $fs:18px, $c:inherit)` — adds icon via `::before` pseudo-element
- **Files:** `themify/_variables.scss`, `themify/_mixins.scss`

### Font Awesome

- Full Font Awesome 4.x integration
- Includes: `_icons.scss`, `_animated.scss`, `_rotated-flipped.scss`, `_stacked.scss`, etc.
- Usage: `<i className="fa fa-heart"></i>`

### Flaticon

- Custom icon font via `flaticon.scss` / `flaticon.css`
- Project-specific icons

---

## Slick Carousel Overrides

**Files:** `slick.scss`, `slick-theme.scss`

Key customized elements:

| Selector | Customization |
|----------|---------------|
| `.slick-slider` | Main container |
| `.slick-list` | Track wrapper |
| `.slick-track` | Track element |
| `.slick-slide` | Individual slides |
| `.slick-arrow`, `.slick-prev`, `.slick-next` | Navigation arrows |
| `.slick-dots` | Pagination dots |

**Landing page overrides:**

```scss
.landing-page {
  .slick-next, .slick-prev { display: none !important; }
  .slick-dots button:before { font-size: 30px; color: #8648db; }
}
```

---

## Theme Customizer Panel (`_customize.scss`)

```scss
.theme-pannel-main {
  position: fixed;
  top: 30%;
  right: 0;
  z-index: 9;
  background-color: white;
  padding: 0 5px;
  box-shadow: 0 0 7px 1px rgba(158, 158, 158, 0.2);
}

/* Hidden on landing page */
.landing-page ~ .theme-pannel-main { display: none; }
```

---

## Bootstrap Overrides

| Component | Override |
|-----------|---------|
| `.form-control` | `height: auto` |
| `.nav-tabs` | `border-bottom: 1px solid $border-color` |
| `.nav-link.active` | `background-color: transparent` |
| `.container` (landing) | `max-width: 1440px` |

---

## Layout Theme Accent Colors

Each pre-built layout uses the CSS custom properties but some sections apply theme-specific colors:

| Layout | Accent Color | Usage |
|--------|-------------|-------|
| Default/SaaS | `#357fef` (blue) | Primary across all elements |
| Event | `#e3154f` (red) | Event-specific accents |
| Wedding | `#c0882f` (gold) | Wedding theme accents |
| Landing | `#8648db` / `#6e4dde` (purple) | Testimonials, tabs, purchase |
| Testimonial bg | `#f2edfb` (light purple) | Testimonial sections |
| Feature bg | `#fbfafe` (very light purple) | Feature and portfolio sections |
| Purchase block | `#f6f4ff` (lavender) | CTA areas |
