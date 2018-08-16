import Vue from 'vue'
import Router from 'vue-router'
import * as path from './path'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      component: path.admin,
      children : [
      		{
			      path: '/',
			      name : 'home',
			      component: path.home,
			      meta : {
			      	//验证登录
			      	requiresAuth : true 
			      }
			    },
			    
      		{
			      path: '/setting/basic',
			      name : 'setting',
			      component: path.setting_basic,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    
			    {
			      path: '/setting/goods',
			      component: path.setting_goods,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    {
			      path: '/admin/list',
			      component: path.admin_list,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    {
			      path: '/admin/list/:edit',
			      component: path.admin_list_edit,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    {
			      path: '/admin/add',
			      component: path.admin_list_add,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    {
			      path: '/admin/role',
			      component: path.admin_role,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    
			    {
			      path: '/admin/log',
			      component: path.admin_log,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    
			    {
			      path: '/member/list',
			      name : 'member',
			      component: path.member_list,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    {
			      path: '/member/list/:edit',
			      component: path.member_list_edit,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    {
			      path: '/member/goods',
			      component: path.member_goods,
			      meta : {
			      	requiresAuth : true 
			      }
			    },

			    {
			      path: '/axis/axisChart',
			      component: path.axis_axisChart,
			      meta : {
			      	requiresAuth : true 
			      }
			    },
			    {
			    	  path: '/axis/pageChartState',
			      component: path.axis_pageChartState,
			      meta : {
			      	requiresAuth : true 
			      }
			    }
			    
			    
      ]
    },
    {
      path: '/login',
      name : 'login',
      component: path.login
    },
    {
      path: '*',
      component: path.Error
    }
    
  ]
})


router.beforeEach((to, from, next) => {
	store.commit('GETLOGINDATA',{
		 store : store,
		 key : 'login'
	})

	let islogin = store.state.imposeSwitchType;

	if( to.meta.requiresAuth ){
			if( islogin ){
	      next({
	        path: '/login'
	      });
			}else{
				next();
			}
	   
	}else{
	    next();
	}
});

export default  router;