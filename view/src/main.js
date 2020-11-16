import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
