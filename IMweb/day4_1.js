/*
*
*将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
 1. rgb 中每个 , 后面的空格数量不固定
 2. 十六进制表达式使用六位小写字母
 3. 如果输入不符合 rgb 格式，返回原始输入
*
* */

function rgb2hex(sRGB) {
        var  reg = /(-?\d)+,?/g;
        var numArr = sRGB.match(reg);
        var flag = true
        if(numArr.length !== 3){
            return sRGB;
        }
        var rgb = "#";
        for(var i = 0;i<numArr.length;i++){
            numArr[i] = numArr[i].replace(/\,\s*/g,"");
            if(numArr[i] < 0 || numArr[i] > 255){
                flag = false;
                break
            }
            var num = parseInt(numArr[i]);
            num = (numArr[i]< 16 ?0 :"") + parseInt(numArr[i]).toString(16)

           rgb += num;
        }
        if(!flag){
            return sRGB;
        }else{
            return rgb;

        }
}
console.log(rgb2hex('rgb(-1, 255, 255)'))