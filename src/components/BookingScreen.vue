<template>
  <div class="min-h-screen bg-[#0b0f19] text-[#e2e8f0] font-sans antialiased p-6 selection:bg-blue-500 selection:text-white">
    <header class="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
      <h1 class="text-xl font-bold tracking-wide text-gray-200">HEKS Guest</h1>
      <div class="flex items-center gap-4 text-gray-400">
        <button class="hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d=".5 12a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
        <button class="hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </button>
      </div>
    </header>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <div class="lg:col-span-4 flex flex-col gap-6">
        <div class="bg-[#131a26] border border-gray-800 rounded-xl p-5 shadow-xl">
          <div class="flex items-center gap-2 mb-6 text-blue-400 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            <h2>Table Reservation</h2>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label class="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">Date</label>
              <input type="date" v-model="reservation.date" class="w-full bg-[#1a2333] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">Time</label>
              <input type="time" v-model="reservation.time" class="w-full bg-[#1a2333] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">Guests</label>
            <div class="flex items-center justify-between bg-[#1a2333] border border-gray-700 rounded-lg p-2">
              <button @click="adjustGuests(-1)" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition font-bold text-lg">-</button>
              <span class="text-lg font-semibold text-white">{{ reservation.guests }}</span>
              <button @click="adjustGuests(1)" class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition font-bold text-lg">+</button>
            </div>
          </div>

          <div>
            <label class="block text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">Select Your Zone</label>
            <div class="grid grid-cols-2 gap-3">
              <button 
                @click="reservation.zone = 'window'"
                :class="reservation.zone === 'window' ? 'border-blue-500 bg-blue-950/20 text-blue-400' : 'border-gray-700 text-gray-400 hover:border-gray-600'"
                class="flex flex-col items-center justify-center py-4 border rounded-xl transition text-xs gap-2"
              >
                <span class="text-lg">🪟</span> Window Seat
              </button>
              <button 
                @click="reservation.zone = 'booth'"
                :class="reservation.zone === 'booth' ? 'border-blue-500 bg-blue-950/20 text-blue-400' : 'border-gray-700 text-gray-400 hover:border-gray-600'"
                class="flex flex-col items-center justify-center py-4 border rounded-xl transition text-xs gap-2"
              >
                <span class="text-lg">🛋️</span> Quiet Booth
              </button>
            </div>
          </div>
        </div>

        <div class="bg-[#131a26] border border-gray-800 rounded-xl p-5 shadow-xl grid grid-cols-3 gap-3">
          <button 
            v-for="table in tables" 
            :key="table"
            @click="reservation.selectedTable = table"
            :class="[
              reservation.selectedTable === table 
                ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)] text-blue-400 bg-blue-950/10' 
                : 'border-gray-800 text-gray-600 hover:border-gray-700'
            ]"
            class="border py-4 rounded-lg font-medium text-sm transition text-center"
          >
            {{ table }}
          </button>
        </div>
      </div>

      <div class="lg:col-span-5">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-6">
          <div>
            <h2 class="text-lg font-semibold text-gray-200">Pre-Order Menu</h2>
            <p class="text-xs text-gray-400">Skip the wait and order popular items now.</p>
          </div>
          <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold bg-green-950/40 text-green-400 px-2.5 py-1 rounded border border-green-800/40 tracking-wider">
            ⚡ Express Ready
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="item in menuItems" :key="item.id" class="bg-[#131a26] border border-gray-800/80 rounded-xl overflow-hidden flex flex-col justify-between shadow-md">
            <div>
              <div class="h-40 bg-gray-900 overflow-hidden relative">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover grayscale brightness-90 contrast-125" />
              </div>
              <div class="p-4">
                <div class="flex justify-between items-baseline gap-1 mb-2">
                  <h3 class="font-medium text-sm text-gray-200">{{ item.name }}</h3>
                  <span class="text-sm font-semibold text-gray-300">${{ item.price.toFixed(2) }}</span>
                </div>
                <p class="text-xs text-gray-400 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
            <div class="p-4 pt-0">
              <button 
                @click="addToBasket(item)"
                class="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2.5 px-4 rounded-lg transition"
              >
                ADD TO ORDER
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3 flex flex-col gap-4">
        <div class="bg-[#131a26] border border-gray-800 rounded-xl p-5 shadow-xl relative overflow-hidden">
          
          <div class="absolute top-0 right-4 bg-blue-950/50 border-x border-b border-blue-800/60 rounded-b-md px-3 py-1">
            <span class="text-[9px] uppercase font-bold text-blue-400 tracking-wider">Your Reservation</span>
          </div>

          <div class="flex items-start gap-3 mt-4 mb-6">
            <div class="bg-blue-950/40 border border-blue-900 p-2.5 rounded-lg text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-sm text-gray-200">Table {{ reservation.selectedTable }}</h4>
              <p class="text-xs text-gray-400 mt-0.5">Tonight @ {{ reservation.time || '--:--' }} • {{ reservation.guests }} Guests</p>
            </div>
          </div>

          <hr class="border-gray-800/80 my-4" />

          <div class="mb-6">
            <h5 class="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-4">Pre-Order Basket</h5>
            
            <div v-if="basket.length === 0" class="text-center py-6 text-xs italic text-gray-500">
              No items added yet
            </div>
            
            <div v-else class="space-y-3 max-h-48 overflow-y-auto pr-1">
              <div v-for="item in basket" :key="item.id" class="flex justify-between items-center text-xs">
                <div class="flex items-center gap-2">
                  <span class="text-gray-500 font-medium">x{{ item.quantity }}</span>
                  <span class="text-gray-300 font-medium">{{ item.name }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <span class="text-gray-300">${{ (item.price * item.quantity).toFixed(2) }}</span>
                  <button @click="removeFromBasket(item.id)" class="text-gray-600 hover:text-red-400 transition">✕</button>
                </div>
              </div>
            </div>
          </div>

          <hr class="border-gray-800/80 my-4" />

          <div class="flex justify-between items-center mb-5">
            <span class="text-xs font-medium text-gray-400">Subtotal</span>
            <span class="text-xl font-bold text-white">${{ basketTotal.toFixed(2) }}</span>
          </div>

          <button 
            :disabled="basket.length === 0"
            :class="basket.length === 0 ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-500'"
            class="w-full flex items-center justify-center gap-2 font-bold text-xs py-3 rounded-lg transition uppercase tracking-wider"
          >
            <span>▶</span> Confirm & Send
          </button>
        </div>

        <div class="border border-gray-900 bg-[#0e141f] rounded-xl px-4 py-3 flex items-center gap-3 text-xs text-gray-400">
          <div class="text-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
              <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.475.75.75 0 0 0-.722.668A12.178 12.178 0 0 0 3 9c0 5.523 3.635 10.19 8.658 11.75a.75.75 0 0 0 .484 0C17.165 19.19 20.8 14.523 20.8 9c0-.445-.03-.882-.089-1.311a.75.75 0 0 0-.722-.668 11.21 11.21 0 0 1-7.473-3.475ZM11.25 8.25a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-1.5 0v-4.5Zm.75 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="leading-snug">Secure checkout powered by <span class="font-semibold text-gray-300">HEKS Pay</span></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Interactive State
const reservation = ref({
  date: '',
  time: '19:30',
  guests: 2,
  zone: 'window',
  selectedTable: 'T-04'
})

const tables = ref(['T-04', 'T-05', 'T-06', 'T-01', 'T-02', 'T-03'])

const menuItems = ref([
  {
    id: 1,
    name: 'Classic Double',
    price: 18.50,
    description: 'Double Wagyu, Aged Cheddar, Truffle Mayo.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Artisan Pizza',
    price: 22.00,
    description: 'Buffalo Mozzarella, Basil, San Marzano.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Neon Wings',
    price: 14.00,
    description: 'Honey Sriracha, Blue Cheese Dip, Celery.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80'
  }
])

const basket = ref([])

// Business Logic Functions
const adjustGuests = (amount) => {
  const next = reservation.value.guests + amount
  if (next >= 1) reservation.value.guests = next
}

const addToBasket = (item) => {
  const existingItem = basket.value.find(b => b.id === item.id)
  if (existingItem) {
    existingItem.quantity++
  } else {
    basket.value.push({ ...item, quantity: 1 })
  }
}

const removeFromBasket = (id) => {
  basket.value = basket.value.filter(item => item.id !== id)
}

const basketTotal = computed(() => {
  return basket.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})
</script>

<style scoped>
/* Customs to fine tune form field appearances natively on dark setups */
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(0.7);
  cursor: pointer;
}
</style>