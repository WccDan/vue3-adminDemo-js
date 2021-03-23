import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// add ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Button from "ant-design-vue/lib/button";

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(Button)
  .mount("#app");
