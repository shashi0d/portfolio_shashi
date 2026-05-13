# Design System — Shashidhara Portfolio

Stack: React Router v7 · TypeScript · Tailwind CSS v4 · Framer Motion

---

## Typography

**Font**: Figtree (Google Fonts, variable weight 300–900, italic included)  
Loaded in `app/root.tsx`. Applied via `font-sans antialiased` on `<body>`.

Tailwind font family override (`tailwind.config.js`):
```js
fontFamily: { sans: ['Figtree', 'system-ui', 'sans-serif'] }
```

### Custom Font Size Scale

| Token | Size | Line Height | Letter Spacing |
|---|---|---|---|
| `logline-mobile` | 2.5rem | 2.75rem | 0.03em |
| `logline` | 3.5rem | 3.75rem | 0.03em |
| `case` | 1.125rem | 1.75rem | — |
| `base-desktop` | 1rem | 1.5rem | — |
| `header-touch` | 1.25rem | 1.5rem | 0.04em |
| `table` | 0.875rem | 1.25rem | 0.03em |

### In-Use Type Styles

| Usage | Class |
|---|---|
| Hero H1 | `text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]` |
| Section H2 | `text-4xl md:text-5xl font-medium` |
| Card H3 | `text-2xl md:text-3xl font-medium` |
| Sub-heading H3 | `text-3xl md:text-4xl font-medium` |
| Body large | `text-xl md:text-2xl leading-relaxed` |
| Body | `text-base md:text-lg leading-relaxed` |
| Body small | `text-lg leading-relaxed` |
| Label/eyebrow | `text-sm font-medium uppercase tracking-wide` |
| Card meta | `text-sm font-medium` |
| Footer/caption | `text-sm` |

---

## Color Palette

### Light / Dark Semantic Tokens (CSS custom properties)

Defined in `app/app.css` using OKLCH. Consumed via Tailwind's `@theme inline` block.

| Token | Light | Dark |
|---|---|---|
| `--background` | `oklch(1 0 0)` — white | `oklch(0.145 0 0)` — near-black |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |
| `--card` | `oklch(1 0 0)` | `oklch(0.205 0 0)` |
| `--muted` | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` |
| `--muted-foreground` | `oklch(0.556 0 0)` | `oklch(0.708 0 0)` |
| `--border` | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` |
| `--primary` | `oklch(0.205 0 0)` — dark | `oklch(0.922 0 0)` — light |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` |
| `--radius` | `0.625rem` | — |

### Tailwind Gray Scale (most-used)

| Class | Usage |
|---|---|
| `gray-50` | Section backgrounds (light alt) |
| `gray-100` | Scrollbar track, skill tags, image bg |
| `gray-200` | Dividers |
| `gray-300` | Scrollbar thumb |
| `gray-400` | Muted/secondary text |
| `gray-500` | Label text |
| `gray-600` | Body secondary text |
| `gray-700` | Body text (dark mode card) |
| `gray-800` | Dark mode cards, dark skill tags |
| `gray-900` | Primary text, dark bg, CTA button |

### Project Accent Colors

Defined in `app/lib/constants.ts`. Used for category badge borders/text/bg tint (`color10` alpha).

| Project | Color | Hex |
|---|---|---|
| GenAI UX | Electric Blue | `#3B82F6` |
| VR Emotion | Deep Purple | `#8B5CF6` |
| WanderIndy | Warm Coral | `#F97316` |
| GrowthOps | Emerald Green | `#10B981` |
| Freetown | Deep Red | `#DC2626` |
| SECS | Emerald/Teal | `#059669` |

Badge pattern:
```tsx
style={{
  borderColor: project.color,
  color: project.color,
  backgroundColor: `${project.color}10`  // ~6% alpha tint
}}
```

---

## Dark Mode

Dark mode is class-based (`.dark` on `<html>`). Toggled by `ThemeToggle` using `ThemeContext`. FOUC prevention script inline in `root.tsx` reads `localStorage.theme` before first paint.

Tailwind custom variant: `@custom-variant dark (&:is(.dark *))` — use `dark:` prefix on any utility.

Base body: `bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`

---

## Spacing & Layout

### Container Widths

| Scope | Class |
|---|---|
| Global max (header/footer) | `max-w-7xl mx-auto px-6` |
| Content sections | `max-w-6xl mx-auto` |
| Hero/narrow | `max-w-5xl mx-auto` |
| Long-form text | `max-w-3xl mx-auto` |

### Horizontal Padding

- Mobile: `px-6`
- Desktop: `md:px-10`

### Section Vertical Rhythm

