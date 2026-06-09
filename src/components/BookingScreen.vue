<template>
  <div class="min-h-screen bg-[#070a13] text-[#f1f5f9] font-sans antialiased selection:bg-blue-600 selection:text-white pb-28 xl:pb-12">
    <div class="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative p-3 sm:p-4 md:p-8 max-w-[1600px] mx-auto">
      <header class="flex justify-between items-center mb-6 md:mb-8 border-b border-gray-800/60 pb-4 md:pb-5">
        <div class="flex items-center gap-2.5 sm:gap-3">
          <div class="h-8 w-8 sm:h-9 sm:w-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span class="text-white font-black text-xs sm:text-sm tracking-wider">H</span>
          </div>
          <div>
            <h1 class="text-base sm:text-lg font-bold tracking-tight text-white leading-none">HEKS Guest</h1>
            <p class="text-[9px] sm:text-[10px] text-gray-500 font-medium mt-0.5">Premium Dining Hub</p>
          </div>
        </div>
        
        <div class="flex items-center gap-1 sm:gap-2">
          <button class="p-2 text-gray-400 hover:text-white hover:bg-gray-800/40 rounded-xl transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button class="p-2 text-gray-400 hover:text-white hover:bg-gray-800/40 rounded-xl transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 md:gap-6 items-start">
        
        <div class="xl:col-span-4 flex flex-col gap-5 md:gap-6">
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group">
            <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700 pointer-events-none"></div>
            <div class="flex items-center gap-2.5 mb-5 text-blue-400 font-semibold tracking-wide text-sm">
              <div class="p-2 bg-blue-500/10 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h2>Table Reservation</h2>
            </div>

            <div class="grid grid-cols-2 gap-3.5 mb-4">
              <div>
                <label class="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1.5">Date</label>
                <input type="date" v-model="reservation.date" class="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 sm:py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner" />
              </div>
              <div>
                <label class="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1.5">Time</label>
                <input type="time" v-model="reservation.time" class="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 sm:py-2.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner" />
              </div>
            </div>

            <div class="mb-5">
              <label class="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1.5">Guests</label>
              <div class="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-1 max-w-full shadow-inner">
                <button @click="adjustGuests(-1)" class="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition active:scale-95 font-bold text-lg">-</button>
                <span class="text-xs sm:text-sm font-semibold text-white tracking-wide">{{ reservation.guests }} Guests</span>
                <button @click="adjustGuests(1)" class="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition active:scale-95 font-bold text-lg">+</button>
              </div>
            </div>

            <div>
              <label class="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1.5">Select Floor Zone</label>
              <div class="grid grid-cols-2 gap-3">
                <button 
                  @click="selectZone('Window Seat')"
                  :class="reservation.zone === 'Window Seat' ? 'border-blue-500/80 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10' : 'border-white/10 bg-white/5 backdrop-blur-sm text-gray-400 hover:border-white/20 hover:bg-white/10'"
                  class="flex flex-col items-center justify-center py-3 border rounded-xl transition-all duration-200 text-xs gap-1.5 font-medium active:scale-[0.98]"
                >
                  <span class="text-lg filter drop-shadow">🪟</span> Window Seat
                </button>
                <button 
                  @click="selectZone('Quiet Booth')"
                  :class="reservation.zone === 'Quiet Booth' ? 'border-blue-500/80 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10' : 'border-white/10 bg-white/5 backdrop-blur-sm text-gray-400 hover:border-white/20 hover:bg-white/10'"
                  class="flex flex-col items-center justify-center py-3 border rounded-xl transition-all duration-200 text-xs gap-1.5 font-medium active:scale-[0.98]"
                >
                  <span class="text-xl filter drop-shadow">🛋️</span> Quiet Booth
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden group">
            <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700 pointer-events-none"></div>
            <h4 class="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-3.5">Available Tables Layout</h4>
            
            <div v-if="isLoadingTables" class="text-center text-xs text-blue-400 py-6 font-medium animate-pulse">
              Loading layout map...
            </div>
            <div v-else-if="filteredTables.length === 0" class="text-center text-xs text-gray-500 py-6 border border-dashed border-gray-800 rounded-xl">
              No structural seating configs found.
            </div>
            <div v-else class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
              <button 
                v-for="table in filteredTables" 
                :key="table.id"
                @click="reservation.selectedTable = table.tableNo"
                :disabled="table.currentState !== 'AVAILABLE'"
                :class="[
                  reservation.selectedTable === table.tableNo 
                    ? 'border-blue-500 bg-blue-600/90 text-white shadow-xl shadow-blue-600/30 font-bold backdrop-blur-md' 
                    : table.currentState !== 'AVAILABLE'
                      ? 'border-white/5 bg-black/20 text-gray-600 cursor-not-allowed line-through opacity-40'
                      : 'border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 hover:border-white/20 hover:bg-white/10'
                ]"
                class="border py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-center relative active:scale-[0.96]"
              >
                <span class="block text-sm leading-tight">{{ table.tableNo }}</span>
                <span :class="reservation.selectedTable === table.tableNo ? 'text-blue-200' : 'text-gray-500'" class="block text-[8px] mt-0.5 font-medium">Cap: {{ table.capacity }}</span>
                
                <div v-if="table.currentState !== 'AVAILABLE'" class="absolute inset-0 flex items-center justify-center bg-black/60 rounded-xl backdrop-blur-[1px]">
                  <span class="text-[9px] font-black tracking-widest text-red-500 uppercase rotate-[-15deg] border border-red-500/30 bg-red-500/10 px-2 py-0.5 rounded shadow-lg shadow-red-500/20">
                    BOOKED
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="md:col-span-1 xl:col-span-5 flex flex-col">
          <div class="flex items-center justify-between gap-2 mb-4 md:mb-6">
            <div>
              <h2 class="text-base font-bold text-white tracking-wide">Pre-Order Menu</h2>
              <p class="text-xs text-gray-500">Skip the wait with express items.</p>
            </div>
            <span class="inline-flex items-center gap-1 text-[9px] uppercase font-bold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/20 tracking-wider flex-shrink-0">
              ⚡ Express
            </span>
          </div>

          <div v-if="isLoadingMenu" class="flex flex-col items-center justify-center py-20 text-blue-400 gap-3 border border-gray-800/40 rounded-2xl bg-[#0e131f]/40">
            <svg class="animate-spin h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-xs font-medium text-gray-400">Syncing catalog...</span>
          </div>

          <div v-else-if="menuErrorMessage" class="text-center py-10 px-4 text-xs text-red-400 border border-red-500/20 bg-red-500/5 rounded-2xl">
            ⚠️ {{ menuErrorMessage }}
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              v-for="item in menuItems" 
              :key="item.id" 
              class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl relative hover:-translate-y-1 hover:shadow-blue-900/20 hover:border-white/20 transition-all duration-300 group"
            >
              <div class="flex sm:flex-col h-full">
                <div class="w-28 h-full sm:w-full sm:h-40 bg-gray-900 overflow-hidden relative flex-shrink-0">
                  <img :src="item.imageUrl" :alt="item.name" class="w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-500 ease-out" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden sm:block"></div>
                  <span 
                    :class="item.status === 'IN STOCK' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'"
                    class="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 border rounded-md backdrop-blur-md shadow-sm"
                  >
                    {{ item.status }}
                  </span>
                </div>
                
                <div class="p-3 sm:p-4 flex flex-col justify-between w-full">
                  <div>
                    <div class="flex justify-between items-start gap-1 mb-1">
                      <h3 class="font-bold text-xs sm:text-sm text-white group-hover:text-blue-400 transition-colors duration-200 line-clamp-1 leading-tight">{{ item.name }}</h3>
                      <span class="text-xs sm:text-sm font-bold text-gray-200 flex-shrink-0">${{ item.price.toFixed(2) }}</span>
                    </div>
                    <p class="text-[11px] text-gray-400 mb-2 sm:mb-3 line-clamp-2 leading-tight sm:leading-relaxed h-7 sm:h-8">{{ item.description }}</p>
                  </div>
                  <div>
                    <span class="inline-block text-[8px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 rounded-md">
                      {{ item.category?.categoryName || 'General' }}
                    </span>
                  </div>
                </div>
              </div>
              
              <div class="p-3 pt-0 sm:p-4 sm:pt-0 mt-auto">
                <button @click="addToBasket(item)" class="w-full bg-[#141b29] hover:bg-blue-600 border border-gray-800 group-hover:border-blue-500/40 text-gray-200 hover:text-white font-bold text-[11px] py-3 sm:py-2 px-3 rounded-xl transition-all duration-200 active:scale-95">
                  ADD TO ORDER
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 xl:col-span-3 flex flex-col h-full">
          <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden group">
            <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl group-hover:bg-indigo-600/20 transition-all duration-700 pointer-events-none"></div>
            <div class="absolute top-0 right-5 bg-gradient-to-b from-blue-600/20 to-transparent border-x border-blue-500/20 rounded-b-lg px-2.5 py-0.5">
              <span class="text-[8px] uppercase font-black text-blue-400 tracking-widest">Live Desk Receipt</span>
            </div>

            <div>
              <div class="flex items-center gap-3 mt-2 mb-4 md:mb-6">
                <div class="bg-gradient-to-br from-blue-600/10 to-indigo-500/5 border border-blue-500/20 p-2 rounded-xl text-blue-400 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-sm text-white tracking-wide">Table {{ reservation.selectedTable || '--' }}</h4>
                  <p class="text-xs text-gray-400 mt-0.5">Tonight @ {{ reservation.time || '--:--' }} • {{ reservation.guests }} Guests</p>
                  <p class="text-[9px] text-blue-400 font-semibold tracking-wide mt-0.5 uppercase">{{ reservation.zone }}</p>
                </div>
              </div>

              <div class="border-t border-gray-800/60 my-3"></div>

              <div class="mb-4 sm:mb-6">
                <h5 class="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-3">Pre-Order Items</h5>
                <div v-if="basket.length === 0" class="text-center py-6 text-xs italic text-gray-500 border border-dashed border-gray-800 rounded-xl bg-[#141b29]/20">
                  No products added yet
                </div>
                <div v-else class="space-y-2 max-h-40 sm:max-h-48 md:max-h-64 overflow-y-auto pr-1 customs-scroll">
                  <div v-for="item in basket" :key="item.id" class="flex justify-between items-center text-xs bg-[#141b29]/40 border border-gray-800/40 p-2 rounded-xl">
                    <div class="flex items-center gap-2">
                      <span class="text-blue-400 font-bold bg-blue-500/10 px-1.5 py-0.5 rounded text-[9px]">x{{ item.quantity }}</span>
                      <span class="text-gray-200 font-medium line-clamp-1 max-w-[130px] sm:max-w-none">{{ item.name }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-white font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</span>
                      <button @click="removeFromBasket(item.id)" class="text-gray-500 hover:text-red-400 p-1 rounded transition-all">✕</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="border-t border-gray-800/60 my-3"></div>

              <div class="flex justify-between items-center mb-4">
                <span class="text-xs font-semibold tracking-wide text-gray-400">Total Balance</span>
                <span class="text-lg sm:text-xl font-black text-white tracking-tight">${{ basketTotal.toFixed(2) }}</span>
              </div>

              <button 
                @click="submitReservation"
                :disabled="isSubmitting"
                :class="isSubmitting ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-600/10 active:scale-[0.98]'"
                class="w-full flex items-center justify-center gap-2 font-bold text-xs py-3 sm:py-3.5 rounded-xl transition-all duration-300 uppercase tracking-widest"
              >
                <span v-if="isSubmitting" class="flex items-center gap-2">
                  <svg class="animate-spin h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Processing...
                </span>
                <span v-else>Confirm Reservation</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile Sticky Checkout Bar -->
    <div 
      class="fixed bottom-0 left-0 right-0 p-4 bg-[#0e131f]/95 backdrop-blur-xl border-t border-gray-800/60 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-50 xl:hidden flex justify-between items-center transition-transform duration-300" 
      :class="(basket.length > 0 || reservation.selectedTable) ? 'translate-y-0' : 'translate-y-full'"
    >
      <div>
        <p class="text-[10px] text-blue-400 font-bold uppercase tracking-wider mb-0.5">Table {{ reservation.selectedTable || '--' }}</p>
        <p class="text-lg font-black text-white leading-none">${{ basketTotal.toFixed(2) }}</p>
      </div>
      <button 
        @click="submitReservation"
        :disabled="isSubmitting"
        :class="isSubmitting ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/20 active:scale-95'"
        class="px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
      >
        <span v-if="isSubmitting">...</span>
        <span v-else>Confirm</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useToast } from '../composables/useToast'
