/**
 * Created by Lyn on 2017/3/30.
 */
//引入readline模块
var readline = require("readline");

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
console.log("请输入数组长度：");
var count = 0;
var arr = [];

r1.on("line" , function(a){
    if(count == 0 ){
        console.log("请输入数组元素：");
    }
    arr.push(a);
    count++;
    if(count>=2){
        //调用计算最大连续子数组的函数
        biggestSubArr(arr);
        r1.close();
    }
});

r1.on("close",function(){
    process.exit(0);
})

function biggestSubArr(){
    var length = arr[0];
    var numArr = arr[1].split(" ");
    var numIntArr = [];
    numArr.forEach(function(data,index,arr){
        numIntArr.push(+data);
    })
    var maxNum = numIntArr[0];
    var subLength = 1;//子数组中的元素个数

    //求和
    while(subLength<length){
        for(var i = 0;i+ subLength<=length;i++){
            var sum = 0;
            for(var j = 0 ; j < subLength; j++){
                sum = sum + numIntArr[i+j];
            }
            if(sum > maxNum){maxNum = sum;}
        }
        subLength++;
    }
    console.log(maxNum);
}

//为什么说我算法时间复杂度过大！！！我不服！！！