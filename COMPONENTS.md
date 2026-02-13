# Unice Components Reference

Complete catalog of all reusable UI components in the template.

---

## Common / Shared Components

**Location:** `src/containers/common/`

| Component | File | Description |
|-----------|------|-------------|
| Header | `header.js` | Main navigation header with logo, responsive burger menu, search & account dropdowns. Props: `className`, `shop` (boolean). |
| Nav | `nav.js` | Mega menu navigation built from `MENUITEMS` constant. Supports multi-level submenus and mega-menu for elements. Active menu tracking with recursive structure. |
| CenterLogoHeader | `center-logo-header.js` | Centered logo header variant used in Wedding and special themes. Props: `themeClass`, `shop`. |
| Footer | `footer.js` | Standard footer with logo, nav links, social icons, and copyright. |
| Breadcrumb | `breadcrumb.js` | Center-aligned breadcrumb trail. Props: `list` (array of path items), `title`. |
| CommonLayout | `common-layout.js` | Wrapper combining Header + Breadcrumb + Content + Footer. Sets CSS custom properties (primary/secondary/light/dark) to `#000`. Props: `children`, `pathList`, `pathTitle`. |
| Countdown | `countdown.js` | Event countdown timer using `react-countdown-now`. Shows days, hours, minutes, seconds in bordered boxes. |
| Customizer | `customizer.js` | Fixed-position panel for toggling RTL/LTR and Dark/Light mode via body class manipulation. |

---

## Element Components

**Location:** `src/containers/elements/`

### Title

| Component | File | Description |
|-----------|------|-------------|
| Title | `common/title.js` | Reusable section heading. Center-aligned with borders and uppercase text. Props: `heading`. |

### Buttons

**Location:** `src/containers/elements/buttons/`

| Variant | File | CSS Classes | Description |
|---------|------|-------------|-------------|
| Default | `deault.js` | `.btn-default`, `.primary-btn` | Solid fill buttons in default, success, info, warning, danger, light, gradient styles. |
| Border | `border.js` | `.back-white` | Outlined/border style buttons with light background. |
| Square | `square.js` | `.rounded-0` | Square corners (no border radius), solid fill. |
| Square Border | `square-border.js` | `.rounded-0`, `.back-white` | Square corners with outline style. |

### Contact Forms

**Location:** `src/containers/elements/contact/`

| Component | File | Description |
|-----------|------|-------------|
| Contact1 | `contact1.js` | Full contact form overlaid on Google Maps embed. Fields: name, phone, email, subject, message. Uses Reactstrap Form/Input. |
| Contact2 | `contact2.js` | 3 contact detail boxes (address, phone, email) above a contact form. Dark music-themed background. Fields: name, email, message. |

### Event Schedules

**Location:** `src/containers/elements/event-schedule/`

| Component | File | Description |
|-----------|------|-------------|
| Event1 | `event1.js` | 6 event entries in 2-column grid. Numbered circles with month, title, time, location. Gradient text numbers. |
| Event2 | `event2.js` | Timeline-style single-day schedule. Left description, right time markers with dashed borders. |

### Pricing Cards

**Location:** `src/containers/elements/price/element/`

| Component | File | Description |
|-----------|------|-------------|
| Price1 | `price1.js` | 3-column `react-slick` carousel (auto-play, responsive 1/2/3 cols). Title, price, features list, purchase button. |
| Price2 | `price2.js` | Icon-based pricing cards with Flaticon icons. Free/Medium/Business tiers with color-coded icons. |
| Price3 | `price3.js` | Database-driven (`PricingResume1`). 3-column responsive carousel, white background cards. |
| Price4 | `price4.js` | Database-driven (`PricingResume2`). Alternate button styles (`.btn-white` vs `.back-white`). |
| Price5 | `price5.js` | Center-mode carousel with dots. Cards with icon, title, features, price. Hover overlay effect. |
| Price6 | `price6.js` | SaaS1 theme. Free/Pro/Ultra tiers with custom images and active state highlighting. |
| Price7 | `price7.js` | Center-mode carousel with image positioned above pricing info. |

---

## Blog Components

**Location:** `src/containers/blog/`

### Card Layouts

| Component | File | Props | Description |
|-----------|------|-------|-------------|
| GridWrapper | `card/grid-wrapper.js` | `className`, `image`, `blogDate`, `place`, `title`, `description`, `readUrl` | Vertical card: image on top, text below. Truncates description at 130 chars. "Read more" CTA. |
| ListWrapper | `card/list-wrapper.js` | Same as GridWrapper | Horizontal card: image left (25%), content right (75%). Same truncation and CTA. |
| DetailWrapper | `card/detail-wrapper.js` | `className`, `showcaseType` | Full blog post view. Showcase types: **Image** (single featured), **Gallery** (`react-slick` carousel), **Video** (YouTube modal). Includes comment section with nested replies and comment form. |

### Sidebar Widgets

