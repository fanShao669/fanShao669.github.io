

export default{
	
	//系统左侧菜单
	getSystemSwitch : state => state.systemSwitchMenu,
	
	//登录账号验证
	imposeSwitchType : state => state.imposeSwitchType,
	
	//临时登录账号
	tempAccount : state => state.TempAccount,
	
	getloginSwitch : state => state.loginSwitch,
	
	getAccountData : state => state.userAccountData,
	
	fullScreenShowTimer : state => state.fullScreenShowTimer,
	
	echartloadingTime : state => state.fullScreenShowTimer + state.echartloadingTime,
	
	tableRowsData : state => state.tableRowsData
	
	
}
