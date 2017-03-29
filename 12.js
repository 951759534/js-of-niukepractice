/*
*
*
*
*
*
* 请修复给定的 js 代码中，函数定义存在的问题
 输入例子:
 functions(true)

 输出例子:
 a
* function functions(flag) {
 if (flag) {
 function getValue() { return 'a'; }
 } else {
 function getValue() { return 'b'; }
 }

 return getValue();
 }
*
*
*
*
* */

function functions(flag) {
    if (flag) {
        var aa=function() { return 'a'; }
    } else {
        var aa=function() { return 'b'; }
    }

    return aa();
}
console.log(functions(true));