/*
*
*   封装函数 f，使 f 的 this 指向指定的对象
* */

function bindThis(f, oTarget) {
        return f.bind(oTarget);
}

function f(){
    console.log(this.aa);
}
var obj = {
    aa:"aa"
};
bindThis(f,obj)()