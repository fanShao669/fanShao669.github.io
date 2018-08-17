var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');  //我是新引入的ejs插件
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator'); //日志切割

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

//实例10：默认的日志打印
app.use(logger('dev')); 

 //实例8.打印日志到本地
 /**********start******************************************************************************/
// var accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});
// app.use(logger('short',{stream:accessLogStream})); 
 /**********end*********************************************************************************/
// 实例9:日志切割
/*****************************************start**********************************************/
// var logDirectory = path.join(__dirname,'log');
// // ensure log directory exists
// fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// // create a rotating write stream
// var accessLogStream = FileStreamRotator.getStream({
// 	date_format:'YYYYMMDD',
// 	filename:path.join(logDirectory,'access-%DATE%.log'),
// 	frequency:'daily',
// 	verbose:false
// })
// app.use(logger('combined',{stream:accessLogStream}))
/*******************************************end*****************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*第三方中间件*/
// 实例6.使用第三方中间件向 Express 应用程序添加功能。
// 安装具有所需功能的 Node.js 模块，然后在应用层或路由器层的应用程序中将其加装入。
// 以下示例演示如何安装和装入 cookie 解析中间件函数 cookie-parser
app.use(cookieParser());
/*内置中间件*/
// 实例5 Express 不再依赖于 Connect。除 express.static 外，先前 Express 随附的所有中间件函数现在以单独模块的形式提供。请查看中间件函数的列表。https://github.com/senchalabs/connect#middleware
// express.static(root,[options]) root 自变量指定从其中提供静态资源的根目录。
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/*错误处理中间件*/
// ！！！实例4.错误处理中间件始终采用四个自变量。必须提供四个自变量，以将函数标识为错误处理中间件函数。即使无需使用 next 对象，也必须指定该对象以保持特征符的有效性。否则，next 对象将被解释为常规中间件，从而无法处理错误。
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
