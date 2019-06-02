$(function(){
    function GetQueryString(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var sloe=GetQueryString("openid");
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
         datetime = year + seperator1 + month + seperator1 + strDate;
        return datetime;
    }
    getNowFormatDate()
    function generateQRCode(rendermethod, picwidth, picheight, url) {  
        $("#qrcode").qrcode({   
            render: rendermethod, // 渲染方式有table方式（IE兼容）和canvas方式  
            width: picwidth, //宽度   
            height:picheight, //高度   
            text: utf16to8(url), //内容   
            typeNumber:-1,//计算模式  
            correctLevel:2,//二维码纠错级别  
            background:"#FFCC00",//背景颜色  
            foreground:"#333366"  //二维码颜色  
      
        });  
    } 
    init(); 
    function init() {
        generateQRCode("canvas",80, 80, "http://tips.citymsg.cn/toyStory/duijiang.html?openid="+sloe+"&datetime="+datetime);  
    }
    function utf16to8(str) {  
        var out, i, len, c;  
        out = "";  
        len = str.length;  
        for (i = 0; i < len; i++) {  
            c = str.charCodeAt(i);  
            if ((c >= 0x0001) && (c <= 0x007F)) {  
                out += str.charAt(i);  
            } else if (c > 0x07FF) {  
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));  
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
            } else {  
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));  
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));  
            }  
        }  
        return out;  
    }
    $.ajax({
        url: './php/getGift.php?openid='+sloe,
        async: false,
        type: 'post',
        success: function(data){
            var datas=eval('(' + data + ')'); 
            if(datas["giftID"]==="-1"){
                $(".noPrize").show();
                $(".hasPrize").show();
            }else if(datas["giftID"]==="1"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/T恤-1.jpg")
            }else if(datas["giftID"]==="2"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/笔记本-2.jpg")
            }else if(datas["giftID"]==="3"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/徽章-3.jpg")
            }else if(datas["giftID"]==="4"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/旅行套装-4.jpg")
            }else if(datas["giftID"]==="5"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/帽子-5.jpg")
            }else if(datas["giftID"]==="6"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/三里屯礼盒-6.jpg")
            }else if(datas["giftID"]==="7"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/书包-7.jpg")
            }else if(datas["giftID"]==="8"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/贴纸-8.jpg")
            }else if(datas["giftID"]==="9"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/玩具球套装-9.jpg")
            }else if(datas["giftID"]==="10"){
                $(".prizeSuccess").show();
                $(".giftbox img").attr("src","./images/文具套装-10.jpg")
            }

        }
    })    
})