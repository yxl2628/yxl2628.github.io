$(document).ready(function(){
  var zabbix_server = new $.jqzabbix()
  zabbix_server.setOptions({
    url: 'http://192.168.32.221/api_jsonrpc.php',
    username: 'search',
    password: '123456'
  })
  // 先登录获取zabbix的auth
  zabbix_server.userLogin()
  // 定时获取各数据
  // zabbix_server.queryData('item.get',{
  //   groupids: 36,
  //   // search: {}
  // }, function(res) {
  //   console.log(res)
  // })
  // 定时获取汇总数据
  setInterval(function(){
    $('#user').html(format_number(213212))
    $('#network').html(format_number(43241))
    $('#partner').html(format_number(27))
  },60000)
})
