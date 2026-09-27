# Nx + Vue

> **Legacy experiment (2021).** Kept as a historical reference and not actively maintained.

This repository was a small experiment combining **Nx 12** and **Vue 2** through the community `@nx-plus/vue` plugin, before Nx had first-party Vue support.

## What changed since then

The original stack is now obsolete:

- Nx 12 has been superseded by modern Nx releases.
- Vue 2 is end-of-life.
- `@nx-plus/vue` has not been actively released for years.
- Nx now provides official Vue support through `@nx/vue`.

For a new project, use the current Nx Vue preset instead:

```bash
npx create-nx-workspace@latest --preset=vue
```

Or add Vue to an existing Nx workspace:

```bash
nx add @nx/vue
```

## Why this repository is not being upgraded in place

A real migration would replace the old Vue integration, workspace configuration, test setup and most generated boilerplate. Recreating the example with the current Nx generator is cleaner and safer than changing dependency versions in place.

## Historical stack

- Nx 12
- Vue 2
- TypeScript
- Jest
- Cypress
- `@nx-plus/vue`

For current guidance, see the official Nx Vue documentation: https://nx.dev/docs/technologies/vue/introduction
