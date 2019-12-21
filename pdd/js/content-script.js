chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "copy") {
            var ctrl = $("#sb_form_q");
            // 获取页面内容
            // console.log(document)
            // 获取脚本节点
            var obj  = $("body")["0"].childNodes[15].text
            // 分割字符串获取rawData
            var str = obj.split("window.rawData= ")
            var rawDataString = str[1]
            // 去除字符串空格
            var rawDataString = rawDataString.replace(/\s*/g,"");
            // 字符串转json
            var rawData = eval('(' + rawDataString.substring(0,rawDataString.length - 1) + ')')
            console.log(rawData)
            if (str[1].length > 0) {
                if (sendResponse) sendResponse(rawData);
            } else {
                alert("获取商品信息错误");
            }
        } else if (request.action === "paste") {
            var ctrl = $("#input");
            if (request.data != undefined) {
                console.log(request.data)
                console.log(ctrl)
                // alert("成功")
                //window.rawData = request.data
                ctrl.val("dfasdfasdf");
                sendResponse("OK");
            }else{
                alert("粘贴失败");
            }
            // if (ctrl.length > 0) {
            //     ctrl.val(request.data);
            //     sendResponse("OK");
            // } else {
            //     alert("No data");
            // }
        }

    }
);