

import * as type from './mu-types'

export default{
	
	//用户登录账号 ，密码缓存state 
	[ type['USERLOGINDATA']+ type.NODEVUE ]( state , datas ){
		state.userAccountData = datas;
		state.imposeSwitchType = false;
	},
	
	
	//系统左侧菜单收缩
	[ type['SYSTEMSWITCHMENU'] ]( state ,types ){
		state.systemSwitchMenu = types ;
	},
	
	
	//登录开关
	[ type['LOGINSWITCH'] ]( state , type ){
		state.loginSwitch = type;
	},
	
	//离线存储
	[ type.SETLOCALSTORAGE ]( state , payload ){
		localStorage.setItem( payload.key, payload.value );
	},
	
	//获取本地存储数据
	[ type.GETLOCALSTORAGE ]( state , stage ){
		let localStorageData = JSON.parse(localStorage.getItem( stage.key ));
		if( localStorageData ){
			state[stage.key] = localStorageData;
			stage.sync && stage.sync.call(localStorageData)
		}
	},
	
	//设置state
	[ type.SETSTATE ]( state , obj ){
		state[ obj.key ] = obj.value;
	},
	
	//获取localstorage中登录信息
	[ type.GETLOGINDATA ]( state , stage ){ 
		
		let loginData = JSON.parse(localStorage.getItem( stage.key ));
		
		if( loginData ){
			
			stage.store.commit(type.SETSTATE,{
				key :'userAccountData',
				value : loginData
			});
		
			stage.store.commit(type.SETSTATE,{
				key :'imposeSwitchType',
				value : false
			});
		
		}
	},
	
	//list edit
	[ type.SETTABLEEDIT ]( state , val  ){
		state.tableRowsData = val;
	},
	
	//list add
	[ type.ADDTABLESTATE ]( state , data  ){
		if( state.ad_async_state ){
			state.ad_async_state.push( data );
		}
	}
}
