var baseURL = window.location.hostname
baseURL = '192.168.32.167'
var videoList = {
  '1': {
    name: '肯尼亚',
    enName: 'Kenya',
    list: [
      {
        name: '播控中心-肯尼亚',
        targetIp: '10.12.252.160',
        rtmp:  'http://' + baseURL + ':8084/live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/live/livestream5.flv',
      },
      {
        name: '监控室-肯尼亚',
        targetIp: '10.12.252.161',
        rtmp:  'http://' + baseURL + ':8084/live/livestream2.flv',
        low:  'http://' + baseURL + ':8084/live/livestream6.flv',
      },
      {
        name: '户外-肯尼亚',
        targetIp: '10.12.252.163',
        rtmp:  'http://' + baseURL + ':8084/live/livestream3.flv',
        low:  'http://' + baseURL + ':8084/live/livestream7.flv',
      },
      {
        name: '机房-肯尼亚',
        targetIp: '10.12.252.164',
        rtmp:  'http://' + baseURL + ':8084/live/livestream4.flv',
        low:  'http://' + baseURL + ':8084/live/livestream8.flv',
      }
    ]
  },
  '2': {
    name: '莫桑比克',
    enName: 'Mozambique',
    list: [
      {
        name: '播控中心-莫桑比克',
        targetIp: '127.0.0.1',
        rtmp:  'http://' + baseURL + ':8083/live/livestream1.flv',
        low:  'http://' + baseURL + ':8083/live/livestream5.flv',
      }
    ]
  },
  '3': {
    name: '尼日利亚',
    enName: 'Nigeria',
    list: [
      {
        name: 'Noc监控',
        targetIp: '10.4.252.162',
        rtmp:  'http://' + baseURL + ':8085/live/livestream1.flv',
        low:  'http://' + baseURL + ':8085/live/livestream4.flv',
      },
      {
        name: '数据机房',
        targetIp: '10.4.252.163',
        rtmp:  'http://' + baseURL + ':8085/live/livestream2.flv',
        low:  'http://' + baseURL + ':8085/live/livestream5.flv',
      },
      {
        name: '室外发射台',
        targetIp: '10.4.252.164',
        rtmp:  'http://' + baseURL + ':8085/live/livestream3.flv',
        low:  'http://' + baseURL + ':8085/live/livestream6.flv',
      }
    ]
  },
  '4': {
    name: '四达时代测试',
    enName: 'StarTimes',
    list: [
      {
        name: '测试转向',
        targetIp: '10.12.252.162',
        rtmp:  'http://' + baseURL + ':8084/live/livestream9.flv',
        low:  'http://' + baseURL + ':8084/live/livestream9.flv',
      }
    ]
  }
}
