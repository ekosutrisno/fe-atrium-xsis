<template>
<div class="w-full font-semibold transform hover:scale-cs01 transition-transform flex items-center justify-between h-16 p-2 cursor-pointer bg-white ring-1 ring-green-400 hover:ring-2 text-green-800 rounded">
   <div class="inline-flex space-x-6 items-center">
   <div>
      <span class="text-xs text-gray-100 py-1 px-3 bg-green-400 rounded-full font-semibold">M</span>
      <!-- <span class="text-xs text-gray-100 py-1 px-3 bg-indigo-500 rounded-full font-semibold">L</span> -->
      <!-- <span class="text-xs text-gray-100 py-1 px-3 bg-blue-500 rounded-full font-semibold">C</span> -->
      <!-- <span class="text-xs text-gray-100 py-1 px-3 bg-yellow-500 rounded-full font-semibold">S</span> -->
      <!-- <span class="text-xs text-gray-100 py-1 px-3 bg-red-500 rounded-full font-semibold">A</span> -->
   </div>
   <div>
      <span class="block font-bold">Date</span>
      <span class="block text-sm">2020-12-01</span>
   </div>
   <div>
      <span class="block font-bold">Client</span>
      <span class="block text-sm">Azec Indonesia Management Service</span>
   </div>
   <div>
      <span class="block font-bold">Status</span>
      <span class="block text-sm">Masuk (M)</span>
   </div>
   <div>
      <span class="block font-bold">Start</span>
      <span class="block text-sm">09:00 AM</span>
   </div>
   <div>
      <span class="block font-bold">End</span>
      <span class="block text-sm">18:00 PM</span>
   </div>
   <div>
      <span class="block font-bold">Total</span>
      <span class="block text-sm">8:0 Hour</span>
   </div>
   </div>
   <div class="inline-flex space-x-3 items-center">
   <router-link class="px-4 py-1 text-sm rounded-full bg-green-500 text-gray-100 hover:bg-green-400" to="/timesheet">Detail</router-link>
   <router-link class="px-4 py-1 text-sm rounded-full bg-green-500 text-gray-100 hover:bg-green-400" to="/timesheet">Edit</router-link>
   <svg v-if="timesheet.idx >13" class="w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
   </svg>
   <svg v-else class="w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
   </svg>
   </div>
</div>
</template>

<script>
   export default {
      props:{
         timesheet: Object
      }
   }
</script>