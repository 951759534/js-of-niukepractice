/*
*
*
* 按所给的时间格式输出指定的时间
 格式说明
 对于 2014.09.05 13:14:20
 yyyy: 年份，2014
 yy: 年份，14
 MM: 月份，补满两位，09
 M: 月份, 9
 dd: 日期，补满两位，05
 d: 日期, 5
 HH: 24制小时，补满两位，13
 H: 24制小时，13
 hh: 12制小时，补满两位，01
 h: 12制小时，1
 mm: 分钟，补满两位，14
 m: 分钟，14
 ss: 秒，补满两位，20
 s: 秒，20
 w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
*
*
*
* */
function formatDate(oDate, sFormation) {
    var weeks = ['日', '一', '二', '三', '四', '五', '六'];
    var o = {
        'M+' : oDate.getMonth() + 1,
        'd+' : oDate.getDate(),
        'h+' : oDate.getHours(),
        'm+' : oDate.getMinutes(),
        's+' : oDate.getSeconds(),
        'w' : weeks[oDate.getDay()]
    };
    if(/(y+)/.test(sFormation)){
        sFormation = sFormation.replace(RegExp.$1,
            (oDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for(let k in o){
        var reg = new RegExp('('+k+')','i')
        if(reg.test(sFormation)){
            var str = o[k] + '';
            if(reg.exec(sFormation).length>1){
                sFormation = sFormation.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : addZero(str))
            }
        }
    }
    return sFormation;
}
function addZero(str){
    return ('00' + str).substr(str.length);
}

console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'));