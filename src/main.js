import Vue from 'vue'
import plugin from './plugin'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.scss'
import 'lib-flexible'
import animated from 'animate.css'

Vue.config.productionTip = false


Vue.use(plugin);
Vue.use(animated);
new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')
