<script setup lang="ts">
import { ref } from 'vue'

const date = ref('')
const time = ref('')
const guests = ref('2')
const name = ref('')

const submitBooking = () => {
  // Mock submit
  alert(`Booking confirmed for ${name.value} on ${date.value} at ${time.value} for ${guests.value} guests.`)
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30">
    <!-- Navbar -->
    <nav class="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-transparent">
      <div class="text-2xl font-bold tracking-widest text-amber-500 uppercase">Lumina</div>
      <div class="space-x-8 text-sm font-medium hidden md:block">
        <a href="#" class="hover:text-amber-400 transition-colors">Menu</a>
        <a href="#" class="hover:text-amber-400 transition-colors">Experience</a>
        <a href="#" class="hover:text-amber-400 transition-colors">Private Dining</a>
      </div>
    </nav>

    <!-- Hero Background -->
    <div class="absolute inset-0 z-0">
      <img src="../assets/hero.png" alt="Restaurant interior" class="w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 pt-20">
      
      <!-- Text Section -->
      <div class="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Savor The <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Extraordinary</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-300 font-light mb-8 max-w-lg">
          Reserve your table for an unforgettable culinary journey at Lumina. Where ambiance meets exquisite flavors.
        </p>
      </div>

      <!-- Booking Form Card (Glassmorphism) -->
      <div class="w-full md:w-1/2 max-w-md">
        <div class="backdrop-blur-xl bg-slate-900/50 p-8 rounded-3xl border border-slate-700/50 shadow-2xl shadow-black/50 transition-all hover:border-amber-500/30 duration-500">
          <h2 class="text-2xl font-semibold mb-6">Reserve a Table</h2>
          
          <form @submit.prevent="submitBooking" class="space-y-5">
            <div>
              <label class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
              <input v-model="name" type="text" required placeholder="John Doe" 
                     class="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all placeholder:text-slate-500" />
            </div>
            
            <div class="flex space-x-4">
              <div class="w-1/2">
                <label class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Date</label>
                <input v-model="date" type="date" required
                       class="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-slate-200" />
              </div>
              <div class="w-1/2">
                <label class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Time</label>
                <input v-model="time" type="time" required
                       class="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-slate-200" />
              </div>
            </div>

            <div>
              <label class="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Number of Guests</label>
              <select v-model="guests" 
                      class="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-slate-200 appearance-none">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
            </div>

            <button type="submit" 
                    class="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-1 mt-4">
              Confirm Reservation
            </button>   
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Custom styling for inputs to handle browser defaults for date/time pickers in dark mode */
::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.6;
    cursor: pointer;
}
::-webkit-calendar-picker-indicator:hover {
    opacity: 1;
}
</style>
