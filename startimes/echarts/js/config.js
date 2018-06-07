//经纬度
var geoCoordMap = {
  '北京': [50, 38],
  '亚马逊云': [-15, 38],
  '卫星': [-25, 16],
  '上云站': [17, -29],
  '上云站机房': [25, -32],
  '尼日利亚_MTN': [5.09765625,7.3624668655],
  '尼日利亚_Glo': [10.1293945313, 10.4013775545],
  '肯尼亚_Safaricom': [38.1005859375, 0.2197260239],
  '坦桑_Tigo': [34.5410156250, -4.7406753848],
  '坦桑_Airtel': [36.9580078125, -10.1851874093],
  '坦桑_Hallotel': [31.1572265625, -7.4060477171],
  '加纳_MTN': [-1.1425781250, 7.9286748014],
  '赞比亚_MTN': [28.3447265625, -15.4960324142],
  '南非_Vodacom': [21.9726562500, -28.8061735089],
  '南非_MTN': [31.0253906250, -28.1495032115],
  '乌干达_MTN': [31.4648437500, 3.1185762168],
  '乌干达_Airtel': [33.8818359375, 3.3379539614],
  '乌干达_Africell': [32.8271484375, -0.2197260239],
  '科特迪瓦_MTN': [-5.5810546875, 7.2316987084],
  '塞内加尔_Orange': [-14.7216796875, 14.5623177019],
  '莫桑比克_Vodacom': [33.8378906250, -24.3270765400],
  '刚果布_Airtel': [15.7324218750, -0.3515602940],
  '卢旺达': [29.6630859375, -1.7136116599],
  '马达': [48.3837890625, -16.5098328269],
  '刚果金_Africell': [20.6103515625, 2.7235830833],
  '刚果金_Vodacom': [26.9384765625, 2.5918889841],
  '刚果金_Orange': [23.7304687500, -3.2940822283],
  '喀麦隆': [12.7001953125, 5.3972734077],
  '几内亚': [-10.7666015625, 10.5310200085],
  '中非': [20.8740234375, 6.7082539687],
  '布隆迪': [29.9188860000, -3.3730560000]
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
  {name: '尼日利亚_MTN', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '尼日利亚_Glo', groupid: '61', value: [0, 0], url: 'http://10.0.224.100:3000/d/0MiACYVmz/cachezhan-dian?orgId=1', height: 1400},
  {name: '肯尼亚_Safaricom', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '坦桑_Tigo', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '坦桑_Airtel', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '坦桑_Hallotel', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '坦桑_Hallotel', groupid: '66', value: [0, 0], url: 'http://10.0.224.100:3000/d/0MiACYVmz/cachezhan-dian?orgId=1', height: 1400},
  {name: '加纳_MTN', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '赞比亚_MTN', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '南非_Vodacom', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '南非_MTN', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '乌干达_MTN', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '乌干达_Airtel', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '乌干达_Africell', groupid: '60', value: [0, 0], url: 'http://10.0.224.100:3000/d/0MiACYVmz/cachezhan-dian?orgId=1', height: 1400},
  {name: '科特迪瓦_MTN', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '塞内加尔_Orange', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '莫桑比克_Vodacom', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '卢旺达', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '马达', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '刚果金_Africell', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '刚果金_Vodacom', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '刚果金_Orange', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '喀麦隆', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '几内亚', groupid: '', value: [-1, -1], url: '', height: 1400},
  {name: '布隆迪', groupid: '', value: [-1, -1], url: '', height: 1400}
]
// 南非OS组id、南非ott上云组id、gslb的主机id
var groupid_ott = 55, group_os = 54, gslb_manage_hostid = 10600
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
  if (type == 'none') {
    return '#999999'
  } else if (type == 'good') {
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
      var type_cache = 'none'
      if (dataItem.value[0] == 0) {
        type_cache = 'good'
      } else if (dataItem.value[0] > 0) {
        type_cache = 'well'
      } else if (dataItem.value[0] > 5) {
        type_cache = 'bad'
      }
      var type_load = 'none'
      if (dataItem.value[1] >= 0) {
        type_load = 'good'
      } else if (dataItem.value[1] >= 80) {
        type_load = 'well'
      } else if (dataItem.value[1] >= 90) {
        type_load = 'bad'
      }
      var push_data = {
        name: dataItem.name,
        value: coord.concat(dataItem.value),
        groupid: dataItem.groupid,
        itemStyle: {
          normal: {
            color: getColor(type_cache)
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
      }
      if (type_cache == 'none') {
        push_data.rippleEffect = {
          period: 0,
          scale: 0
        }
      }
      if (type_load == 'none') {
        push_data.label.show = false
      }
      res.push(push_data)
    }
  }
  return res
}
// svg 路径
var awsPath = 'image://./img/aws_ott.png'
var chinaPath = 'image://./img/startimes_noc.png'
var satellitePath = './img/wx.gif'
var radarPath = './img/radar.gif'
var serverPath = 'image://./img/server-good.svg'
var serverBadPath = 'image://./img/server-bad.svg'
var serverErrorPath = 'image://./img/server-error.svg'
