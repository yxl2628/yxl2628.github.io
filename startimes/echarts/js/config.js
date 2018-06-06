//经纬度
var geoCoordMap = {
  '北京': [50, 38],
  '亚马逊云': [-15, 38],
  '卫星': [-25, 16],
  '上云站': [25, -32],
  '上云站机房': [25, -32],
  '乌干达_Africell': [32.290275, 1.373333],
  '尼日利亚_Glo': [8.675277, 9.081999],
  '坦桑_Hallotel': [34.89257, -7.1881008712]
}
//网络链接
var pack_loss_probability = [
  {fromName: '北京', hostid: '10084', toName: '亚马逊云', value: 0},
  {fromName: '上云站机房', hostid: '10545', toName: '亚马逊云', value: 0},
  {fromName: '乌干达_Africell', hostid: '10593', toName: '亚马逊云', value: 0},
  {fromName: '尼日利亚_Glo', hostid: '10601', toName: '亚马逊云', value: 0},
  {fromName: '坦桑_Hallotel', hostid: '10620', toName: '亚马逊云', value: 0}
]
// cache节点
var cache_list = [
  {name: '乌干达_Africell', groupid: '60', value: [0, 0], url: 'http://10.0.224.100:3000/d/0MiACYVmz/cachezhan-dian?orgId=1', height: 1400},
  {name: '尼日利亚_Glo', groupid: '61', value: [0, 0], url: 'http://10.0.224.100:3000/d/0MiACYVmz/cachezhan-dian?orgId=1', height: 1400},
  {name: '坦桑_Hallotel', groupid: '66', value: [0, 0], url: 'http://10.0.224.100:3000/d/0MiACYVmz/cachezhan-dian?orgId=1', height: 1400}
]
// 南非OS组id、南非ott上云组id、gslb的主机id
var groupid_ott = 55, group_os = 54, gslb_manage_hostid = 10611
// 需要监控的主机组
var error_group_list = ['0701_AWS_研究院', '南非上云_OTT', '南非os组', '国内_总部机房', '国内_研究院_Aws_Openvpn_server']
// 各个cache节点对应的子页面地址
var cache_url = {
  'UGA-Africell-SER-OS-01': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'UGA-Africell-SER-MGT-01': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'UGA-Africell-SER-STR-01': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'UGA-Africell-SER-MGT-02': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'NGA-Glo-SER-CAC-01': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'NGA-Glo-SER-CAC-02': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'NGA-Glo-SER-MGT-01': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'NGA-Glo-SER-STR-01': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'NGA-Glo-SER-STR-07': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1',
  'NGA-Glo-SER-MGT-02': 'http://10.0.224.100:3000/d/x7_B_94mk/cache-jie-dian-ji-bie-shu-ju-jian-kong?orgId=1'
}
// 获取统一的状态色
var getColor = function(type) {
  if (type == 'good') {
    return '#30af81'
  } else if (type == 'well') {
    return '#d1d41a'
  } else {
    return '#ff1d04'
  }
}
// 格式化数字输出
var format_number = function(n) {
  var b = parseInt(n).toString()
  var len = b.length
  if (len <= 3) {
    return b
  }
  var r = len % 3
  return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",")
}

// 格式化
var convertLinesData = function(data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = geoCoordMap[dataItem.fromName]
    var toCoord = geoCoordMap[dataItem.toName]
    if (dataItem.toName === '亚马逊云') {
      toCoord = [toCoord[0] + 0.1, toCoord[1] - 2]
    }
    if (dataItem.fromName === '上云站机房') {
      fromCoord = [fromCoord[0] - 1.5, fromCoord[1] + 1.5]
    }
    if (fromCoord && toCoord) {
      var type = dataItem.value < 10 ? 'good' : dataItem.value < 50 ? 'well' : 'bad'
      res.push({
        fromName: dataItem.fromName,
        toName: dataItem.toName,
        coords: [fromCoord, toCoord],
        lineStyle: {
          normal: {
            color: getColor(type),
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        }
      })
    }
  }
  return res
}
var convertPonitData = function(data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var coord = geoCoordMap[dataItem.name]
    if (coord) {
      var type_cathe = dataItem.value[0] <= 0 ? 'good' : dataItem.value[0] < 5 ? 'well' : 'bad'
      var type_load = dataItem.value[1] < 80 ? 'good' : dataItem.value[1] < 90 ? 'well' : 'bad'
      res.push({
        name: dataItem.name,
        value: coord.concat(dataItem.value),
        groupid: dataItem.groupid,
        itemStyle: {
          normal: {
            color: getColor(type_cathe)
          }
        },
        label: {
          show: true,
          position: 'bottom',
          padding: [5, 0, 0, 0],
          formatter: function(params) {
            return params.value[3] + '%'
          },
          color: getColor(type_load)
        }
      })
    }
  }
  return res
}
// svg 路径
var awsPath = 'image://./img/aws_ott.png'
var chinaPath = 'image://./img/startimes_noc.png'
var satellitePath = './img/wx.gif'
var radarPath = ''
var serverPath = 'image://./img/server.svg'
