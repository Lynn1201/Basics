/**
 * Created by Lyn on 2017/3/28.
 */
var http = require('http');
var outside = require('./outsideFun');

//http创建了一个外部的服务，request是浏览器发出的请求对象，response是服务器端向浏览器写回的对象。
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    //协议头head，有协议头就必须有协议尾
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //如果不写下面这段话，会打出两次访问，然而我也不知道为什么。
    if(request.url!=="/favicon.ico") {
        // 发送响应数据 "Hello World"
        /*
        *下面是调用外部函数的两种不同方式吧
        */
        outside.fun2(response);
        //用字符串形式调用这个函数可以把函数名写活。。。
        //有点类似于像是object对象的调用方式
        outside['fun3'](response);

        //必须要写了response.end之后才算这个协议完了，否则就不停滴转。
        response.end('Hello World\n');
    }
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');