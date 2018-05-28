// svg 路径
var awsPath = 'path://M228.681,678.562H126.278c-47.839,0-92.878-18.641-126.718-52.48,c-33.84-33.839-52.481-78.882-52.481-126.722c0-47.841,18.641-92.88,52.481-126.719c33.84-33.84,78.879-52.48,126.718-52.48,c14.161,0,25.602-11.442,25.602-25.598v-0.32c0-61.524,24-119.442,67.52-162.883c43.519-43.438,101.359-67.52,162.878-67.52,c36.961,0,72.32,8.481,104.961,25.199c31.199,16,58.801,39.282,79.762,67.442c8.48,11.359,24.48,13.68,35.84,5.199,c11.359-8.479,13.68-24.479,5.199-35.84c-25.68-34.398-59.359-62.879-97.441-82.398c-39.438-20.16-83.758-30.801-128.32-30.801,c-38,0-74.879,7.441-109.598,22.16c-33.52,14.16-63.68,34.481-89.52,60.32c-25.84,25.84-46.16,56-60.32,89.52,c-11.602,27.359-18.641,56.078-21.121,85.602C49.482,275.761,1.079,298.8-36.6,336.402c-43.52,43.519-67.52,101.437-67.52,162.958,c0,61.519,24,119.44,67.52,162.883c43.441,43.519,101.359,67.519,162.878,67.519h102.403c14.16,0,25.597-11.44,25.597-25.601,C254.278,689.999,242.841,678.562,228.681,678.562L228.681,678.562z,M228.681,678.562,M663.88,268.96H356.681c-28.242,0-51.199,22.961-51.199,51.2v409.601c0,28.238,22.957,51.199,51.199,51.199H663.88,c28.238,0,51.199-22.961,51.199-51.199V320.16C715.079,291.921,692.118,268.96,663.88,268.96L663.88,268.96z,M663.88,729.761,H356.681V627.359H663.88V729.761z,M663.88,576.16H356.681V473.761H663.88V576.16z,M663.88,422.562H356.681v-102.48v0.079H663.88,v-0.079V422.562z,M663.88,422.562,M561.481,371.359c0,14.14,11.461,25.601,25.598,25.601c14.141,0,25.602-11.461,25.602-25.601,c0-14.137-11.461-25.598-25.602-25.598C572.942,345.761,561.481,357.222,561.481,371.359L561.481,371.359z,M561.481,371.359,M561.481,524.96c0,14.137,11.461,25.602,25.598,25.602c14.141,0,25.602-11.465,25.602-25.602,c0-14.14-11.461-25.601-25.602-25.601C572.942,499.359,561.481,510.82,561.481,524.96L561.481,524.96z,M561.481,524.96,M561.481,678.562c0,14.138,11.461,25.599,25.598,25.599c14.141,0,25.602-11.461,25.602-25.599,c0-14.141-11.461-25.602-25.602-25.602C572.942,652.96,561.481,664.421,561.481,678.562L561.481,678.562z,M561.481,678.562'
var chinaPath = 'image://./img/中国.svg'
var satellitePath = 'path://M637.009,109.156L524.021-3.833c-15.766-15.765-40.727-15.765-55.18,0L304.614,160.394,c-15.765,15.766-15.765,40.727,0,55.18l44.668,44.672l-22.332,22.332l-14.453-14.45c-21.019-21.023-48.609-30.218-74.887-30.218,c-35.472-28.903-81.457-32.844-107.734-6.571c-26.273,26.278-22.332,72.262,6.57,107.735c0,27.59,9.196,53.867,30.219,74.886,l14.449,14.454l-22.332,22.332l-44.672-44.668c-15.765-15.766-40.726-15.766-55.179,0l-164.227,164.226,c-15.765,15.766-15.765,40.731,0,55.18L7.692,738.472c15.766,15.766,40.727,15.766,55.18,0l164.227-164.226,c15.765-15.767,15.765-40.728,0-55.181l-38.102-38.102l22.336-22.332l49.922,49.922c13.141-30.215,34.16-60.433,60.434-86.711,c26.277-26.273,56.496-47.297,86.715-60.433l-49.926-49.926l22.336-22.336l38.098,38.101c15.77,15.766,40.73,15.766,55.184,0,l164.227-164.226c14.449-14.449,14.449-39.414-1.316-53.863v-0.004H637.009z,M637.009,109.156,M598.907,392.937c-2.625-2.625-6.566-5.254-9.195-6.566c0,0-1.316,0-1.316-1.313c-2.629-1.316-3.941-2.629-6.566-3.941,h-1.316c-64.375-35.477-164.223-10.512-237.797,63.058c-74.887,74.887-98.535,173.426-63.063,237.801,c1.313,2.629,2.629,3.941,3.942,6.57c0,0,0,1.313,1.312,1.313c2.629,3.941,5.254,6.57,6.571,9.199,c27.589,18.392,89.339-5.258,155.027-57.809l-32.844-26.277c-39.414,31.531-70.945,48.613-80.141,40.731,c-11.824-11.825,27.59-70.946,88.023-131.384c60.438-60.438,119.559-99.848,131.383-88.023c7.883,7.879-6.57,35.469-34.16,70.941,l26.277,32.848C594.97,477.022,617.302,419.214,598.907,392.937L598.907,392.937z,M598.907,392.937,M441.251,568.988c-10.508-7.884-10.508-22.332-1.313-31.532l3.941-3.941c9.195-9.195,23.648-7.883,31.531,1.316,l35.473,43.352c7.883,10.512,7.883,26.281-1.316,35.478l11.824-11.825c-9.195,9.196-24.961,10.508-35.473,1.313L441.251,568.988z,,M441.251,568.988,M526.282,586.699c-16.727,0-30.652,13.925-31.586,29.733c0,16.724,13.008,29.731,31.586,29.731,c16.723,0,31.582-13.008,31.582-29.731C556.946,598.772,543.009,586.699,526.282,586.699L526.282,586.699z,M526.282,586.699,M604.321,586.699c0,27.879-11.156,53.882-32.52,73.39c-20.441,20.442-47.375,30.664-77.121,30.664v42.739,c85.477,0,153.297-65.953,154.23-146.793H604.321z,M604.321,586.699,M683.282,585.781c0,98.468-84.543,179.293-188.586,179.293V807.8c128.203,0,233.176-99.402,233.176-222.035h-44.59,V585.781z,M683.282,585.781'
var radarPath = 'path://M243.027,260.855c0-33.984-38.727-54.136-70.34-31.218c-26.082,19.363-12.25,73.109,28.848,73.109,c9.09,0,1.184-0.394,8.691-2.371l81.805,103.535c-11.855,8.301-157.281,154.121-161.629,163.207,c20.945,13.832,33.984,31.219,70.34,48.211c53.352,25.688,77.852,24.504,135.152,24.504c34.772,0,61.647-12.647,88.519-20.551,c-10.671,15.414-54.14,98.793-69.155,123.692c-5.531,9.483-47.816,63.226,3.555,63.226h294.012,c10.671,0,23.316-7.902,23.316-18.969c0-11.063-31.613-64.414-38.332-73.5l-95.633-168.742c-15.41-25.688-7.509-11.855,9.484-45.84,c37.542-74.688,42.68-156.488,8.296-233.945c-8.296-18.574-36.354-65.203-52.953-75.476c-16.198,9.484-62.043,64.808-84.961,82.195,c-11.065,8.695-77.452,73.898-84.172,84.172c-7.905-7.508-14.621-12.25-22.526-19.758l-74.293-60.066,C241.051,265.996,243.027,270.34,243.027,260.855L243.027,260.855z,M247.77-13c-74.688,0-145.031,27.266-200.75,73.898,L5.527,101.207c-17.785,21.34-38.727,58.484-49.004,83.777c-19.363,45.84-17.781,58.09-22.523,100.77l0.395,46.629h28.453,c0-60.461,0.789-93.262,24.895-146.215c8.301-17.781,15.809-28.848,26.082-44.652l49.398-55.329,c45.445-43.863,118.551-68.363,184.547-68.363V-13z,M247.77,17.824,M39.906,269.945c1.582-21.34,18.574-55.324,28.453-69.156c4.348-6.32,5.531-9.484,10.273-15.016,c4.348-5.136,5.93-7.507,10.277-12.644l37.539-35.172c33.59-24.5,82.199-40.309,125.668-40.309V66.824,c-35.566,0-72.711,9.485-98.004,21.34c-15.414,7.113-24.895,12.648-37.938,21.34c-5.926,3.953-11.461,7.902-16.992,12.645,c-29.637,24.899-49,47.028-66.785,81.407C5.922,254.93,9.875,284.566,5.527,292.473v39.121h29.637,C35.164,319.344,32.398,280.617,39.906,269.945L39.906,269.945z,M39.906,269.945,M211.809,181.426c8.301-4.348,25.688-2.371,39.914-2.371c0-11.461,1.184-22.129-2.371-30.032,c-48.609-2.371-74.293,10.668-102.352,29.637l-23.316,22.922c-12.25,18.57-22.918,30.426-28.055,56.508,c-5.93,28.847-5.93,45.84,0.395,74.293h30.824c-3.559-19.758-8.695-34.379-5.141-56.113c3.559-20.551,7.906-30.036,16.598-44.262,c1.977-3.555,4.348-6.321,6.719-9.485C160.438,204.742,188.887,183.797,211.809,181.426L211.809,181.426z,M211.809,181.426,M3.156,333.965h34.379l2.371-64.02c-7.508,10.672-4.742,49.399-4.742,61.649H5.527v-39.121L3.156,333.965z,,M254.094,181.426v-18.574c0.395-15.805-0.395-11.852-4.742-13.829c3.555,7.903,2.371,18.571,2.371,30.032,c-14.227,0-31.613-1.977-39.914,2.371H254.094z,M147,178.66c-7.902,2.371-7.902,4.742-13.039,9.879,c-5.535,5.531-7.512,5.531-10.277,13.043L147,178.66z,M123.684,201.582'
//经纬度
var geoCoordMap = {
  'china': [58, 35.5],
  'aws': [-7, 37.5],
  'satellite': [-30, 25],
  'radar': [15, -34],
  '乌干达': [32.5825, 0.3476],
  '刚果金': [15.2663, -4.4419],
  '南非': [18.4240, -33.9248],
  '卢旺达': [30.1044, -1.9706],
  '坦桑尼亚': [35.7516, -6.1629],
  '尼日利亚': [7.3986, 9.0765],
  '布隆迪': [29.3598, -3.3613],
  '肯尼亚': [36.8219, -1.2920],
  '莫桑比克': [32.6051, -25.8919],
  '赞比亚': [28.3228, -15.3875],
  '马达': [8.7095, 8.3061],
  //'示例': [经度,纬度],
}
var getColor = function(type) {
  if (type == 'good') {
    return '#20986a'
  } else if (type == 'well') {
    return '#d1c227'
  } else{
    return '#ff1d04'
  }
}
//丢包率
var pack_loss_probability = [
  {fromName: 'china', toName: 'aws',value: 0},
  {fromName: 'radar', toName: 'satellite',value: 0},
  {fromName: 'aws', toName: '乌干达',value: 30},
  {fromName: 'aws', toName: '刚果金',value: 0},
  {fromName: 'aws', toName: '南非',value: 0},
  {fromName: 'aws', toName: '卢旺达',value: 10},
  {fromName: 'aws', toName: '坦桑尼亚',value: 0},
  {fromName: 'aws', toName: '尼日利亚',value: 0},
  {fromName: 'aws', toName: '布隆迪',value: 20},
  {fromName: 'aws', toName: '肯尼亚',value: 0},
  {fromName: 'aws', toName: '莫桑比克',value: 100},
  {fromName: 'aws', toName: '赞比亚',value: 0},
  {fromName: 'aws', toName: '马达',value: 0},
  //{fromName: '示例'}, {id: 45938,name: '示例',value: null}],
]
// 格式化
var convertLinesData = function(data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var fromCoord = geoCoordMap[dataItem.fromName]
    var toCoord = geoCoordMap[dataItem.toName]
    if (fromCoord && toCoord) {
      var type = dataItem.value <= 10 ? 'good' : dataItem.value <= 50 ? 'well' : 'bad'
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
// cache节点告警数量
var cache_error = [
  {name: '乌干达',value: [20, 0]},
  {name: '刚果金',value: [0, 20]},
  {name: '南非',value: [0, 0]},
  {name: '卢旺达',value: [0, 90]},
  {name: '坦桑尼亚',value: [0, 100]},
  {name: '尼日利亚',value: [0, 0]},
  {name: '布隆迪',value: [30, 60]},
  {name: '肯尼亚',value: [0, 100]},
  {name: '莫桑比克',value: [0, 0]},
  {name: '赞比亚',value: [80, 100]},
  {name: '马达',value: [70, 0]}
]
var convertPonitData = function(data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i]
    var coord = geoCoordMap[dataItem.name]
    if (coord) {
      var type_cathe = dataItem.value[0] <= 10 ? 'good' : dataItem.value[0] <= 50 ? 'well' : 'bad'
      var type_load = dataItem.value[1] <= 10 ? 'good' : dataItem.value[1] <= 50 ? 'well' : 'bad'
      res.push({
        name: dataItem.name,
        value: coord.concat(dataItem.value),
        itemStyle: {
          normal: {
            color: getColor(type_cathe)
          }
        },
        label: {
          show: true,
          position: 'bottom',
          formatter: function (params) {
            return params.value[3] + '%'
          },
          color: getColor(type_load)
        }
      })
    }
  }
  return res
}
