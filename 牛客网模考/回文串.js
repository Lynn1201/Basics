/**
 * Created by Lyn on 2017/7/25.
 */

var readline=require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.on('line',function(line){
    var i = count(line);
    console.log(i);
});

function count (str) {
    str = String(str);
    if (!str) { return 0; }
    var nums = str.split('').reduce((map, s) => map.set(s, (map.get(s) || 0) + 1), new Map());
    return Array.from(nums.values()).reduce((odd, n) => n % 2 !== 0 ? odd + 1 : odd, 0) || 1;
}