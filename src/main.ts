import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router/route'
import 'virtual:uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
