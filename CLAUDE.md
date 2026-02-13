# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Unice is a Next.js 14 (App Router) multi-layout landing page and template showcase. It uses JavaScript/JSX (no TypeScript), Bootstrap 5 + Reactstrap for UI, and SCSS for styling. The project includes pre-built layouts (agency, app landing, event, gym, music, resume, sass, wedding, yoga, portfolio), a blog system, and various UI element demos.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint

No test framework is configured.

## Architecture

### Path Alias

`@/*` maps to `./src/*` (configured in `jsconfig.json`).

### Directory Structure

- **`src/app/`** — Next.js App Router pages. All page routes live under the `(MainBody)` route group, which wraps children with `QueryClientProvider`, `Customizer` (RTL/dark mode toggle), `ToastContainer`, and a scroll-to-top button.
- **`src/containers/`** — Reusable UI section components, organized by domain (layouts, blog, portfolio, page, elements, features, common, landing). These are the building blocks that pages compose.
- **`src/database/`** — Static/mock data as JS modules, mirroring the containers structure. Pages and containers import data from here rather than fetching it.
- **`src/constant/menu.js`** — Navigation menu structure.
- **`src/utils/NoSsr.js`** — SSR bypass wrapper. The root layout wraps all children in `<NoSsr>`, so the entire app is client-rendered.
- **`Utils/AxiosUtils/index.js`** — Axios HTTP client configured with `API_BASE_URL` env var and error handling.
- **`public/assets/scss/`** — SCSS theme files (Bootstrap overrides, icon fonts, color themes, layout-specific styles).
- **`public/assets/images/`** — Static image assets organized by theme/layout.

### Data Flow

- Static data: JS modules in `src/database/` imported directly by containers.
- API data: Single API route at `src/app/api/blogs/` returning blog data from a JSON file. Fetched via Axios + TanStack React Query in the MainBody layout.

### Key Patterns

- All pages are client-rendered (wrapped in `NoSsr`).
- The MainBody layout (`src/app/(MainBody)/layout.js`) is a `"use client"` component that sets up React Query, NProgress route transitions, and the theme customizer.
- Layout pages (e.g., `src/app/(MainBody)/layouts/agency/`) compose containers from `src/containers/layouts/` with data from `src/database/layouts/`.
- Environment variables `API_PROD_URL` and `API_BASE_URL` are set in `next.config.js` based on build phase. Production URL is not yet configured.

### Styling

- Global entry: `src/index.scss` imports `public/assets/scss/app.scss`.
- Bootstrap SCSS as base, with theme overrides and custom component styles.
- Dark mode and RTL support via body class toggles (`dark`, `rtl`) managed by `src/containers/customizer.js`.
- Google Fonts loaded in root layout: Poppins, Capriola, Satisfy, Alex Brush, Raleway, Work Sans.

### Key Dependencies

- **reactstrap** — React wrapper for Bootstrap components
- **react-slick** — Carousels/sliders
- **aos** — Animate On Scroll
- **react-countup** — Animated number counters
- **react-masonry-css** — Masonry grid layouts
- **react-18-image-lightbox** — Image lightbox
- **typewriter-effect** — Typewriter animations
- **apollo-server-micro / micro-cors** — GraphQL server (present but not actively used in routes)
