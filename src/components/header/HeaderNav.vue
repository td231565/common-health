<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LoginButton from '../common/CommonButton.vue'
import HeaderHamburger from './HeaderHamburger.vue'

const isScrollOverNav = ref(false)
const isWildScreen = ref(false)
onMounted(() => {
  // scroll
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

  // window width
  const detectWindowWidth = () => {
    const windowW = window.innerWidth
    isWildScreen.value = windowW > 600
  }
  window.addEventListener('resize', detectWindowWidth, false)
})

const isSearchFocus = ref(false)
</script>

<template>
  <nav
    class="menu"
    :class="{ fixed: isScrollOverNav }"
    id="headerMenu"
    role="navigation"
  >
    <template v-if="!isScrollOverNav">
      <div class="menu-left">
        <HeaderHamburger />
        <img src="../../assets/menu-logo.svg" alt="logo" class="menu-logo" />
      </div>
      <div class="menu-right">
        <LoginButton>登入</LoginButton>
      </div>
    </template>
    <template v-else>
      <div class="menu-search" :class="{ focus: isSearchFocus }">
        <select>
          <option value="">全部</option>
        </select>
        <div class="menu-search__input">
          <input
            type="text"
            @focus="isSearchFocus = true"
            @blur="isSearchFocus = false"
            @keyup.enter="isSearchFocus = false"
          />
          <img
            src="../../assets/icon-search.svg"
            alt="search-icon"
            @click="isSearchFocus = false"
          />
        </div>
      </div>
      <button v-if="!isSearchFocus" class="btn menu-btn--line">
        加入 LINE
      </button>
    </template>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  position: sticky;
  top: 0;
  width: 100%;
  height: 61px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 4px #ddd;
  &-left {
    display: flex;
  }
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
}

.menu-logo {
  padding-left: 16px;
  display: block;
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

.menu-search {
  position: relative;
  width: calc(100% - 100px);
  padding: 5px 8px;
  display: flex;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 24px;
  overflow: hidden;
  transition: all ease 0.4s;
  select,
  input {
    border: none;
  }
  &.focus {
    width: 100%;
  }
  select {
    width: 106px;
    margin-right: 8px;
  }
  &__input {
    display: flex;
    width: calc(100% - 114px);
    border-left: 1px solid #dddddd;
    input {
      width: 100%;
      padding: 0 4px;
    }
  }
}
</style>
