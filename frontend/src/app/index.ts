import { createApp } from "vue";
import { router, vuetify } from "./providers";
import App from "./App.vue";

createApp(App).use(router).use(vuetify).mount("#app");
