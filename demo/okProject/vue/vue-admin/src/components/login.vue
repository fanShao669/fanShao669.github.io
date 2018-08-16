<template>
	<transition name="tp-fade">	
		<div class="login-container el-col-24">
			
		   <form action="/"  class="login-form" ref="loginForm">
		   		<h5>用户登录</h5>
		   		<div class="login-item">
		   			<label class="label"><i class="fa fa-user-circle-o"></i></label>
		   			<input type="text" ref="loginAccount" :value="userData.name" class="el-input" placeholder="name"/>
		   		</div>
		   		<div class="login-item">
		   			<label class="label"><i class="fa fa-key"></i></label>
		   			<input type="password"  class="el-input" :value="userData.password" ref="pw" placeholder="password" />
		   		</div>
		   		<div class="login-item el-login">
		   			<div class="label"><el-switch v-model="loginSwitchDate" on-color="#13ce66" off-color="#ff4949" @change="userloginSwitch"></el-switch></div>
		   			<span class="forget">忘记密码？</span>
		   		</div>
		   		<div class="login-item el-login">
				   	<el-button type="info" size="large" ref="login" @click="login" :loading="loading">登陆</el-button>
			   	</div>
		   </form>
		   
		   <span class="login-animate" >
			   <i class="fa fa-space-shuttle" v-for="fly in flyAnimate" :key="fly" :class="'p'+ fly"></i>
		   </span>
		</div>
	</transition>
</template>
<script>
import {mapGetters,mapMutations, mapActions } from 'vuex'
export default {
	data(){
		return {
	  		loginSwitchDate : true,
	  		userData : {
	  			name : '',
	  			password : ''
	  		},
	  		loading : false,
	  		timerSecond : 2000,
	  		flyAnimate : 5
	  	}
	},
	  
	computed : {
	  	...mapGetters(['tempAccount','getloginSwitch']),
	  	
	},
	  
	methods:{
	  	...mapMutations({
	  		setStateDate : 'USERLOGINDATANODEVUE',
	  		setSwitch : 'LOGINSWITCH'
	  	}),
	  	
	  	...mapActions({
	  		setUserDate : 'userLoginDataAsync',
	  		getUserData : 'getUserData'
	  	}),
	  	
	  	login(){
	  		let tempAccount =  this.tempAccount ,
	  			ShowTimer;
	  			
	  		
	  		if( this.$refs.loginAccount.value != tempAccount.name ){
	  			
		  		this.$message({
		  			showClose : true,
		  			message : '用户名输入有误',
		  			type : 'error'
		  		})
	  		}else if( this.$refs.pw.value != tempAccount.password ){
	  			
		  		this.$message({
		  			showClose : true,
		  			message : '密码错误',
		  			type: 'error'
		  		})
	  		}else{
	  			
	  			this.loading = true;
	  			let value = this.userData = {
  					name : this.$refs.loginAccount.value,
  					password : this.$refs.pw.value
  				};
	  			
	  			//离线缓存用户账号 密码
	  			if( this.loginSwitchDate ){
	  				
		  			this.setUserDate({
		  				key : 'login',
		  				value : JSON.stringify(value)
		  			})
	  			}else{
	  				//缓存state
	  				this.setStateDate( value )
	  			}
	  			
	  			
	  			ShowTimer = setTimeout(() =>{
	  				
	  				clearTimeout( ShowTimer );
	  				//路由跳转
		  			this.$router.push({
			  			path : '/'
			  		})
		  			
	  			}, this.timerSecond )
	  			
	  			
	  			this.$message({
		  			showClose : true,
		  			message : '登录中...',
		  			type: 'info'
		  		})
	  			
	  		}
	
	  	},
	  	
	  	
	  	userloginSwitch(){
	  		this.setSwitch( this.loginSwitchDate )
	  	},
	  	
	  	
	  	SyncloginSwitch(){
		  	this.loginSwitchDate = this.getloginSwitch
	  	}
	},
  
  mounted(){
  	
  	this.SyncloginSwitch();
  	
  	let flag = this;
  	
  	this.getUserData(function(){
  		flag.userData = this;
  	})
  	
  }
}
</script>
<style lang="scss">

@mixin linear-gradient($direction, $color-stops...) {
  background: nth(nth($color-stops, 1), 1);
  background: -webkit-linear-gradient(legacy-direction($direction), $color-stops);
  background: linear-gradient($direction, $color-stops);
}

.login-container{
	height: 100%;
	@include linear-gradient(-160deg,#8492A6,#1F2D3D); 
	overflow: hidden;
	
	
	.login-form{
		 width: 500px;
		 position: absolute;
		 left: 50%;
		 top: 50%;
		 border-radius:5px;
		 transform: translate(-250px,-220px);
		 background-color: #324057;
		 color: #E5E9F2;
		 padding-bottom: 40px;
		 border:1px solid #29374c;
		 position: relative;
		 
		 
		 h5{
		 	height: 60px;
		 	line-height: 60px;
		 	text-align: center;
		 	font-size: 30px;
		 	background-color: #263348;
		 	border-radius: 5px 5px 0 0;
		 	margin-bottom: 10px;
		 	
		 	&:before{
			 	content: "\f2da";
			 	font: normal normal normal 14px/1 FontAwesome;
			 	font-size: 30px;
			 	margin-right: 10px;
			 }
		 };
		 
		 
	}
	
	
	.login-item{
		padding: 10px;
		
		&.el-login{
			padding:10px 60px 0 80px;
			.forget{
				float: right;
			}
			
			.el-button--info{
				width: 100%;
				height: 50px;
			}
		}
		
		>.label{
			display: inline-block;
			width:80px;
			height: 50px;
			padding: 0;
			text-align: center;
			vertical-align: middle;
			
			.fa{
				float: left;
				font-size: 25px;
				margin: 20px 25px 10px;
			}
		}
		
		.el-input{
			height: 50px;
			width: 350px;
			border:0 none;
			background-color: transparent;
			outline: none;
			border-bottom: 1px solid #8492A6;
			font-size: 18px;
		}
	}
	
	.login-animate > .fa{
		position: fixed;
		top:50%,;
		left: -100px;
		font-size: 30px;
		color: #fff;
		animation: testm 5s cubic-bezier(0.39, -0.04, 0, 0.87) 0s;
		
		&.p1{animation-delay: .1s; margin-top:-200px;}
		&.p2{animation-delay: .2s; margin-top:-100px;}
		&.p3{animation-delay: .3s; margin-top:0px;}
		&.p4{animation-delay: .4s; margin-top:100px;}
		&.p5{animation-delay: .5s; margin-top:200px;}
	}
}


@keyframes testm{
	from{ transform: scale(1,1) translateX(0px);}
	50%{ transform: scale(4,4) translateX(350px) ;}
	to{ transform: scale(4,4) translate(800px,-100px);}
}


</style>