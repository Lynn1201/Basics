/**
 * Created by Lyn on 2017/3/27.
 */
//引入readline模块
var readline = require("readline");

//创建readline接口实例
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//question方法
// r1.question("what's your name?", function(answer){
//     console.log("your name is "+answer);
//     r1.close();
// })
var count = 0;
var arr = [];
//line方法
//存在的问题，只能接受一行参数，一旦执行之后即会关闭
//可以是可以通过这种方法读取五行，但这是最优的方法吗？？？感觉并不是！
r1.on("line" , function(a){
    arr.push(a);
    count++;
    if(count>=5){
        console.log(arr);
        nearestPath(arr);
        r1.close();
    }
});

r1.on("close",function(){
    process.exit(0);
})

//求最短路径
function nearestPath(arr){

}