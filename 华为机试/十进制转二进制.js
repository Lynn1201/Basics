/**
 * Created by Lyn on 2017/6/22.
 */
var readline = require('readline');

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//以单词为单位逆序
r1.on('line',function(line){
    //trim函数可以用于去掉字符串首尾的空格
    var a = parseInt(line.trim());
    var num = a.toString(2);
    var total = 0;
    for(var i=0;i<num.length;i++){
        if(num[i]=='1') {
            total++;
        }
    }
    console.log(total);
})