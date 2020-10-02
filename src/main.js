import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Vuelidate from "vuelidate";

Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  render: h => h(App),
}).$mount('#app')
