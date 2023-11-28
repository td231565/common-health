<script setup lang="ts">
import { ref } from 'vue'

const hashtags = ref([
  { id: 1, name: '不分癌' },
  { id: 2, name: '常見治療問題' },
  { id: 3, name: '常見問題' },
])
</script>

<template>
  <section class="main-breadcrumb">
    <div class="main-breadcrumb__tag">
      <img src="../assets/play-angle.svg" alt="play" />
      <span>影音</span>
    </div>
    <span
      v-for="item in hashtags"
      :key="item.id"
      class="main-breadcrumb__hashtag"
      >#{{ item.name }}</span
    >
  </section>
</template>

<style scoped lang="scss">
.main-breadcrumb {
  width: 100%;
  margin-top: 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  &__tag {
    padding: 2px 12px;
    display: flex;
    color: #fff;
    background-color: rgba(#222222, 0.6);
    border-radius: 12px;
    span {
      padding-left: 6px;
    }
  }
  &__hashtag {
    padding-left: 12px;
    color: #b38e5b;
  }
}
</style>
