/**
 * Created by Lyn on 2017/6/22.
 */
var readline = require('readline');

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var count = 0;
var n = 0;//总行数
var arr = [];
//以单词为单位逆序
r1.on('line',function(line){
    count++;

    if(count == 1){
        n = parseInt(line);
    }
    else if(n+1 == count){
        arr.push(line);
        arr.sort();
        for(var i=0;i<arr.length;i++){
            console.log(arr[i]);
        }
    }
    else{
        arr.push(line);
    }
})