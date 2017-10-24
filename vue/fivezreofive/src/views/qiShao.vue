<template>
    <div class="g-bd">
        qiShao  学霸也  六大福娃学识顶梁柱 以后我孩子的干爸
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">fs</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-time-picker
        v-model="value2"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点">
      </el-time-picker>

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
                value2:new Date(2017, 9, 10, 18, 40)
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                let _this = this;
            })
        },
        methods:{

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


    /*布局*/
      .el-row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-col {
        border-radius: 4px;
      }
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
</style>