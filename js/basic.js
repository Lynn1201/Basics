/**
 * Created by Lyn on 2017/4/7.
 */
var readline = require('readline');

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.on('line',function(line){
    var arr=  [];
    //存放所有任务
    var taskArr = [];
    arr = line.split("|");
    //截取字符串
    for(var i =0;i<arr.length;i++){
        var str = arr[i].substring(1,arr[i].length-2);
        var taskNum = str.split(".");
        var taskObj = new task(parseInt(taskNum[0]),parseInt(taskNum[1]),parseInt(taskNum[2]),parseInt(taskNum[3]));
        taskArr.push(taskObj);
    }
    taskArr.sort(sortTime);

    //设当前时间为currentTime
    var currentTime = 0;

    var out = [];

    for(currentTime = 0;currentTime<=200 ; currentTime++){
        //在小于第一个任务的时间内，什么任务也不运行
        if(currentTime<taskArr[0].startTime){

        }
        //判断第一个任务开始时间和第二个任务开始时间
        //如果第
    }
});

function task(id,prior,startTime,endTime){
    this.id = id;
    this.prior = prior;
    this.startTime=startTime;
    this.endTime=endTime;
}

function getMin(arr){
    var min = 200;
    for(var i=0;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

//按任务开始时间进行排序
function sortTime(a,b){
    return a.startTime - b.startTime;
}
//[1.80.1.10]|[2.20.11.15]