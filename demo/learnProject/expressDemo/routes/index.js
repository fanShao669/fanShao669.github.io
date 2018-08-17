var express = require('express');
var router = express.Router();

/*应用层中间件*/
//实例1 此示例显示没有安装路径的中间件函数。应用程序每次收到请求时执行该函数。
/*********start******************/
	var app = express();
	app.use(function(req,res,next){
		console.log('Time:',Date.now());
		next()
	})
/**********end******************/

//实例2 此示例显示一个路由及其处理程序函数（中间件系统）。此函数处理针对 /user/:id 路径的 GET 请求。
/*****************start**************************/
app.get('/user/:id', function (req, res, next) {
  	res.send('USER');
});
/*****************end**************************/

/*路由器层中间件*/
//实例3 路由器层中间件的工作方式与应用层中间件基本相同，差异之处在于它绑定到 express.Router() 的实例。

/* GET home page. */
router.get('/', function(req, res, next) {
	res.cookie('testName', 'testValue')   //实例7.cookie-parse的使用
  	res.render('index',{helloWorld: 'hello,world'});
  	// console.log(req.headers.cookie);
  	// console.log('111111111111111111'+req.cookies.testName)
});





module.exports = router;
