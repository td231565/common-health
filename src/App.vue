<script setup lang="ts">
import HeaderBanner from './components/HeaderBanner.vue'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <header>
    <HeaderBanner />
    <HeaderNav />
  </header>
  <main></main>
</template>

<style scoped>
header,
main {
  background-color: #f4f4f4;
}
</style>
