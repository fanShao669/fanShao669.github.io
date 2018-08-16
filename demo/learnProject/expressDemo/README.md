<!-- 烟祭 -->
/*v1.0.0*/
package.json
1.react react-dom 需要使用的库
2.babel-polyfill 和 core.js作用一样
<!-- 这意味着你可以使用新的内置对象比如 Promise 或者 WeakMap, 静态方法比如 Array.from 或者 Object.assign, 实例方法比如 Array.prototype.includes 和生成器函数（提供给你使用 regenerator 插件）。为了达到这一点， polyfill 添加到了全局范围，就像原生类型比如 String 一样。 -->





遇到的问题
1.jade文件改成HTML文件
	app.js 文件中
	1.添加ejs模块  packjson中添加ejs
	var ejs = require('ejs');  //我是新引入的ejs插件 
	2.
	app.set('view engine', 'jade');
	改为
	app.engine('html', ejs.__express);
	app.set('view engine', 'html');
2.