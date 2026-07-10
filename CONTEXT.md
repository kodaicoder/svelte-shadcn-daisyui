# Context

## Project Overview

**svelte-shadcn-daisyui** is a SvelteKit starter template that combines two popular component libraries: [shadcn-svelte](https://www.shadcn-svelte.com/) and [DaisyUI](https://daisyui.com/). The goal is to provide a modern, accessible, and themeable foundation for building SvelteKit applications.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | SvelteKit | 2.x |
| UI Runtime | Svelte | 5.x (runes) |
| Styling | Tailwind CSS | 4.x |
| Component Libraries | shadcn-svelte, DaisyUI | TBD |
| Language | TypeScript | 6.x |
| Package Manager | pnpm | - |
| Testing | Vitest | 4.x |
| Component Docs | Storybook | 10.x |
| Linting | ESLint + Prettier | - |

## Key Terms

- **shadcn-svelte**: A collection of reusable Svelte components built with Radix UI and Tailwind CSS. Components are copied into the project (not installed as a dependency), giving full control over customization.
- **DaisyUI**: A Tailwind CSS plugin that provides semantic component class names (e.g., `btn`, `card`, `modal`) with built-in themes.
- **Runes**: Svelte 5's reactivity primitives (`$state`, `$derived`, `$effect`, `$props`). This project uses Svelte 5 runes exclusively.
- **Adapter**: SvelteKit's deployment adapter. Currently using `adapter-auto`.

## Architecture

```
src/
├── lib/           # Shared components, utilities, stores
├── routes/        # SvelteKit file-based routing
└── stories/       # Storybook stories
```

## Conventions

- Use Svelte 5 runes for all reactivity (no legacy `$:` statements)
- Tailwind CSS for styling (no separate CSS files unless necessary)
- Components in `src/lib/` should be reusable and self-contained
- TypeScript strict mode enabled

## Current State

This is a fresh starter template. The component libraries (shadcn-svelte and DaisyUI) are not yet installed. Next steps involve:
1. Installing and configuring shadcn-svelte
2. Installing and configuring DaisyUI
3. Setting up a theme system that works with both
4. Creating example components demonstrating integration
