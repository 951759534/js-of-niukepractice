/**
 * Created by K550jk on 2017/4/16.
 */
/*
* 1  W3C标准盒模型盒子的内容仅由width，height决定 不包含边框内外边距
* 2 IE盒模型盒子宽高不仅包含元素宽高 而且包含元素边框及内外边距
*
*
*
*querySelectAll 返回的是不变的的结点列表
* getElementBy系列返回的是动态结点列表
*
*
*
*HTMLCollection是元素集合 而nodelist是节点点列表 包含元素 文本节点 注释等等
*
*
*静态作用域是产生闭包的关键
*
*
*判断基本类型适用于typeof
*
* Object.prototype.toString.call();
*
*
* */
/*function Parent(){

}
function Child(){

}
Child.prototype = new Parent();
Child.prototype.constructor = Child();
var child =  new Child();
console.log(child instanceof Object);
console.log(child instanceof Parent);*/

function Person(){
    if(this.constructor == arguments.callee){
        console.log('new 调用');
    }else{
        console.log('普通调用');
    }
}
let p1 = new Person();
let p2 = Person();