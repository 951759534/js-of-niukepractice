/*
*
*
*
*
* 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
 输入例子:
 multiply(3, 0.0001)

 输出例子:
 0.0003
*
*
*
* */
function multiply(a, b) {
    var reg = /^[\d]+\./;
    var length = Math.max(a.toString().replace(reg,"").length,b.toString().replace(reg,"").length);
    return (a*b).toFixed(length);
}
console.log(multiply(3, 0.0001));