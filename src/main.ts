import vue3GoogleLogin from 'vue3-google-login'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_CLIENT_ID
})
app.use(createPinia())
app.use(router)

app.mount('#app')
