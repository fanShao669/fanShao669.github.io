import Vue from 'vue'
import App from './App.vue'
import index from './views/index.vue'
import collect from './views/collect.vue'
import videos from './views/videos.vue'
import VueRouter from 'vue-router' 
import VueResource from 'vue-resource' 

//注册两个插件 
Vue.use(VueResource) 
Vue.use(VueRouter)

const routers = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/collect',
      component: collect
    },
    {
      path: '/videos',
      component: videos
    },
    { path: '*', redirect: '/index'}
  ]
})

new Vue({
	router: routers,
  	render: h => h(App)
}).$mount('#app')
