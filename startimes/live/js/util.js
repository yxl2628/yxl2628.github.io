//build
window.server = '/starott_up_client/';
window.smartCardCode = '12345678';
//develop
window.server = 'http://10.0.251.149:8081/starott_up_client/';
window.smartCardCode = '15010755317';
window.key = key = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay();
(function initUserToken(_server, _key) {
    var userToken = localStorage.getItem(_key);
    if (!userToken) {
        $.ajax({
            // url:_server+'loginValidate/v1.0',
            url: _server + 'loginValidate',
            type: 'POST',
            async: false,
            dataType: 'json',
            // data:{userName:window.smartCardCode,terminalType:'STB',password:''},
            data: {
                smartCardCode: window.smartCardCode,
                password: ''
            },
            success: function(res) {
                if (res.code == '0000') {
                    localStorage.setItem(_key, res.newUserToken);
                } else {
                    console.error(res.code, res.errorMessage);
                }
            }
        });
    }
})(window.server, window.key);
function ottPost(_url, _params, _success, _error) {
    $.ajax({
        // url:_server+'loginValidate/v1.0',
        url: window.server + _url,
        type: 'POST',
        dataType: 'json',
        async: false,
        // data:{userName:window.smartCardCode,terminalType:'STB',password:''},
        data: JSON.stringify(_params),
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Content-Type', 'application/json');
            if (_params.userToken != undefined && _params.userToken) {
                xhr.setRequestHeader('userToken', _params.userToken);
            }
        },
        success: function(res) {
            if (res.code == '0000') {
                _success && _success(res);
            } else {
                console.error(res.code, res.errorMessage);
                _error && _error(res.code + ':' + res.errorMessage);
            }
        },
        error: function(err) {
            console.error(err);
            _error && _error(err);
        }
    });
}
function getVideoIndex(success) {
    var params = {
        "userNumber": window.smartCardCode,
        "userType": localStorage.getItem(window.key),
        "terminalType": "0",
        "parentDatas": [
            {
                "parentName": "ONDEMAND",
                "dataType": "0",
                "pageNumbers": 1,
                "pageStart": 0,
                "sizeOfEachPage": 3
            }
        ]
    }
    ottPost('up/querySubData', params, function(res) {
        if (res.subData && res.subData.categories) {
            var categories = res.subData.categories;
            success && success(categories);
        }
    });
}
function getVideoList(_id, _start, _pageSize, success) {
    var params = {
        "userNumber": window.smartCardCode,
        "userType": localStorage.getItem(window.key),
        "terminalType": "0",
        "parentDatas": [
            {
                "parentID": _id,
                "dataType": "0",
                "pageNumbers": 1,
                "pageStart": _start,
                "sizeOfEachPage": _pageSize
            }
        ]
    }
    ottPost('up/querySubData', params, function(res) {
        success && success(res);
    });
}
function getVideoDetail(_id, success) {
    var params = {
        "userNumber": window.smartCardCode,
        "userType": localStorage.getItem(window.key),
        "terminalType": "0",
        "queryDatas": [
            {
                "dataId": _id,
                "dataType": "content"
            }
        ]
    }
    ottPost('up/queryData', params, function(res) {
        success && success(res);
    });
}
function getLiveVideo(success) {
    var params = {
      "userToken":localStorage.getItem(window.key),
      "terminalType":"0"
    }
    ottPost('queryLiveRecord/ts/v1.0', params, function(res) {
        success && success(res);
    });
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}
window.template && window.template.helper('timeFormat', function (value) {
  var time = parseInt(value.dateEnd)-parseInt(value.dateStart);
  //计算出相差天数
  var days=Math.floor(time/(24*3600*1000))
  //计算出小时数
  var leave1=time%(24*3600*1000)    //计算天数后剩余的毫秒数
  var hours=Math.floor(leave1/(3600*1000))
  //计算相差分钟数
  var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
  var minutes=Math.floor(leave2/(60*1000))
  //计算相差秒数
  var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
  var seconds=Math.round(leave3/1000)

  var returnValue = hours==0?"00:":(hours<10?("0"+hours):hours)+':';
  returnValue += minutes==0?"00:":(minutes<10?("0"+minutes):minutes)+':';
  returnValue += seconds==0?"00":(seconds<10?("0"+seconds):seconds);
  return returnValue;
});
var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()//检测浏览器语言
}
