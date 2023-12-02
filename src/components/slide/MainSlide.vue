<script setup lang="ts">
import { getNews } from '@/api'
import { useScreenStore } from '@/store/screen.ts'
import { defineAsyncComponent, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import CommonButton from '../common/CommonButton.vue'
import SlideTags from './SlideTags.vue'

const screenStore = useScreenStore()

const newsList = ref<Record<string, string>[]>([])
const getNewsList = async () => {
  const { sources } = await getNews()
  newsList.value = sources
  if (!newsList.value) {
    const { newsArr } = defineAsyncComponent(
      () => import('@/composable/news.ts')
    )
    newsList.value = newsArr
  }
  newsList.value = newsList.value.map((item: Record<string, string>) => {
    if (item.description.length > 30) {
      item.description = item.description.slice(0, 100).concat('...')
    }
    return item
  })
}
getNewsList()
</script>

<template>
  <carousel :items-to-show="1">
    <slide v-for="slide in newsList" :key="slide.id">
      <div class="slide-container" :class="{ flex: screenStore.isWildScreen }">
        <div v-if="screenStore.isWildScreen">
          <SlideTags />
          <h1>{{ slide.description }}</h1>
          <div class="flex justify-center items-center preview-area">
            <a :href="slide.url" target="_blank" rel="noopener noreferrer"
              ><CommonButton size="lg">立即閱讀</CommonButton></a
            >
          </div>
        </div>
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
        <div v-if="!screenStore.isWildScreen">
          <SlideTags />
          <h1>{{ slide.description }}</h1>
          <div class="flex justify-center items-center preview-area">
            <a :href="slide.url" target="_blank" rel="noopener noreferrer"
              ><CommonButton size="lg">立即閱讀</CommonButton></a
            >
          </div>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<style scoped lang="scss">
.preview-area {
  margin-top: 48px;
}

@media screen and (min-width: 600px) {
  .slide-container {
    > * {
      flex: 1;
    }
  }
}
</style>
