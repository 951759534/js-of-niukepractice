/*
*
*
*
*
*
*给定字符串 str，检查其是否符合如下格式
 1、XXX-XXX-XXXX
 2、其中 X 为 Number 类型
 输入例子:
 matchesPattern('800-555-1212')

 输出例子:
 true
*
*
*
*
*
* */
function matchesPattern(str) {
        var reg = /^[\d]{3}-[\d]{3}-[\d]{4}$/;
        return reg.test(str);
}
    console.log(matchesPattern('800-555-1212'));