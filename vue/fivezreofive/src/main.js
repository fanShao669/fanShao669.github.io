import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import index from './views/index.vue'
import huiShao from './views/huiShao.vue'
import hongShao from './views/hongShao.vue'
import fanShao from './views/fanShao.vue'
import kunShao from './views/kunShao.vue'
import qiShao from './views/qiShao.vue'
import fangShao from './views/fangShao.vue'
import map from './views/map.vue'

import VueRouter from 'vue-router' 
import VueResource from 'vue-resource'

//注册两个插件 
Vue.use(VueResource) 
Vue.use(VueRouter)
Vue.use(ElementUI)


const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
 	{
      path: '/index',
      component: index
    },
    {
      path: '/huiShao',
      component: huiShao
    },
    {
      path: '/hongShao',
      component: hongShao
    },
    {
      path: '/fanShao',
      component: fanShao
    },
    {
      path: '/kunShao',
      component: kunShao
    },
    {
      path: '/qiShao',
      component: qiShao
    },
    {
      path: '/fangShao',
      component: fangShao
    },
    {
      path: '/map',
      component: map
    },

    { path: '*', redirect: '/index'}
  ]
})

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
