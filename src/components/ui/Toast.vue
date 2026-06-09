<script setup lang="ts">
import { useToast } from '../../composables/useToast'
import { TransitionGroup } from 'vue'

const { toasts, removeToast } = useToast()

const getIconForType = (type: string) => {
  switch (type) {
    case 'success':
      return 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    case 'error':
      return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
    case 'warning':
      return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
    default:
      return 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
  }
}

const getColorClass = (type: string) => {
  switch (type) {
    case 'success': return 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
    case 'error': return 'bg-red-500/10 border-red-500/50 text-red-400'
    case 'warning': return 'bg-amber-500/10 border-amber-500/50 text-amber-400'
    default: return 'bg-blue-500/10 border-blue-500/50 text-blue-400'
  }
}
</script>

<template>
  <div class="fixed top-6 right-6 z-[100] flex flex-col gap-3 items-end pointer-events-none">
    <TransitionGroup name="toast">
      <div 
        v-for="toast in toasts" 
        :key="toast.id"
        :class="[
          'pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md w-80 max-w-[calc(100vw-3rem)]',
          getColorClass(toast.type)
        ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 shrink-0 mt-0.5">
          <path stroke-linecap="round" stroke-linejoin="round" :d="getIconForType(toast.type)" />
        </svg>
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-semibold text-gray-200">{{ toast.title }}</h4>
          <p v-if="toast.message" class="text-xs text-gray-400 mt-1 leading-relaxed line-clamp-2">
            {{ toast.message }}
          </p>
        </div>
        <button 
          @click="removeToast(toast.id)"
          class="shrink-0 p-1 rounded-md text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
}
</style>
