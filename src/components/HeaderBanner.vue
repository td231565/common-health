<script setup lang="ts"></script>

<template>
  <div class="header-banner">
    <picture>
      <source
        media="(max-width: 375px)"
        srcset="https://picsum.photos/300/250"
      />
      <source
        media="(min-width: 465px)"
        srcset="https://picsum.photos/970/250"
      />
      <img src="https://picsum.photos/300/250" alt="header-banner" />
    </picture>
  </div>
</template>

<style scoped>
.header-banner {
  padding: 12px 0;
  display: flex;
  justify-content: center;
}
</style>
