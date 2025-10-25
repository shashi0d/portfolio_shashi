# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Shashidhara Narayanappa, an HCI researcher and design enthusiast. The site is built with React Router v7, TypeScript, and Tailwind CSS v4, showcasing professional work including VR research, interactive kiosk development, and HCI design projects.

## Development Commands

### Local Development
```bash
npm run dev           # Start development server (default: http://localhost:5173)
npm run build         # Build for production
npm run start         # Start production server
npm run typecheck     # Run TypeScript type checking and generate route types
```

### Type Generation
React Router v7 uses automatic type generation. Before running `tsc`, you must run:
```bash
npm run typecheck     # Runs react-router typegen && tsc
```

This generates route-specific types in `.react-router/types/` that are referenced in components.

## Architecture & Routing

### React Router v7 File-Based Routing
Routes are explicitly defined in `app/routes.ts` (not file-system based):

```typescript
export default [
  index("routes/home.tsx"),                    // /
  route("work", "routes/work.tsx"),            // /work (redirects to home)
  route("work/:projectId", "routes/work/[projectId].tsx"), // /work/wanderindy, /work/project-1, etc.
  route("contact", "routes/contact.tsx"),      // /contact
] satisfies RouteConfig;
```

**Important**: When adding new routes, update `app/routes.ts` - files in `app/routes/` directory are NOT automatically discovered.

### Route Types System
Each route component imports its types from a generated `+types/{filename}` module:

```typescript
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) { ... }
export default function Home() { ... }
```

Run `npm run typecheck` to generate these types before type-checking.

### SSR Configuration
The app uses server-side rendering (SSR) by default, configured in `react-router.config.ts`:
```typescript
export default {
  ssr: true,
} satisfies Config;
```

## Component Architecture

### Layout Structure
- **`app/root.tsx`**: Root layout with HTML shell, error boundary, and global styles
  - Loads Inter font from Google Fonts
  - Includes global `app.css` for Tailwind base styles
  - Provides error boundary for 404s and runtime errors

- **`app/components/Header.tsx`**: Fixed header with navigation
  - Fixed positioning with backdrop blur effect
  - Uses `useLocation()` for active link highlighting

- **`app/components/Footer.tsx`**: Site footer

### Page Components

**`app/routes/home.tsx`** - The main landing page:
- Contains project data for the work showcase (hardcoded array)
- Three main sections: Hero, Work Carousel, About
- Projects data structure includes:
  - Project metadata (id, title, description, years, role, scope)
  - Media links (Figma prototypes, external links)
  - Images array for carousel display
  - `hasVideo` flag for video-based projects

**`app/routes/work/[projectId].tsx`** - Dynamic project case study pages:
- URL pattern: `/work/wanderindy`, `/work/project-1`, etc.
- Project data is hardcoded in `projectData` object (keyed by projectId)
- Each project has structured content sections with:
  - `type`: "section"
  - `title`, `subtitle`, `content`
  - Optional `features` array (bullet points)
  - Optional `subsections` (nested content)
- Falls back to "project-1" if projectId not found

**`app/components/WorkCarousel.tsx`** - Work showcase carousel:
- Auto-rotating 3D carousel with 3-second intervals
- Displays previous/current/next images simultaneously
- Responsive scaling: current (100%), prev/next (75%), background (55%)
- Handles three display modes:
  1. Single image: Centered, max-height 600px
  2. Multiple images: 3D carousel with rotation
  3. Video: Placeholder with play icon
- Uses mobile-first aspect ratio (393/852) for screenshots

## Data Management

Currently, all project data is **hardcoded in components**:
- Home page projects: `app/routes/home.tsx` (lines 13-56)
- Case study details: `app/routes/work/[projectId].tsx` (lines 42-230)

To add a new project:
1. Add project object to `projects` array in `app/routes/home.tsx`
2. Add matching entry to `projectData` object in `app/routes/work/[projectId].tsx`
3. Ensure `id` fields match between both files
4. Place images in `public/images/{project-folder}/`

## Styling

### Tailwind CSS v4
Uses Tailwind CSS v4 with Vite plugin (`@tailwindcss/vite`):
- Configuration: `tailwind.config.js`
- Global styles: `app/app.css` imports Tailwind layers
- No custom theme overrides currently

### Design System
- Font: Inter (Google Fonts, loaded in root.tsx)
- Color palette: Gray scale (gray-50 to gray-900) with minimal accents
- Spacing: Generous whitespace, consistent padding/margins
- Layout: Fixed header (z-50), scrollable content, fixed footer

## Build Configuration

### Vite Plugins (vite.config.ts)
```typescript
plugins: [
  tailwindcss(),      // Tailwind CSS v4 support
  reactRouter(),      // React Router v7 framework
  tsconfigPaths()     // TypeScript path aliases (~/* → ./app/*)
]
```

### TypeScript Path Alias
Use `~/` to reference app directory:
```typescript
import { Header } from "~/components/Header";
```

## Common Tasks

### Adding a New Route
1. Create route file in `app/routes/`
2. Add route to `app/routes.ts` using `route()` or `index()`
3. Import route types: `import type { Route } from "./+types/{filename}";`
4. Run `npm run typecheck` to generate types

### Adding a New Project
1. Add project object to `projects` in `app/routes/home.tsx`
2. Add detailed project data to `projectData` in `app/routes/work/[projectId].tsx`
3. Add images to `public/images/{project-id}/`
4. Ensure consistent `id` values across both files

### Modifying Carousel Behavior
Edit `app/components/WorkCarousel.tsx`:
- Auto-rotation interval: line 77 (currently 3000ms)
- Image positioning: lines 216-240 (transform, scale, opacity)
- Aspect ratio: line 252 (currently 393/852 for mobile screenshots)

### Updating Site Metadata
- Home page meta: `app/routes/home.tsx` (lines 6-11)
- Individual project meta: Generated from project data in dynamic route
- Root HTML meta: `app/root.tsx` (lines 29-32)
