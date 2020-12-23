<template>
   <div class="max-w-screen-2xl mx-auto">
      <div class="flex w-full h-screen">
         <div class="w-72 flex-shrink-0 overflow-y-auto flex-none bg-gray-50 shadow">
            <router-link to="/">
               <div class="w-full p-4">
                  <h1 class="font-bold">
                  <span class="text-green-600 text-4xl">Atrium</span>
                  <span class="text-gray-700 text-xl"> Xsis</span>
                  </h1>
               </div>
            </router-link>
            <div class="w-full p-4">
               <div class="block-btn-nav">
                  <h1 class="mb-2 ml-2 text-sm text-gray-500">Your Indicator</h1>
                  <!-- Link Wrapper -->
                  <div class="space-y-2 flex flex-col">
                     <router-link to="/dashboard">
                        <button class="py-2 px-4 rounded w-full text-gray-600 inline-flex space-x-2 items-center transition-colors ease-linear font-bold focus:outline-none hover:bg-green-500 hover:text-gray-100">
                           <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                           </svg>
                           <span>
                              Dashboard
                           </span>
                        </button>
                     </router-link>
                     <router-link to="/project">
                        <button class="py-2 px-4 rounded w-full text-gray-600 inline-flex space-x-2 items-center transition-colors ease-linear font-bold focus:outline-none hover:bg-green-500 hover:text-gray-100">
                           <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                           <span>
                              Project
                           </span>
                        </button>
                     </router-link>
                     <router-link to="/timesheet">
                        <button class="py-2 px-4 rounded w-full text-gray-600 inline-flex space-x-2 items-center transition-colors ease-linear font-bold focus:outline-none hover:bg-green-500 hover:text-gray-100">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                           </svg>
                           <span>
                              Timesheet
                           </span>
                        </button>
                     </router-link>
                     <router-link to="/profile">
                        <button class="py-2 px-4 rounded w-full text-gray-600 inline-flex space-x-2 items-center transition-colors ease-linear font-bold focus:outline-none hover:bg-green-500 hover:text-gray-100">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                           </svg>
                           <span>
                              Profile
                           </span>
                        </button>
                     </router-link>
                  </div>
               </div>
               <div class="block-btn-nav mt-3">
                  <h1 class="mb-2 ml-2 text-sm text-gray-500">Internal Vacancy</h1>
                  <!-- Link Wrapper -->
                  <div class="space-y-2 flex flex-col">
                     <router-link to="/dashboard">
                     <button to="/dashboard" class="py-2 px-4 rounded w-full text-gray-600 inline-flex space-x-2 items-center transition-colors ease-linear font-bold focus:outline-none hover:bg-green-500 hover:text-gray-100">
                        <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>
                           View
                        </span>
                     </button>
                  </router-link>
                  </div>
               </div>
            </div>
         </div>
            <router-view></router-view>
      </div>
   </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>

</style>