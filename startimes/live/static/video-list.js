var baseURL = window.location.hostname
baseURL = (baseURL == '127.0.0.1' || baseURL == '192.168.20.61') ? '192.168.32.167' : baseURL
var videoList = {
  '1': {
    name: '肯尼亚',
    enName: 'Kenya',
    list: [
      {
        name: '营业厅',
        targetIp: '10.12.252.160',
        rtmp:  'http://' + baseURL + ':8084/ken_live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/ken_live/livestream5.flv',
        rtsp: 'rtsp://' + baseURL + ':5555/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + ':5555/proxyStream-5'
      },
      {
        name: '呼叫中心',
        targetIp: '10.12.252.161',
        rtmp:  'http://' + baseURL + ':8084/ken_live/livestream2.flv',
        low:  'http://' + baseURL + ':8084/ken_live/livestream6.flv',
        rtsp: 'rtsp://' + baseURL + ':5555/proxyStream-2',
        rtspLow: 'rtsp://' + baseURL + ':5555/proxyStream-6'
      },
      {
        name: '办公室',
        targetIp: '10.12.252.162',
        rtmp:  'http://' + baseURL + ':8084/ken_live/livestream3.flv',
        low:  'http://' + baseURL + ':8084/ken_live/livestream7.flv',
        rtsp: 'rtsp://' + baseURL + ':5555/proxyStream-3',
        rtspLow: 'rtsp://' + baseURL + ':5555/proxyStream-7'
      },
      {
        name: '外景',
        targetIp: '10.12.252.163',
        rtmp:  'http://' + baseURL + ':8084/ken_live/livestream4.flv',
        low:  'http://' + baseURL + ':8084/ken_live/livestream8.flv',
        rtsp: 'rtsp://' + baseURL + ':5555/proxyStream-4',
        rtspLow: 'rtsp://' + baseURL + ':5555/proxyStream-8'
      }
    ]
  },
  '2': {
    name: '尼日利亚',
    enName: 'Nigeria',
    list: [
      {
        name: 'Noc监控',
        targetIp: '10.4.252.162',
        rtmp:  'http://' + baseURL + ':8084/abj_live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/abj_live/livestream4.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '数据机房',
        targetIp: '10.4.252.163',
        rtmp:  'http://' + baseURL + ':8084/abj_live/livestream2.flv',
        low:  'http://' + baseURL + ':8084/abj_live/livestream5.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '室外发射台',
        targetIp: '10.4.252.164',
        rtmp:  'http://' + baseURL + ':8084/abj_live/livestream3.flv',
        low:  'http://' + baseURL + ':8084/abj_live/livestream6.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      }
    ]
  },
  '3': {
    name: '南非',
    enName: 'SouthAfrica',
    list: [
      {
        name: '室外发射台',
        targetIp: '10.6.203.13',
        rtmp:  'http://' + baseURL + ':8084/nf_live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream5.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '播控中心',
        targetIp: '10.6.203.14',
        rtmp:  'http://' + baseURL + ':8084/nf_live/livestream2.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream6.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '数据机房1',
        targetIp: '10.6.203.15',
        rtmp:  'http://' + baseURL + ':8084/nf_live/livestream3.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream7.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '数据机房2',
        targetIp: '10.6.203.16',
        rtmp:  'http://' + baseURL + ':8084/nf_live/livestream4.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream8.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      }
    ]
  },
  '88': {
    name: '北京总部',
    enName: 'StarTimes',
    list: [
      {
        name: '总部NOC',
        targetIp: '192.168.5.70',
        rtmp:  'http://' + baseURL + ':8084//zb_live/livestream1.flv',
        low:  '',
        rtsp: 'rtsp://192.168.32.167:9999/proxyStream',
        rtspLow: ''
      }
    ]
  },
  '99': {
    name: '中铁建测试',
    enName: 'SouthAfrica',
    list: [
      {
        name: '室外发射台',
        targetIp: '10.6.203.13',
        rtmp:  'http://' + baseURL + ':8084/zt_live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream5.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '播控中心',
        targetIp: '10.6.203.14',
        rtmp:  'http://' + baseURL + ':8084/zt_live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream6.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '数据机房1',
        targetIp: '10.6.203.15',
        rtmp:  'http://' + baseURL + ':8084/zt_live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream7.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      },
      {
        name: '数据机房2',
        targetIp: '10.6.203.16',
        rtmp:  'http://' + baseURL + ':8084/zt_live/livestream1.flv',
        low:  'http://' + baseURL + ':8084/nf_live/livestream8.flv',
        rtsp: 'rtsp://' + baseURL + '/proxyStream-1',
        rtspLow: 'rtsp://' + baseURL + '/proxyStream-1'
      }
    ]
  }
}
