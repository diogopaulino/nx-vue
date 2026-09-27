<script setup lang="ts">
import { SharedBadge } from '@nx-vue/ui'
</script>

<template>
  <main class="page">
    <section>
      <SharedBadge label="Nx 23 + Vue 3" />
      <h1>Modern Nx + Vue</h1>
      <p>One app consuming a shared workspace library, powered by Nx and Vite.</p>
    </section>
  </main>
</template>

<style>
:root {
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  color-scheme: light dark;
}
body {
  margin: 0;
}
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}
section {
  max-width: 42rem;
}
h1 {
  margin: 1rem 0 .5rem;
  font-size: clamp(2.5rem, 8vw, 5rem);
}
p {
  line-height: 1.6;
}
</style>
