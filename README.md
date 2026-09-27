# Nx + Vue

A small modern monorepo using **Nx 23**, **Vue 3** and **Vite 8**.

This repository originally used Nx 12, Vue 2 and the old community `@nx-plus/vue` integration. It has been rebuilt around Nx's official first-party Vue tooling.

## Stack

- Nx 23.2.1
- `@nx/vue` 23.2.1
- Vue 3.5.43
- Vite 8.3.1
- TypeScript 6
- npm workspaces
- Node.js 22+

## Structure

```text
apps/
  my-app/      Vue application
libs/
  ui/          shared Vue component library
```

The app consumes `@nx-vue/ui` as a workspace package.

## Setup

```bash
npm install
npm run dev
```

## Validate

```bash
npm run typecheck
npm run build
```

## Nx

```bash
npm run graph
npm run show
```

Generate more projects with the official plugin:

```bash
npx nx g @nx/vue:app apps/another-app
npx nx g @nx/vue:lib libs/another-lib
```

Docs: https://nx.dev/docs/technologies/vue/introduction
