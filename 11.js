/*
*
* 给定的 js 代码中存在全局变量，请修复
*
*
* function globals() {
 myObject = {
 name : 'Jory'
 };

 return myObject;
 }
*
* */

function globals() {
   var myObject = {
        name : 'Jory'
    };

    return myObject;
}