import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";
import VueCreditCardValidation from "vue-credit-card-validation";
createApp(App).use(VueCreditCardValidation).mount("#app");
