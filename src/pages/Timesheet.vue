<template>
  <div class="flex-1 flex flex-col h-full">
    <div class="p-4 h-36 flex-none flex-shrink-0">
      <div class="w-full h-16 flex-none flex-shrink-0  flex items-center justify-between border-b py-4">
         <div class="font-semibold text-lg">
            <h1>Performance {{ new Date().getFullYear()}} (Year-To-Date) | Timesheet</h1>
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
      <h1 class="font-semibold mb-2">Timesheet</h1>
      <div class="w-full">
        <select class="form-select w-full max-w-xs rounded border-none ring-2 ring-green-400">
          <option class="border-none" v-for="(item,i) in dates" :key="i">
            {{ `${item.year}19, ${item.month}` }}
          </option>
        </select>
        <div class="inline-flex space-x-2 ml-10">
          <span>Ket: </span>
          <span class="text-xs text-gray-100 py-1 px-3 bg-green-400 rounded-full font-semibold">Masuk (M)</span>
          <span class="text-xs text-gray-100 py-1 px-3 bg-indigo-500 rounded-full font-semibold">Libur (L)</span>
          <span class="text-xs text-gray-100 py-1 px-3 bg-blue-500 rounded-full font-semibold">Cuti (C)</span>
          <span class="text-xs text-gray-100 py-1 px-3 bg-yellow-500 rounded-full font-semibold">Sakit (S)</span>
          <span class="text-xs text-gray-100 py-1 px-3 bg-red-500 rounded-full font-semibold">Alfa (A)</span>
        </div>
         <div class="inline-flex float-right pr-5">
          <router-link class="px-4 py-2 inline-flex items-center space-x-2 rounded-full bg-blue-500 text-gray-100 hover:bg-blue-400" to="/timesheet">
          <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <span>Cetak Timesheet</span>
          </router-link>
        </div>
      </div>
     
    </div>
    <div class="flex-1 flex-col space-y-2 overflow-y-auto p-4 mt-6">
      <TimeSheetItemCard v-for="(timesheet,idx) in 30" :key="idx" :timesheet="{idx: idx+1}"/>
    </div>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
import TimeSheetItemCard from '../components/widget/TimeSheetItemCard.vue'
import DropdownOption from '../components/widget/DropdownOption.vue'
export default {
  components: { TimeSheetItemCard,DropdownOption },
    setup(){
        const showMenu = ref(false)
        const state = reactive({
          dates:[
            {
              year: 20,
              month: 'January'
            },
            {
              year: 20,
              month: 'February'
            },
            {
              year: 20,
              month: 'March'
            },
            {
              year: 20,
              month: 'April'
            },
            {
              year: 20,
              month: 'May'
            },
            {
              year: 20,
              month: 'June'
            },
            {
              year: 20,
              month: 'July'
            },
            {
              year: 20,
              month: 'August'
            },
            {
              year: 20,
              month: 'September'
            },
            {
              year: 20,
              month: 'October'
            },
            {
              year: 20,
              month: 'November'
            },
            {
              year: 20,
              month: 'December'
            },
          ]
        })
        const profileMenuToggle= ()=>{
          showMenu.value = !showMenu.value
        }
        return{ ...toRefs(state) ,showMenu,profileMenuToggle}
      }
}
</script>

<style>

</style>