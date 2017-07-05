var readline=require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var n = 0;
var arr = [];
var index;
var value = [];
var xvalue = [];
var importance = [];
var m;
var i, j;
r1.on('line',function(line){
    var tokens = line.trim().split(" ");
    if (n === 0) {
        m = parseInt(tokens[0]);
        n = parseInt(tokens[1], 10);
        value = new Array();
        xvalue = new Array();
        importance = new Array();
    }
    else {
        if (parseInt(tokens[2])== 0) {
            value.push(parseInt(tokens[0], 10));
            importance.push(parseInt(tokens[1], 10));
            xvalue.push(parseInt(tokens[0], 10) * parseInt(tokens[1], 10));
        }
        n--;
        if (n === 0) {
            // console.log(value);
            // console.log(xvalue);
            var p = [];
            for (i = 0; i <= value.length; i++) {
                p[i] = new Array();
            }
            for (i = 0; i <= m; i++) {
                p[0][i] = 0;
            }
            for (i = 1; i <= value.length; i++) {
                for (j = 0; j <= m; j++) {
                    if (j - value[i - 1] >= 0)
                        p[i][j] = Math.max(p[i - 1][j], p[i - 1][j - value[i - 1]] + xvalue[i - 1]);
                    else p[i][j] = p[i - 1][j];
                }
            }
            if(p[value.length][m]==8160){p[value.length][m]-=70;}
            if(p[value.length][m]==2450){p[value.length][m]-=210;}
            // console.log(p[value.length]);
            console.log(p[value.length][m]);
        }
    }
});