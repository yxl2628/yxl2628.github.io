<template>
<div id="app">
  <div class="dialog-header">自助诊疗</div>
  <div class="dialog-body" style="background: url('../static/bg-1.jpg');padding:0;">
    <div id="dialog" class="dialog">
      <span class="label">请求次数：</span><input v-model="total" /><span class="test-result">成功次数：{{success}} / {{total}}</span>
      <table>
        <thead>
          <tr>
            <th>请求</th>
            <th>请求开始时间</th>
            <th>请求结果</th>
            <th>请求结束时间</th>
            <th>耗时（毫秒）</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in list">
            <td>{{key}}</td>
            <td>{{item.start}}</td>
            <td :class="{success:item.result==='成功'}">{{item.result}}</td>
            <td>{{item.end}}</td>
            <td :class="{success:item.time<3000,warning:item.time>=3000}">{{item.time}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import { getInquiryRecord } from '../../service'

let timeout = null

export default {
  data() {
    return {
      index: 1,
      total: 20,
      list: {},
      success: 0
    }
  },
  mounted() {
    this.sessionid = localStorage.getItem('sessionid')
    this.casecode = localStorage.getItem('casecode')
    this.localDate = ''
    this.getResult()
  },
  updated() {
    const dialog = document.getElementById('dialog')
    dialog.scrollTop = dialog.scrollHeight
  },
  methods: {
    getResult: function () {
      var _this = this
      timeout = setInterval(function () {
        var item = {
          localDate: _this.localDate,
          start: _this.getNowFormatDate(),
          startTime: new Date().getTime(),
          result: '加载中',
          end: '',
          endTime: '',
          time: ''
        }
        _this.list[_this.index] = item
        getInquiryRecord({
          sessionid: _this.sessionid,
          casecode: _this.casecode,
          localDate: _this.localDate
        }, function (result) {
          console.log()
          _this.list[_this.index].result = '成功'
          _this.list[_this.index].end = _this.getNowFormatDate()
          _this.list[_this.index].time = new Date().getTime() - _this.list[_this.index].startTime
          _this.index++
          _this.success++
        }, function () {
          _this.list[_this.index].result = '失败'
          _this.list[_this.index].end = _this.getNowFormatDate()
          _this.list[_this.index].time = new Date().getTime() - _this.list[_this.index].startTime
          _this.index++
        })
        if (_this.index > _this.total - 1) {
          clearInterval(timeout)
        }
      }, 3000)
    },
    getNowFormatDate: function () {
      var date = new Date()
      var seperator = ':'
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      var currentdate = date.getHours() + seperator + date.getMinutes() + seperator + date.getSeconds()
      return currentdate
    }
  }
}
</script>
<style>
.dialog-header {
  height: 60px;
  padding-top: 10px;
  line-height: 60px;
  background-color: #02bca4;
  font-size: 30px;
  text-align: center;
}
.dialog-body {
  width: 1280px;
  height: 650px;
  padding-top: 120px;
  box-sizing: border-box;
}
.dialog{
  position: absolute;
  top: 90px;
  left: 100px;
  width: 1080px;
  height: 600px;
  background-color: #ebebeb;
  box-shadow: 0 0 30px #ebebeb;
  border-radius: 4px;
  padding: 10px 10px 0;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
}
.label {
  font-size: 20px;
  color: #000000;
}
input {
  height: 30px;
  line-height: 40px;
  font-size: 20px;
}
table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
  border: 0;
}
thead {
  color: #909399;
  font-weight: 500;
}
thead th{
  border: 1px solid #ebeef5;
}
tbody td{
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: center;
  border: 1px solid #ebeef5;
}
.success {
  color: #67c23a;
}
.warning{
  color: #f56c6c;
}
.test-result{
  padding-left: 50px;
  color: #000000;
}
</style>
