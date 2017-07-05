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
    //小写、大写、数字
    var str = line.trim();
    var strLow = [];
    var strUpper = [];
    var strNum = [];
    for(var i = 0; i < str.length ; i++){
        if(lowCase.test(str[i])){
            strLow.push(str[i]);
            continue;
        }
        if(upperCase.test(str[i])){
            strUpper.push(str[i]);
            continue;
        }
        if(numCase.test(str[i])){
            strNum.push(str[i]);
            continue;
        }
    };

    strLow.sort();
    strUpper.sort();
    strNum.sort();

    console.log(strLow.join("")+strUpper.join("")+strNum.join(""));
});