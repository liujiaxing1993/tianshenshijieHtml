/**
 * 获取指定范围的随机数
 * @param {*开始} start
 * @param {*技术} end
 */
function Random(start, end) {
    let num = (Math.random() * (end - start) + start).toString();
    return parseInt(num, 10);
}


/**
 * 添加一个弹幕
 * @param {*内容} text
 */
function SetBarrage(text) {
    // 创建dom并添加class 和各种数据
    var barrage = document.createElement('span');
    barrage.className = "content-barrage-single";
    barrage.innerText = text;
    document.getElementById('content-barrage').appendChild(barrage);
    // 创建弹幕从右到左面的10-15的随机秒数
    const randomTime = Random(10, 15);
    // 创建离上方的距离  百分比 现在是半屏
    const randomTop = Random(0, 50);
    barrage.style.top = randomTop + "%";
    barrage.style.animation = "barrage " + randomTime + "s linear";
    // 添加一个定时器 在运行完成之后删除这个DOM
    setTimeout(() => {
        document.getElementById('content-barrage').removeChild(barrage)
    }, randomTime * 1000);
}

// 绑定发送弹幕按钮
//document.getElementById("send").onclick = function (e) {
//    SetBarrage(document.getElementById("send_text").value);
//}

function downJump() {
    var urlJ = urlJump();
    console.log(urlJ);
    if (isIos() || isAndroid()) {
        location.href = urlJ;
    } else {
        console.log(urlJ);
        alert("請使用手機訪問此網址");
    }
}

// 判断安卓
function isAndroid() {
    var u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
        return true;
    }
    return false;
}
// 判断设备为 ios
function isIos() {
    var u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
        return true;
    }
    return false;
}
function urlJump() {
    if (isIos()) {
        alert("蘋果應用正在審核中，敬請期待");
        return "#";
        //return "https://apps.apple.com/hk/app/id1504376912?l=zh&ls=1";
    }
    else if (isAndroid()) return "https://play.google.com/store/apps/details?id=com.asiaxokj.tssj";
    else return "天神世界，玩著開心，躺著賺錢，恭喜你註冊成功，馬上開啟躺賺人生咯";
}

// 设置cookie   
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ";expires=" + exdate.toGMTString();
    path = "/";
}

// 读取cookie   
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1)
                c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
