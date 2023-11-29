import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useScreenStore = defineStore('screen', () => {
  const isWildScreen = ref(false)
  onMounted(() => {
    const detectWindowWidth = () => {
      const windowW = window.innerWidth
      isWildScreen.value = windowW > 600
    }
    detectWindowWidth()
    window.addEventListener('resize', detectWindowWidth, false)
  })

  return {
    isWildScreen,
  }
})
