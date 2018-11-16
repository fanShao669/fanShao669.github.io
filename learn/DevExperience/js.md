1. 数字换成数组数字 eg:  1->[1]
eg:  (1 + '').split(',').map(Number)
example2:if(!Array.isArray(req.params.applyIdList)) {req.params.applyIdList = (req.params.applyIdList+'').split(',').map(Number)} 

2.防重复提交
通过在请求的时候加个flag；
eg : 
let flag = false;
handleOk = () => {
	flag = true;
	if(ajax) {
		ajax.success{
			flag = false;
		}
	}
} 

3.获取一个数组中最后一个不为undefined的值；
eg let departmentId = [depList1,depList2,depList3].filter(item => item !== undefined).pop(); //处理部门id，获取选取的最后一个id
！！！ depList1, depList2, depList3为变量