<h1 align="center">Nx + Vue</h1>

<p align="center">Modern Vue monorepo with Nx, Vite and a shared workspace library.</p>

<p align="center">
  <a href="https://github.com/diogopaulino/nx-vue/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/diogopaulino/nx-vue/actions/workflows/ci.yml/badge.svg"></a>
  <img alt="Node.js 22+" src="https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white">
  <img alt="Vue 3" src="https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white">
</p>

## Overview

A compact example of a current Nx workspace with:

- a Vue application in `apps/my-app`
- a shared Vue library in `libs/ui`
- official Nx Vue tooling via `@nx/vue`
- Vite for development and production builds
- TypeScript and npm workspaces

## Structure

```text
apps/
└── my-app/        Vue application

libs/
└── ui/            Shared Vue components
```

The app consumes `@nx-vue/ui` directly from the workspace.

## Run

```bash
npm ci
npm run dev
```

## Quality

```bash
npm run check
```

This runs type checking and a production build.

## Useful commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the app |
| `npm run check` | Typecheck + production build |
| `npm run graph` | Open the Nx dependency graph |
| `npm run show` | Inspect the app project |

## Extend

```bash
npx nx g @nx/vue:app apps/another-app
npx nx g @nx/vue:lib libs/another-lib
```

## Documentation

- [Nx + Vue](https://nx.dev/docs/technologies/vue/introduction)
- [Vue](https://vuejs.org/)
- [Vite](https://vite.dev/)
