/*
*
*
*
* 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
 1、返回数组，格式为 key: value
 2、结果数组不要求顺序
 输入例子:
 var C = function() {this.foo = 'bar'; this.baz = 'bim';}; C.prototype.bop = 'bip'; iterate(new C());

 输出例子:
 ["foo: bar", "baz: bim"]
*
*
*
* */

function iterate(obj) {
        var newArr = [];;
        for( var x in obj){
            if(!(x in obj.__proto__)){
                var str = x + ": " + obj[x];
                newArr.push(str);
            }

        }
        return newArr;
}
var C = function() {this.foo = 'bar'; this.baz = 'bim';}; C.prototype.bop = 'bip';
console.log(iterate(new C()));