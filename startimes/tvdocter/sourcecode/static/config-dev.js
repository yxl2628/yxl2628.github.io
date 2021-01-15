// window.baseUrl = 'http://219.144.68.15:8084'  //天翼云
// window.baseUrl = 'http://10.43.124.195:8081'  //陕西广电
window.baseUrl = (function(){
  var privateReg = /^1(((0|27)(.(([1-9]?|1[0-9])[0-9]|2([0-4][0-9]|5[0-5])))|(72.(1[6-9]|2[0-9]|3[01])|92.168))(.(([1-9]?|1[0-9])[0-9]|2([0-4][0-9]|5[0-5]))){2})$/
  var private = 'http://127.0.0.1:8081'
  var internet = 'http://124.47.34.54:8081'
  return privateReg.test(window.location.hostname) ? private : internet
})()
window.title = '请用爱迪智医APP扫描同步'
window.debug = true
