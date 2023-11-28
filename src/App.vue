<script setup lang="ts">
import HeaderBanner from './components/HeaderBanner.vue'
import HeaderNav from './components/HeaderNav.vue'
import MainArticle from './components/MainArticle.vue'
import MainBreadcrumb from './components/MainBreadcrumb.vue'
import MainSlide from './components/MainSlide.vue'
</script>

<template>
  <header>
    <HeaderBanner />
    <HeaderNav />
  </header>
  <main>
    <MainSlide />
    <MainBreadcrumb />
    <MainArticle />
    <div class="main-banner"></div>
  </main>
</template>

<style scoped>
header,
main {
  background-color: #f4f4f4;
}

main {
  padding: 32px 24px;
}

.main-banner {
  width: 100%;
  height: 234px;
  margin-top: 64px;
  background-color: #ccc;
}
</style>
