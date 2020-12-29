<template>
<div class="flex w-full max-w-screen-2xl mx-auto h-screen font-exo">
  <div class="w-64 hidden lg:block flex-none flex-shrink-0 overflow-y-auto max-w-xs bg-gray-900 border-r border-gray-100">
    <!-- Header Sidebar -->
    <div class="p-4">
      <div class="inline-flex space-x-2 items-center text-gray-50">
        <button class="rounded-full bg-indigo-600 py-2 px-4 font-bold">E</button>
        <h1 class="font-bold text-lg">ExoApp</h1>
      </div>
    </div>
    <!-- Button Nav -->
    <div>
      <ul>
        <li class="w-full">
          <button class="hover:bg-gray-800 border-l-4 border-transparent hover:border-indigo-400 py-3 pl-6 inline-flex space-x-4 font-semibold text-gray-300 hover:text-indigo-300 focus:text-indigo-300 transition w-full focus:outline-none focus:bg-gray-800 focus:border-blue-400">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </button>
        </li>
        <li class="w-full">
          <button class="hover:bg-gray-800 border-l-4 border-transparent hover:border-indigo-400 py-3 pl-6 inline-flex space-x-4 font-semibold text-gray-300 hover:text-indigo-300 focus:text-indigo-300 transition w-full focus:outline-none focus:bg-gray-800 focus:border-blue-400">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Invitations</span>
          </button>
        </li>
        <li class="w-full">
          <router-link to="/timesheet-alt" class="hover:bg-gray-800 border-l-4 border-transparent hover:border-indigo-400 py-3 pl-6 inline-flex space-x-4 font-semibold text-gray-300 hover:text-indigo-300 focus:text-indigo-300 transition w-full focus:outline-none focus:bg-gray-800 focus:border-blue-400">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Schedule</span>
          </router-link>
        </li>
        <li class="w-full">
          <router-link to="/project-alt" class="hover:bg-gray-800 border-l-4 border-transparent hover:border-indigo-400 py-3 pl-6 inline-flex space-x-4 font-semibold text-gray-300 hover:text-indigo-300 focus:text-indigo-300 transition w-full focus:outline-none focus:bg-gray-800 focus:border-blue-400">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Project</span>
          </router-link>
        </li>
        <li class="w-full">
          <button class="hover:bg-gray-800 border-l-4 border-transparent hover:border-indigo-400 py-3 pl-6 inline-flex space-x-4 font-semibold text-gray-300 hover:text-indigo-300 focus:text-indigo-300 transition w-full focus:outline-none focus:bg-gray-800 focus:border-blue-400">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span>Task</span>
          </button>
        </li>
        <li class="w-full">
          <button class="hover:bg-gray-800 border-l-4 border-transparent hover:border-indigo-400 py-3 pl-6 inline-flex space-x-4 font-semibold text-gray-300 hover:text-indigo-300 focus:text-indigo-300 transition w-full focus:outline-none focus:bg-gray-800 focus:border-blue-400">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <span>Profile</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <!-- Pages Load Here -->
  <router-view></router-view>
</div>
</template>

