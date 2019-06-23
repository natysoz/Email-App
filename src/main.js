import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = true;
import './assets/fonts/all.min.css';


Vue.filter('to-uppercase', value => value.toUpperCase());
Vue.filter('snipped', value => value.slice(0, 70) + '...');
Vue.filter('first-char', value => value.slice(0, 1));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
