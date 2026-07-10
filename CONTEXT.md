# Context

## Project Overview

**@ss-devs/svelte-components** is an internal component library for the team's SvelteKit applications. It provides reusable, documented, and tested UI components that can be consumed across multiple projects.

The architecture uses **shadcn-svelte** as the primary component foundation, with **DaisyUI** integrated for theme control. **Storybook** serves as the development, testing, and documentation environment for all components.

**Note**: This project focuses on the frontend component library. Backend services (.NET Core API) are out of scope.

## Package & Distribution

- **Package name**: `@ss-devs/svelte-components`
- **Distribution**: npm package via GitHub Packages (private)
- **Format**: Svelte package (export `.svelte` files directly, consumers' bundlers handle compilation)
- **Versioning**: Changesets with direct publish (auto-publish on merge to main)
- **Consumer API**: Flat exports — `import { Button, Dialog } from '@ss-devs/svelte-components'`

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | SvelteKit | 2.x |
| UI Runtime | Svelte | 5.x (runes) |
| Styling | Tailwind CSS | 4.x |
| Component Foundation | shadcn-svelte | TBD |
| Theming | DaisyUI | TBD |
| Language | **TypeScript (strict)** | 6.x |
| Package Manager | pnpm | - |
| Testing | Vitest | 4.x |
| Visual Regression | Chromatic | TBD |
| Component Docs | Storybook | 10.x |
| Versioning | @changesets/cli | TBD |
| Linting | ESLint + Prettier | - |

## Key Terms

- **shadcn-svelte**: The primary component library. Components are copied into the project (not installed as a dependency), giving full control over customization. Built on Radix UI primitives and Tailwind CSS.
- **DaisyUI**: A Tailwind CSS plugin used specifically for **theme control**. Provides semantic color tokens and theme management that integrates with shadcn-svelte components.
- **Theme Bridge**: CSS variable mapping layer that translates DaisyUI variables (`--color-primary`, `--color-error`) to shadcn-svelte variables (`--primary`, `--destructive`). Ensures one source of truth for colors.
- **Runes**: Svelte 5's reactivity primitives (`$state`, `$derived`, `$effect`, `$props`). This project uses Svelte 5 runes exclusively.
- **Atomic Design**: Internal organization pattern (atoms, molecules, organisms) for maintainability. Not exposed to consumers.

## Architecture

### Theme Integration

DaisyUI provides theme tokens, shadcn-svelte provides component structure. The integration works via CSS variable mapping:

```css
/* src/lib/theme.css - automatic mapping */
:root {
  --primary: var(--color-primary);
  --primary-foreground: var(--color-primary-content);
  --destructive: var(--color-error);
  --destructive-foreground: var(--color-error-content);
  /* ... full semantic mapping */
}
```

Consumers generate a DaisyUI theme, paste it into their `app.css`, and shadcn-svelte components automatically use those colors. No confusion, one source of truth.

### Component Variants

shadcn-svelte variants only (e.g., `variant="destructive"`). These map to DaisyUI colors via the theme bridge. Consumers use shadcn-svelte's API, DaisyUI theme is applied transparently.

### Multiple Themes

DaisyUI's native multi-theme support via `data-theme` attribute. Consumers can define multiple themes (light, dark, custom) and switch dynamically.

### Directory Structure

```
src/
├── lib/
│   ├── atoms/           # Base components (Button, Input, Badge)
│   │   ├── button/
│   │   │   ├── button.svelte
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── input/
│   ├── molecules/       # Composed components (FormField, SearchBar)
│   ├── organisms/       # Complex components (Dialog, DataTable)
│   ├── theme.css        # DaisyUI → shadcn-svelte variable mapping
│   └── index.ts         # Flat exports for consumers
├── routes/              # SvelteKit app (for testing/demo)
└── stories/             # Storybook stories (categorized by Atomic Design)
```

**Note**: Atomic Design structure is internal only. Consumers see flat exports.

## Testing Strategy

- **Unit tests** (Vitest) — logic, state, props
- **Visual regression** (Chromatic) — catch unintended visual changes
- **Interaction tests** (Storybook play functions) — user flows, form submissions
- **a11y tests** — screen reader support only (ARIA attributes, focus management). Skip color contrast testing.

## Documentation

**Storybook only** (no separate docs site). Internal library, so no long-form docs needed. Storybook provides:
- Interactive component examples
- Auto-generated props tables
- Usage code snippets
- Categorized by Atomic Design (Atoms, Molecules, Organisms)

## Setup Script

Interactive setup with role selection:

**Consumer** (just wants to use components):
- Checks/installs Tailwind CSS (configures for SvelteKit if needed)
- Installs shadcn-svelte
- Installs DaisyUI
- Configures theme mapping

**Maintainer** (wants to contribute or fork):
- Everything above
- Installs Storybook + @storybook/sveltekit
- Installs @changesets/cli
- Installs Vitest + testing tools
- Configures dev dependencies

## Versioning Workflow

**Changesets + direct publish** (solo dev workflow):
1. Developer merges feature branch to main
2. GitHub Action detects changesets
3. Auto-bumps version + generates changelog
4. Publishes to npm immediately
5. No intermediate "Version Packages" PR (solo dev doesn't need it)

## Conventions

- **TypeScript only** — no JavaScript files allowed in the component library
- Use Svelte 5 runes for all reactivity (no legacy `$:` statements)
- Tailwind CSS for styling (no separate CSS files unless necessary)
- Components must be documented in Storybook with stories
- Components must be accessible (screen reader support, WCAG 2.1 AA for structure)
- All components exported from `src/lib/index.ts`

## Initial Components

Start with all shadcn-svelte components as base, organized into Atomic Design structure:
- **Atoms**: Button, Input, Badge, Label, Icon, etc.
- **Molecules**: FormField, SearchBar, etc. (as needed)
- **Organisms**: Dialog, DataTable, Navigation, etc.

## Current State

This is a fresh starter template. Next steps:
1. Run all-in-one setup script (interactive, role-based)
2. Copy all shadcn-svelte components into `src/lib/atoms/`
3. Configure DaisyUI theme mapping in `src/lib/theme.css`
4. Set up Storybook with Atomic Design categories
5. Configure changesets for versioning
6. Set up GitHub Actions for auto-publish
7. Create initial components demonstrating the integration
