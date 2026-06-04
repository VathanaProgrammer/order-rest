<script setup lang="ts">
import { ref } from 'vue'


const itemName = ref('')
const loading = ref(false)
const message = ref('')

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:7444/api'

const addItem = async () => {
  if (!itemName.value.trim()) return

  loading.value = true
  message.value = ''

  try {
    const response = await fetch(`${baseUrl}/test/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item: itemName.value })
    })
    
    const data = await response.json()
    if (data.success) {
      message.value = `Successfully sent: ${itemName.value}`
      itemName.value = ''
    } else {
      throw new Error(data.message || 'Unknown error')
    }
  } catch (err: any) {
    message.value = `Error: ${err.message}`
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="test-container">
    <div class="test-card">
      <h2>Add New Item (Sender)</h2>
      <p>This event will be broadcasted to ui-rest in real-time!</p>
      
      <div class="input-group">
        <input 
          v-model="itemName" 
          type="text" 
          placeholder="Enter item name..."
          @keyup.enter="addItem"
        />
        <button @click="addItem" :disabled="loading || !itemName.trim()">
          {{ loading ? 'Sending...' : 'Add Item' }}
        </button>
      </div>
      
      <p v-if="message" class="message" :class="{ error: message.startsWith('Error') }">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  font-family: 'Inter', sans-serif;
}

.test-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h2 {
  margin-top: 0;
  color: #1f2937;
}

p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.input-group {
  display: flex;
  gap: 0.5rem;
}

input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
}

input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s;
}

button:hover:not(:disabled) {
  background-color: #2563eb;
}

button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.message {
  margin-top: 1rem;
  color: #10b981;
  font-weight: 500;
}

.message.error {
  color: #ef4444;
}
</style>
