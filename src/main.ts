import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router/route'
import 'virtual:uno.css'
import axios from "axios";
import './assets/css/global.less'
// 禁止客户端ajax携带cookie到服务端去
axios.defaults.withCredentials = false;

const app = createApp(App)
// vue3中把变量放到全局中的方法
app.config.globalProperties.$axios = axios;
app.use(router)
app.mount('#app')
