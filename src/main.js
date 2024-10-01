// css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/bootstrap.rtl.css";
import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ToastPlugin from "vue-toast-notification";
const app = createApp(App);
app.use(router);
app.use(ToastPlugin);
app.mount("#app");
