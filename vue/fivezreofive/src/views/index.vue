<template>
    <div class="g-bd">
        <ul class="left_nav">
            <a href="#overview1" class="num1 bg_orange"></a>
            <a href="#overview2" class="num2"></a>
            <a href="#overview3" class="num3"></a>
            <a href="#overview4" class="num4"></a>
            <a href="#overview5" class="num5"></a>
            <span class="nav_mark">
                <span class="mouse"></span>
                <span class="text">鼠标上下滚动</span>
            </span>
        </ul>
        <div class="panel item start" data-section-name="overview1">
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="item in items" >
                 <router-link v-if='item.id == 1' :to="{path:'huiShao'}"><img  v-bind:src="item.img" :id='item.id' alt="" ></router-link>
                 <router-link v-if='item.id == 2' :to="{path:'hongShao'}"><img  v-bind:src="item.img" :id='item.id' alt="" ></router-link>   
                 <router-link v-if='item.id == 3' :to="{path:'fanShao'}"><img  v-bind:src="item.img" :id='item.id' alt="" ></router-link>   
                 <router-link v-if='item.id == 4' :to="{path:'kunShao'}"><img  v-bind:src="item.img" :id='item.id' alt="" ></router-link>   
                 <router-link v-if='item.id == 5' :to="{path:'qiShao'}"><img  v-bind:src="item.img" :id='item.id' alt="" ></router-link>   
                 <router-link v-if='item.id == 6' :to="{path:'fangShao'}"><img  v-bind:src="item.img" :id='item.id' alt="" ></router-link>          
              </el-carousel-item>
            </el-carousel>
             <div class="list"></div>
        </div>
        <div class="panel item one" data-section-name="overview2">
            <div class="list"> fsdfsafsfsdaf</div>
           
        </div>
        <div class="panel item two" data-section-name="overview3">
         <div class="list"> fadfsadfdasfdaf</div>
           
        </div>
        <div class="panel item three" data-section-name="overview4">
         <div class="list"> afsdfafsafd</div>
           
        </div>
        <div class="panel item four" data-section-name="overview5">
         <div class="list"> dsfaafdsaf
            sdfasfds
            dfsf
            dfsafasd
            sfddf</div>
           
        </div>
    </div>
	       
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
               
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                let _this = this;
                //轮播
                // var num1=0;
                // var num2=0;
                // var divs=$(".lunbo");
                // $(".prev").click(function(){
                //     divs.finish();
                //     var temp=num1;
                //     num1--;
                //     if(num1==-1){
                //         num1=3;
                //     }
                //      var pages = num1+1
                //     $('.ban span').text(pages)
                //     divs.eq(num1).css("left",540).animate({left:0});
                //     divs.eq(temp).animate({left:-540});        
                // })
                // $(".next").click(function(){
                //     divs.finish()
                //     var temp=num1;
                //     num1++;
                //     if(num1==4){
                //         num1=0;
                //     }
                //     var pages = num1+1
                //     $('.ban span').text(pages)
                //     divs.eq(num1).css("left",-540).animate({left:0});
                //     divs.eq(temp).animate({left:540});
                // })  
                    //整屏翻页  
                $(".panel").css({"height":$(window).height()});
                $.scrollify({
                    section:".panel",
                     scrollbars: true,
                     offset : 0,
                     sectionName : "section-name", 
                     before: function(i,panels) {
                        var ref = panels[i].attr("data-section-name");
                        if(ref==="overview1") {
                            _this.initialAnimated();
                        }
                        if(ref==="overview2") {
                            _this.initialAnimated();
                        }
                        if(ref==="overview3") {
                            _this.initialAnimated();
                            $(".s_left").addClass("fadeInLeft");
                            $(".s_right").addClass("fadeInRight");
                        }
                        if(ref==="overview4") {
                            _this.initialAnimated();
                            $(".c_top").addClass("bounceInDown");
                            $(".partnerImg").addClass("lightSpeedIn");
                         }
                        if(ref === "overview5") {
                            _this.initialAnimated();
                            $(".aimg").addClass("fadeInDown");
                            $(".hh").addClass("flipInX");
                        }
                     },
                     afterRender: function () {
                        $(".left_nav a").on("click",function() {
                            $.scrollify.move($(this).attr("href"));
                          });
                     }
                });    

                //滚动侧边栏导航           
                $(window).on('scroll',function(){
                    var hashList = window.location.href.split('#')[1];
                    if(hashList == 'overview1'){
                        $('.num1').addClass('bg_orange');
                        $('.num1').siblings().removeClass('bg_orange')
                    }else if(hashList == 'overview2'){
                        $('.num2').addClass('bg_orange');
                        $('.num2').siblings().removeClass('bg_orange')
                    }else if(hashList == 'overview3'){
                        $('.num3').addClass('bg_orange');
                        $('.num3').siblings().removeClass('bg_orange')
                    }else if(hashList == 'overview4'){
                        $('.num4').addClass('bg_orange');
                        $('.num4').siblings().removeClass('bg_orange')
                    }else if(hashList == 'overview5'){
                        $('.num5').addClass('bg_orange');
                        $('.num5').siblings().removeClass('bg_orange')
                    }
                })

            })
        },
        methods:{
            initialAnimated:function() {
                $(".s_left").removeClass("fadeInLeft");
                $(".s_right").removeClass("fadeInRight");
                $(".c_top").removeClass("bounceInDown");
                $(".partnerImg").removeClass("lightSpeedIn");
                $(".aimg").removeClass("fadeInDown");
                $(".hh").removeClass("flipInX");
            }
        },
        computed: {

        },
        components: {
           
        },   
    }
