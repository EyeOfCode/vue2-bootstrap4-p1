import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSweetalert2 from 'vue-sweetalert2';

import './plugins/axios';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const sweetAlertOption = {
  confirmButtonColor: '#2778c4',
  cancelButtonColor: '#ff7674',
};
Vue.use(VueSweetalert2, sweetAlertOption);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
