<template>
	<div class="tp-error-container">
		<div :class="error" ref="error">
			<div class="a1">
				<div class="a2"></div>
			</div>
			<h3>404<p>Not Found</p></h3>
			<h5>遇到错误啦，请返回！</h5>
			<p class="go-home"><el-button type="warning" size="large" @click="gohome"><i class="fa fa fa-home"></i> 返回首页</el-button></p>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			error : 'tp-error'
		}
	},
	mounted(){
		this.startAnimate();
	},
	
	methods :{
		gohome(){
			return this.$router.go(-1)
		},
		
		startAnimate(){
			
			let time = setTimeout(()=> this.error = 'tp-error tp-error-animate',100)
			
		}
	}
}
</script>

<style scoped="scoped" lang="scss">


$color : #E5E9F2;
/*  
darken
lighten
*/

.tp-error-container{
	position: relative;
}
.tp-error{
	width: 500px;
	height: 500px;
	position: absolute;
	left: 50%;
	top: 130px;
	transform: translateX(-250px);
	background-color: $color;
	transition: all .8s;
	opacity: 0;
	transform: scale(0.6) translateX(-250px);
	border-radius: 100%;
	animation:_alternate 15s  infinite 1s;
	
	.a1,.a2{
		border-radius: 100%;
		position: absolute;
	}
	
	.a1{
		background-color: darken($color,5%);
		height: 30%;
		width: 30%;
		left: 30%;
		top: 50px;
		opacity: 0;
		transition: all 1s;
	}
	
	&.tp-error-animate{
		transform: scale(1) translateX(-250px);
		opacity: 1;
		
		.a1{
			height: 70%;
			width: 70%;
			left: -10%;
		    top: -10px;
		    opacity: .3;
		}
	}
	
	.a2{
		background-color: darken($color,13%);
		opacity: .5;
		height: 80%;
		width: 80%;
		right: -50%;
		top: -20%;
	}
	
	h3{
		font-size: 120px;
		font-weight: bold;
		text-align: center;
		margin-top: 120px;
		position: relative;
		z-index: 9;
		color: #F7BA2A;
		letter-spacing: 2px;
		font-family:"comic sans ms";
		.fa{margin-right: 20px;}
		p{
			font-size: 30px;
			
			color: #324057;
		}
	}
	
	h5{
		text-align: center;
		color: #99A9BF;
		font-size: 14px;
	}
	
	.go-home{
		position: relative;
		z-index: 9;
		text-align: center;
		padding: 30px 0;
	}
	
}

@keyframes _alternate{
	from{ transform: scale(1) translateX(-250px); opacity: 0.8;}
	50%{transform: scale(1.05) translateX(-300px);opacity: 1;}
	to{transform: scale(1) translateX(-250px);opacity: 0.8;}
}
</style>