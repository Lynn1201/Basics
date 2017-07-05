var readline=require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var arr=[];//保存对象数组
var n = 0;

r1.on('line',function(line){
    if(n == 0){
        n = parseInt(line);
    }
    else{
        var arrInt = line.split(" ");
        var mapObj = new map(parseInt(arrInt[0]),parseInt(arrInt[1]));
        arr.push(mapObj);
    }
    //排序
    if(arr.length == n){
        arr.sort(sortNumber);
        for(var i=0;i<arr.length-1;i++){
            //如果有重复
            if(arr[i].key == arr[i+1].key){
                //删除
                arr[i].value = arr[i].value + arr[i+1].value;
                arr.splice(i+1,1);
                i--;
            }
            else{
                console.log(arr[i].key+" "+arr[i].value);
            }
        }
        console.log(arr[arr.length-1].key,arr[arr.length-1].value);
        arr = [];
    }
});

//新建一个对象
function map(key,value){
    this.key = key;
    this.value = value;
}

function sortNumber(a,b){
    return (a.key - b.key);
}