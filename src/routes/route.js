import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import AppLayout from '../layouts/AppLayout.vue'

// Pages
import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import Timesheet from '../pages/Timesheet.vue'
import Project from '../pages/Project.vue'
import Profile from '../pages/Profile.vue'
import DashboardAlt from '../pages/DashboardAlt.vue'

const routes = [
    {
    path: '/',
    component: Home
    },
    {
    path: '/dashboard-alt',
    component: DashboardAlt
    },
   {
      path: '/app',
      component: AppLayout,
      children: [
        {
          path: '/dashboard',
          component: Dashboard
        },
        {
          path: '/timesheet',
          component: Timesheet
        },
        {
          path: '/project',
          component: Project
        },
        {
          path: '/profile',
          component: Profile
        },
      ]
    },
]

export default createRouter({
   history: createWebHistory(),
   routes: routes
 })