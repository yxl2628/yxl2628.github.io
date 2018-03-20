/**
 * 仿jquery的ajax请求
 * @author yang.xiaolong
 * @description 2017-10-25:使用方法和jquery类似
 * @version     1.0.0
 * @param       {obj} options
 * @return      {null}
 */
function ajax(options) {
  function empty() {}

  function obj2Url(obj) {
    if (obj && obj instanceof Object) {
      var arr = []
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          if (i === 'token') {
            continue
          }
          if (typeof obj[i] === 'function') {
            obj[i] = obj[i]()
          }
          if (obj[i] === null) {
            obj[i] = ''
          }
          arr.push(escape(i) + '=' + escape(obj[i]))
        }
      }
      return arr.join('&')
    } else {
      return obj
    }
  }
  var opt = {
    url: '', // 请求地址
    sync: true, // true，异步 | false 同步，会锁死浏览器，并且open方法会报浏览器警告
    method: 'GET', // 提交方法
    data: null, // 提交数据
    username: null, // 账号
    password: null, // 密码
    dataType: null, // 返回数据类型
    success: empty, // 成功返回回调
    error: empty, // 错误信息回调
    timeout: 0 // 请求超时ms
  }
  for (var i in options) {
    if (options.hasOwnProperty(i)) {
      opt[i] = options[i]
    }
  }

  var accepts = {
    script: 'text/javascript, application/javascript, application/x-javascript',
    json: 'application/json',
    xml: 'application/xml, text/xml',
    html: 'text/html',
    text: 'text/plain'
  }
  var abortTimeout = null
  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      xhr.onreadystatechange = empty
      clearTimeout(abortTimeout)
      var result
      var dataType
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || xhr.status === 0) {
        if (xhr.responseType === 'arraybuffer' || xhr.responseType === 'blob') {
          result = xhr.response
        } else {
          result = xhr.responseText
          dataType = opt.dataType
            ? opt.dataType
            : xhr.getResponseHeader('content-type').split('', 1)[0]
          for (var i in accepts) {
            if (accepts.hasOwnProperty(i) && accepts[i].indexOf(dataType) > -1) {
              dataType = i
            }
          }
          try {
            if (dataType === 'script') {
              console.log('不允许执行script代码')
            } else if (dataType === 'xml') {
              result = xhr.responseXML
            } else if (dataType === 'json') {
              result = result.trim() === ''
                ? null
                : JSON.parse(result)
            }
          } catch (e) {
            opt.error(e, xhr)
            xhr.abort()
          }
        }
        opt.success(result, xhr)
      } else {
        opt.error(xhr.statusText, xhr)
      }
    }
  }

  if (opt.method === 'GET') {
    opt.url = opt.url + '?' + obj2Url(opt.data)
  }
  xhr.open(opt.method, opt.url, opt.sync, opt.username, opt.password)

  // xhr.setRequestHeader('Accept', 'application/json')
  // xhr.setRequestHeader('Content-Type', 'application/json')
  if (opt.timeout > 0) {
    abortTimeout = setTimeout(function() {
      xhr.onreadystatechange = empty
      xhr.abort()
      opt.error('timeout', xhr)
    }, opt.timeout)
  }
  xhr.send(opt.method === 'POST'
    ? JSON.stringify(opt.data)
    : obj2Url(opt.data))
}

export default {
  ajax
}
