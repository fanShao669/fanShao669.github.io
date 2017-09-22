<template>
    <div>
        <footer>
            <ul>
                <li class="footer-item" v-for='(item,index) in items' :class="{active:isCur == index}" @click="switchActive(index)">
                    <router-link v-if='item.id == 1'  :to="{path:'huiShao',query:{index:index}}">
                        <div class="footer-text">{{item.name}}</div>
                    </router-link>
                    <router-link v-if='item.id == 2' :to="{path:'hongShao',query:{index:index}}">
                        <div class="footer-text">{{item.name}}</div>
                    </router-link>
                    <router-link v-if='item.id == 3' :to="{path:'fanShao',query:{index:index}}">
                        <div class="footer-text">{{item.name}}</div>
                    </router-link>
                    <router-link v-if='item.id == 4' :to="{path:'kunShao',query:{index:index}}">
                        <div class="footer-text">{{item.name}}</div>
                    </router-link>
                    <router-link v-if='item.id == 5' :to="{path:'qiShao',query:{index:index}}">
                        <div class="footer-text">{{item.name}}</div>
                    </router-link>
                    <router-link v-if='item.id == 6' :to="{path:'fangShao',query:{index:index}}">
                        <div class="footer-text">{{item.name}}</div>
                    </router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                isCur:0,
                items:[
                    {name:'辉少',id:1},
                    {name:'宏少',id:2},
                    {name:'凡少',id:3},
                    {name:'坤少',id:4},
                    {name:'琦少',id:5},
                    {name:'芳少',id:6},
                ]
            }
        },
        mounted: function () {
            this.$nextTick(function () {
               this.$route.query.index;
               this.isCur = this.$route.query.index;
            })
        },
        methods:{
            // 获取url参数
            // getQueryString:function(name){
            //     var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            //     var r = window.location.search.substr(1).match(reg);
            //     if (r != null) {
            //         return unescape(r[2]);
            //     }
            //     return null;
            // },
           switchActive:function(index){
                var _this = this;
                _this.isCur = index;
           }
        },
        components: {
          
        },   
    }
</script>
<style>
   
</style>