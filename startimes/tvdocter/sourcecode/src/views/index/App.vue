<template>
<div id="app">
  <div class="header">自助诊疗</div>
  <div class="body" style="background: url('../static/bg.jpg');">
    <div class="content">
      <div class="row clearfix">
        <div class="label">患者选择</div>
        <div class="input change-type">
          <div class="value" :class="{active:current=='type'}" v-html="type?'代述':'自己'"></div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="label">性别</div>
        <div class="input change-type">
          <div class="value" :class="{active:current=='sex'}" v-html="sex?'女':'男'"></div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="label">出生日期</div>
        <div class="input select-type">
          <div class="value" :class="{active:current=='birthdate'}" v-html="birthdate"></div>
        </div>
      </div>
      <div class="row">
        <div class="button" :class="{active:current=='button'}">开始诊断</div>
      </div>
    </div>
  </div>
  <div v-show="now==='birthdate'" class="birthdate-select">
    <div class="birthdate-body">
      <div class="year">
        <div class="title" :class="{active:birthdateCurrent=='year'}">年</div>
        <ul class="content">
          <li v-for="n in 5" v-html="year - 6 + n"></li>
          <li class="active" v-html="year"></li>
          <li v-for="n in 5" v-html="(year + n) <= maxYear ? (year + n) : ''"></li>
        </ul>
      </div>
      <div class="month">
        <div class="title" :class="{active:birthdateCurrent=='month'}">月</div>
        <ul class="content">
          <li v-for="n in 5" v-html="(month - 6 + n) > 0 ? (month - 6 + n) : ''"></li>
          <li class="active" v-html="month"></li>
          <li v-for="n in 5" v-html="(month + n) <= 12 ? (month + n) : ''"></li>
        </ul>
      </div>
      <div class="day">
        <div class="title" :class="{active:birthdateCurrent=='day'}">日</div>
        <ul class="content">
          <li v-for="n in 5" v-html="(day - 6 + n) > 0 ? (day - 6 + n) : ''"></li>
          <li class="active" v-html="day"></li>
          <li v-for="n in 5" v-html="(day + n) <= maxDay ? (day + n) : ''"></li>
        </ul>
      </div>
    </div>
  </div>
  <div v-show="qrcode" class="birthdate-select">
    <div class="code-result" v-html="qrcodeResult"></div>
    <div id="code">
      <img :src="codeDataUrl" width="250px" height="250px"/>
    </div>
  </div>
  <div v-if="debug" v-show="errorMessage" class="error">
    {{ errorMessage }}
  </div>
</div>
</template>

<script>
import { getUrlKey, getNowFormatDate } from '../../utils/utils'
import { addCase, getInquiryRecord } from '../../service'
import QRCode from 'qrcode'

let timeout = null