| Component | File | Description |
|-----------|------|-------------|
| Categories | `categories/index.js` | List of 5 category links with angle-right icons. |
| Newsletter | `newsletter/index.js` | Email input with paper-plane icon submit button. |
| Instagram | `instagram/index.js` | 8 Instagram feed images in a 4x2 grid with links. |
| PopularPosts | `posts/index.js` | 4 popular post cards: image (35%) + content (65%) with title, date, colored badges. |

---

## Feature Components

**Location:** `src/containers/features/`

### Breadcrumb Variations

| Component | File | Description |
|-----------|------|-------------|
| Breadcrumb1 | `breadcrumbs/breadcrumb1.js` | Simple centered text. |
| Breadcrumb2 | `breadcrumbs/breadcrumb2.js` | Icon separators between items. |
| Breadcrumb3 | `breadcrumbs/breadcrumb3.js` | Home icon with layout. |
| Breadcrumb4 | `breadcrumbs/breadcrumb4.js` | Right-aligned layout. |
| BreadcrumbSection | `breadcrumb-comon-sections/breadcrumb-section.js` | Advanced breadcrumb with showcase types: **Video** (looping video bg), **Gallery** (`react-slick` carousel), **Default** (empty). Props: `showcaseType`, `className`, `textRight`, `bgDark`, `path`, `title`, `style`, and more. |

### Footer Variations

| Component | File | Description |
|-----------|------|-------------|
| DefaultFooter | `footer/default-footer.js` | Light background with logo, links, social icons. |
| Dark | `footer/dark.js` | Dark theme with `<hr>` divider. |
| Light | `footer/light.js` | Light theme variant. |
| Dark2 | `footer/dark2.js` | Additional dark variant. |
| Dark3 | `footer/dark3.js` | Additional dark variant. |
| Copyright | `footer/common/copyright.js` | Simple copyright notice with privacy/terms links. |
| Download | `footer/common/download.js` | Mobile app download section with Android & iOS buttons. Left side: phone image, right side: download info. |

### Gallery / Popup Components

| Component | File | Description |
|-----------|------|-------------|
| GallerySection | `gallery/gallery-section.js` | Tab-filtered gallery (All/Fashion/Bags/Shoes/Watch) with `react-18-image-lightbox`. Overlay cards with zoom icon. Pagination with prev/next + numbered pages. |
| Popup | `gallery/popup.js` | Login/Sign Up modal with tabbed form (Email, Password, Name, Address). Reactstrap Modal. |
| MapSection | `gallery/map-section.js` | Google Maps popup modal triggered by button. |
| YoutubeSection | `gallery/youtube-section.js` | YouTube video popup modal triggered by button. |
| ModalSection | `gallery/modal-section.js` | Generic text modal popup. |

---

## Portfolio Components

**Location:** `src/containers/portfolio/`

| Component | File | Description |
|-----------|------|-------------|
| Basic | `basic.js` | Tab-filtered portfolio grid (All/Fashion/Bags/Shoes/Watch) with `react-18-image-lightbox`. Overlay hover effects, pagination. |
| DetailWrapper | `detail-wrapper.js` | Portfolio detail page. Showcase types: **Banner**, **Slider**, **Video**, **Image**, **Default**. Includes thumbnail slider (6-col responsive), lightbox, project details (client, date, link), about section, "Visit project" CTA, prev/next navigation. |

---

## Page Components

**Location:** `src/containers/page/`

### About Us

| Component | File | Description |
|-----------|------|-------------|
| About | `about-us/about.js` | Centered text section with gradient text "about us" heading. |
| Accordion | `about-us/accordion.js` | Expandable Q&A using `react-light-accordion`. 2-column: accordion left, image right. 5 items, first open by default. |
| Counter | `about-us/counter.js` | 4-column animated counters using `react-countup`. Icon image + count number + description. Data from database. |
| Speaker | `about-us/speaker.js` | 4-column team member grid. Cards with image, name, role. Hover overlay with social icons (FB/Twitter/Google/Globe). |
| Testimonial | `about-us/testimonial.js` | `react-slick` single-item slider. 3-column: avatar, quote, star rating. |
| Copyright | `about-us/copyright.js` | Copyright notice with links. |

### Team Pages

| Component | File | Description |
|-----------|------|-------------|
| Agency Team | `team/team-section/agency.js` | Agency-styled team grid. |
| App Team | `team/team-section/app.js` | App-styled team grid. |
| Speaker Section | `team/team-section/speaker.js` | Speaker showcase layout. |

---

## Landing Page Components

**Location:** `src/containers/landing/`

