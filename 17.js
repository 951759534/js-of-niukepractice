/*
*
* 题目描述
 将数组 arr 中的元素作为调用函数 fn 的参数
 输入例子:
 argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!'])

 输出例子:
 Hello, Ellie!
*
*
*
*
*
* */

            function argsAsArray(fn, arr) {
                    var str = fn.apply(fn,arr);
                    return str;
            }