/**
 * Created by yanji on 2018年8月15
 */

 // 使用 import index from './utils/index'
 // index.inputType('testk')

module.exports ={
    queryString:() => {
        let _queryString = {};
        const _query = window.location.search.substr(1);
        const _vars = _query.split('&');
        _vars.forEach((v, i) => {
            const _pair = v.split('=');
            if (!_queryString.hasOwnProperty(_pair[0])) {
                _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
            } else if (typeof _queryString[_pair[0]] === 'string') {
                const _arr = [ _queryString[_pair[0]], decodeURIComponent(_pair[1])];
                _queryString[_pair[0]] = _arr;
            } else {
                _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
            }
        });
        return _queryString;
    },

    isIe :()=>window.navigator.userAgent.includes('Trident'),
    isUc :()=>window.navigator.userAgent.includes('UCBrowser'),
    //获取url中的参数
    getParams: function (url) {
        var reg = /(\w+)=([^&]+)/g,
            params = {},
            result = [];

        url = (url.split('?')[1] || '');

        while(result = reg.exec(url)) {
            params[result[1]] = result[2];
        }
        return params;
    },

    // 只包含中文,和空格
    onlyCn: function(str){
        return /^[\u4e00-\u9fa5\s]+$/.test(str)
    },
    
    // 包含中文
    includeCn: function(str){
        if(!str) return false;
        if(str.search(/[\u4e00-\u9fa5]+/)>-1)  
            return true
        return false
    }, 

    // 包含英文
    includeEn: function(str){
        if(!str) return false;
        if(str.search(/[a-zA-Z]+/)>-1)  
            return true
        return false
    },

    // 全部是英文 和空格
    onlyEn:function(str){
        return /^[A-Za-z\s]+$/.test(str)
    },
    includeEnAndCn: function(str){
        return !/^[\u4e00-\u9fa5\s]+$/.test(str)&&!/^[A-Za-z\s]+$/.test(str)&&!/[^a-zA-z\s\u4e00-\u9fa5]+/.test(str)
    },
    includeOtherVarchar:function(str){
        return /[^a-zA-z\s\u4e00-\u9fa5]+/.test(str)
    },
    // 判定输入类型
    inputType: (str) => {
        return {
            onlyCn:/^[\u4e00-\u9fa5\s]+$/.test(str),
            onlyEn:/^[A-Za-z\s]+$/.test(str),
            includeEnAndCn:!/^[\u4e00-\u9fa5\s]+$/.test(str)&&!/^[A-Za-z\s]+$/.test(str)&&!/[^a-zA-z\s\u4e00-\u9fa5]+/.test(str),
            includeOtherVarchar:/[^a-zA-z\s\u4e00-\u9fa5]+/.test(str),
        }
    },
    // 身份证校验
    isIdNumber:str=>/^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/.test(str),

    // 电话号码校验
    isTel:str=>/^1\d{10}$/.test(str),

    // 只允许输入英文字母、数字、空格、中文（=@#）
    canInput:str=>{
        return str.replace(/[^\w=@#^\u4E00-\u9FA5 ]/ig,"")
    },
    // 去除一头一尾
    empty:str=>str.replace(/^\s+|\s+$/g,""),
    
    //去除所有空格
    emptyAll:str=>str.replace(/\s/g,''),

    /**
     * 解析数组 或者字符串
     * '1' => 1
     * ['1'] => [1]
     */
    parseStr2Num:function(str){
        const type = Object.prototype.toString.call(str);
        if(type==="[object String]")
            return parseInt(str)
        if(type==="[object Array]")
            return str.map(item=>parseInt(item))
        return str
    },
    parseNum2str:function(num){
        const type = Object.prototype.toString.call(num);
        if(type==="[object Number]")
            return num.toString()
        if(type==="[object Array]")
            return num.map(item=>item.toString())
        return num
    },
    array2map:function(list, key, prefix) {
        var result={}, i, l, p, item;
        for(i = 0, l = list.length; i < l; i++){
            item = list[i];
            p = prefix + list[i][key];
            result[p] = list[i];
        }
        return result;
    },
    //判断是否是手机号
    mobile: function (mobile) {
        /* 号码段来自 http://t.cn/Rv6QvRr */
        return /^(1)\d{10}$/.test(mobile);
    },
    //判断是否是email
    email: function (email) {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i.test(email)
    },
    //外国身份证号判断
    foreignIdNumber:function (str) {
       return str.length<18?true:false;
    },

    //判断target是否在obj内
    contains:function(obj, target) {
        if (obj == null) return false;
        for(var i = 0, l = obj.length; i < l; i++){
            if(obj[i] === target){
                return true;
            }
        }
        return false;
    },
    //判断data是否为type类型
    isTypeOf : function(_data,_type){
        try{
                _type = _type.toLowerCase();
                if (_data===null) return _type=='null';
                if (_data===undefined) return _type=='undefined';
                return Object.prototype.toString.call(_data).toLowerCase()=='[object '+_type+']';
        }catch(e){
                return !1;
        }
    },
    uniqueArr:function(data){
      data = data || [];
            var a = {};
      for (var i=0; i<data.length; i++) {
        var v = data[i];
        if (typeof(a[v]) == 'undefined'){
          a[v] = 1;
        }
      }
        data.length=0;
      for (var i in a){
        data[data.length] = i;
      }
      return data;
    },
    spliceArray:function(arr1, arr2, key){
        var type = Object.prototype.toString.call(arr1[0]);
        var tempArr = JSON.parse(JSON.stringify(arr1));
        if(type === '[object Object]'){
            for(var i = 0,len2 = arr2.length; i <len2; i++)
                for(var j=0,len1 = arr1.length; j<len1;j++){
                    // console.log(arr2[i][key]+','+arr1[j][key]);
                    if(arr2[i][key] == arr1[j][key])
                        tempArr.splice(j,1);
                }
            return tempArr;
        }else{
             for(var len = arr2.length; len--; )
                tempArr.splice(arr1.indexOf(arr2[len]),1);
            return tempArr;
        }
    },
    multiline:function(func){
        var reg = /^function\s*\(\)\s*\{\s*\/\*+\s*([\s\S]*)\s*\*+\/\s*\}$/;
        return reg.exec(func)[1];
    },
    hasClass: function (obj, cls) {

        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },

    addClass:function (obj, cls) {
        if (!obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))) obj.className += " " + cls;
    },
    //验证是否为空对象
    isEmptyObject:function(obj){
        for(var item in obj){
            return false;
        }
        return true;
    },
    
    /* 对象深拷贝 */
    cloneObj:(obj) => {  
        let newObj = {}
        if (obj instanceof Array) {  
            newObj = [] 
        }  
        for (let key in obj) {  
            let val = obj[key]
            newObj[key] = typeof val === 'object' ? this.cloneObj(val): val
        }  
        return newObj 
    }
}