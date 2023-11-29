<script setup lang="ts">
import { ref } from 'vue'

const isSearchFocus = ref(false)

defineExpose({ isSearchFocus })
</script>

<template>
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
        src="@/assets/icon-search.svg"
        alt="search-icon"
        @click="isSearchFocus = false"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-search {
  position: relative;
  width: 100%;
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
