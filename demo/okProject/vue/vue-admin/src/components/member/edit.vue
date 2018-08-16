<template>
<transition name="tp-ani">
	<div class="tp-setting" v-loading="loading">
		<div class="tp-tips">
			<h5><i class="fa fa-lightbulb-o"></i> 操作提示</h5>
			<p class="txt"><i class="fa fa-exclamation-circle"></i>标识*的选项为必填项，其余为选填。</p>
			<p class="txt"><i class="fa fa-exclamation-circle"></i>商店相关信息设置，请谨慎填写。</p>
		</div>
		<div class="tp-setting-form">
			<el-form :model="tableRowsData" ref="ruleForm" label-width="220px" >
				
			  <el-form-item label="姓名：" prop="name">
			    <span v-text="tableRowsData.mumber_name"></span>
			  </el-form-item>
			   <el-form-item label="联系方式：" prop="name">
			   	<el-input v-model="tableRowsData.mumber_contact"></el-input>
			  </el-form-item>
			   <el-form-item label="注册时间：" prop="name">
			    <span v-text="tableRowsData.mumber_data"></span>
			  </el-form-item>
			  <el-form-item label="会员ID号：" prop="name">
			    <span v-text="tableRowsData.id"></span>
			  </el-form-item>
			  <el-form-item label="地址：" prop="name">
			  	<el-input v-model="tableRowsData.mumber_address"></el-input>
			  </el-form-item>
			  <el-form-item label="可用资金：" prop="name">
			    <span v-text="tableRowsData.mumber_capital"></span>
			  </el-form-item>
			  <el-form-item label="消费积分：" prop="name">
			    <span v-text="tableRowsData.mumber_integral"></span>
			  </el-form-item>
			  <el-form-item label="会员等级：" prop="name">
			    <el-tag :type="tableRowsData.mumber_rank_class" close-transition v-text="tableRowsData.mumber_rank"></el-tag>
			  </el-form-item>
			  
			  <el-form-item>
			    <el-button type="primary" @click="edit">确定修改</el-button>
			    <el-button @click="cancel">取消</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
	data(){
		return{
			tableRowsData : {},
			loading : true
		}
	},
	methods:{
		...mapGetters({
			tabRowsData :  'tableRowsData',
			editloading : 'echartloadingTime'
		}),
		
		cancel(){
			this.$router.push('/member/list');
		},
		
		asyncResData( cb ){
			if( this.asyncTime ) clearTimeout( this.asyncTime );
			this.loading = true;
			this.asyncTime = setTimeout(()=>{
    			this.loading = false;
    			cb && cb.call(this);
    		} , this.editloading());
		},
		
		edit(){
			this.asyncResData( () => this.cancel());
		}
	},
	
	mounted(){
		this.$nextTick(() =>{
			
			if( this.tabRowsData() == null ) this.$router.push('/member/list');
			this.tableRowsData = this.tabRowsData();
			this.asyncResData();
		})
		
	}
}
</script>

<style scoped="scoped">
.tp-setting-form{
	width: 900px;
	padding-top: 50px;
}
</style>