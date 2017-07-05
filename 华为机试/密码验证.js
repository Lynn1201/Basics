/**
 * Created by Lyn on 2017/6/23.
 */
var readline = require('readline');

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var lowCase = /[a-z]/; //小写字母
var upperCase = /[A-Z]/;//大写字母
var numCase = /[0-9]/;//数字
var dollarCase = /\W/;//其它符号

//以单词为单位逆序
r1.on('line',function(line){
    codeVerify(line);
});

function codeVerify(str){
    var num = 0;
    if(str.length<9){
        console.log('NG');
        return;
    }
    if(lowCase.test(str)){
        num++;
    }
    if(upperCase.test(str)){
        num++;
    }
    if(numCase.test(str)){
        num++;
    }
    if(dollarCase.test(str)){
        num++;
    }
    if(num<3){
        console.log("NG");
        return;
    }
    //不停取三个子串比较大小
    for(var i=0;i<str.length-6;i++){
        var str1 = str.substring(i,i+2);
        for(var j=i+3;j<str.length-3;j++){
            var str2 = str.substring(j,j+2);
            if(str1===str2){
                console.log("NG");
                return;
            }
        }
    }
    console.log('OK');
}