import api from '../utils/api' 

const { showToast } = useToast()

// Core Booking States
const getTodayDateString = () => new Date().toISOString().split('T')[0];

const reservation = ref({
  date: getTodayDateString(),
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
  if (!reservation.value.date || !reservation.value.time) return;
  isLoadingTables.value = true
  try {
    const res = await api.get(`/dining-tables/availability?date=${reservation.value.date}&time=${reservation.value.time}`) 
    if (res.status === 1) {
      rawFloorGroups.value = res.data
      autoSelectFirstAvailable()
    }
  } catch (err) {
    console.error("Failed fetching dynamic floor layouts:", err)
  } finally {
    isLoadingTables.value = false
  }
}

watch([() => reservation.value.date, () => reservation.value.time], () => {
  fetchTablesData()
})

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
    menuErrorMessage.value = "Could not pull the live pre-order menu catalog."
    showToast("Catalog Error", menuErrorMessage.value, "error")
  } finally {
    isLoadingMenu.value = false
  }
}

/**
 * 4. SUBMIT RESERVATION
 */
const submitReservation = async () => {
  if (!reservation.value.date) {
    showToast("Missing Date", "Please select a reservation date.", "warning")
    return
  }
  if (!reservation.value.selectedTable) {
    showToast("Missing Table", "Please choose a table layout seat position.", "warning")
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
      showToast("Success", "🎉 Booking confirmed and stored successfully!", "success")
      basket.value = []
      fetchTablesData() 
    }
  } catch (error) {
    showToast("Checkout Failed", "Could not process request booking.", "error")
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
/* Mobile Input Indicators Styling Fixes */
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(0.85) hue-rotate(140deg) brightness(1.2);
  cursor: pointer;
}

/* Subtle customs scroll tracker track alignment bar */
.customs-scroll::-webkit-scrollbar {
  width: 4px;
}
.customs-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.customs-scroll::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.15);
  border-radius: 99px;
}
</style>