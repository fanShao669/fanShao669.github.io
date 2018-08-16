<template>
<div class="tp-admin-nav-container">
	<div class="el-menu-nav">
		<el-tooltip class="item" effect="dark" content="最小化左边导航" placement="right-end">
			<el-button  class="menu-on-off" @click="menuSwitchMenu">
				<i class="fa fa-bars"></i>
			</el-button>
		</el-tooltip>
		
		<span class="tp-menu-admin">欢迎登陆 <i  class="fa fa-user-circle-o"></i>{{accountData().name}}</span>
	  	
	  	<el-dropdown trigger="hover">
		  <span class="el-dropdown-link">
		    <router-link to="/" class="emall">
		  		<el-badge :value="tipsEmall">
			  		<i class="fa fa-envelope-o"></i>
				</el-badge>
			</router-link>
		  </span>
		  <el-dropdown-menu slot="dropdown"  class="tp-dropdown-menu">
		  	<li class="li-tips">你有{{tipsEmall}}条未读邮件</li>
		    <el-dropdown-item  divided v-for="item in headedropdownEmall" :key="item.id">
		    	<h5><i class="fa fa-caret-right"></i> {{item.addresser}}</h5>
		    	{{item.message}}<i class="fa fa-times" @click="dropdownClose"></i></p>
		    </el-dropdown-item>
		    <el-dropdown-item divided class="tp-menu-more">
		    	 暂无更多邮件 ~
		    </el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
		
	  	
		
		<el-dropdown trigger="hover">
		  <span class="el-dropdown-link">
		    <router-link to="/">
		  		<el-badge :value="tipsData">
			  		<i class="fa fa-bell-o"></i>
				</el-badge>
			</router-link>
		  </span>
		  <el-dropdown-menu slot="dropdown"  class="tp-dropdown-menu">
		  	<li class="li-tips">你有{{tipsData}}条未读提示</li>
		    <el-dropdown-item  divided v-for="item in headedropdown" :key="item.id">
		    	<i class="fa fa-caret-right"></i> {{item.system_tips}} <i class="fa fa-times" @click="dropdownClose"></i>
		    </el-dropdown-item>
		    <el-dropdown-item command="a" divided class="tp-menu-more">
		    	 查看更新未读提示 <i class="fa fa fa-angle-right"></i>
		    </el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>

		
		
		<router-link to="/" class="flag">
	  		<el-badge :value="99">
		  		<i class="fa fa-flag-o"></i>
			</el-badge>
		</router-link>
		<router-link to="/system/setting"><i class="fa fa-gears"></i></router-link>
		<router-link to="" @click.native="dialogClose">
			<i class="fa fa-sign-out"></i>退出
		</router-link>
	</div>	
 </div>   
</template>

<script>

import { mapGetters,mapMutations } from 'vuex'

export default{
	name : 'nav',
	data(){
		return {
			headedropdown : [
				{ id:22, system_tips : '验证码设置成功'},
				{ id:932, system_tips : '日志打印错误，请确保系统设置是否正确'},
				{ id:111, system_tips : '缓存清除更新成功'},
				{ id:32, system_tips : '模板更新成功'}
			],
			
			headedropdownEmall : [
				{ id:54, addresser : 'Gavin',message:'login加入权限登陆，localStorage、state记忆两种登陆方式'},
				{ id:54, addresser : 'Gavin',message:'底层采用axios进行交互，ECharts版本 v3.3.2'},
				{ id:54, addresser : 'Gavin',message:'账户：'+ this.accountData().name +' 密码：' + this.accountData().password}
			],
			
			tipsData : 7,
			tipsEmall : 3
		}
	},
	
	mounted(){
		
	},
	
	
	methods : {
		
		...mapGetters({
			menuSwitch : 'getSystemSwitch',
			accountData : 'getAccountData'
		}),
		
		...mapMutations({
			setSystemSwitchMenu : 'SYSTEMSWITCHMENU' 
		}),
		
		handleCommand( command ){
			
		},
		
		dropdownClose(e){
			
			e.target.parentNode.parentNode.removeChild( e.target.parentNode );
		},
		
		menuSwitchMenu(){
			let Switch = this.menuSwitch();
			this.setSystemSwitchMenu(!Switch);
		},
		
		dialogClose(){
			
			this.$confirm('你确定要退出？')
	          .then(_ => {
	          	this.$router.push('/login')
	            done();
	            
	          })
	          .catch(_ => {});
		}
	}
}
</script>

<style lang="scss" scoped="scoped">



.tp-admin-nav-container{
	background-color: #324157;
	color: #bfcbd9;
	height: 60px;
	text-align: right;
	
	.is-fixed{
		border-radius: 3px;
		right:5px;
		top:3px;
		font-size: 9px;
		border:0 none;
		height: auto;
		padding: 2px 4px;
		line-height:.9!important;
	}
	
	.menu-on-off{
		float: left;
		border: 0 none;
		background-color:transparent;
		margin-top: 5px;
		
		.fa{
			color: #fff;
			font-size: 20px;
		}
	}
	
	.flag .is-fixed{
		background-color: #F7BA2A;
	}
	
	.emall .is-fixed{
		background-color: #13CE66;
	}
	
	.el-menu-nav{
		height: 60px;
		overflow: hidden;	
	}
	
	a{
		color: #bfcbd9;
		text-decoration: none;
		display: inline-block;
		padding:20px;
		vertical-align: middle;
		height:60px;
		
		&:hover{
			background-color: #475669;
		}
	}
}

.tp-menu-admin{
	height: 60px;
	line-height: 60px;
	padding: 0 20px;
	color: #bfcbd9;
	display: inline-block;
	vertical-align: middle;
	
	.txt{}
	.fa{
		margin:0 5px 0 8px;
	}
}


.tp-dropdown-menu{
	min-width: 200px;
	max-width: 320px;
	padding-top: 0;
	
	li{
		color: #8492A6;
		position: relative;
		padding-right: 30px;
		line-height: 20px;
		font-size: 12px;
		
		&:after,&:before{
			background-color:transparent!important;
		}
		
		>.fa-times{
			position: absolute;
			right:12px;
			top: 16px;
		}
		
		h5{
			margin: 0;
			padding-bottom: 10px;
		}
	}
	
	.li-tips{
		list-style: none;
		padding: 0 10px;
		height: 40px;
		line-height: 40px;
	}
	
	.tp-menu-more{
		text-align: center;
		color: #999;
	}
}
</style>