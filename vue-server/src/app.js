const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const fs=require('fs')
const path = require('path')
server.get('*', (req, res) => {
    
  const app = new Vue({
    data: {
      url: req.url
    },
    // template: `<div>访问的 URL 是： {{ url }}</div>`
    template:fs.readFileSync(__dirname+'/index.html', 'utf-8')
  })
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <meta charset="UTF-8">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
  
})
console.log(fs.readFileSync(__dirname+'/index.html', 'utf-8',function(err, data) {  
    // 读取文件失败/错误  
    if (err) {  
        throw err;  
    }  
    // 读取文件成功  
    console.log('utf-8: ', data.toString());  
}))
server.listen(8080)