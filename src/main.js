import { createApp } from "vue";
import App from "~/App.vue";
// import router from "~/router";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import "@assets/main.css";
import "@assets/scss/custom.scss";

const app = createApp(App);

// app.use(router);

app.mount("#app");
