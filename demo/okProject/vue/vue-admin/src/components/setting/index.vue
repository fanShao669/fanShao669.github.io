<template>
<transition name="tp-ani">
	<div class="tp-setting" >
		<div class="tp-tips">
			<h5><i class="fa fa-lightbulb-o"></i> 操作提示</h5>
			<p class="txt"><i class="fa fa-exclamation-circle"></i>标识*的选项为必填项，其余为选填。</p>
			<p class="txt"><i class="fa fa-exclamation-circle"></i>商店相关信息设置，请谨慎填写。</p>
		</div>
		<div class="tp-setting-form">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="220px">
				<el-form-item label="商品的图片">
				<el-upload
				  class="upload-demo" action="action_post" :on-preview="handlePreview"  :on-remove="handleRemove" :file-list="fileList"  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
				</el-upload>
				</el-form-item>
			  <el-form-item label="商品货号前缀" prop="name">
			    <el-input v-model="ruleForm.name"></el-input>
			  </el-form-item>
			  <el-form-item label="附件上传大小" prop="region">
			    <el-select v-model="ruleForm.region" placeholder="请选择附件上传大小">
			      <el-option label="1MB" value="1MB"></el-option>
			      <el-option label="5MB" value="5MB"></el-option>
			      <el-option label="10MB" value="10MB"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="活动时间" required>
			    <el-col :span="11">
			      <el-form-item prop="date1">
			        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
			      </el-form-item>
			    </el-col>
			    <el-col class="line" :span="2" style="text-align: center;">-</el-col>
			    <el-col :span="11">
			      <el-form-item prop="date2">
			        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
			      </el-form-item>
			    </el-col>
			  </el-form-item>
			  <el-form-item label="是否启用Gzip模式" prop="delivery">
			    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="商品评论的条件" prop="type">
			    <el-checkbox-group v-model="ruleForm.type">
			      <el-checkbox label="登录用户" name="type"></el-checkbox>
			      <el-checkbox label="访客" name="type"></el-checkbox>
			      <el-checkbox label="仅购买过该商品用户" name="type"></el-checkbox>
			      <el-checkbox label="有过一次以上购买行为用户" name="type"></el-checkbox>
			    </el-checkbox-group>
			  </el-form-item>
			  <el-form-item label="上传商品时是否保留原图" prop="resource">
			    <el-radio-group v-model="ruleForm.resource">
			      <el-radio label="开启"></el-radio>
			      <el-radio label="关闭"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="上传商品是否自动生成相册图" prop="resource1">
			    <el-radio-group v-model="ruleForm.resource1">
			      <el-radio label="开启"></el-radio>
			      <el-radio label="关闭"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="用户注册时自动发送验证邮件" prop="resource2">
			    <el-radio-group v-model="ruleForm.resource2">
			      <el-radio label="开启"></el-radio>
			      <el-radio label="关闭"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="是否开启会员邮件验证" prop="resource3">
			    <el-radio-group v-model="ruleForm.resource3">
			      <el-radio label="开启"></el-radio>
			      <el-radio label="关闭"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="审核商家商品" prop="resource4">
			    <el-radio-group v-model="ruleForm.resource4">
			      <el-radio label="开启"></el-radio>
			      <el-radio label="关闭"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="统计代码">
			    <el-input type="textarea" v-model="ruleForm.desc" ></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
			</el-form>
		</div>
	</div>
</transition>
</template>

<script>
let axios = require('axios');

  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          resource1: '',
          resource2: '',
          resource3: '',
          resource4: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '附件上传大小', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一项', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择是否保留原图', trigger: 'change' }
          ]
        },
        
         fileList: [
	         {name: 'goods_img.jpeg', url: '../../static/img/1.jpg'}, 
	         {name: 'goods_img2.jpeg', url: '../../static/img/2.jpg'},
	         {name: 'goods_img3.jpeg', url: '../../static/img/3.jpg'}
         ]
         
      }
    },
    methods: {
      
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      
      handlePreview(file) {
        console.log(file);
      },
      
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          
          //验证通过
          if (valid) {
          	axios.post('post_action', this.ruleForm)
            .then(response=>{
                
                //window.location.href = "/profile/:id";
            })
            .catch(error=>{
               
               this.$message({
                  type: 'info',
                  message: '网络不通，提交失败！'
               })
               
            });
            //alert('submit!');
          } else {
            this.$message({
              type: 'warning',
              showClose : true,
              message: '带 * 号为必填项 '
           })
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss">

.tp-setting-form{
    width: 900px;
    padding: 30px;
    
    .el-form-item{
    	
    }
    
    .el-upload__input{
    	display: none;
    }
}


</style>