</script>
<style>
    .g-bd{
        width: 100%;
        height: 100%;
        color:red;
        /*font-size: 30px;*/
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
    .panel img{
        width: 100%;
        height: 100%;
    }
    .left_nav {
        width: 14px;
        height: 230px;
        position: fixed;
        left: 40px;
        top: 50%;
        margin-top: -95px;
        z-index: 12;
    }
    .left_nav a {
        display: block;
        width: 10px;
        height: 10px;
        border: 1px solid #A5A5A5;
        border-radius: 50%;
        margin-top: 28px;
    }
    .left_nav .bg_orange {
        width: 12px;
        height: 12px;
        background: #E84027;
        border: none;
        border-radius: 50%;
    }
   .item{
        width: 100%;
        height: 100%;
   }
   .item .list{
        opacity: 1;
   }
   .start{
        background: url('../../static/images/six.png') ;
        background-size:100% auto;
       /* opacity: 0.8;
        filter:alpha(opacity:80);*/
   }
   .one{
      background: url('../../static/images/sixtoone.png') 100% 100% no-repeat;
      background-size:100% 100%;
      opacity: 0.8;
      filter:alpha(opacity:80);
      background-position: center;
   }
   .two{
      /*background: blue; */
      background: url('../../static/images/sixtotwo.png') 100% 100% no-repeat;
      background-size:100% 100%;
      opacity: 0.8;
      filter:alpha(opacity:80);
   }
   .three{
      background: url('../../static/images/sixtothree.jpg') 100% 100% no-repeat;
      background-size:auto 100%;
      opacity: 0.8;
      filter:alpha(opacity:80);
      /*background: yellow;*/
   }
   .four{
      background: url('../../static/images/sixtofour.jpg') 100% 100% no-repeat;
      background-size:auto 100%;
      opacity: 0.8;
      filter:alpha(opacity:80);
      /*background: green;*/
   }
   .nav_mark {
        position: relative;
        display: inline-block;
        margin-top: 40px;
        margin-left: -2px;
    }
   .nav_mark .mouse {
        display: inline-block;
        width: 18px;
        height: 32px;
        background-color: #e84027;
        border-radius: 30px;
    }
    .nav_mark .mouse:after {
        content: '';
        position: absolute;
        display: inline-block;  
        width: 2px;
        height: 6px;
        background-color: #fff;
        margin-top: 6px;
        margin-left: 8px;
        border-radius: 15px;
    }
    .nav_mark .text {
        position: absolute;
        left: 25px;
        top: 6px;
        width: 100px;
        font-size: 12px;
        color: #918e8f;
    }
</style>