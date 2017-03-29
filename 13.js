/*
*
*
* 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
 输入例子:
 parse2Int('12'); parse2Int('12px'); parse2Int('0x12')

 输出例子:
 12; 12; 0
*
* */

function parse2Int(num) {
    var reg = /^\d+/;
    num = num.match(reg);
    return parseInt(num);
}