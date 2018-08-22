"use strict"
//加载所需要的模块
var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
var cp = require('child_process')
var videoList = require('./video.js')

// 创建服务器
http.createServer(function(request, response) {
  // 解析请求，包括文件名
  var pathname = url.parse(request.url).pathname
  if (pathname.indexOf('/startShell/') < 0) {
    console.log('接口路径错误：', pathname)
    response.writeHead(404, {
      'Content-Type': 'text/html'
    })
  } else {
    const index = pathname.split('/')[2]
    console.log('【' + pathname + '】准备启动摄像头', parseInt(index) + 1, '>>>>>>>')
    cp.exec('/home/zhongtie/start.sh ' + videoList[index].url + ' &', function() {
      console.log('切换视频，执行脚本#', '/home/zhongtie/start.sh ' + videoList[index].url + ' &')
    })
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.write('success')
  }
  response.end()
}).listen(8000)

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/')
