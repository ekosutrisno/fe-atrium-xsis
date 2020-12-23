<template>
  <div class="flex-1 flex flex-col h-full">
    <div class="p-4 h-24 flex-none flex-shrink-0">
      <div class="w-full h-16 flex-none flex-shrink-0  flex items-center justify-between border-b py-4">
         <div class="font-semibold text-lg">
            <h1>Performance {{ new Date().getFullYear()}} (Year-To-Date) | Project</h1>
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
      <h1 class="font-semibold mb-2 py-4">List Project</h1>    
    </div>
    <div class="flex-1 flex-col space-y-2 overflow-y-auto p-4 mt-6">
      <ProjectItemCard v-for="(timesheet,idx) in 7" :key="idx" :timesheet="{idx: idx+1}"/>
    </div>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue'
import DropdownOption from '../components/widget/DropdownOption.vue'
import ProjectItemCard from '../components/widget/ProjectItemCard.vue'
export default {
  components: { DropdownOption, ProjectItemCard },
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