import Vue from 'vue'
import App from './App.vue'
import index from './views/index.vue'
import css42 from './views/css42.vue'
import css41 from './views/css41.vue'
import css40 from './views/css40.vue'
import css39 from './views/css39.vue'
import css38 from './views/css38.vue'
import css37 from './views/css37.vue'
import css36 from './views/css36.vue'
import css35 from './views/css35.vue'
import css34 from './views/css34.vue'
import css33 from './views/css33.vue'
import css32 from './views/css32.vue'
import css31 from './views/css31.vue'
import css30 from './views/css30.vue'
import css29 from './views/css29.vue'
import css28 from './views/css28.vue'
import css27 from './views/css27.vue'
import css26 from './views/css26.vue'
import css25 from './views/css25.vue'
import css24 from './views/css24.vue'
import css23 from './views/css23.vue'
import css22 from './views/css22.vue'
import css21 from './views/css21.vue'
import css20 from './views/css20.vue'
import css19 from './views/css19.vue'
import css18 from './views/css18.vue'
import css17 from './views/css17.vue'
import css16 from './views/css16.vue'
import css15 from './views/css15.vue'
import css14 from './views/css14.vue'
import css13 from './views/css13.vue'
import css12 from './views/css12.vue'
import css11 from './views/css11.vue'
import css10 from './views/css10.vue'
import css09 from './views/css09.vue'
import css08 from './views/css08.vue'
import css07 from './views/css07.vue'
import css06 from './views/css06.vue'
import css05 from './views/css05.vue'
import css04 from './views/css04.vue'
import css03 from './views/css03.vue'
import css02 from './views/css02.vue'
import css01 from './views/css01.vue'
import bookdemo1 from './views/bookdemo1.vue'

import demo1 from './views/vuebook/demo1.vue'
import demo2 from './views/vuebook/demo2.vue'
import demo3 from './views/vuebook/demo3.vue'
import demo4 from './views/vuebook/demo4.vue'

import cpt5demo1 from './views/vuebook/chapter5/demo1.vue'

import es2015demo1 from './views/es2015book/demo1.vue'
import es2015demo2 from './views/es2015book/demo2.vue'
import es2015demo3 from './views/es2015book/demo3.vue'
import es2015demo4 from './views/es2015book/demo4.vue'



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
    {
      path: '/css42',
      component: css42
    },
    {
      path: '/css41',
      component: css41
    },
    {
      path: '/css40',
      component: css40
    },
    {
      path: '/css39',
      component: css39
    },
     {
      path: '/css38',
      component: css38
    },
    {
      path: '/css37',
      component: css37
    },
    {
      path: '/css36',
      component: css36
    },
    {
      path: '/css35',
      component: css35
    },
     {
      path: '/css34',
      component: css34
    },
    {
      path: '/css33',
      component: css33
    },
    {
      path: '/css32',
      component: css32
    },
    {
      path: '/css31',
      component: css31
    },
     {
      path: '/css30',
      component: css30
    },
    {
      path: '/css29',
      component: css29
    },
    {
      path: '/css28',
      component: css28
    },
    {
      path: '/css27',
      component: css27
    },
     {
      path: '/css26',
      component: css26
    },
    {
      path: '/css25',
      component: css25
    },
    {
      path: '/css24',
      component: css24
    },
    {
      path: '/css23',
      component: css23
    },
     {
      path: '/css22',
      component: css22
    },
    {
      path: '/css21',
      component: css21
    },
    {
      path: '/css20',
      component: css20
    },
    {
      path: '/css19',
      component: css19
    },
     {
      path: '/css18',
      component: css18
    },
    {
      path: '/css17',
      component: css17
    },
    {
      path: '/css16',
      component: css16
    },
    {
      path: '/css15',
      component: css15
    },
     {
      path: '/css14',
      component: css14
    },
    {
      path: '/css13',
      component: css13
    },
    {
      path: '/css12',
      component: css12
    },
    {
      path: '/css11',
      component: css11
    },
        {
      path: '/css10',
      component: css10
    },
    {
      path: '/css09',
      component: css09
    },
     {
      path: '/css08',
      component: css08
    },
    {
      path: '/css07',
      component: css07
    },
    {
      path: '/css06',
      component: css06
    },
    {
      path: '/css05',
      component: css05
    },
     {
      path: '/css04',
      component: css04
    },
    {
      path: '/css03',
      component: css03
    },
    {
      path: '/css02',
      component: css02
    },
    {
      path: '/css01',
      component: css01
    },
    {
      path: '/bookdemo1',
      component: bookdemo1
    },
    {
      path: '/vuebook/demo1',
      component: demo1
    },
    {
      path: '/vuebook/demo2',
      component: demo2
    },
    {
      path: '/vuebook/demo3',
      component: demo3
    },
    {
      path: '/vuebook/demo4',
      component: demo4
    },

    {
      path: '/vuebook/chapter5/demo1',
      component: cpt5demo1
    },
    {
      path: '/es2015book/demo1',
      component: es2015demo1
    },
    {
      path: '/es2015book/demo2',
      component: es2015demo2
    },
    {
      path: '/es2015book/demo3',
      component: es2015demo3
    },
    {
      path: '/es2015book/demo4',
      component: es2015demo4
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