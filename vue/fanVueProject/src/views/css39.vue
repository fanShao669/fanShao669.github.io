<template>
	<div class="g-bd">
		<!-- 打字动画 -->
		
        <div class="loader">Loading…</div>



		<router-link tag="span" to="/css40">第40个动画</router-link>
		<router-link tag="span" to="/css38">第38个动画</router-link>	
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
 * Frame-by-frame animations
 */

    @keyframes loader {
        to { background-position: -800px 0; }
    }

    .loader {
        width: 100px; height: 100px;
        text-indent: 999px; overflow: hidden; /* Hide text */
        background: url(http://dabblet.com/img/loader.png) 0 0;
        animation: loader 1s infinite steps(8);
    }

</style>