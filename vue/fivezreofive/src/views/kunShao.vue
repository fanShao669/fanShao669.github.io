<template>
    <div class="g-bd">
            kunShao  小日子过的怎么样 也不知道  好久没见了
            <div id='list'>
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
                //初始化
                $('#list').myList()
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

    /*省份*/
    #list{font-size: 16px;position: relative;height: 100%}
    #list>section{overflow-y: auto;height: 100%}
    #list>section>dl>dt{background: #f7f7f9;color: #999;height:40px;line-height:40px;padding-left: 15px;}
    #list>section>dl>dd{font-size: 16px;color: #333;line-height:40px;padding-left: 15px;position: relative;}
    #list>section>dl>dd:after{content:'';position: absolute;left: 0;bottom: 1px;width: 100%;height: 1px;background-color:#c8c7cc;transform:scaleY(.5);-webkit-transform:scaleY(.5);}
    #list>section>dl>dd:last-of-type:after{display: none;}
    #navBar{position: absolute;width:26px;height: 100%;right: 0;top: 0}
    #navBar.active{background:rgba(211,211,211,.6);}
    #navBar>a{text-align: center;display: block;text-decoration:none;height: 4.166%;line-height:100%;color: #333;font-size: 13px;}
    #prompt{position: fixed;left: 50%;top:50%;margin:-30px 0 0 -30px;width: 60px;height: 60px;text-align: center;line-height: 60px;font-size: 30px;color: #fff;background: rgba(0,0,0,0.5);z-index: 10;display: none;border-radius:4px;}
    #prompt.active{display:block;}
</style>