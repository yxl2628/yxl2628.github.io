---
layout: post
title: js相关的小技巧及简单api
date: 2018-12-7 13:47:39
tags: javascript
---

- 判断内外网
```javascript
var baseUrl = (function(){
  var privateReg = /^1(((0|27)(.(([1-9]?|1[0-9])[0-9]|2([0-4][0-9]|5[0-5])))|(72.(1[6-9]|2[0-9]|3[01])|92.168))(.(([1-9]?|1[0-9])[0-9]|2([0-4][0-9]|5[0-5]))){2})$/
  var private = 'http://内网ip'
  var internet = 'http://外网ip'
  return privateReg.test(window.location.hostname) ? private : internet
})()
```
