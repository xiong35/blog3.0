import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import "./normalize.css";
import "./index.scss";

import VueMarkdownEditor from "./utils/setupMdEditor";

createApp(App).use(router).use(VueMarkdownEditor).mount("#app");
