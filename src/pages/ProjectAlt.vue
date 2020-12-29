<template>
<div class="bg-gray-100 flex-1 flex flex-col">
    <div>
      <div class="flex items-center justify-between px-4 py-4 border-b">
        <div class="font-bold text-xl">Project</div>
        <div class="hidden md:inline-flex space-x-2">
          <button class="py-2 px-4 h-9 bg-white text-sm inline-flex items-center space-x-1 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Document</span>
          </button>
          <button class="py-2 px-4 h-9 bg-white text-sm inline-flex items-center space-x-1 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            <span>100</span>
          </button>
          <button class="py-2 px-4 h-9 text-sm inline-flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-500 text-gray-100 rounded">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add Project</span>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-between px-4">
        <div class="md:inline-flex items-center space-x-2">
          <button class="py-1 px-3 h-8 bg-white text-sm inline-flex items-center space-x-2 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <span>All</span>
            <span class="text-xs rounded-full bg-indigo-600 px-2 text-gray-100">100</span>
          </button>
          <button class="py-1 px-3 h-8 bg-white text-sm inline-flex items-center space-x-2 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <span>Backlog</span>
            <span class="text-xs rounded-full bg-indigo-600 px-2 text-gray-100">2</span>
          </button>
          <button class="py-1 px-3 h-8 bg-white text-sm inline-flex items-center space-x-2 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <span>On Progress</span>
            <span class="text-xs rounded-full bg-indigo-600 px-2 text-gray-100">13</span>
          </button>
          <button class="py-1 px-3 h-8 bg-white text-sm inline-flex items-center space-x-2 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <span>Need Review</span>
            <span class="text-xs rounded-full bg-indigo-600 px-2 text-gray-100">10</span>
          </button>
          <button class="py-1 px-3 h-8 bg-white text-sm inline-flex items-center space-x-2 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <span>Done</span>
            <span class="text-xs rounded-full bg-indigo-600 px-2 text-gray-100">10</span>
          </button>
        </div>
        <div class="flex justify-end space-x-2 px-4 py-2">
          <button class="p-1 h-7 bg-white text-sm inline-flex items-center space-x-1 hover:bg-gray-50 rounded ring-1 ring-gray-200">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </button>
          <button class="p-1 h-7 text-sm inline-flex items-center space-x-1 bg-indigo-600 hover:bg-indigo-500 text-gray-100 rounded">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto px-4 py-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <div  v-for="(project,idx) in projects" :key="idx" class="h-full max-h-80 p-4 rounded the-header ring-1 ring-gray-200 hover:shadow-lg cursor-pointer">
        <h1 class="font-semibold text-lg">SAP Basic Promotions Service</h1>
        <h1 class="text-xs font-semibold">Project ID.{{project.projectId}} </h1>
        <p class="text-sm mt-2">
          <span class="font-semibold">Project Description </span> Roles that may include capacity planning, installation, configuration, database design, migration, performance monitoring, security, trouble detection and data backup and recovery.
        </p>
        <div class="w-full flex items-center justify-start space-x-2 mt-4">
          <button class="py-0.5 px-1.5 bg-white text-xs inline-flex items-center space-x-1 hover:bg-gray-100 rounded ring-1 ring-gray-200">
            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Attachment</span>
          </button>
          <button class="py-0.5 px-1.5 bg-white text-xs inline-flex items-center space-x-1 hover:bg-gray-100 rounded ring-1 ring-gray-200">
            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Repository</span>
          </button>
          <button class="py-0.5 px-1.5 bg-white text-xs inline-flex items-center space-x-1 hover:bg-gray-100 rounded ring-1 ring-gray-200">
            <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Details</span>
          </button>
        </div>
        <div class="flex mt-4 items-center justify-between">
          <h1 class="font-semibold text-sm">Due Date Jan 04, 2020</h1>
        </div>
        <p class="text-xs font-medium mt-2">
          <span class="bg-indigo-100 py-0.5 px-1.5 rounded-full">#backend</span>
          <span class="bg-indigo-100 py-0.5 px-1.5 rounded-full">#backend</span>
          <span class="bg-indigo-100 py-0.5 px-1.5 rounded-full">#backend</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
 export default {
  setup(){
    const state = reactive({
      projects:[
        {
          projectId: 'f006fa51-d6ad'
        },
        {
          projectId: 'd2f0a735-5201'
        },
        {
          projectId: '330304d4-ac18'
        },
        {
          projectId: '4c1b2041-e748'
        },
        {
          projectId: '5a2a3c75-245a'
        },
        {
          projectId: '06e0a71e-443d'
        },
        {
          projectId: 'f381cebc-19c1'
        },
        {
          projectId: '010469bb-632a'
        },
        {
          projectId: '05bf6cb7-d8c2'
        },
        {
          projectId: 'a86be354-aaac'
        },
        {
          projectId: '7eae5f8c-0a4e'
        },
        {
          projectId: 'bf3ca2e1-f4c5'
        },
        {
          projectId: 'b4524067-ea8d'
        },
        {
          projectId: '393f9f58-439d'
        },
        {
          projectId: '62c6555f-3a8c'
        },
        {
          projectId: 'fe4d5820-8feb'
        },
        {
          projectId: 'e55fab17-18ab'
        },
        {
          projectId: '0bb49b0f-6119'
        },
        {
          projectId: '1412a306-68df'
        },
      ]
    })

    return{
      ...toRefs(state)
    }
  }
}
</script>