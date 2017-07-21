function mySend(content) {
  var my_send = '<div class="message me">';
  my_send += '	<img class="avatar" src="images/user.jpg" />';
  my_send += '    <div class="content">';
  my_send += '        <div class="bubble bubble_primary right">';
  my_send += '            <div class="bubble_cont">';
  my_send += '                <div class="plain">';
  my_send += '                    <pre>' + content + '</pre>';
  my_send += '                </div>';
  my_send += '            </div>';
  my_send += '        </div>';
  my_send += '    </div>';
  my_send += '</div>';
  $('#messageList').append(my_send);
}

function reContent(content) {
  var re_send = '<div class="message">';
  re_send += '	<img class="avatar" src="images/admin.jpg" />';
  re_send += '	<div class="content">';
  // re_send += '		<div class="nickname">四达时代</div>';
  re_send += '		<div class="bubble bubble_default left">';
  re_send += '			<div class="bubble_cont">';
  re_send += '				<div class="plain">';
  re_send += '					<pre>' + content + '</pre>';
  re_send += '				</div>';
  re_send += '			</div>';
  re_send += '		</div>';
  re_send += '	</div>';
  re_send
  $('#messageList').append(re_send);
}

function processContent(userinput, pre_content, do_content) {
  var re_process = '<div class="panel panel-default">';
  re_process += '<div class="panel-header">用户输入【';
  re_process += userinput;
  re_process += '】分析过程</div>';
  re_process += '<div class="panel-body">';
  re_process += '<div>';
  re_process += '<table class="table table-border">';
  re_process += '<tbody>';
  re_process += '<tr>';
  re_process += '<th width="20px">预解析模块</th>';
  re_process += '<td>';
  re_process += pre_content;
  re_process += '</td>';
  re_process += '</tr>';
  re_process += '<tr>';
  re_process += '<th>推理模块</th>';
  re_process += '<td>';
  re_process += do_content;
  re_process += '</td>';
  re_process += '</tr>';
  re_process += '</tbody>';
  re_process += '</table>';
  re_process += '</div>';
  re_process += '</div>';
  $('#processList').append(re_process);
}

function parseJSON(response) {
  return response.text();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}

function html_encode(str) {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&gt;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "<br>");
  return s;
}
$('#btn_send').click(function() {
  if ($('#editArea').val()) {
    var send = $('#editArea').val();
    msgSend(send);
  }
});

function msgSend(send) {
  mySend(send);
  starAjax(send);
}
function starAjax(send){
  var url = $('#url').val();
  var casecode = $('#casecode').val();
  $("#messageList").scrollTop($("#messageList")[0].scrollHeight);
  $("#processList").scrollTop($("#processList")[0].scrollHeight);
  $('#editArea').val('');
  var options = {
    "Content-Type": "text/plain",
    "mode": "cors",
  };
  fetch(url + '/chat?casecode=' + casecode + '&userinput=' + encodeURI(send), options)
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data) {
      // var result = data.split(/[\n,]/g);
      var result = JSON.parse(data);
      reContent(result[0]);
      if(result[0].indexOf('case code登记成功')>=0){
        casecode = result[0].match(/\[(\S*)\]/);
        $('#casecode').val(result[0].match(/\[(\S*)\]/)[1]);
      }else{
        if(result[1]&&result[2]){
          processContent(send, result[1], html_encode(result[2]));
        }
      }
      $("#messageList").scrollTop($("#messageList")[0].scrollHeight);
      $("#processList").scrollTop($("#processList")[0].scrollHeight);
    });
}
jQuery.Huitab = function(tabBar, tabCon, class_name, tabEvent, i) {
  var $tab_menu = $(tabBar);
  // 初始化操作
  $tab_menu.removeClass(class_name);
  $(tabBar).eq(i).addClass(class_name);
  $(tabCon).hide();
  $(tabCon).eq(i).show();

  $tab_menu.bind(tabEvent, function() {
    $tab_menu.removeClass(class_name);
    $(this).addClass(class_name);
    var index = $tab_menu.index(this);
    $(tabCon).hide();
    $(tabCon).eq(index).show()
  })
}
