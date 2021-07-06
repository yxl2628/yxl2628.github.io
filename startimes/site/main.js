(function() {
  var myChart = initMap();
  initList(myChart);
})();

function initMap() {
  echarts.registerMap('customMap', mapJson);
  var myChart = echarts.init(document.getElementById('main'));
  var option = {
    geo: {
      name: '非洲地图',
      map: 'customMap',
      roam: true,
      zoom: 1.7,
      top: '10%',
      left: '35%',
      aspectScale: 0.9,
      itemStyle: {
        opacity: 1,
        color: '#053056',
        borderWidth: 1,
        borderColor: 'rgba(1, 14, 29, 0.6)'
      },
      emphasis: {
        itemStyle: {
          opacity: 1,
          color: '#053056',
          borderWidth: 1,
          borderColor: 'rgba(1, 14, 29, 0.6)'
        },
        label: {
          show: true,
          color: '#fff',
          fontSize: 14
        }
      },
    },
    series: []
  };
  // 循环显示站点信息
  var siteImg = 'image://./site.png';
  var sites = [];
  data.forEach(function (item) {
    sites.push({
      name: item.name,
      value: item.position.concat([item.name]),
      symbol: siteImg,
      symbolSize: [80, 80],
      emphasis: {
        label: {
          show: true,
          offset: [0, -30],
          formatter: '{@[2]}',
          textStyle: {
            color: '#fff',
            fontSize: 12
          }
        }
      },
      info: item,
    });
  });
  var siteSeries = {
    name: '塔站',
    type: 'scatter',
    coordinateSystem: 'geo',
    symbolSize: 30,
    z: 10,
    data: sites
  };
  option.series[0] = siteSeries;
  myChart.setOption(option, true);
  myChart.on('click', function (params) {
    const event = params.event;
    var data = params.data;
    if (data && data.info) {
      data.info.style = getPosStyle(event.offsetY + 80, event.offsetX + 50);
      showInfo(data.info);
    } else {
      showInfo(null);
    }
  });
  return myChart;
}

function showInfo(info) {
  var infoEl = document.getElementById('info');
  if (info) {
    var infoHtml = ['<div class="info-name">' + info.name + '</div>'];
    infoHtml.push('<div class="info-value"><table>');
    info.values.forEach(function(item) {
      infoHtml.push(
        '<tr>'
        + '<td class="info-value-lable">' + item.name + '</td>'
        + '<td class="info-value-value">' + item.value + '</td>'
      + '</tr>');
    })
    infoHtml.push('</table></div>');
    infoEl.innerHTML = infoHtml.join('');
    infoEl.setAttribute('style', 'display:block;' + info.style);
  } else {
    infoEl.setAttribute('style', 'display:none');
  }
}
function getSiteData() {
  var siteData = window.siteData || [];
  if (siteData.length > 0) {
    return siteData;
  }
  var map = {};
  data.forEach(function (item, index) {
    if (!map[item.country]) {
      map[item.country] = [];
    }
    item.id = index;
    item.title = item.name;
    map[item.country].push(item);
  });
  var keys = Object.keys(map);
  keys.forEach(function (key, index) {
    var country = {
      id: index,
      title: key,
      children: map[key],
      // spread: true,
    }
    siteData.push(country);
  });
  return siteData;
}
function initList(myChart) {
  layui.use(['tree', 'util'], function () {
    layui.tree.render({
      elem: '#list'
      , data: getSiteData()
      , showLine: true  //是否开启连接线
      , accordion: true
      , click: function(obj) {
        var info = obj.data;
        var pos = myChart.convertToPixel('geo', info.position);
        info.style = getPosStyle(pos[1] + 80, pos[0] + 50);
        showInfo(info);
      }
    });
  });
}

function getPosStyle(top, left) {
  var style = 'top:' + top + 'px;left:' + left + 'px;';
  var x = '0';
  var y = '0';
  if (top > window.innerHeight / 2) {
    y = '-110%';
  }
  if (left > window.innerWidth / 2) {
    x = '-100%';
  }
  style += 'transform: translate(' + y + ', ' + x + ');'
  return style;
}

function showAll() {
  var siteData = getSiteData();
  var tableContent = ['<div class="all-list">'];
  tableContent.push('<table class="layui-table" lay-size="sm">');
  tableContent.push('<thead><tr>');
  tableContent.push('<td>country</td>');
  tableContent.push('<td>name</td>');
  data[0].values.forEach(function(item) {
    tableContent.push('<td>' + item.name + '</td>');
  });
  tableContent.push('</tr></thead>');
  tableContent.push('<tbody>');
  siteData.forEach(function(country) {
    country.children.forEach(function (site, index) {
      tableContent.push('<tr>');
      if (index === 0) {
        tableContent.push('<td rowspan=' + country.children.length + '>' + country.title + '</td>');
      }
      tableContent.push('<td>' + site.name + '</td>');
      site.values.forEach(function(value) {
        tableContent.push('<td>' + value.value + '</td>');
      });
      tableContent.push('</tr>');
    })
  })
  tableContent.push('</tbody></table></div>');

  //示范一个公告层
  layer.open({
    type: 1
    , title: false //不显示标题栏
    , closeBtn: true
    , area: '90vw;'
    , shade: 0.8
    , id: 'all_country_list' //设定一个id，防止重复弹出
    , moveType: 1 //拖拽模式，0或者1
    , content: tableContent.join('')
  });
}