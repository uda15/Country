# Copilot Instructions for AI Agents

## Project Overview
- **Type:** React SPA using Vite
- **Entry Point:** `src/main.jsx` renders `App.jsx` into `#root` in `index.html`.
- **Routing:** Uses `react-router-dom` v7. Routes are defined in `App.jsx` and use a layout (`AppLayout`) with nested pages.
- **UI Structure:**
  - `src/Component/Layout/AppLayout.jsx`: Wraps all pages with `Header` and `Footer`.
  - `src/Component/Ui/`: Contains presentational components (e.g., `Header`, `Footer`, `Herosection`).
  - `src/pages/`: Contains route components (`Home`, `About`, `Contact`, `Country`, `ErrorPage`).
- **Data:**
  - Static JSON in `src/Api/` (e.g., `countryData.json`, `footerApi.json`) is imported directly into components.

## Key Patterns & Conventions
- **Component Import Paths:** Use relative imports from `src/` (e.g., `../Component/Ui/Header`).
- **CSS:** All global and component styles are in `src/App.css` and related CSS files. Class names use BEM-like or descriptive naming.
- **Data Flow:**
  - No global state management; data is passed via props or imported JSON.
  - Example: `About.jsx` maps over `countryData.json` to render country facts.
- **Error Handling:**
  - Route errors are handled by `ErrorPage.jsx` via `errorElement` in router config.
- **Form Handling:**
  - `Contact.jsx` uses a custom `handleFormSubmit` function for form data logging.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (runs Vite)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint config in `eslint.config.js`)
- **No test scripts or test files are present.**

## External Dependencies
- **React 19, React DOM, React Router DOM v7, React Icons, Axios**
- **Vite** for build/dev
- **ESLint** with custom config (`eslint.config.js`):
  - Ignores `dist/`
  - Enforces no unused vars unless they start with uppercase or underscore
  - Uses recommended React/React Hooks/React Refresh rules

## Project-Specific Notes
- **Images:** Static images are in `public/image/` and referenced with absolute paths (e.g., `/public/image/world.png`).
- **Footer Data:** `Footer.jsx` expects `footerApi.json` to provide icon, title, and details for each contact method.
- **No TypeScript or advanced state management (Redux, Context) is used.**
- **No backend/API integration; all data is static.**

## Example: Adding a New Page
1. Create a new component in `src/pages/`.
2. Add a route in the router config in `App.jsx`.
3. Add a link in `Header.jsx` if needed.

## Key Files
- `src/App.jsx` (routing, app entry)
- `src/Component/Layout/AppLayout.jsx` (layout)
- `src/pages/` (route components)
- `src/Api/` (static data)
- `eslint.config.js` (lint rules)

---

**If you are unsure about a pattern, check for similar usage in `src/pages/` or `src/Component/Ui/`.**
