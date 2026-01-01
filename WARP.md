# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This repository is a minimal [Astro](https://astro.build) site scaffolded from the official "Astro Starter Kit: Minimal" template. It currently consists of a single static page and no additional components or custom server logic.

## Key Commands

All commands are run from the repository root.

- Install dependencies (first-time setup)
  - `npm install`
- Start the local development server
  - `npm run dev`
  - By default, this serves the site at `http://localhost:4321`.
- Build the production bundle
  - `npm run build`
  - Outputs the built site to the `dist/` directory.
- Preview the production build locally
  - `npm run preview`
- Access the Astro CLI directly
  - `npm run astro -- --help` – list available Astro CLI commands.
  - `npm run astro check` – run Astro's diagnostics/type-checks for the project (from README example: `npm run astro ...` like `astro check`).

### Linting & Testing

- There are currently **no explicit linting or testing scripts** defined in `package.json`.
- If future changes introduce linting or a test runner (e.g., via `astro test` or a separate tool), update this section with the corresponding `npm run` commands, including how to run a single test.

## Code Architecture & Structure

### High-Level Structure

From `README.md` and the current file tree, the project follows the standard minimal Astro layout:

- `public/` – Static assets (e.g., images, icons). Files here are served as-is from the site root.
- `src/pages/` – Astro page files. Each `.astro` or `.md` file in this directory becomes a route based on its filename.
- `package.json` – Defines the project metadata and the core Astro-related scripts.

Currently, only one page exists:

- `src/pages/index.astro`
  - Defines a basic HTML skeleton with a single `<h1>Astro</h1>` heading.
  - Uses `Astro.generator` in a `<meta>` tag to indicate the site is generated with Astro.

### Routing & Rendering Model

- Routing is **file-system based**: adding `src/pages/about.astro` will automatically create an `/about` route.
- Pages in this minimal setup are **fully static**; there is no dynamic server-side code or API routes defined yet.
- Components from frameworks like React/Vue/Svelte can be introduced under `src/components/` and imported into pages as needed, but this directory does not yet exist in the current codebase.

## Notes for Future Warp Agents

- When adding new functionality (additional pages, layouts, or components), prefer following Astro conventions: keep route definitions in `src/pages/` and shared UI in `src/components/`.
- If you introduce tooling (ESLint, Prettier, test runners, etc.), update the **Key Commands** and **Linting & Testing** sections so future agents know how to run them.
- The current setup is intentionally minimal; substantial new features will likely require introducing a component directory, layout system, and potentially an integration (e.g., React) via the Astro CLI (`npm run astro add <integration>`).