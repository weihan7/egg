var http = require('http');
var koa = require('koa');
var app = new koa();

// app.use(function *(){
//     console.log("first run ");
//     this.body = 'hello world';

// })


//response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

// app.listen(3000);

http.createServer(app.callback()).listen(3000);
