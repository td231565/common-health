<script setup lang="ts">
import { useScreenStore } from '@/store/screen.ts'
import { computed, onMounted, ref } from 'vue'
import CommonButton from '../common/CommonButton.vue'
import HeaderHamburger from './HeaderHamburger.vue'
import HeaderLinks from './HeaderLinks.vue'
import HeaderSearch from './HeaderSearch.vue'

const screenStore = useScreenStore()

// Detect scroll over navbar
const isScrollOverNav = ref(false)
onMounted(() => {
  const body = document.body
  const headerMenu = document.getElementById('headerMenu')
  if (!headerMenu) {
    return
  }
  const sticky = headerMenu.offsetTop
  const detectScroll = () => {
    isScrollOverNav.value = window.scrollY >= sticky
    body.style.paddingTop = window.scrollY >= sticky ? '61px' : '0'
  }

  window.addEventListener('scroll', detectScroll, false)
})

// Check search input focus
const searchRef = ref()
const isSearchFocus = computed(() => searchRef.value?.isSearchFocus)
</script>

<template>
  <HeaderLinks v-if="screenStore.isWildScreen && !isScrollOverNav" />
  <nav
    class="menu"
    :class="{ fixed: isScrollOverNav }"
    id="headerMenu"
    role="navigation"
  >
    <div
      v-if="!isScrollOverNav"
      class="flex items-center justify-between h-full"
    >
      <div class="menu-left flex">
        <HeaderHamburger />
        <img src="@/assets/menu-logo.svg" alt="logo" class="menu-logo" />
      </div>
      <div
        v-if="screenStore.isWildScreen"
        class="menu-middle"
        style="width: 400px"
      >
        <HeaderSearch />
      </div>
      <div class="menu-right flex items-center">
        <span v-if="screenStore.isWildScreen" style="margin-right: 12px"
          >會員限定</span
        >
        <CommonButton>登入</CommonButton>
        <CommonButton
          v-if="screenStore.isWildScreen"
          type="primary"
          style="margin-left: 12px"
          >加入會員</CommonButton
        >
      </div>
    </div>
    <div v-else class="flex items-center justify-between h-full">
      <div style="width: calc(100% - 100px)">
        <HeaderSearch ref="searchRef" />
      </div>
      <button v-if="!isSearchFocus" class="btn menu-btn--line">
        加入 LINE
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  position: sticky;
  top: 0;
  width: 100%;
  height: 61px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 4px #ddd;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
}

.menu-logo {
  padding-left: 16px;
}

.menu-btn--line {
  width: 88px;
  height: 30px;
  color: #fff;
  font-size: 14px;
  padding: 0;
  border: 1px solid #07b53b;
  background-color: #07b53b;
}
</style>
