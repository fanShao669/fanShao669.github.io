1.Google浏览器上传文件卡死状态问题解决方案(将Adobe Acrobat这个扩展程序设置为允许)
https://blog.csdn.net/chuanmin_zhang/article/details/80963474?utm_source=blogxgwz1
2.快速打开谷歌商店： chrome://apps     快速打开谷歌扩展文件 chrome://extensions/

3.调用打印机：
<span id="btn-print" className="btn btn-print" onClick="window.print();">立即打印</span>

4.写邮件样式需要注意的点
注意事项：：
1、邮件不能采用div布局，只能使用table，如使用div布局，不能出现并排显示的内容，outlook下载后，div布局的内容会横排显示，不能竖排显示
2、涉及到需要用背景图片的，需要使用table的background属性，而不是style里面的background样式
3、邮件中不能定义font-family为汉字的字体，需要默认字体，或者不定义，gmail等邮箱会过滤掉字体样式属性
4、邮件里设置的高度，gmail会过滤掉，如果空内容，是无法把容器撑开的，一般采用img图片撑开，但需要注意，空白位置需要增加font-size:0px;line-height:0px;两个属性，保证样式在发到邮箱后，img下面不会多出空行
5、邮件宽度不超过650px
6、在所有td和tr标签上添加  style="border: 0px; padding: 0px; margin: 0px;"样式，保证各个浏览器样式统一
7.邮件不支持html5新特性（eg：section标签）
8.邮件会默认生成一个style文件；可能会覆盖掉你的样式；（eg:body{margin：0}
参考文档：
1.https://segmentfault.com/a/1190000008864116 
2. http://blog.csdn.net/xiaoran606/article/details/7107878