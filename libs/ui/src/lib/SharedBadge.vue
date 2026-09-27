<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="badge">{{ label }}</span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  padding: .45rem .75rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  font: 700 .8rem/1 system-ui, sans-serif;
  letter-spacing: .04em;
}
</style>
