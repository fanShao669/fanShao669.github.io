<template>
	<div class="g-bd">
		<!-- 缓动效果 -->
		
        <div class="ball"></div>



		<router-link tag="span" to="/css39">第39个动画</router-link>
		<router-link tag="span" to="/css41">第41个动画</router-link>	
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
     * Bouncing animation
     */

    @keyframes bounce {
        60%, 80%, to {
            transform: translateY(400px);
            animation-timing-function: ease;
        }
        70% { transform: translateY(300px); }
        90% { transform: translateY(360px); }
    }

    .ball {
        width: 0; height: 0; padding: 1.5em;
        border-radius: 50%;
        margin: auto;
        background: red radial-gradient(at 30% 30%, #fdd, red);
        animation: bounce 2s cubic-bezier(.1,.25,1,.25) forwards;
    }

    body {
        background: linear-gradient(skyblue, white 450px, yellowgreen 0);
        min-height: 100vh;
    }

</style>