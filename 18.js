/*
*
* 将函数 fn 的执行上下文改为 obj 对象
 输入例子:
 speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'})

 输出例子:
 Hello, Rebecca!!!
*
*
*
*
* */
function speak(fn, obj) {
    var str =  fn.call(obj);
    return str;
}
