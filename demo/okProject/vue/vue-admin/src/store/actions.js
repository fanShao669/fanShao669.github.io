
import * as type from './mu-types'

export default{
	
	//用户登录账号 ，密码 离线存储
	userLoginDataAsync({state,commit }, data ){
		
		commit( type.SETLOCALSTORAGE, data )
		
		commit( type.SETSTATE ,{
			key : 'imposeSwitchType',
			value : false
		})
	},
	
	getUserData( {state,commit } , sync ){
		commit( type.GETLOCALSTORAGE, {
			key : 'login',
			sync : sync
		});
	},
	
	//admin list page
	getStateSyncAdminData( {state,commit } , callback ){
		callback && callback.call(this,state.ad_async_state)
	}
}
