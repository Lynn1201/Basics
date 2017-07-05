var readline = require('readline');

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var arr = [];
var map = [];

r1.on('line',function(n){
    //全部转换为整数？
    if(arr.length == 1){
        arr.push(parseInt(n))
    }
    else{
        var arrS = n.splice(" ");
        var arrInt = [];
        arrInt.push(parseInt(arrS[0]));
        arrInt.push(parseInt(arrS[1]));
        map.push(arrInt);
    }

    if(arr[0] == map.length){
        map.sort(sortNum);
    }
    for(var i=0;i<map.length;i++){
        console.log(map[i][0]+" "+map[i][1]);
    }
});

function sortNum(param1,param2){
    if(param1[0]>param2[0])
        return param1[0]-param2[0];
}