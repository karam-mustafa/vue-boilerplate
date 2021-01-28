import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import Request from "./Core/Classes/Request/Request";
import Direction from "./Core/Mixins/Lang/Direction";
import Forms from "./Core/Mixins/Forms/Forms";
import VueI18n from "vue-i18n";
import Notifications from "vue-notification";
import "./Core/Base/Globals";

window.axios = Request.initHttp(axios);
Vue.config.productionTip = false;
/**
 * Packages Area
 * @author karam mustafa
 * */
Vue.use(VueI18n);

Vue.use(Notifications);

import messages from "./lang/local.js";
// eslint-disable-next-line no-unused-vars
const i18n = new VueI18n({
  locale: localStorage.getItem("locale") || "en",
  messages
});

/**
 * Mixins Area
 * @author karam mustafa
 * */
Vue.mixin(Direction);
Vue.mixin(Forms);
export const EventBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
