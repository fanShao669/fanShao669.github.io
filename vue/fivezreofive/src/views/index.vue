<template>
    <div class="g-bd">
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
    </div>
	       
</template>
<script type="text/javascript">
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

        },
        computed: {

        },
        components: {
           
        },   
    }
</script>
<style>
    .g-bd{
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
</style>