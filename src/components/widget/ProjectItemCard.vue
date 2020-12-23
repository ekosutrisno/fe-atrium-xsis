<template>
<div class="w-full group font-semibold flex items-center justify-between h-16 p-2 cursor-pointer bg-white ring-1 hover:ring-2 ring-indigo-200 hover:ring-indigo-800 text-green-800 rounded">
   <div class="inline-flex space-x-6 items-center">
   <div>
      <span class="text-xs py-1 px-3 border text-indigo-800 rounded-full font-semibold">{{ timesheet.idx}}</span>
   </div>
   <div>
      <span class="block font-bold">Client</span>
      <span class="block text-sm">Azec Indonesia Management Service</span>
   </div>
   <div>
      <span class="block font-bold">Project</span>
      <span class="block text-sm">Azec Indonesia Management Service</span>
   </div>
   <div>
      <span class="block font-bold">Start Project</span>
      <span class="block text-sm">01-12-2020</span>
   </div>
   <div>
      <span class="block font-bold">End Project</span>
      <span class="block text-sm">28-12-2020</span>
   </div>
   <div>
      <span class="block font-bold">Role</span>
      <span class="block text-sm">Developer</span>
   </div>
   </div>
   <div class="inline-flex space-x-3 items-center">
   <router-link class="px-4 py-1 text-sm rounded-full bg-purple-500 text-gray-100 hover:bg-purple-400" to="/timesheet">Detail</router-link>
   <router-link class="px-4 py-1 text-sm rounded-full bg-purple-500 text-gray-100 hover:bg-purple-400" to="/timesheet">Edit</router-link>
   <svg class="w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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