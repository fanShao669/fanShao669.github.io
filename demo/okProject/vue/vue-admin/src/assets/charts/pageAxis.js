let colors = ['#5793f3', '#d14a61', '#675bba'];

let dataMap = {};
let legendData = ['浏览量', '访客数','IP数','跳出率','访问时长','转化次数'];

dataMap.series = [];
dataMap.data = [];

dataMap.legend = function(){
	
	Array.forEach(legendData,function( v ,k ){
		dataMap.series.push({
			name: v,
            type:'line',
            smooth: true,
            data: dataMap.MathRandom()
		})
	})
}

dataMap.MathRandom = function(){
	var random = [];
	for( let i = 0 ; i < 24 ; i++ ){
		if( (i < 8 || i > 11) && i <= 13 || i > 21){
			random.push( Math.floor(Math.random() * ( 24-i) * 100 ));
		}else{
			random.push( Math.floor(Math.random() * ( 24-i)* 3000 ));
		}
		dataMap.data.length > 23 ? '' : dataMap.data.push( (i < 10 ? '0'+ i : i ) + ":00");
	}
	return random;
}

dataMap.legend();


const options = {
    color: colors,

    tooltip: {
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
    	top : 20,
        data:legendData,
        selected: {'跳出率': false ,'访问时长':false,'转化次数':false}
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [ 
        {
            type: 'category',
            data: dataMap.data
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: dataMap.series
};

export default options