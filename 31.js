/*
*
*
*
*
*
* 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
 输入例子:
 convertToBinary(65)

 输出例子:
 01000001
*
*
*
*
*
* */
function convertToBinary(num) {
            var newNum = num.toString(2);
                while (newNum.length < 8){
                    newNum = "0"+newNum;
                }
            return newNum;
}
console.log( convertToBinary(65));