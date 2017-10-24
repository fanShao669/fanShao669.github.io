<template>
    <div class="g-bd">
        fangShao  是个男生  你信？
        <div class="block">
          <span class="demonstration">默认不区分颜色</span>
          <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
          <span class="demonstration">区分颜色</span>
          <el-rate
            v-model="value2"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </div>
        <button @click='upload'>提交</button>
        <foot></foot>  
    </div>
           
</template>
<script type="text/javascript">
    import foot from '../components/foot.vue'
    export default {
        data () {
            return {
                items:[
                    {img:'static/images/weixin.png',id:1},
                    {img:'static/images/car.png',id:2},
                    {img:'static/images/QQ.png',id:3},
                    {img:'static/images/weixin.png',id:4},
                    {img:'static/images/QQ.png',id:5},
                    {img:'static/images/car.png',id:6},
                ],
                value1: null,
                value2: null
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                let _this = this;
                
            })
        },
        methods:{
            // 获取url参数
            getQueryString:function(name){
                var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                var r = window.location.search.substr(1).match(reg);
                if (r != null) {
                    return unescape(r[2]);
                }
                return null;
            },
            upload:function(){
                console.log(this.value1);
                console.log(this.value2);
            }
        },
        computed: {

        },
        components: {
           foot,
        },   
    }
</script>
<style>
    .g-bd{
        width: 100%;
        height: 100%;
    }
    .el-carousel__item a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .el-carousel__item img {
        width: 200px;
        height: 200px;
   }
   
   .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
   }
   
   .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
   }
   button{
        width: 100px;
        height: 100px;
        background: yellow;
        line-height: 100px;
        text-align:center;
   }
</style>