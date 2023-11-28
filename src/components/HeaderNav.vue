<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(false)
</script>

<template>
  <nav class="menu" role="navigation">
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
      <ul class="menu-item" :class="{ hide: !isShow }">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Info</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Show me more</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #232323;
}

.menu {
  position: relative;
  padding: 8px 0;
  background-color: #fff;
  box-shadow: 0 4px 4px #ddd;
}

.menu-toggle {
  padding-left: 30px;
}

.menu-toggle-btn {
  cursor: pointer;
}

.menu-toggle-btn__line {
  position: relative;
  display: block;
  width: 30px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
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
      transform: rotate(45deg) translate(6px, 6px);
      background: #232323;
    }
    &__2 {
      transform: rotate(-45deg) translate(0, -1px);
      background: #232323;
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
  top: 30px;
  left: 0;
  width: 100vw;
  // margin-left: -50px;
  // padding: 50px;
  // padding-top: 125px;
  background: #ededed;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    padding: 10px 0;
    font-size: 22px;
  }
}

.menu-item.hide {
  top: 30px;
  left: 0;
  margin-left: -50px;
  transform: translate(-100%, 0);
}
</style>
