import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'swiper/css'
import 'swiper/css/pagination'

createApp(App)
  .use(router)
  .mount('#app')


