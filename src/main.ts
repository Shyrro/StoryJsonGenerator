import { createApp } from "vue";
import Chakra, { CThemeProvider, CReset } from "@chakra-ui/vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

createApp({
  render: h => h(CThemeProvider, [h(CReset), h(App)])
})
.use(router)
.use(store)
.use(Chakra)
.mount("#app");
