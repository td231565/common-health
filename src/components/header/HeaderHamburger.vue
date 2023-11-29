<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)
</script>

<template>
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
</template>

<style scoped lang="scss">
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

.menu-item-banner {
  margin: 24px auto 0;
  display: block;
}
</style>
