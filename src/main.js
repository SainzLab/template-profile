import { createApp } from 'vue'
import App from './App.vue'

import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)

AOS.init({
  once: true,
  offset: 100,
  duration: 800
})

app.mount('#app')