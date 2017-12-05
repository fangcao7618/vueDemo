// require('babel-register');
// // 应用的其余 require 需要被放到 hook 后面
// const app = require('./app');

const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(async ctx => {
    ctx.body = 'Hello World';
    ctx; // 这是 Context
    ctx.request; // 这是 koa Request
    ctx.response; // 这是 koa Response
});

// app.listen(3000);

http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);