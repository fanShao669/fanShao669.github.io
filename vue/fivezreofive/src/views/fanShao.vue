<template>
    <div class="g-bd">
        fanShao  贼牛 我就是遮样的吧  
        <div class='wow slideInLeft bounceInUp' >
            <a  href="javascript:;">
                <img src="static/images/six.png" alt="">
            </a>
        </div>
        <div class='wow slideInRight bounceInUp'>
             王牌对王牌   
        </div>
        <div class='wow slideInLeft bounceInUp'>
            
        </div>
        <div class='wow slideInRight bounceInUp'>

        </div>
        <div class='wow slideInLeft bounceInUp'>
            
        </div>
        <div class='wow slideInRight bounceInUp'>
            
        </div>
        <div class='wow slideInLeft bounceInUp'>
            
        </div>
        <div class='wow slideInRight bounceInUp'>
            
        </div>
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
                new WOW().init();
                // let wow = new WOW({
                //     boxClass: 'wow',
                //     animateClass: 'animated',
                //     offset: 0,
                //     mobile: true,
                //     live: true
                // });
                // wow.init();
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
     /*background-color: #99a9bf;*/
   }
   
   .el-carousel__item:nth-child(2n+1) {
     /*background-color: #d3dce6;*/
   }

    .slideInLeft{
        height: 300px;
        background: yellow;
    }
    .slideInRight{
        height: 300px;
        background: blue;
    }
    
    /*图片旋转*/
    .bounceInUp a{
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-size: 100% 100%;
        transition: 0.5s all;
        -webkit-transition: 0.5s all;
        -moz-transition: 0.5s all;
        -o-transition: 0.5s all;
        -ms-transition: 0.5s all;
    }
    .bounceInUp a  img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .bounceInUp a:hover{
        transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out; 
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
    }
</style>