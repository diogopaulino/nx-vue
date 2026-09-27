<h1 align="center">Nx + Vue</h1>

<p align="center">
  Modern monorepo with <strong>Nx 23</strong>, <strong>Vue 3</strong> and <strong>Vite 8</strong>.
</p>

<p align="center">
  <a href="https://github.com/diogopaulino/nx-vue/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/diogopaulino/nx-vue/actions/workflows/ci.yml/badge.svg"></a>
  <img alt="Node.js 22+" src="https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white">
  <img alt="Vue 3" src="https://img.shields.io/badge/Vue-3.5-42b883?logo=vuedotjs&logoColor=white">
</p>

## Why this repo

A compact example of how to organize a Vue application and shared libraries in a current Nx workspace.

The original 2021 project used Nx 12, Vue 2 and `@nx-plus/vue`. It has been rebuilt with Nx's official Vue integration.

## Stack

| | |
|---|---|
| Workspace | Nx 23.2.1 |
| Frontend | Vue 3.5.43 |
| Build | Vite 8.3.1 |
| Language | TypeScript 5.9 |
| Package manager | npm workspaces |
| Runtime | Node.js 22+ |

## Structure

```text
apps/
└── my-app/        Vue application

libs/
└── ui/            Shared Vue components
```

`my-app` consumes `@nx-vue/ui` directly from the workspace.

## Quick start

```bash
npm install
npm run dev
```

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the app |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript/Vue validation |
| `npm run graph` | Open the Nx dependency graph |
| `npm run show` | Inspect the app project |

## Extend the workspace

```bash
npx nx g @nx/vue:app apps/another-app
npx nx g @nx/vue:lib libs/another-lib
```

## Learn more

- [Nx + Vue](https://nx.dev/docs/technologies/vue/introduction)
- [Vue](https://vuejs.org/)
- [Vite](https://vite.dev/)
