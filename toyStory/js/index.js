$(function(){
    function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
    }
    var openid=GetQueryString("openid");
    $(".startBtn").click(function(){
        getGift();
    })
    function getGift(){
        $.ajax({
            url: './php/gather.php?openid='+openid,
            async: false,
            type: 'post',
            success: function(data){
                var datas=eval('(' + data + ')');
                if(datas.isFirst==="1"){
                    $(".startIndex").hide()
                    $(".gameContent").show();
                }else if(datas.isFirst==="0"){
                    $(".startBtn").hide()
                    $(".gameRules").show();
                }
                if(datas["ID1"]==="1"){
                    $(".gameBox1").css({"background":"url(./images/pointC1.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox1 .collectBtn").css({"background":"url(./images/collected.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox1 .collectBtn").css({"pointer-events": "none" });
                }
                if(datas["ID2"]==="1"){
                    $(".gameBox2").css({"background":"url(./images/pointC2.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox2 .collectBtn").css({"background":"url(./images/collected.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox2 .collectBtn").css({"pointer-events": "none" });
                }
                if(datas["ID3"]==="1"){
                    $(".gameBox3").css({"background":"url(./images/pointC3.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox3 .collectBtn").css({"background":"url(./images/collected.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox3 .collectBtn").css({"pointer-events": "none" });
                }
                if(datas["ID4"]==="1"){
                    $(".gameBox4").css({"background":"url(./images/pointC4.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox4 .collectBtn").css({"background":"url(./images/collected.png) no-repeat","backgroundSize":"100% 100%"});
                    $(".gameBox4 .collectBtn").css({"pointer-events": "none" });
                }
                if(datas["ID1"]==="1"&&datas["ID2"]==="1"&&datas["ID3"]==="1"&&datas["ID4"]==="1"){
                    setTimeout(function(){
                        $(".getPrize").show();
                    },1000)
                }

            }
        })
    }
    $(".btnContains").click(function(){
        $(".startIndex").hide()
        $(".gameRules").hide();
        $(".gameContent").show();
    })
    $(".gameBox1 .collectBtn").click(function(){
        // $(this).css({"pointer-events": "none" });
        $(".readCollect").show();
    });
    $(".collectSuccess").click(function(){
        var DataId=$(".gameBox1 .collectBtn").attr("data-id");
        $(".readCollect").hide();
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                if(DataId==result.split("id=")[1]){
                    $.ajax({
                        url:'./php/numPost.php?openid='+openid+"&numId="+DataId,
                        async: false,
                        type: 'get',
                        success: function(data){
                            var datas=eval('(' + data + ')');
                            if(datas["gather"]==="1"){
                                setTimeout(function(){
                                    getGift()
                                },1000)
                            }else{
                                alert("收集失败")
                            }
                        }
                    })
                }else{
                    alert("扫描的二维码不正确")
                }
            }
        });
        
    })
    $(".gameBox2 .collectBtn").click(function(){
        var DataId=$(this).attr("data-id");
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                if(DataId==result.split("id=")[1]){
                    $.ajax({
                        url:'./php/numPost.php?openid='+openid+"&numId="+DataId,
                        async: false,
                        type: 'get',
                        success: function(data){
                            var datas=eval('(' + data + ')');
                            if(datas["gather"]==="1"){
                                setTimeout(function(){
                                    getGift()
                                },1000)
                            }else{
                                alert("收集失败")
                            }
                        }
                    })
                }else{
                    alert("扫描的二维码不正确")
                }
            }
        });
     })
    $(".gameBox3 .collectBtn").click(function(){
        var DataId=$(this).attr("data-id");
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                if(DataId==result.split("id=")[1]){
                    $.ajax({
                        url:'./php/numPost.php?openid='+openid+"&numId="+DataId,
                        async: false,
                        type: 'get',
                        success: function(data){
                            var datas=eval('(' + data + ')');
                            if(datas["gather"]==="1"){
                                setTimeout(function(){
                                    getGift()
                                },1000)
                            }else{
                                alert("收集失败")
                            }
                        }
                    })
                }else{
                    alert("扫描的二维码不正确")
                }
            }
        });
    })
    $(".gameBox4 .collectBtn").click(function(){
        var DataId=$(this).attr("data-id");
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                if(DataId==result.split("id=")[1]){
                    $.ajax({
                        url:'./php/numPost.php?openid='+openid+"&numId="+DataId,
                        async: false,
                        type: 'get',
                        success: function(data){
                            var datas=eval('(' + data + ')');
                            if(datas["gather"]==="1"){
                                setTimeout(function(){
                                    getGift()
                                },1000)
                            }else{
                                alert("收集失败")
                            }
                        }
                    })
                }else{
                    alert("扫描的二维码不正确")
                }
            }
        });
    })
    $(".prizeBtn").click(function(){
        window.location.replace("getPrize.html?openid="+openid)
    })
})