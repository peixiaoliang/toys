<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>玩具总动员</title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    <div class="startIndex">
        <div class="startBanner">
            <img src="./images/ts4Poster.png" alt="">
        </div>
        <div class="startTitle">
            <img src="./images/title.png" alt="">
        </div>
        <div class="startBtn">

        </div>
    </div>
    <div class="gameRules">
        <div class="bannerRules">
           <div class="rulesContent">
            <div class="rulesText">
                <div class="rulesTextTitle">如何参与</div>
                <p>根据页面提示进行线上/线下“收集”，<span>4个</span></p>
                <p><span>打卡点</span>收集完毕，即可参与线上抽奖。</p>
            </div>
            <div class="rulesText rulesText2">
                <div class="rulesTextTitle">如何兑奖</div>
                <p>前往三里屯太古里北区N5广场兑奖处，向</p>
                <p>工作人员出示中奖二维码进行核销。兑奖</p>
                <p>有效期详见中奖页面。</p>
            </div>
            <div class="rulesText rulesText2">
                <div class="rulesTextTitle">温馨提示</div>
                <p>·礼品随机，数量每日限额（礼品内容详见兑换处海报）;</p>
                <p>·请务必妥善保存获奖页面（或中奖二维码），遗失则无法兑换。</p>
            </div>
            <div class="rulesTips">
                该活动解释权归主办方所有
            </div>  
           </div>
        </div>
         <div class="btnContains"></div>
    </div>
    <div class="gameContent">
        <div class="gameTitle">
            <img src="./images/title.png" alt="">
        </div>
        <div class="gameCenter">
            <div class="gameBox1 gameBox">
                <div class="collectBtn" data-id="1"></div>
            </div>
            <div class="gameBox2 gameBox">
                <div class="collectBtn" data-id="2"></div>
            </div>
            <div class="gameBox3 gameBox">
                <div class="collectBtn" data-id="3"></div>
            </div>
            <div class="gameBox4 gameBox">
                <div class="collectBtn" data-id="4"></div>
            </div>
        </div>
    </div>
    <div class="readCollect">
        <div class="readContent">
            
        </div>
        <div class="collectSuccess">

        </div>
    </div>
    <div class="getPrize">
        <div class="prizeContent">
            
        </div>
        <div class="prizeBtn">

        </div>
    </div>
</body>
<script src="js/font.js"></script>
<script src="js/jquery.min.js"></script>
<!--引用微信JS库-->
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="js/zepto.min.js"></script>



<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */

//alert(location.href.split('#')[0]);
  
  function QRCode(){
                wx.scanQRCode({
                    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: function (res) 
                    {
                        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                        // alert(result);
                        return result;
                    }
                });
            } 
  wx.ready(function() {
    // 在这里调用 API

        // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
          wx.checkJsApi({
                  jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
						'scanQRCode'
                  ],
                  success: function (res) {
//			alert(JSON.stringify(res));
                  }
                });


                 
          // 2. 分享接口
          // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
          wx.onMenuShareAppMessage({
                  title: '玩具总动员',
                  desc: '三里屯太古里《玩具总动员》 "房车嘉年华" 特饮 美食 赢好礼',
                  link: 'http://tips.citymsg.cn/toyStory/interface/',
                  imgUrl: 'http://tips.citymsg.cn/toyStory/logo.jpg',
                  trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
//			alert('用户点击发送给朋友');
                  },
                  success: function (res) {
//			alert('已分享');
                  },
                  cancel: function (res) {
//			alert('已取消');
                  },
                  fail: function (res) {
                        alert(JSON.stringify(res));
                  }
                });

　　　　//朋友圈
        wx.onMenuShareTimeline({
                  title: '玩具总动员',
                  desc: '三里屯太古里《玩具总动员》 "房车嘉年华" 特饮 美食 赢好礼',
                  link: 'http://tips.citymsg.cn/toyStory/interface/',
                  imgUrl: 'http://tips.citymsg.cn/toyStory/logo.jpg',
                  success: function (res) {
//                alert('已分享');
            },
            cancel: function (res) {
//                alert('已取消');
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });

  });

</script>
<script src="js/index.js"></script>







</html>