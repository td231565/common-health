<script setup lang="ts">
const props = defineProps<{
  size?: 'sm' | 'md' | 'lg'
  type?: 'default' | 'primary'
}>()
</script>

<template>
  <button
    class="btn"
    :class="{
      'btn--lg': props.size === 'lg',
      'btn--primary': props.type === 'primary',
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
