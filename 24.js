/*
*
*
*
*实现函数 partialUsingArguments，调用之后满足如下条件：
 1、返回一个函数 result
 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
 输入例子:
 var a = 1; var b = 2; var c = 3; var d = 4;var test = function (first, second, third, forth) {return first + second + third + forth;};
 partialUsingArguments(test, a, b)(c, d);

 输出例子:
 10
*
*
*
* */
function partialUsingArguments(fn) {
    var arr = [];
    for( x in arguments){
        arr.push(arguments[x]);
    }
    arr.shift();
        var result = function () {
            for( x in arguments){
                arr.push(arguments[x]);
            }
            return fn.apply(fn,arr);
        };
    return result;
}
var a = 1; var b = 2; var c = 3; var d = 4;
var test = function (first, second, third, forth) {return first + second + third + forth;};
console.log(partialUsingArguments(test, a, b)(c, d));