const now = new Date()
export default {
  data() {
    return {
      debug: true,
      errorMessage: '',
      type: 0,
      sex: 0,
      birthdate: '',
      current: 'type',
      now: 'main',
      list: ['type', 'sex', 'birthdate', 'button'],
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDay(),
      maxYear: now.getFullYear(),
      maxDay: 31,
      birthdateCurrent: 'year',
      qrcode: false,
      qrcodeResult: '等待连接',
      codeDataUrl: ''
    }
  },
  created() {
    const _this = this
    const monthShow = this.month < 10 ? ('0' + this.month) : this.month
    const dayShow = this.day < 10 ? ('0' + this.day) : this.day
    this.birthdate = this.year + '-' + monthShow + '-' + dayShow
    this.sid = getUrlKey('sid')
    // 绑定按键
    document.onkeydown = function(e) {
      _this.changeKey(e.which)
    }
  },
  methods: {
    changeKey: function(key) {
      const index = this.list.indexOf(this.current)
      switch (key) {
        case 38: // up
          if (this.now === 'main') {
            this.mainUp(index)
          } else if (this.now === 'birthdate') {
            this.birthdateUp()
          }
          break
        case 40: // down
          if (this.now === 'main') {
            this.mainDown(index)
          } else if (this.now === 'birthdate') {
            this.birthdateDown()
          }
          break
        case 39: // right
          if (this.now === 'main' && this.current === 'birthdate') {
            this.now = 'birthdate'
          } else if (this.now === 'main') {
            this.mainChange()
          } else if (this.now === 'birthdate') {
            this.birthdateChange('right')
          }
          break
        case 37: // left
          if (this.now === 'main') {
            this.mainChange()
          } else if (this.now === 'birthdate') {
            this.birthdateChange('left')
          }
          break
        case 13: // enter
          if (this.now === 'birthdate') {
            const monthShow = this.month < 10 ? ('0' + this.month) : this.month
            const dayShow = this.day < 10 ? ('0' + this.day) : this.day
            this.birthdate = this.year + '-' + monthShow + '-' + dayShow
            this.now = 'main'
          } else if (this.now === 'main' && this.current === 'birthdate') {
            this.now = 'birthdate'
          } else if (this.now === 'main' && this.current === 'button') {
            const _this = this
            addCase({
              sid: this.sid,
              sex: this.sex,
              birthdate: this.birthdate,
              type: this.type
            }, function(result) {
              const res = typeof result === 'string' ? JSON.parse(result) : result
              if (res.responseCode === '0') {
                localStorage.setItem('casecode', res.data.casecode)
                localStorage.setItem('sessionid', res.data.sessionid)
                localStorage.setItem('localDate', getNowFormatDate())

                QRCode.toDataURL(JSON.stringify({
                  'casecode': res.data.casecode,
                  'sessionid': res.data.sessionid
                }), function (err, url) {
                  if (err) {
                    _this.errorMessage = '生成二维码失败：' + err
                  } else {
                    _this.codeDataUrl = url
                    _this.qrcode = true
                    _this.getResult()
                  }
                })
              } else {
                _this.errorMessage = '请求结果返回错误，结果为：' + JSON.stringify(res)
              }
            }, function (err) {
              _this.errorMessage = '请求服务器错误，错误日志为：' + err
            })
          }
          break
      }
    },
    mainUp: function(index) {
      if (index > 0) {
        this.current = this.list[index - 1]
      }
    },
    mainDown: function(index) {
      if (index < 3) {
        this.current = this.list[index + 1]
      }
    },
    mainChange: function() {
      if (this.current === 'type') {
        this.type = this.type ? 0 : 1
      } else if (this.current === 'sex') {
        this.sex = this.sex ? 0 : 1
      }
    },
    birthdateUp: function() {
      switch (this.birthdateCurrent) {
        case 'year':
          this.year = this.year - 1
          break
        case 'month':
          this.month = this.month > 1 ? this.month - 1 : this.month
          this.maxDay = new Date(this.year, this.month, 0).getDate()
          this.day = this.day > this.maxDay ? this.maxDay : this.day
          break
        case 'day':
          this.day = this.day > 1 ? this.day - 1 : this.day
          break
      }
    },
    birthdateDown: function() {
      switch (this.birthdateCurrent) {
        case 'year':
          this.year = this.year < this.maxYear ? this.year + 1 : this.year
          break
        case 'month':
          this.month = this.month < 12 ? this.month + 1 : this.month
          this.maxDay = new Date(this.year, this.month, 0).getDate()
          this.day = this.day > this.maxDay ? this.maxDay : this.day
          break
        case 'day':
          this.day = this.day < this.maxDay ? this.day + 1 : this.day
          break
      }
    },
    birthdateChange: function(lr) {
      if (this.birthdateCurrent === 'year') {
        this.birthdateCurrent = lr === 'left' ? 'year' : 'month'
      } else if (this.birthdateCurrent === 'month') {
        this.birthdateCurrent = lr === 'left' ? 'year' : 'day'
      } else if (this.birthdateCurrent === 'day') {
        this.birthdateCurrent = lr === 'left' ? 'month' : 'day'
      }
    },
    getResult: function() {
      const sessionid = localStorage.getItem('sessionid')
      const casecode = localStorage.getItem('casecode')
      const _this = this
      timeout = setInterval(function() {
        getInquiryRecord({
          sessionid,
          casecode,
          localDate: ''
        }, function(result) {
          const res = typeof result === 'string' ? JSON.parse(result) : result
          if (res.responseCode === '0') {
            if (res.data.finish === 'star' || res.data.finish === 'finish') {
              _this.qrcodeResult = '设备已连接'
              location.href = './result.html'
            }
          } else {
            _this.errorMessage = '请求结果返回错误，结果为：' + JSON.stringify(res)
          }
        }, function (err) {
          _this.errorMessage = '请求服务器错误，错误日志为：' + err
        })
      }, 3000)
      setTimeout(function() {
        clearInterval(timeout)
        _this.qrcode = false
      }, 300000)
    }
  }
}
</script>

<style>
.header {
  height: 50px;
  background-color: #02bca4;
  font-size: 30px;
  text-align: center;
}
.body {
  width: 1280px;
  height: 670px;
  padding-top: 120px;
  box-sizing: border-box;
}
.content {
  width: 450px;
  margin: 0 auto;
  background-color: rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 20px;
}
.row .label {
  width: 150px;
  text-align: right;
  float: left;
}
.row .input {
  display: inline-flex;
  text-align: right;
  float: right;
}
.row .input .value{
  width: 100px;
  font-size: 16px;
  text-align: center;
}
.row .input .value.active{
  color: #02bca4;
}
.change-type:before{
  content: "<";
}
.change-type:after{
  content: ">";
}
.select-type::before{
  content: "";
  margin-right: 20px;
}
.select-type::after{
  content: ">";
  margin-left: 10px;
}
.button{
  width: 200px;
  text-align: center;
  margin: 50px auto 30px;
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  color: #02bca4;
  padding: 10 50px;
  border-radius: 5px;
}
.button.active{
  background-color: #02bca4;
  color: #ffffff;
}
.birthdate-select {
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 720px;
  z-index: 999;
  background-color: rgba(0,0,0,0.9);
}
.birthdate-body {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 380px;
  margin-left: -250px;
  margin-top: -190px;
  border-radius: 20px;
  overflow: hidden;
}
.birthdate-body .year,
.birthdate-body .month,
.birthdate-body .day{
  width: 150px;
  float: left;
  text-align: center;
}
.birthdate-body .year .title,
.birthdate-body .month .title,
.birthdate-body .day .title{
  background-color: rgba(255,255,255,0.2);
}
.birthdate-body ul{
    width: 150px;
    height: 330px;
    margin: 0;
    padding: 0;
    border-radius: 0;
    background-color: rgba(255,255,255,0.3);
}
.birthdate-body ul li{
  list-style: none;
  font-size: 16px;
  line-height: 30px;
  height: 30px;
}
.birthdate-body .active {
  color: #02bca4;
}
.code-result {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  margin-top: -190px;
  margin-left: -48px;
}
#code {
  position: absolute;
  background-color: #ffffff;
  text-align: center;
  top: 50%;
  left: 50%;
  margin-top: -125px;
  margin-left: -125px;
}
#code img {
  display: block;
}
</style>
