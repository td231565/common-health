<script setup lang="ts">
import { ref } from 'vue'

const isBannerLoaded = ref(false)
</script>

<template>
  <div class="header-banner" :class="{ default: !isBannerLoaded }">
    <picture>
      <source
        media="(max-width: 480px)"
        srcset="https://picsum.photos/300/250"
      />
      <source
        media="(min-width: 481px)"
        srcset="https://picsum.photos/970/250"
      />
      <img
        src="https://picsum.photos/300/250"
        alt="header-banner"
        @load="isBannerLoaded = true"
      />
    </picture>
  </div>
</template>

<style scoped>
.header-banner {
  padding: 12px 0;
  display: flex;
  justify-content: center;
  &.default {
    width: 970px;
    height: 250px;
  }
}

@media screen and (max-width: 480px) {
  .header-banner.default {
    width: 300px;
    height: 250px;
  }
}
</style>
