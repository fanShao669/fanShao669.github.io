import Vue from 'vue'
import App from './App.vue'
import index from './views/index.vue'

import VueRouter from 'vue-router' 
import VueResource from 'vue-resource' 
//注册两个插件 
Vue.use(VueResource) 
Vue.use(VueRouter)

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/index',
      component: index
    },
    //  {
    //   path: '/recharge',
    //   component: recharge
    // },
    
    { path: '*', redirect: '/index'}
  ]
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')