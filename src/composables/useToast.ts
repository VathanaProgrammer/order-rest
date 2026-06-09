import { ref } from 'vue'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastData {
  id: number
  title: string
  message: string
  type: ToastType
}

// Global state for toasts
const toasts = ref<ToastData[]>([])
let nextId = 1

export function useToast() {
  const showToast = (title: string, message: string = '', type: ToastType = 'info', durationMs: number = 4000) => {
    const id = nextId++
    
    toasts.value.push({
      id,
      title,
      message,
      type
    })

    if (durationMs > 0) {
      setTimeout(() => {
        removeToast(id)
      }, durationMs)
    }
  }

  const removeToast = (id: number) => {
    const index = toasts.value.findIndex(t => t.id === id)
    if (index !== -1) {
      toasts.value.splice(index, 1)
    }
  }

  return {
    toasts,
    showToast,
    removeToast
  }
}