| Component | File | Description |
|-----------|------|-------------|
| Header | `header.js` | Landing nav bar with logo, menu (Home/Pages/Portfolio/Features/Support), purchase CTA with cart icon. Responsive collapse. |
| Footer | `footer.js` | Simple footer: logo left, copyright right. |
| Features | `features.js` | "Core Features" grid of 16 feature icons with animated background elements. |
| Elements | `elements.js` | "Extra Bonus Elements" showcase with decorative animated shapes. |
| Portfolio | `portfolio.js` | 3-column `react-slick` auto-play carousel of portfolio project images. Responsive 1/2/3 cols. Dot pagination. |
| Blog | `blog.js` | `react-slick` carousel of 5 blog post images. |
| Testimonial | `testimonial.js` | Single-column `react-slick` slider (no autoplay). Client image + name + quote. Centered with animated backgrounds. |
| Demo | `demo.js` | Landing page demo section. |
| WhatInside | `whatInside.js` | Feature highlight section. |
| GitSection | `gitSection.js` | GitHub-related section. |
| Rat | `rat.js` | Rating section. |

---

## Layout Section Components

**Location:** `src/containers/layouts/sections/`

Each layout theme has 8-13 section components that are composed together on the layout page. Below is the section inventory per theme.

### Agency (`agency/`)

banner, about, service, expert, work, blog, testimonial, pricing, video, footer

- **Banner** uses `react-parallax-tilt` for 3D tilt effect.
- **Expert** shows team members with overlay social icons.

### App Landing 1 (`app/`)

banner, about, client, services, team, member, format, screenshot, pricing, copyright, footer

- **Screenshot** shows app screenshots in a device mockup carousel.
- **Client** displays client/partner logos.

### App Landing 2 (`app2/`)

banner, about, client, services, team, format, screenshot, pricing, copyright, footer

- Variant of App Landing 1 with different styling.

### Enterprise SaaS (`enterprice-sass/`)

banner, feature, service, brand, business, testimonial, pricing, slider, footer

- **Business** highlights business benefits with icons.
- **Slider** is an image carousel section.

### Modern SaaS (`modern-sass/`)

banner, feature, testimonial, price, work, faq, client, build, subscribe, copyright, footer

- **FAQ** section with expandable questions.
- **Work** shows "how it works" steps.

### Event (`event/`)

banner, about, schedule, speaker, sponsor, gallery, booking, counter, pricing, subscribe, blog, testimonial, footer

- **Schedule** shows event timeline.
- **Speaker** shows speaker lineup with bios.
- **Counter** is an event countdown timer.
- **Booking** is a ticket booking form.

### Gym (`gym/`)

banner, about, pricing, trainer, calculate, counter, brand, format, testimonial, schedule, footer

- **Calculate** is a fitness/BMI calculator.
- **Trainer** shows trainer profiles.

### Music (`music/`)

banner, album, artist, gallery, booking, sponsor, subscribe, testimonial, video, sideSection, blog, copyright, footer

- **Album** displays album listings.
- **Artist** shows artist profiles.
- **Video** embeds music videos.

### Wedding (`wedding/`)

banner, about, countdown, counter, gallery, destination, blog, testimonial, brand, header, subscribe, footer

- **Header** uses `CenterLogoHeader` component.
- **Countdown** displays wedding date countdown.
- **Destination** shows venue information.

### Yoga (`yoga/`)

banner, experience, expert, pricing, schedule, testimonial, event, blog, brand, subscribe, footer

- **Experience** shows experience levels.
- **Expert** displays yoga instructors.

### Resume (`resume/`)

banner, about, services, section, counter, schedule, pricing, subscribe, footer

- **Counter** shows achievement stats with `react-countup`.
- **Schedule** displays career timeline.

### Portfolio (`portfolio-layout/`)

banner, section, copyright, footer

- **Section** is the main portfolio grid/carousel.

### Index (`index/`)

banner, about, services, price, video, download, screenshots, subscribe, footer

- **Download** shows app download links.
- **Screenshots** displays product screenshots.

---

## External Libraries Used in Components

| Library | Usage |
|---------|-------|
| `react-slick` | Carousels/sliders (pricing, portfolio, testimonials, screenshots, blog) |
| `react-18-image-lightbox` | Image lightbox/modal in galleries and portfolios |
| `react-countup` | Animated number counters (about, stats sections) |
| `react-countdown-now` | Countdown timers (event, wedding) |
| `react-parallax-tilt` | 3D tilt effect on agency banner |
| `react-light-accordion` | Expandable accordion sections |
| `react-masonry-css` | Masonry grid layouts in blog |
| `typewriter-effect` | Typewriter text animations |
| `aos` | Animate On Scroll (via `data-aos` attributes) |
| `react-toastify` | Toast notifications |

---

## Reactstrap Components Used

The most commonly used Bootstrap components from Reactstrap across the codebase:

- **Layout:** `Container`, `Row`, `Col`
- **Forms:** `Form`, `Input`, `Label`
- **Navigation:** `Nav`, `NavItem`, `NavLink`
- **Tabs:** `TabContent`, `TabPane`
- **Modal:** `Modal`, `ModalHeader`, `ModalBody`
- **Cards:** `Card`, `CardHeader`, `CardBody`
- **Media:** `Media`
- **Buttons:** `Button`