- Major sections: `py-24 md:py-32`
- Header internal: `py-4`
- Footer: `py-8 md:py-6`

### Grid

- 2-column card grid: `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`
- 2-column bio: `grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20`
- Custom 16-col utility available: `grid-cols-16`

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-lg` | ~0.5rem | Buttons, skill tags, form inputs |
| `rounded-xl` | ~0.75rem | ThemeToggle |
| `rounded-2xl` | ~1rem | Cards, image containers |
| `rounded-full` | 50% | Category badges, avatar dots, scrollbar thumb |

`--radius: 0.625rem` → `sm = radius-4px`, `md = radius-2px`, `lg = radius`, `xl = radius+4px`

---

## Components

### Header (`app/components/Header.tsx`)

- `fixed top-0 left-0 right-0 z-50`
- `bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm`
- `border-b border-gray-100 dark:border-gray-800`
- Logo: `text-base md:text-lg font-medium` — truncates to "SHASHI N" on mobile
- Nav links: `text-sm font-medium` — active state `text-gray-900`, inactive `text-gray-600 hover:text-gray-900`
- Dot accent: `w-2 h-2 bg-black dark:bg-white rounded-full`
- Mobile: hamburger menu with slide-in nav

### Footer (`app/components/Footer.tsx`)

- `border-t border-gray-100 dark:border-gray-800`
- `text-sm text-gray-500 dark:text-gray-400`
- Two-column flex: location left, copyright right

### ThemeToggle (`app/components/ThemeToggle.tsx`)

- `p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700`
- Moon icon (light→dark) / Sun icon (dark→light), `w-5 h-5`

### ProjectCard (`app/routes/home.tsx`)

- Wrapper: `rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 hover:shadow-lg`
- Image: `aspect-[16/10]`, `group-hover:scale-[1.02] transition-transform duration-500`
- Category badge: colored border + text + 10% alpha fill, `px-3 py-1 text-xs font-semibold rounded-full border-2`
- Title: `text-2xl md:text-3xl font-medium`, hover dims to `text-gray-600`
- Description: `text-base md:text-lg text-gray-600 line-clamp-2`

### Skill/Tag Pill

```tsx
className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
```

### CTA Buttons

Primary (filled):
```tsx
className="px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors font-medium"
```

Secondary (outline):
```tsx
className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:border-gray-900 dark:hover:border-gray-300 transition-colors font-medium"
```

### Eyebrow Label

```tsx
className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide"
```

---

## Animation

Library: **Framer Motion** + **react-intersection-observer**

### FadeInWhenVisible pattern

```tsx
function FadeInWhenVisible({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### Standard entrance

```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### Scroll bounce (indicator)

```tsx
animate={{ y: [0, 8, 0] }}
transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
```

### Carousel slide

```css
.carousel-slide { transition: transform 0.5s ease-in-out; }
.perspective-1000 { perspective: 1000px; }
```

- Interval: 3000ms
- Current image: scale 100%, prev/next: 75%, bg: 55%

### Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Focus & Accessibility

```css
*:focus-visible { outline: 2px solid black; outline-offset: 2px; }
/* dark: outline-white */
input:focus, textarea:focus, select:focus { ring: 2px black; border-color: black; }
```

Skip-to-content link on every page:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 ...">
  Skip to main content
</a>
```

---

## Scrollbar

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { @apply bg-gray-100; }
::-webkit-scrollbar-thumb { @apply bg-gray-300 rounded-full; }
::-webkit-scrollbar-thumb:hover { @apply bg-gray-400; }
```

---

## Image Conventions

- Project card thumbnail: `aspect-[16/10]`, `object-cover`
- Mobile screenshot carousel: `aspect-[393/852]`
- Profile photo: `aspect-[4/5] rounded-2xl grayscale hover:grayscale-0 transition-all duration-500`
- All images: `ImagePlaceholder` wrapper component handles loading/error states

---

## File Structure Reference

```
app/
  app.css              # Tailwind base + CSS custom properties (OKLCH tokens)
  root.tsx             # HTML shell, font load, dark mode FOUC script, ThemeProvider
  routes.ts            # Explicit route config
  lib/
    constants.ts       # COLORS, PROJECTS, SEO, PROJECT_CATEGORIES, getOGImageMeta
  components/
    Header.tsx
    Footer.tsx
    ThemeToggle.tsx
    WorkCarousel.tsx
    ImagePlaceholder.tsx
    ScrollStack.tsx / StackScroll.tsx
  contexts/
    ThemeContext.tsx    # theme state + toggleTheme
tailwind.config.js     # font, custom fontSize, grid-cols-16
```
