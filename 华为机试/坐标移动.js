/**
 * Created by Lyn on 2017/6/23.
 */
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
     var arr = line.split(";");
    var x=0;
    var y=0;
    console.log(arr);
    for(var i = 0 ; i<arr.length;i++){
        var str = arr[i].trim();
        if(str.length<2||str.length>3){
            continue;
        }
        else if(str.substr(0,1)==='A' && isNaN(Number(str.substr(1)))==false){
            x = x - Number(str.substr(1));
        }
        else if(str.substr(0,1)=== 'D' && isNaN(Number(str.substr(1)))==false){
            x = x + Number(str.substr(1));
        }
        else if(str.substr(0,1)=== 'W' && isNaN(Number(str.substr(1)))==false){
            y = y + Number(str.substr(1));
        }
        else if(str.substr(0,1)=== 'S' && isNaN(Number(str.substr(1)))==false){
            y = y - Number(str.substr(1));
        }
        else{
            continue;
        }
    }
    console.log(x+","+y);
})