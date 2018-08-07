var baseURL = window.location.hostname
baseURL = '192.168.32.167'
var videoList = {
  '1': {
    name: '肯尼亚',
    enName: 'Kenya',
    list: [
      {
        name: '播控中心-肯尼亚',
        rtmp:  'http://' + baseURL + ':8082/live/livestream1.flv',
        low:  'http://' + baseURL + ':8082/live/livestream5.flv',
      },
      {
        name: '监控室-肯尼亚',
        rtmp:  'http://' + baseURL + ':8082/live/livestream2.flv',
        low:  'http://' + baseURL + ':8082/live/livestream6.flv',
      },
      {
        name: '户外-肯尼亚',
        rtmp:  'http://' + baseURL + ':8082/live/livestream3.flv',
        low:  'http://' + baseURL + ':8082/live/livestream7.flv',
      },
      {
        name: '机房-肯尼亚',
        rtmp:  'http://' + baseURL + ':8082/live/livestream4.flv',
        low:  'http://' + baseURL + ':8082/live/livestream8.flv',
      }
    ]
  },
  '2': {
    name: '莫桑比克',
    enName: 'Mozambique',
    list: [
      {
        name: '播控中心-莫桑比克',
        rtmp:  'http://' + baseURL + ':8083/live/livestream1.flv',
        low:  'http://' + baseURL + ':8083/live/livestream5.flv',
      }
    ]
  }
}
