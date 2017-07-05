/**
 * Created by Lyn on 2017/3/29.
 */
function partial(fn, str1, str2) {
    var result = function(str3){
        //里面也应该返回一个函数
        return fn(str1,str2,str3);
    }
    return result;
}

var sayIt = function(greeting, name, punctuation) {
    return greeting + ', ' + name + (punctuation || '!'); };
console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'));