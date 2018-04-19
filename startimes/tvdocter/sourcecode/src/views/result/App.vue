<template>
<div id="app">
  <div class="dialog-header">自助诊疗</div>
  <div class="dialog-body" style="background: url('../static/bg-1.jpg');padding:0;">
    <div id="dialog" class="dialog">
      <template v-for="item in resultList">
        <div v-if="item.action == 'response' ||  item.action == 'upload_image'" class="message me">
          <img class="avatar" src="../../assets/user.jpg" />
          <div class="dialog-content">
            <div class="bubble bubble_primary right">
              <div class="bubble_cont">
                <div v-if="item.action == 'response' || item.content =='取消上传'" class="plain">{{item.content}}</div>
                <img v-if="item.action == 'upload_image' && item.content !='取消上传'" :src="item.content" height="200px"/>
              </div>
            </div>
          </div>
        </div>
        <div v-if="item.action == 'question' || item.action == 'conclusion'" class="message">
          <img class="avatar" src="../../assets/admin.jpg" />
          <div class="dialog-content">
            <div class="bubble bubble_default left">
              <div class="bubble_cont">
                <div v-if="item.action == 'question'" class="plain">{{item.content}}</div>
                <div v-if="item.action == 'conclusion'" class="plain" v-html="item.content"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
  <div v-if="debug" v-show="errorMessage" class="error">
    {{ errorMessage }}
  </div>
</div>
</template>
<script>
import { getInquiryRecord } from '../../service'

let timeout = null

export default {
  data() {
    return {
      debug: true,
      errorMessage: '',
      resultList: []
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
        getInquiryRecord({
          sessionid: _this.sessionid,
          casecode: _this.casecode,
          localDate: _this.localDate
        }, function (result) {
          var res = typeof result === 'string' ? JSON.parse(result) : result
          // 返回结果为正常
          if (res.responseCode === '0') {
            // 只有是finish状态，才进行问答信息解析
            if (res.data.finish === 'finish') {
              // 如果问答信息不为空，则进行解析渲染
              if (res.data.InquiryList.length > 0) {
                for (let i = 0; i < res.data.InquiryList.length; i++) {
                  const itemResult = res.data.InquiryList[i]
                  if (itemResult.action === 'conclusion') {
                    clearInterval(timeout)
                  }
                }
                // 将数据追加到已有结果上
                _this.resultList = _this.resultList.concat(res.data.InquiryList)
              }
              // 将返回的localDate更新
              _this.localDate = res.data.localDate
            }
          } else {
            _this.errorMessage = '请求结果返回错误，结果为：' + JSON.stringify(res)
          }
        }, function (err) {
          _this.errorMessage = '请求服务器错误，错误日志为：' + err
        })
      }, 3000)
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
.message {
  margin-bottom: 16px;
  float: left;
  width: 100%;
}
.message.me {
  float: right;
  text-align: right;
  clear: right;
}
.message .avatar {
  width: 40px;
  height: 40px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  float: left;
  cursor: pointer;
}
.message.me .avatar {
  float: right;
}
.message .nickname {
  font-weight: 400;
  padding-left: 10px;
  font-size: 12px;
  height: 22px;
  line-height: 24px;
  color: #4f4f4f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.message .nickname .time {
  margin-left: 10px;
}
.message.me .nickname {
  padding-right: 10px;
}
.message.me .nickname .time {
  margin-right: 10px;
}
.message .content {
  overflow: hidden;
}
.bubble {
    max-width: 70%;
    min-height: 1em;
    display: inline-block;
    vertical-align: top;
    position: relative;
    text-align: left;
    font-size: 14px;
    border-radius: 3px;
    line-height: 30px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    margin: 0 10px;
}
.bubble.bubble_default {
  color: #999999;
  background-color: #fff;
}
.bubble:before, .bubble:after {
  position: absolute;
  top: 14px;
  border: 6px solid transparent;
  content: " ";
}
.bubble.left:before, .bubble.left:after {
  right: 100%;
}
.bubble.left:after {
  border-right-color: #FFF;
  border-right-width: 4px;
}
.bubble.right:before, .bubble.right:after {
  left: 100%;
}
.bubble.right:after {
  border-left-color: #FFF;
}
.bubble.bubble_primary {
  background-color: #02bca4;
}
.bubble.bubble_primary.left:after {
  border-right-color: #02bca4;
  border-right-width: 4px;
}
.bubble.bubble_primary.right:after {
  border-left-color: #02bca4;
  border-left-width: 4px;
}
.bubble.bubble_primary.right.arrow_primary:before {
  border-left-color: #02bca4;
  border-left-width: 4px;
}
.bubble.bubble_primary.right.arrow_primary:after {
  border-left-color: #fff;
  border-left-width: 4px;
  margin-left: -2px;
}
.bubble.no_arrow {
  background-color: transparent;
}
.bubble.no_arrow:before, .bubble.no_arrow:after {
  display: none;
}
.bubble_cont {
  word-wrap: break-word;
  word-break: break-all;
  min-height: 25px;
  font-size: 18px;
}
.bubble_cont img {
  vertical-align: middle;
}
.bubble_cont .plain {
  padding: 9px 13px;
}
.bubble_cont .picture {
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.bubble_cont .picture img {
  display: block;
  cursor: pointer;
  max-width: 100%;
}

</style>
