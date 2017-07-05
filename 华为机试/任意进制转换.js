/**
 * Created by Lyn on 2017/6/23.
 */
var readline = require('readline');

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//以单词为单位逆序
r1.on('line',function(line){
    //先将进制转换为10进制
    var arr = line.split(" ");
    //任意进制转十进制
    var numberTen = parseInt(arr[2],arr[0]);
    //十进制转其它进制
    var numberTarget = numberTen.toString(arr[1]);
    console.log(numberTarget);
});