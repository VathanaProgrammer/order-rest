<template>
  <div class="min-h-screen bg-[#0b0f19] text-[#e2e8f0] font-sans antialiased p-6 selection:bg-blue-500 selection:text-white">
    <header class="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
      <h1 class="text-xl font-bold tracking-wide text-gray-200">HEKS Guest</h1>
      <div class="flex items-center gap-4 text-gray-400">
        <button class="hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button class="hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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
                @click="selectZone('Window Seat')"
                :class="reservation.zone === 'Window Seat' ? 'border-blue-500 bg-blue-950/20 text-blue-400' : 'border-gray-700 text-gray-400 hover:border-gray-600'"
                class="flex flex-col items-center justify-center py-4 border rounded-xl transition text-xs gap-2"
              >
                <span class="text-lg">🪟</span> Window Seat
              </button>
              <button 
                @click="selectZone('Quiet Booth')"
                :class="reservation.zone === 'Quiet Booth' ? 'border-blue-500 bg-blue-950/20 text-blue-400' : 'border-gray-700 text-gray-400 hover:border-gray-600'"
                class="flex flex-col items-center justify-center py-4 border rounded-xl transition text-xs gap-2"
              >
                <span class="text-lg">🛋️</span> Quiet Booth
              </button>
            </div>
          </div>
        </div>

        <div class="bg-[#131a26] border border-gray-800 rounded-xl p-5 shadow-xl">
          <h4 class="text-xs uppercase tracking-wider text-gray-500 font-medium mb-4">Available Tables</h4>
          
          <div v-if="isLoadingTables" class="text-center text-xs text-blue-400 py-4">
            Loading layout map...
          </div>
          <div v-else-if="filteredTables.length === 0" class="text-center text-xs text-gray-500 py-4">
            No tables setup for this zone.
          </div>
          <div v-else class="grid grid-cols-3 gap-3">
            <button 
              v-for="table in filteredTables" 
              :key="table.id"
              @click="reservation.selectedTable = table.tableNo"
              :disabled="table.currentState !== 'AVAILABLE'"
              :class="[
                reservation.selectedTable === table.tableNo 
                  ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)] text-blue-400 bg-blue-950/10' 
                  : table.currentState !== 'AVAILABLE'
                    ? 'border-gray-900 bg-gray-900/40 text-gray-700 cursor-not-allowed line-through'
                    : 'border-gray-800 text-gray-400 hover:border-gray-700'
              ]"
              class="border py-4 rounded-lg font-medium text-sm transition text-center relative"
            >
              {{ table.tableNo }}
              <span class="block text-[9px] text-gray-500 font-normal">Cap: {{ table.capacity }}</span>
            </button>
          </div>
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

        <div v-if="isLoadingMenu" class="flex flex-col items-center justify-center py-20 text-blue-400 gap-2">
          <svg class="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-xs font-medium tracking-wide text-gray-400">Syncing live catalog...</span>
        </div>

        <div v-else-if="menuErrorMessage" class="text-center py-12 px-4 text-xs text-red-400 border border-red-900/50 bg-red-950/20 rounded-xl">
          ⚠️ {{ menuErrorMessage }}
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div 
            v-for="item in menuItems" 
            :key="item.id" 
            class="bg-[#131a26] border border-gray-800/80 rounded-xl overflow-hidden flex flex-col justify-between shadow-md relative"
          >
            <div>
              <div class="h-40 bg-gray-900 overflow-hidden relative">
                <img :src="item.imageUrl" :alt="item.name" class="w-full h-full object-cover brightness-90 contrast-125" />
                <span 
                  :class="item.status === 'IN STOCK' ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60' : 'bg-amber-950/80 text-amber-400 border-amber-800/60'"
                  class="absolute top-2 right-2 text-[9px] font-bold uppercase px-2 py-0.5 border rounded backdrop-blur-sm shadow-md"
                >
                  {{ item.status }}
                </span>
              </div>
              <div class="p-4">
                <div class="flex justify-between items-baseline gap-1 mb-1">
                  <h3 class="font-medium text-sm text-gray-200 leading-tight">{{ item.name }}</h3>
                  <span class="text-sm font-semibold text-gray-300">${{ item.price.toFixed(2) }}</span>
                </div>
                <p class="text-xs text-gray-500 mb-3 line-clamp-1">{{ item.description }}</p>
                <span class="inline-block text-[9px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/40 border border-blue-900/40 px-2 py-0.5 rounded">
                  {{ item.category?.categoryName || 'General' }}
                </span>
              </div>
            </div>
            <div class="p-4 pt-0">
              <button @click="addToBasket(item)" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2.5 px-4 rounded-lg transition">
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
              <h4 class="font-semibold text-sm text-gray-200">Table {{ reservation.selectedTable || '--' }}</h4>
              <p class="text-xs text-gray-400 mt-0.5">Tonight @ {{ reservation.time || '--:--' }} • {{ reservation.guests }} Guests</p>
              <p class="text-[10px] text-blue-400 mt-0.5">Zone: {{ reservation.zone }}</p>
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
            @click="submitReservation"
            :disabled="isSubmitting"
            :class="isSubmitting ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-500'"
            class="w-full flex items-center justify-center gap-2 font-bold text-xs py-3 rounded-lg transition uppercase tracking-wider"
          >
            <span v-if="isSubmitting">⌛ Sending...</span>
            <span v-else>▶ Confirm & Send</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from '../utils/api' 

