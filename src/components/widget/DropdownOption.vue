<template>
<transition name="dropdown-fade">
   <div class="w-44 z-50 absolute shadow-lg h-auto right-8 top-10 pt-2 bg-gray-50 rounded-xl rounded-tr-sm flex flex-col overflow-hidden">
      <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
         <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
         <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
         </svg>
         <span class="font-semibold">Profile</span>
      </button>
      <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
         <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
         </svg>
         <span class="font-semibold">Notification</span>
      </button>
      <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
         <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
         </svg>
         <span class="font-semibold">Jobs</span>
      </button>
      <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
         <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
         </svg>
         <span class="font-semibold">Archive</span>
      </button>
   </div>
</transition>
</template>

<script>
   export default {
      
   }
</script>