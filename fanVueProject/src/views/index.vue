<template>
	<div class="g-bd">
		dsafsaffas三大发了几十大发啦
		fdssdfjl
		<input class="search" type="text" v-model="searchText">
		<ul>
			<li v-for="user in users">{{user.name}}</li>
		</ul>
		<div class="circular">
			<svg viewBox ='0 0 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
			<svg viewBox ='100 0 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
			<svg viewBox ='-100 100 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
			<svg viewBox ='0 0 100 100'>
				<path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
				<text>
					<textPath xlink:href='#circle'>
						circular reasoning works because
					</textPath>	
				</text>	
			</svg>
		</div>

		<!-- 沿环形路径平移的动画 -->
	<!-- 	<div class="path">
			<div class="avatar">
				<img src="static/images/girl.jpeg"  alt="">
			</div>
		</div> -->
		<!-- 沿环形路径平移的动画 优化 -->
		<div class="path">
			<img src="http://lea.verou.me/book/adamcatlace.jpg" class="avatar" />
		</div>


	</div>
</template>
<script>
	// import rainbowHead from '../components/rainbowHead.vue'
 //    import rainbowFoot from '../components/rainbowFoot.vue'
    export default {
        data () {
            return {
                users:[
                	{name:'快车',tag:'1'},
                	{name:'出租车',tag:'2'},
                	{name:'顺风车',tag:'3'},
                	{name:'专车',tag:'4'},
                	{name:'自行车',tag:'5'},
                ],
                searchText:'',
            }
        },
        mounted: function () {
            // $('.dl-btn').hover(function(){
            // 	$(this).find('.qr-code').stop(true).fadeIn(300);
            // },function(){
            // 	$(this).find('.qr-code').stop(true).fadeOut(300);
            // })
            console.log('aaaaaavvvvv');
        },
        methods:{
            
        },
        computed: {

        },
        // components: {
        //     rainbowHead,
        //     rainbowFoot
        // },   
    }
</script>
<!-- <link rel="stylesheet" href="/views/index.css"> -->
<style>
	.g-bd{
		font-size: 20px;
		color:red;
	}
	.search{
		width: 100%;
		height: 2.0rem;
		border:1px solid #e6e6e6;
	}
	.circular{
		position: absolute;
		left:2em;
		width: 2em;
		height: 2em;
		margin: 3em auto 0;
	}
	.circular path{
		fill:none;
	}
	.circular svg{
		display: block;
		overflow: visible;
	}
/*	<!-- 沿环形路径平移的动画 -->*/	
/*@keyframes spin {
	to { transform: rotate(1turn); }
}

.avatar {
	animation: spin 10s infinite linear;
	transform-origin: 50% 150px;
}

.avatar > img {
	animation: inherit;
	animation-direction: reverse;
}*/

/* Anything below this is just styling */

.avatar {
	width: 50px;
	margin: 0 auto;
	border-radius: 50%;
	overflow: hidden;
}

.avatar > img {
	display: block;
	width: inherit;
	height: 50px;
}

.path {
	width: 300px; height: 300px;
	padding: 20px;
	border-radius: 50%;
	background: #fb3;
}	
/*	<!-- 沿环形路径平移的动画 -->*/	

/*	<!-- 沿环形路径平移的动画优化 -->*/

/**
 * Animation along a circular path - Solution 2
 */
 
@keyframes spin {
	from {
		transform: rotate(0turn)
		           translateY(-150px) translateY(50%)
		           rotate(1turn)
	}
	to {
		transform: rotate(1turn)
		           translateY(-150px) translateY(50%)
		           rotate(0turn);
	}
}


.avatar {
	animation: spin 3s infinite linear;
}

/* Anything below this is just styling */

.avatar {
	display: block;
	width: 50px;
	margin: calc(50% - 25px) auto 0;
	border-radius: 50%;
	overflow: hidden;
}

.path {
	width: 300px; height: 300px;
	padding: 20px;
	margin: 100px auto;
	border-radius: 50%;
	background: #fb3;
}
/*	<!-- 沿环形路径平移的动画优化 -->*/


</style>