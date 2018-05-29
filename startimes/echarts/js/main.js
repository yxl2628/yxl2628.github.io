$(document).ready(function(){
  var zabbix_server = new $.jqzabbix()
  zabbix_server.setOptions({
    url: 'http://192.168.32.221/api_jsonrpc.php',
    username: 'search',
    password: '123456'
  })
  // 先登录获取zabbix的auth
  zabbix_server.userLogin()
  // 获取cache节点的告警数量
  var cache_groupids = []
  cache_list.forEach(function(item) {
    if (item.groupid) {
      cache_groupids.push(item.groupid)
    }
  })
  // 获取各个cache节点zabbix告警数
  getCacheZabbixError(cache_groupids)
  // 获取各个cache节点带宽负载
  cache_groupids.forEach(function(groupid) {
    getCacheNetworkPersent(groupid)
  })
  // 获取各个监控点到亚马逊云S3的丢包率
  var pack_loss_host_list = []
  pack_loss_probability.forEach(function(item) {
    if (item.hostid) {
      pack_loss_host_list.push(item.hostid)
    }
  })
  // 获取各个监控点到亚马逊云S3的丢包率
  getPackLoss(pack_loss_host_list)
  // 获取总用户数、总带宽及合作运营商
  getAllUsers(cache_groupids)
  /**
   * 下面是定时任务，将上述获取过程，写入定时任务
   */
  setInterval(function(){
    getCacheZabbixError(cache_groupids)
    cache_groupids.forEach(function(groupid) {
      getCacheNetworkPersent(groupid)
    })
    getPackLoss(pack_loss_host_list)
    getAllUsers()
  },10000)
  /**
   * 下面是各个获取数据的详细方法
   */
  // 获取zabbix告警数
  function getCacheZabbixError (groupids) {
    zabbix_server.queryData('trigger.get',{
      'groupids': groupids,
      'only_true': 1, // 仅返回最近处于问题状态的触发器
      'monitored': 1, //属于受监控主机的已启用触发器
      'active': 1, // 只返回属于受监控主机的启用的触发器
      'selectGroups': ['name'], // 同时查出所属的主机组信息
      'output': ['triggerid', 'groups', 'description', 'priority', 'value']
    }, function(res) {
      if (res.result) {
        var _countObj = {}
        res.result.forEach(function(item) {
          var _groupid = 'g-' + item.groups[0].groupid
          if (_countObj[_groupid] === undefined) {
            _countObj[_groupid] = 1
          } else {
            _countObj[_groupid] += 1
          }
        })
        cache_list.forEach(function(item) {
          var _key = 'g-' + item.groupid
          if (_countObj[_key] === undefined) {
            item.value[0] = 0
          } else {
            item.value[0] = _countObj[_key]
          }
        })
        var _option = myChart.getOption()
        _option.series.forEach(function(item) {
          if (item.name === 'cache节点告警') {
            item.data = convertPonitData(cache_list)
          }
        })
        myChart.setOption(_option, true)
      }
    })
  }
  // 获取带宽
  function getCacheNetworkPersent (groupid) {
    zabbix_server.queryData('item.get',{
      'groupids': [groupid],
      'application': 'Network', // 只查询Network的应用集
      'selectGroups': ['name'], // 同时查出所属的主机组信息
      'selectHosts': ['name'], // 同时查出所属主机的信息
      'search': {
        'name': 'Outgoing',
        'key_': 'enp12s0'
      },
      'output': ['itemid', 'hosts', 'key_', 'name', 'lastvalue']
    }, function(res) {
      if (res.result) {
        var _countObj = {}
        res.result.forEach(function(item) {
          var _groupid = 'g-' + groupid
          if (item.hosts[0].name.indexOf('STR') >= 0) {
            if (_countObj[_groupid] === undefined) {
              _countObj[_groupid] = {
                realValue: parseInt(item.lastvalue),
                totalValue: 10000000
              }
            } else {
              _countObj[_groupid].realValue += parseInt(item.lastvalue)
              _countObj[_groupid].totalValue += 10000000
            }
          }
        })
        cache_list.forEach(function(item) {
          var _key = 'g-' + item.groupid
          if (_countObj[_key] !== undefined) {
            item.realValue = _countObj[_key].realValue
            item.totalValue = _countObj[_key].totalValue
            item.value[1] = (item.realValue/item.totalValue*100).toFixed(0)
          }
        })
        var _option = myChart.getOption()
        _option.series.forEach(function(item) {
          if (item.name === 'cache节点告警') {
            item.data = convertPonitData(cache_list)
          }
        })
        myChart.setOption(_option, true)
      }
    })
  }
  // 丢包率
  function getPackLoss (pack_loss_host_list) {
    zabbix_server.queryData('item.get',{
      'hostids': pack_loss_host_list,
      'search': {
        'name': '到S3上传桶-LOSS'
      },
      'output': ['hostid', 'name', 'lastvalue']
    }, function(res) {
      if (res.result) {
        var _countObj = {}
        res.result.forEach(function(item) {
          var _hostid = 'h-' + item.hostid
          _countObj[_hostid] = parseInt(item.lastvalue)
        })
        pack_loss_probability.forEach(function(item) {
          var _key = 'h-' + item.hostid
          if (_countObj[_key] !== undefined) {
            item.value = _countObj[_key]
          } else {
            item.value = 100
          }
        })
        var _option = myChart.getOption()
        _option.series.forEach(function(item) {
          if (item.name === '网络状态') {
            item.data = convertLinesData(pack_loss_probability)
          }
        })
        myChart.setOption(_option, true)
      }
    })
  }
  // 获取总用户数
  function getAllUsers (cache_groupids) {
    zabbix_server.queryData('item.get',{
      'groupids': cache_groupids,
      'search': {
        'name': 'cache'
      },
      'output': ['name', 'lastvalue']
    }, function(res) {
      if (res.result) {
        var totalUser = 0
        res.result.forEach(function(item) {
          if (item.name.indexOf('cache.demand.unique.count') >= 0 || item.name.indexOf('cache.live.unique.count') >= 0){
            totalUser += parseInt(item.lastvalue)
          }
        })
      }
    })
    var totalNetwork = 0
    cache_list.forEach(function(item) {
      if (item.realValue != undefined) {
        totalNetwork += item.realValue
      }
    })
    $('#network').html((totalNetwork/1000000).toFixed(2))
    $('#partner').html(cache_list.length)
  }
})
