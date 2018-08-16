
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-default/index.css'
import elementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(elementUI)

new Vue({
  el: '#tp_container',
  store,
  router,
  template: '<App/>',
  components: { 
  	App
  }
})