// Core Booking States
const reservation = ref({
  date: '',
  time: '19:30',
  guests: 2,
  zone: 'Window Seat', 
  selectedTable: ''     
})

const basket = ref([])

// Dynamic Response Repositories
const rawFloorGroups = ref([]) 
const menuItems = ref([])

// Async Loading flags
const isLoadingTables = ref(false)
const isLoadingMenu = ref(false)
const isSubmitting = ref(false)
const menuErrorMessage = ref('')

/**
 * 1. FETCH GROUPED DINING TABLES
 */
const fetchTablesData = async () => {
  isLoadingTables.value = true
  try {
    const res = await api.get('/dining-tables/grouped') 
    if (res.status === 1) {
      rawFloorGroups.value = res.data
      autoSelectFirstAvailable()
    }
  } catch (err) {
    console.error("Failed fetching dynamic floor layouts:", err)
  } finally { // <--- Fixed Typo Here
    isLoadingTables.value = false
  }
}

/**
 * 2. COMPUTED FILTER
 */
const filteredTables = computed(() => {
  const matchingGroup = rawFloorGroups.value.find(g => g.floor === reservation.value.zone)
  return matchingGroup ? matchingGroup.tables : []
})

const selectZone = (zoneName) => {
  reservation.value.zone = zoneName
  autoSelectFirstAvailable()
}

const autoSelectFirstAvailable = () => {
  if (filteredTables.value.length > 0) {
    const available = filteredTables.value.find(t => t.currentState === 'AVAILABLE')
    reservation.value.selectedTable = available ? available.tableNo : filteredTables.value[0].tableNo
  } else {
    reservation.value.selectedTable = ''
  }
}

/**
 * 3. FETCH PRE-ORDER MENU
 */
const fetchMenuItems = async () => {
  isLoadingMenu.value = true
  menuErrorMessage.value = ''
  try {
    const apiResponse = await api.get('/menu-items')
    if (apiResponse.status === 1) {
      menuItems.value = apiResponse.data
    } else {
      throw new Error(apiResponse.message)
    }
  } catch (error) {
    menuErrorMessage.value = "Could not pull the live pre-order menu."
  } finally {
    isLoadingMenu.value = false
  }
}

/**
 * 4. SUBMIT RESERVATION
 */
const submitReservation = async () => {
  if (!reservation.value.date) {
    alert("Please select a reservation date.")
    return
  }
  if (!reservation.value.selectedTable) {
    alert("Please choose a table layout seat position.")
    return
  }

  isSubmitting.value = true
  const payload = {
    date: reservation.value.date,
    time: reservation.value.time,
    guests: reservation.value.guests,
    zone: reservation.value.zone,
    selectedTable: reservation.value.selectedTable,
    basket: basket.value.map(item => ({ id: item.id, quantity: item.quantity }))
  }

  try {
    const result = await api.post('/reservations', payload)
    if (result.status === 1) {
      alert("🎉 Booking confirmed and stored successfully!")
      basket.value = []
      fetchTablesData() 
    }
  } catch (error) {
    alert("Could not process request booking.")
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  fetchTablesData()
  fetchMenuItems()
})

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
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(0.7);
  cursor: pointer;
}
</style>