$(document).ready(function(){
  var zabbix_server = new $.jqzabbix()
  // 先登录获取zabbix的auth
  zabbix_server.userLogin()
  // 获取cache节点的groupid集合
  var cache_groupids = []
  cache_list.forEach(function(item) {
    if (item.groupid) {
      cache_groupids.push(item.groupid)
    }
  })
  // 获取丢包率节点的hostid集合
  var pack_loss_host_list = []
  pack_loss_probability.forEach(function(item) {
    if (item.hostid) {
      pack_loss_host_list.push(item.hostid)
    }
  })
  task(cache_groupids, pack_loss_host_list)
  /**
   * 下面是定时任务，将上述获取过程，写入定时任务
   * 默认是60秒请求一次
   */
  setInterval(function(){
    task(cache_groupids, pack_loss_host_list)
  },60000)
  /**
   * 下面是各个获取数据的详细方法
   */
  // 总的任务
  function task (cache_groupids, pack_loss_host_list) {
    // 获取各个cache节点zabbix告警数
    getCacheZabbixError(cache_groupids)
    // 获取各个cache节点带宽负载
    cache_groupids.forEach(function(groupid) {
      getCacheNetworkPersent(groupid)
    })
    // 获取各个监控点到亚马逊云S3的丢包率
    getPackLoss(pack_loss_host_list)
    // 获取南非上行站频道接收数据
    getRadarData('jieshou', groupid_ott, 'channel status')
    // 获取南非上行站频道转码数据
    getRadarData('zhuanma', group_os, 'YJY_Recoder_LOG_CHANNL')
    // 获取南非上行站频道切片数据
    getRadarData('qiepian', group_os, 'delete_qiepian')
    // 获取南非上行站频道AWS上传数据
    getRadarData('awsshangchuan', group_os, 'aws_channel_status')
    // 获取aws数据
    getAWSData(gslb_manage_hostid)
    // 获取总用户数、总带宽及合作运营商
    getAllUsers(cache_groupids)
  }
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
        'name': 'S3上传桶-LOSS'
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
            $('#user').html(template('ledTpl', {value: totalUser.toString()}))
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

    $('#network').html(template('ledTpl', {value: (totalNetwork/1000000).toFixed(0)}))
    $('#partner').html(template('ledTpl', {value: cache_list.length.toString()}))
  }
  // 获取南非上行站频道监控
  function getRadarData (id, groupid, application) {
    zabbix_server.queryData('item.get',{
      'groupids': groupid,
      'application': application,
      'filter': {
        'state': '0'
      },
      'output': ['lastvalue']
    }, function(res) {
      var total = 0, error = 0
      if (res.result) {
        var totalUser = 0
        res.result.forEach(function(item) {
          total += 1
          var value = parseInt(item.lastvalue)
          switch (id) { //针对不同的id，错误计算方式不同，默认是 1位正常，0位异常
            case 'jieshou':
              if (value > 0) {
                error += 1
              }
              break
            case 'qiepian':
              if (value >= 5) {
                error += 1
              }
              break
            default:
              if (value === 0) {
                error += 1
              }
          }
        })
        $('#' + id).text((total-error) + '/' + total)
        var colortype = error < 1 ? 'good' : error < 10 ? 'well' : 'bad'
        $('#' + id).css('color',getColor(colortype))
      }
    })
  }
  // 获取全局调度系统的指标
  function getAWSData (gslb_manage_hostid) {
    var standardValue = 65000
    zabbix_server.queryData('item.get',{
      'hostids': gslb_manage_hostid,
      'search': {
        'key_': 'gslb'
      },
      'output': ['name', 'key_', 'lastvalue']
    }, function(res) {
      if (res.result) {
        var gslb_success_request_count_monitor_view = 0,
        gslb_request_count_monitor_view = 0,
        gslb_response_duration_monitor_view = 0,
        gslb_qps_monitor_view = 0
        res.result.forEach(function(item) {
          if (item.name.indexOf('gslb.success.request.count.monitor.view') >= 0) {
            gslb_success_request_count_monitor_view += parseInt(item.lastvalue)
          } else if (item.name.indexOf('gslb.request.count.monitor.view') >= 0) {
            gslb_request_count_monitor_view += parseInt(item.lastvalue)
          } else if (item.name.indexOf('gslb.response.duration.monitor.view') >= 0) {
            gslb_response_duration_monitor_view = gslb_response_duration_monitor_view > parseInt(item.lastvalue) ? gslb_response_duration_monitor_view : parseInt(item.lastvalue)
          } else if (item.name.indexOf('gslb.qps.monitor.view') >= 0) {
            gslb_qps_monitor_view = gslb_qps_monitor_view > parseInt(item.lastvalue) ? gslb_qps_monitor_view : parseInt(item.lastvalue)
          }
        })
        var persent = gslb_request_count_monitor_view === 0 ? 0 : (gslb_success_request_count_monitor_view/gslb_request_count_monitor_view).toFixed(0)
        $('#chenggonglv').text(persent + '%')
        $('#xiangyingshijian').text(gslb_response_duration_monitor_view + 'ms')
        $('#qps').text(gslb_qps_monitor_view)
        $('#chenggonglv').css('color',getColor(persent > 99 ? 'good' : persent > 95 ? 'well' : 'bad'))
        $('#xiangyingshijian').css('color',getColor(gslb_response_duration_monitor_view < 40 ? 'good' : gslb_response_duration_monitor_view < 50 ? 'well' : 'bad'))
        $('#qps').css('color',getColor(gslb_qps_monitor_view < standardValue*0.7 ? 'good' : gslb_qps_monitor_view < standardValue*0.9 ? 'well' : 'bad'))
      }
    })
  }
})
