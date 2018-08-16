<template>
	<router-view></router-view>
</template>

<script>
export default {}
</script>
<style lang="scss">
@import './assets/css/main';

::-webkit-scrollbar {
    width: 6px;
    height: 6px
}

::-webkit-scrollbar-track-piece {
    background-color: transparent
}

::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #ccc;
    -webkit-border-radius: 6px
}
 
 
.tp-fade-enter-active {
  transition: all .5s ease;
}

.tp-fade-enter{
  transform: translateX(10px);
  opacity: 0;
}

/* 三级列表 */
.tp-ani-enter-active {
  transition: all 1s ease;
}
.tp-ani-leave-active {
   display: none;
}
.tp-ani-enter{
  transform: translateY(-10px);
  opacity: 0;
}

html,body{
	height: 100%;
	overflow: hidden;
	background-color: #EFF2F7;
	min-width: 1200px;
}

</style>