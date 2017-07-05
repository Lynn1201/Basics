/**
 * Created by Lyn on 2017/3/26.
 */
function count(start, end) {
    var interval = setInterval(function(){
        if(start<=end){
            console.log(start);
            start++;
        }
        else{
            cancel(interval);
        }
    },100);
}

function cancel(timeInterval){
    var stop = clearInterval(timeInterval);
}