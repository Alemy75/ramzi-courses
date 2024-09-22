import { createApp } from "vue";
import { router, vuetify } from "./providers";
import App from "./App.vue";

import "./style/index.scss";

createApp(App).use(router).use(vuetify).mount("#app");
