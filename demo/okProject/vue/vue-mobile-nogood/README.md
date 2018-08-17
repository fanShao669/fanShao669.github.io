# vue-toutiao #

> 这是用 **vue.js 2.0** 高仿 **今日头条** 的移动端项目，结合了原生app的部分功能以及网页版。
## 前言 ##
本人是 *今日头条* 的重度用户，在学习vue.js过程中，在GitHub上看到了很多高仿webapp的好项目。由此在有了一定的技术积累后，开始构思使用Vue写今日头条，一是自己对于头条的喜爱，另外也是对于自己学习成果的检验。
### 技术栈 ###
 1. vue.js 2.0全家桶（vue、vuex、vue-router）
 2. axios、jsonp
 3. element-ui、iview
 4. vue-lazyload、animate.css、moment、flexible.js

### 在线地址 ###
[线上地址（预览地址）](https://hcy1996.github.io)

### 项目效果图 ###
![加载错误，请在src/static/screenshots中查看](./src/static/screenshots/1.gif)![加载错误，请在src/static/screenshots中查看](./src/static/screenshots/4.jpg)
### 说明 ###
 5. 项目内定死 账号: admin, 密码: admin。
 6. 因为数据原因，**首页**请求的数据接口来自**网页版今日头条**，修改了一些参数； **收藏** 页面数据由本地（static文件）获取。
 7. 此项目主要是对于vue.js的运用，在样式上无法完全还原app，可能有些地方稍微丑陋，望请谅解！
 8. 因为网页接口限制，无法获得app中 **视频** 这一栏目的数据，所以将其改了一些页面结构。
 9. 项目会一直更新，完善更多的功能，如发现一些地方的bug请issue，谢谢。
### 安装 ###
npm install
### 运行 (8090端口) ###
npm run dev

### 感谢 ###
如果您也是头条的重度用户，感觉项目对您有学习帮助，麻烦给个star吧，嘿嘿^_^

----------
**4-23 更新**

 1. 美化首页每条新闻的样式；
 2. 底部导航图标与文字调整；
 3. 修改detail页回到home页“点击加载更多”按钮消失的bug；

---
**4-25 更新**

 1. 修改home页进入detail页滚动条不在顶部的bug
 2. 新增home页右上角“搜索”功能，可进行新闻搜索 
 
 ---
**5-11 更新**

 1. 增加分享框的动画效果 
