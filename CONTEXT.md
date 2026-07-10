# Context

## Project Overview

**svelte-shadcn-daisyui** is an internal component library for the team's SvelteKit applications. It provides reusable, documented, and tested UI components that can be consumed across multiple projects.

The architecture uses **shadcn-svelte** as the primary component foundation, with **DaisyUI** integrated for theme control. **Storybook** serves as the development, testing, and documentation environment for all components.

**Note**: This project focuses on the frontend component library. Backend services (.NET Core API) are out of scope.

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
| Component Docs | Storybook | 10.x |
| Linting | ESLint + Prettier | - |

## Key Terms

- **shadcn-svelte**: The primary component library. Components are copied into the project (not installed as a dependency), giving full control over customization. Built on Radix UI primitives and Tailwind CSS.
- **DaisyUI**: A Tailwind CSS plugin used specifically for **theme control**. Provides semantic color tokens and theme management that integrates with shadcn-svelte components.
- **Runes**: Svelte 5's reactivity primitives (`$state`, `$derived`, `$effect`, `$props`). This project uses Svelte 5 runes exclusively.
- **Component Library**: The output of this project. Components in `src/lib/` are published for consumption by other team projects.

## Architecture

```
src/
├── lib/           # Component library (the main output)
│   ├── components/  # shadcn-svelte components + custom wrappers
│   ├── themes/      # DaisyUI theme configuration
│   └── utils/       # Shared utilities
├── routes/        # SvelteKit app (for testing/demo)
└── stories/       # Storybook stories (component documentation)
```

## Conventions

- **TypeScript only** — no JavaScript files allowed in the component library
- Use Svelte 5 runes for all reactivity (no legacy `$:` statements)
- Tailwind CSS for styling (no separate CSS files unless necessary)
- Components must be documented in Storybook with stories
- Components must be accessible (WCAG 2.1 AA minimum)
- All components exported from `src/lib/index.ts`

## Current State

This is a fresh starter template. The component libraries are not yet installed. Next steps involve:
1. Installing and configuring shadcn-svelte
2. Installing and configuring DaisyUI for theming
3. Integrating DaisyUI theme tokens with shadcn-svelte components
4. Setting up Storybook for component development and documentation
5. Creating example components demonstrating the integration
