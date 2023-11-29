<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  { id: 1, name: '康健', url: 'https://www.commonhealth.com.tw/' },
  { id: 2, name: '大人社團', url: 'https://club.commonhealth.com.tw' },
  { id: 3, name: '康健知識庫', url: 'https://kb.commonhealth.com.tw' },
  { id: 4, name: '康健線上學習', url: 'https://course.commonhealth.com.tw' },
  { id: 5, name: '康健嚴選', url: 'https://www.commonhealth.com.tw/shop' },
  {
    id: 6,
    name: '康健出版',
    url: 'https://www.commonhealth.com.tw/channel/105',
  },
  {
    id: 7,
    name: '康健影音',
    url: 'https://www.commonhealth.com.tw/channel/124',
  },
  { id: 8, name: '書香花園', url: 'https://garden.cw.com.tw/' },
])
</script>

<template>
  <ul class="menu-links">
    <li v-for="item in links" :key="item.id">
      <a :href="item.url" target="_blank" rel="noopener noreferrer">{{
        item.name
      }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.menu-links {
  width: 100%;
  margin: 0;
  padding: 4px 96px 4px 0;
  display: flex;
  justify-content: end;
  background-color: #b38e58;
  li {
    padding: 0 12px;
    a {
      color: #fff;
    }
  }
}
</style>
