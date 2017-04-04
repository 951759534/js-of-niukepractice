/*
*
*
*
*
* 给定字符串 str，检查其是否包含 连续3个数字
 1、如果包含，返回最新出现的 3 个数字的字符串
 2、如果不包含，返回 false
 输入例子:
 captureThreeNumbers('9876543')

 输出例子:
 987
*
*
*
*
*
*
* */
function captureThreeNumbers(str) {
       var arr = str.match(/\d{3}/,str);
       return arr?arr[0]:false;
}
console.log(captureThreeNumbers('98'));