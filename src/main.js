import Vue from 'vue';
import App from './App.vue';
import router from './router';
import user from './components/helpers/User';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false;

window.axios = axios.create();

new Vue({
  vuetify,
  router,
  user,
  render: h => h(App)
}).$mount('#app')
