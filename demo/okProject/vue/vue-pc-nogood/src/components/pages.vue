<template>
    <div>分页是吧</div>
</template>

<script>
    export default {
    name : 'pages',
    //通过props来接受从父组件传递过来的值
    props : {
       
    },
    data () {
        return {
            
        }
    },
    methods : {
      
    },
    computed : {
   
    }
    ,
    watch : {
       
    }
}
</script>

<style lang="scss" scoped>
    .mo-paging {
        display: inline-block;
        padding: 0;
        margin: 1rem 0;
        font-size: 0;
        list-style: none;
        user-select: none;
        > .paging-item {
            display: inline;
            font-size: 14px;
            position: relative;
            padding: 6px 12px;
            line-height: 1.42857143;
            text-decoration: none;
            border: 1px solid #ccc;
            background-color: #fff;
            margin-left: -1px;
            cursor: pointer;
            color: #0275d8;
            &:first-child {
                margin-left: 0;
        }
            &:hover {
                background-color: #f0f0f0;
                color: #0275d8;
        }
            &.paging-item--disabled,
            &.paging-item--more{
                background-color: #fff;
                color: #505050;
        }
            //禁用
            &.paging-item--disabled {
                cursor: not-allowed;
                opacity: .75;
        }
            &.paging-item--more,
            &.paging-item--current {
                cursor: default;
        }
            //选中
            &.paging-item--current {
                background-color: #0275d8;
                color:#fff;
                position: relative;
                z-index: 1;
                border-color: #0275d8;
        }
    }
    }
</style>
