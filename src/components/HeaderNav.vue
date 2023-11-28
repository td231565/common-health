<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isShow = ref(false)

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
        <div class="menu-toggle">
          <div
            class="menu-toggle-btn"
            :class="{ close: isShow }"
            @click="isShow = !isShow"
          >
            <span class="menu-toggle-btn__line menu-toggle-btn__line__1"></span>
            <span class="menu-toggle-btn__line menu-toggle-btn__line__2"></span>
            <span class="menu-toggle-btn__line menu-toggle-btn__line__3"></span>
          </div>
          <div class="menu-item" :class="{ hide: !isShow }">
            <img
              src="https://picsum.photos/327/82"
              alt="menu-item-banner"
              class="menu-item-banner"
            />
            <ul>
              <li><a href="#">回首頁</a></li>
              <li><a href="#">財經</a></li>
              <li><a href="#">產業</a></li>
              <li><a href="#">國際</a></li>
              <li><a href="#">管理</a></li>
              <li><a href="#">環境</a></li>
              <li><a href="#">教育</a></li>
            </ul>
          </div>
        </div>
        <img src="../assets/menu-logo.svg" alt="logo" class="menu-logo" />
      </div>
      <div class="menu-right">
        <button class="btn">登入</button>
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
            src="../assets/icon-search.svg"
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
a {
  text-decoration: none;
  color: #232323;
}

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

.menu-toggle {
  padding-top: 6px;
}

.menu-toggle-btn {
  cursor: pointer;
}

.menu-toggle-btn__line {
  position: relative;
  display: block;
  width: 24px;
  height: 3px;
  margin-bottom: 5px;
  position: relative;
  background: #232323;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition:
    transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease;
  &__1 {
    transform-origin: center;
  }
  &__2 {
    transform-origin: center;
  }
}

.menu-toggle-btn.close {
  .menu-toggle-btn__line {
    &__1 {
      opacity: 1;
      transform: rotate(45deg) translate(5px, 6px);
    }
    &__2 {
      transform: rotate(-45deg) translate(0, -1px);
    }
    &__3 {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
  }
  .menu-item {
    transform: none;
  }
}

.menu-item {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    padding: 10px 0;
    font-size: 22px;
  }
  &.hide {
    top: 60px;
    left: 0;
    margin-left: -50px;
    transform: translate(-100%, 0);
  }
}

.menu-logo {
  padding-left: 16px;
  display: block;
}

.menu-item-banner {
  margin: 24px auto 0;
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
