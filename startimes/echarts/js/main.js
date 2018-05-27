var zabbix_server = new $.jqzabbix()
zabbix_server.setOptions({
  url: 'http://192.168.32.221/api_jsonrpc.php',
  username: 'search',
  password: '123456'
})
// zabbix_server.userLogin()
// zabbix_server.queryData('item.get',{
//   groupids: 36,
//   // search: {}
// }, function(res) {
//   console.log(res)
// })
