import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/style/index.scss';
import 'swiper/dist/css/swiper.css';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1,
  error: require('./assets/img/error.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
