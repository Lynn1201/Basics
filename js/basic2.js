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
    //输入数字存放
    var arr = line.split(",");
    var arrString = [];//全是字符串
    var arrInt = [];
    var arrSort = [];
    for(var i = 0;i < arr.length ; i++){
        if(arr[i].length != 1){
            return -1;
        }
        else if(parseInt(arr[i])>9){
            return -1;
        }
        else if(parseInt(arr[i])<1){
            return -1;
        }
        else if(arrString.indexOf(parseInt(arr[i]))!=-1){
            return -1;
        }
        else if(parseInt(arr[i]) == 6||parseInt(arr[i]) == 9){
            arrString.push('6');
            arrString.push('9');
        }
        else if(parseInt(arr[i]) == 2||parseInt(arr[i]) == 5){
            arrString.push('2');
            arrString.push('5');
        }
        else{
            arrString.push(arr[i]);
        }

    }
    //两位数字符串拼接
    var arr2 = []
    for(var i = 0;i<arrString.length;i++){
        for(var j = 0; j<arrString.length;j++){
            if(i!=j){
                    arr2.push(arrString[i]+arrString[j]);
            }
        }
    }
    var arr3 = [];
    for(var i=0;i<arrString.length;i++){
        for(var j=0;j<arrString.length;j++){
            for(var k=0;k<arrString.length;k++){
                if((i!=j)&&(j!=k)&&(i!=k)){
                    arr3.push(arrString[i]+arrString[j]+arrString[k]);
                }
            }
        }
    }
    var arr2Delete = doubleStr(arr2);
    var arr3Delete = doubleStr(arr3);
    var arrAll = arrString.concat(arr2Delete).concat(arr3Delete);

    var arrNum = [];
    for(var i=0;i<arrString.length;i++){
        arrNum.push(parseInt(arrString[i]));
    }
    arrNum.sort(sortNumber);
    for(var i=0;i<arrAll.length;i++){
        arrInt.push(parseInt(arrAll[i]));
    }
    arrInt.sort(sortNumber);
    console.log(arrInt[arrNum[arrNum.length-1]-1]);
});

function sortNumber(a,b){
    return a-b;
}

function doubleStr(arr){
    //如果重复就删除
    for(var i=0;i<arr.length;i++){
        if(arr[i].indexOf('6')!=-1&&arr[i].indexOf('9')!=-1){
            arr.splice(i,1);
            i--;
        }
        else if(arr[i].indexOf('2')!=-1&&arr[i].indexOf('5')!=-1) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}