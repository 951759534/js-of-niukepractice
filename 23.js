/*
*
*实现函数 callIt，调用之后满足如下条件
 1、返回的结果为调用 fn 之后的结果
 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 输入例子:
 var a = 1; var b = 2; var test = function (first, second) { return first === a && second === b;}; callIt(test, a, b);

 输出例子:
 true
*
*
* */
function callIt(fn) {
        var arr = [];
            for( x in arguments){
                arr.push(arguments[x]);
            }
            arr.shift();
        return fn.apply(fn,arr);
}

                var a = 1;
                var b = 2;
                var test = function (first, second) {
                    return first === a && second === b;
                };
                console.log(callIt(test, a, b));