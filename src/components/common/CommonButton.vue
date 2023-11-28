<script setup lang="ts">
const props = defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <button class="btn" :class="{ 'btn--lg': props.size === 'lg' }">
    <slot></slot>
  </button>
</template>

<style scoped></style>
