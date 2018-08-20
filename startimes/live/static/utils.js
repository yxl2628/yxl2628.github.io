// 获取url参数
function getUrlKey(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}
// 发送按键请求
function controlPost(method, commandType, success) {
  var targetIp = currentVideoList[videoIndex].targetIp
  var speed = $('.controler-speed > li.active').attr('data-speed')
  $.ajax({
    type: "POST",
    url: 'http://' + baseURL + ':8083/monitorControl' + method,
    data: JSON.stringify({
      commandType: commandType,
      targetDVR: targetIp,
      speed: speed
    }),
    success: function(res) {
      success && success(res)
    }
  })
}
// 获取星期
function getWeek() {
  $('#week').text('星期' + '日一二三四五六'.charAt(new Date().getDay()))
}
// 获取日期
function getDate() {
  var now = new Date()
  var month = now.getMonth() + 1
  var day = now.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  $('#date').text(month + '.' + day)
}
// 获取时间
function getTime() {
  var now = new Date()
  var hour = now.getHours()
  var minute = now.getMinutes()
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  $('#time').text(hour + ' : ' + minute)
}
