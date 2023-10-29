import axios from "axios";
// 禁止客户端ajax携带cookie到服务端去
axios.defaults.withCredentials = false;