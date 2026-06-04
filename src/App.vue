<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BookingScreen from './components/BookingScreen.vue'
import TestSender from './components/TestSender.vue'

const currentPath = ref(window.location.pathname)

onMounted(() => {
  window.addEventListener('popstate', () => {
    currentPath.value = window.location.pathname
  })
})
</script>

<template>
  <TestSender v-if="currentPath === '/test'" />
  <BookingScreen v-else />
</template>
