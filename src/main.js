import { createApp } from 'vue'
import App from './App.vue'
import route from './routes/route'
import './index.css'
import VueClickAway from "vue3-click-away";

createApp(App)
.use(route)
.use(VueClickAway)
.mount('#app')
