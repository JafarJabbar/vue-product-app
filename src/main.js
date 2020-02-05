import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import {router} from './routes';
import {store} from './store/store';

Vue.use(VueResource);

Vue.filter("currency",(value)=>{
  return parseFloat(value).toLocaleString(undefined,{minimumFractionDigits:2})+" AZN";
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
