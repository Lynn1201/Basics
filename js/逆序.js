/**
 * Created by Lyn on 2017/6/22.
 */
var readline = require('readline');

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

/*
r1.on('line',function(line){
    var str = '';
    for(var i=line.length-1;i>=0;i--){
        // arr.push(line[i]);
        str = str+line[i];
    }
    console.log(str);
});*/
//以单词为单位逆序
r1.on('line',function(line){
    var arr=[];
    arr=line.split(' ');
    var str='';
    for(var i=arr.length-1;i>0;i--){
        // arr.push(line[i]);
        str = str+arr[i]+" ";
    }
    str = str + arr[0];
    console.log(str);
})

function reverse(str){

}