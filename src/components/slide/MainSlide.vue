<script setup lang="ts">
import SlideTags from './SlideTags.vue'
import ReadButton from '../common/CommonButton.vue'
</script>

<template>
  <div class="slide-container">
    <img src="https://picsum.photos/327/184" alt="slides" />
  </div>
  <SlideTags />
  <h1>疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦？</h1>
  <div class="flex justify-center items-center preview-area">
    <ReadButton size="lg">立即閱讀</ReadButton>
  </div>
</template>

<style scoped lang="scss">
.preview-area {
  margin-top: 48px;
}
</style>
