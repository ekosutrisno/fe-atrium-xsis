<template>
   <div class="flex-1 flex flex-col p-4">
      <div class="w-full h-16 flex-none flex-shrink-0  flex items-center justify-between border-b py-4">
         <div class="font-semibold text-lg">
            <h1>Performance {{ new Date().getFullYear()}} (Year-To-Date) | Dashboard</h1>
         </div>
         <div @click="profileMenuToggle" class="inline-flex cursor-pointer relative items-center hover:text-gray-500 font-semibold space-x-2">
            <img class="rounded-full w-10 h-10" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/scientist_einstein_avatar_professor-128.png" alt="i-1" />
            <div class="inline-flex items-center">
               <h1>Eko Sutrisno</h1>
               <svg class="w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
               </svg>
            </div>
            <DropdownOption v-click-away="profileMenuToggle" v-if="showMenu" />
         </div>
      </div>
      <!-- Router View -->
      <div class="flex-1 overflow-y-auto">
         <div class="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 m-4">
            <div class="w-full h-72 flex flex-col ring-2 ring-green-300 justify-between bg-transparent shadow rounded-lg p-2 hover:shadow-lg cursor-pointer">
               <div class="inline-block mx-auto text-green-500 font-semibold">
                  <HomeSVG class="w-20 h-20 mt-4" />
                  <div>Absensi</div>
               </div>
               <div class="text-center">
                  <h1 class="font-semibold text-3xl text-gray-600">38.486 %</h1>
                  <h1 class="text-sm text-gray-400">of 100 %</h1>
               </div>
               <div class="text-center">
                     <router-link to="/dashboard">
                     <button to="/dashboard" class="py-1 px-8 text-sm bg-green-100 rounded-full w-auto text-gray-600 transition-colors ease-linear font-bold focus:outline-none hover:bg-green-200 ring-1 ring-green-300 focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <span>
                           Detail
                        </span>
                     </button>
                  </router-link>
               </div>
            </div>
            <div class="w-full h-72 flex flex-col  ring-2 ring-purple-300 justify-between bg-transparent shadow rounded-lg p-2 hover:shadow-lg cursor-pointer">
               <div class="inline-block mx-auto text-purple-500 font-semibold">
                  <AboutSVG class="w-20 h-20 mt-4"/>
                  <div>Placement Productivity</div>
               </div>
               <div class="text-center">
                  <h1 class="font-semibold text-3xl text-gray-600">38.486 %</h1>
                  <h1 class="text-sm text-gray-400">of 100 %</h1>
               </div>
               <div class="text-center">
                     <router-link to="/dashboard">
                     <button to="/dashboard" class="py-1 px-8 text-sm bg-purple-100 rounded-full w-auto text-gray-600 transition-colors ease-linear font-bold focus:outline-none hover:bg-purple-200 ring-1 ring-purple-300 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <span>
                           Detail
                        </span>
                     </button>
                  </router-link>
               </div>
            </div>
            <div class="w-full h-72 flex flex-col  ring-2 ring-pink-300 justify-between bg-transparent shadow rounded-lg p-2 hover:shadow-lg cursor-pointer">
                  <div class="inline-block mx-auto text-pink-500 font-semibold">
                  <BlogSVG class="w-20 h-20 mt-4"/>
                  <div>Timesheet Collection</div>
               </div>
               <div class="text-center">
                  <h1 class="font-semibold text-3xl text-gray-600">33.332 %</h1>
                  <h1 class="text-sm text-gray-400">of 100 %</h1>
               </div>
               <div class="text-center">
                     <router-link to="/dashboard">
                     <button to="/dashboard" class="py-1 px-8 text-sm bg-pink-100 rounded-full w-auto text-gray-600 transition-colors ease-linear font-bold focus:outline-none hover:bg-pink-200 ring-1 ring-pink-300 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                        <span>
                           Detail
                        </span>
                     </button>
                  </router-link>
               </div>
            </div>
            <div class="w-full h-72 flex flex-col  ring-2 ring-indigo-300 justify-between bg-transparent shadow rounded-lg p-2 hover:shadow-lg cursor-pointer">
               <div class="inline-block mx-auto text-indigo-600 font-semibold">
                  <LoginSVG class="w-20 h-20 mt-4"/>
                  <div>Penilaian User</div>
               </div>
               <div class="text-center">
                  <h1 class="font-semibold text-3xl text-gray-600">25.000 %</h1>
                  <h1 class="text-sm text-gray-400">of 100 %</h1>
               </div>
               <div class="text-center">
                     <router-link to="/dashboard">
                     <button to="/dashboard" class="py-1 px-8 text-sm bg-indigo-100 rounded-full w-auto text-gray-600 transition-colors ease-linear font-bold focus:outline-none hover:bg-indigo-200 ring-1 ring-indigo-300 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span>
                           Detail
                        </span>
                     </button>
                  </router-link>
               </div>
            </div>
         </div>

         <div class="p-4">
            <div class="w-1/2 mx-auto h-72 flex flex-col  ring-2 ring-blue-300 justify-between bg-transparent shadow rounded-lg p-2 hover:shadow-lg cursor-pointer">
               <div class="inline-block mx-auto text-blue-500 font-semibold">
                  <QnaSVG class="w-32 h-32"/>
                  <div>Absensi</div>
               </div>
               <div class="text-center">
                  <h1 class="font-semibold text-3xl text-gray-600">36.364 %</h1>
                  <h1 class="text-sm text-gray-400">of 100 %</h1>
               </div>
               <div class="text-center">
                     <router-link to="/dashboard">
                     <button to="/dashboard" class="py-1 px-8 text-sm bg-blue-100 rounded-full w-auto text-gray-600 transition-colors ease-linear font-bold focus:outline-none hover:bg-blue-200 ring-1 ring-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <span>
                           Detail
                        </span>
                     </button>
                  </router-link>
               </div>
            </div>
         </div>
      </div>
</div>
</template>

<script>
import {ref} from 'vue'
import AboutSVG from '../components/svg/AboutSVG.vue'
import BlogSVG from '../components/svg/BlogSVG.vue'
import HomeSVG from '../components/svg/HomeSVG.vue'
import LoginSVG from '../components/svg/LoginSVG.vue'
import QnaSVG from '../components/svg/QnaSVG.vue'
import DropdownOption from '../components/widget/DropdownOption.vue'
   export default {
      components:{
         HomeSVG,
         AboutSVG,
         BlogSVG,
         LoginSVG,
         QnaSVG,
         DropdownOption
      },
      setup(){
        const showMenu = ref(false)
        const profileMenuToggle= ()=>{
          showMenu.value = !showMenu.value
        }
        return{showMenu,profileMenuToggle}
      }
   }
</script>

<style scoped>

</style>