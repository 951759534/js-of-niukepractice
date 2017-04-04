/*
*
*
*
*
*
*题目描述
 将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
 输入例子:
 alterContext(function(){return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
 输出例子:
 Yo, Rebecca!
*
*
*
*
*
*
*
*
* */
function alterContext(fn, obj) {
           return fn.apply(obj);
}