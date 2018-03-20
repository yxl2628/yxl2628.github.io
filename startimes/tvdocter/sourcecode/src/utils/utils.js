import request from './request.js'

/**
 * 获取localStorage中的值
 * @author yang.xiaolong
 * @description 2017-11-01:默认会对String类型进行解析,防止数据类型错误
 * @version     1.0.0
 * @param       {String} _key
 * @return      {Json}
 */
export const getLocal = function(_key) {
  return JSON.parse(localStorage.getItem(_key))
}

/**
 * 设置localStorage
 * @author yang.xiaolong
 * @description 2017-11-01:默认会对json进行格式化操作,防止存入的为[object object]这种错误
 * @version     1.0.0
 * @param       {String} _key
 * @param       {Json} _value
 */
export const setLocal = function(_key, _value) {
  localStorage.setItem(_key, JSON.stringify(_value))
}

/**
 * post方式获取数据
 * @author yang.xiaolong
 * @description 2017-10-25:需要传入服务Ip地址,参数对象,成功的函数,失败的处理函数
 * @version     1.0.0
 * @param       {String} _url
 * @param       {obj} _params
 * @param       {func} _success
 * @param       {func} _error
 * @return      {Null}
 */
export const ottRequest = function(_url, _params, _method, _success, _error) {
  request.ajax({
    'url': _url,
    'data': _params,
    'method': _method,
    'dataType': 'json',
    success: function(response) {
      _success && _success(response)
    },
    error: function(err) {
      _error && _error(err)
    }
  })
}

/**
 * 格式化当前日期
 * @author yang.xiaolong
 * @description 2018-03-14
 * @version     1.0.0
 * @return      {[type]}
 */
export const getNowFormatDate = function() {
  var date = new Date()
  var seperator1 = '-'
  var seperator2 = ':'
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
  return currentdate
}

/**
 * 获取url参数
 * @author yang.xiaolong
 * @description 2017-10-25:根据key值获取url路径上的value参数
 * @version     1.0.0
 * @param       {String} name
 * @return      {String}
 */
export const getUrlKey = function(name) {
  var key = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || ['']
  return key.length > 1 ? decodeURIComponent(key[1].replace(/\+/g, '%20')) || null : ''
}
/**
 * 格式化对象成url参数
 * @author yang.xiaolong
 * @description 2018-03-14
 * @version     1.0.0
 * @param       {Object} obj
 * @return      {String}
 */
export const obj2Url = function(obj) {
  if (obj && obj instanceof Object) {
    var arr = []
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (i === 'token') continue
        if (typeof obj[i] === 'function') {
          obj[i] = obj[i]()
        }
        if (obj[i] === null) {
          obj[i] = ''
        }
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
      }
    }
    return arr.join('&')
  } else {
    return obj
  }
}
