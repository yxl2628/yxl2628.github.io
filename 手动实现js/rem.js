/**
 * 实现rem的原理
 * rem是通过根元素进行适配的，网页中的根元素是html我们通过设置html的字体大小就可以控制rem的大小；
 * 所以默认1rem=16px； 2rem=32px。
 * 要想让rem和px成100倍的关系，即1rem*100=100px；则html的字体大小就应该是100px
 * 如果是750的设计稿，但是手机是375的屏幕:
 *    对应的750设计稿            视觉测量值为  100px --> 1rem
 *    375屏幕手机（是750的一半）　页面显示为    50px-->1rem
 * 所以1rem和px对应关系是50倍的关系，即：屏幕宽度/7.5=375/7.5=50px;
 */
(function () {
  var a = document.documentElement.clientWidth || document.body.clientWidth;
  if (a > 460) {
    a = 460
  } else {
    if (a < 320) {
      a = 320
    }
  }
  document.documentElement.style.fontSize = (a / 7.5) * 1 + "px"
})();
/**
 * 验证代码
 */