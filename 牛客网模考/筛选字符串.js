/**
 * Created by Lyn on 2017/7/25.
 */
var readline=require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

var arr = [];//保存基因
var count = 0;

r1.on('line',function(line){
    //计算总长度
    stringLength = line.trim().toString().length;
    console.log(stringLength);
    //当前长度为count
    var str = '';
    for(count;count < stringLength+1;count++){
        if(line[count]=='A'||line[count]=='T'){
            str = str+line[count];
        }
        else if( line[count]=='C'|| line[count]=='G'){
            str = str+line[count];
        }
        else{
            if(str == '') continue;
            arr.push(str);
            str = '';
        }
    };
    //取长度最大的输出
    var maxStr = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].length > maxStr) {
            maxStr = arr[i].length;
        }
    }
    console.log(arr);
    console.log(maxStr);
});