import { createApp } from "vue";
import App from "~/App.vue";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "@assets/main.css";
import "@assets/scss/custom.scss";

const app = createApp(App);

app.mount("#app");
