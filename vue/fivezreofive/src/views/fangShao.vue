<template>
    <div class="g-bd">
        fangShao  是个男生  你信？
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
                ]
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
</style>