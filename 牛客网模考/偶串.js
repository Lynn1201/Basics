
/**
 * Created by Lyn on 2017/7/25.
 */
var readline=require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.on('line',function(line){
    var str = line.substr(0,line.length-1);
    double(str);
});

//判断是否为偶数
function double(str){
    var stringLength = str.length;
    if(stringLength%2 == 0){
        var half = stringLength/2;
        var i;
        var str1 = str.substr(0,half);
        var str2 = str.substr(half,half);
        if(str1 == str2){
            console.log(half);
        }
        else{
            var strLength = str.length;
            var afterstr = str.substr(0,strLength-2);
            double(afterstr);
        }
    }
    else{
        var strLength = str.length;
        var afterstr = str.substr(0,strLength-1);
        double(afterstr);
    }
}