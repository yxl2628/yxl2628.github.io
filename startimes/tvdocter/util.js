var baseUrl = 'http://219.144.68.15:8084/fushionbaby-app/inquiry/'
// var baseUrl = 'http://127.0.0.1:8084/'

function getUrlKey(name) {
  var key = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || ['']
  return key.length > 1 ? decodeURIComponent(key[1].replace(/\+/g, '%20')) || null : ''
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}
