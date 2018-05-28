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
  zabbix_server.queryData('trigger.get',{
    'groupids': [36],
    'only_true': 1, // 仅返回最近处于问题状态的触发器
    'monitored': 1, //属于受监控主机的已启用触发器
    'active': 1, // 只返回属于受监控主机的启用的触发器
    'output': ['triggerid', 'description', 'priority', 'value']
  }, function(res) {
    console.log(res)
  })
  // 定时获取汇总数据
  setInterval(function(){
    $('#user').html(format_number(213212))
    $('#network').html(format_number(43241))
    $('#partner').html(format_number(27))
  },60000)
})
