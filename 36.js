/*
*
*
*
*
*
*
*
* 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
 输入例子:
 containsNumber('abc123')

 输出例子:
 true
*
*
*
*
* */

function containsNumber(str) {
    var reg = /\d+/;
    return reg.test(str);
}
console.log( containsNumber('abc123'));