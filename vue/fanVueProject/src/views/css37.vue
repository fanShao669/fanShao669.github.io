<template>
	<div class="g-bd">
		<!--  map 高德地图 -->
    

        <div id="container" tabindex="0"></div>
        <router-link tag="span" to="/css38">第38个动画</router-link>
        <router-link tag="span" to="/css36">第36个动画</router-link>    
       



        <!-- <fanaside></fanaside> -->
	</div>
</template>

<script>
    // import fanaside from '../components/fanaside.vue'

    export default {
        data () {
            return {
               
            }
        },
        mounted: function () {
            this.$nextTick(function(){
                var map = new AMap.Map('container',{
                    resizeEnable: true,
                    zoom: 10,
                    center: [116.480983, 40.0958]
                });
            })
        },
        methods:{
            
        },
        computed: {

        },
        components: {
            // fanaside,
        }, 
          
    }
</script>
<style>
	.g-bd{
		font-size: 20px;
		color:red;
	}
    /**
     * Sticky footer with flexible height
     */
     
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

</style>