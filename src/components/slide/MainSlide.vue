<script setup lang="ts">
import { useScreenStore } from '@/store/screen.ts'
import CommonButton from '../common/CommonButton.vue'
import SlideTags from './SlideTags.vue'
// import { ref, onMounted } from 'vue'

const screenStore = useScreenStore()
</script>

<template>
  <section :class="{ flex: screenStore.isWildScreen }">
    <div v-if="screenStore.isWildScreen">
      <SlideTags />
      <h1>疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦？</h1>
      <div class="flex justify-center items-center preview-area">
        <CommonButton size="lg">立即閱讀</CommonButton>
      </div>
    </div>
    <div class="slide-container">
      <picture>
        <source
          media="(max-width: 375px)"
          srcset="https://picsum.photos/327/184"
        />
        <source
          media="(min-width: 465px)"
          srcset="https://picsum.photos/768/432"
        />
        <img
          src="https://picsum.photos/327/184"
          alt="slides"
          class="block w-full"
        />
      </picture>
    </div>
    <div v-if="!screenStore.isWildScreen">
      <SlideTags />
      <h1>疫情期間，癌症化療病人尿不出來又怕掛急診染疫，怎麼辦？</h1>
      <div class="flex justify-center items-center preview-area">
        <CommonButton size="lg">立即閱讀</CommonButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.preview-area {
  margin-top: 48px;
}

@media screen and (min-width: 600px) {
  .slide-container {
    padding-left: 24px;
  }
}
</style>
