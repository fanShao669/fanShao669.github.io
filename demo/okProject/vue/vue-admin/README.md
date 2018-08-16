# vue-admin
Vue后台管理系统  

### 几个核心功能点：
``` bash
1、权限登录 axios + localStorage方式进行验证
2、echarts图标直观展示及敏感数据进行分析
3、增加table模板数据增、删、改、查等功能
4、axios翻页控制

```
> 账户/密码:admin

## 主要技术栈
* vue
* vue-router
* vuex
* axios
* element-ui
* echarts
* sass
* ES6/7
* webpack 2.x

# 项目结构(vue-cli)
``` bash
|- build  -------------------- server webpack
|- config  ------------------- webpack配置文件
|- dist  --------------------- 构建目录
|- src/  --------------------- 项目源代码
    |- assets  --------------- 项目资源文件
    |- components ------------ 相关组件目录
    |- router  --------------- 路由
    |- store  ---------------- vuex
    |- admin.vue  ------------ 后台首页  
    |- App.vue  -------------- vue入口
    |- main.js  -------------- 入口文件
|- static  ------------------- 静态资源目录
|- .babelrc  ----------------- babel 配置文件
|- index.html  --------------- HTML 模板
|- package.json  ------------- npm 配置文件
|- README.md  ---------------- 项目帮助文档

```

## 安装

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```


