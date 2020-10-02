import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import Vuelidate from "vuelidate";
import VueRouter from 'vue-router';
import RechargeForm from "./components/RechargeForm";
import GetTokenForm from "./components/GetTokenForm";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuelidate)

const routes = [
  { path: '*', redirect: '/recharge'},
  { path: '/my-token', component: GetTokenForm },
  { path: '/recharge', component: RechargeForm }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
router.replace({ path: '/', redirect: 'recharge' });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
