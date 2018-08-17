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
    type : "POST",
    url: 'http://' + baseURL + ':8083/monitorControl' + method,
    data :JSON.stringify({
      commandType: commandType,
      targetDVR: targetIp,
      speed: speed
    }),
    success: function(res) {
      success && success(res)
    }
  })
}
