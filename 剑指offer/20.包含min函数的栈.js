/**
 * Created by K550jk on 2017/5/27.
 */
/*
*
*
* 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数。
*
* */

/*
*
* 解题思路: 栈是先进后出
* */

let stack = [];
function push(node){
    stack.push(node);
}
function pop(){
    stack.pop();
    return stack;
}

function top(){
    return stack[0]
}
function min(){
    let min = stack[0];
    for(let i = 1;i < stack.length ; i++){
        if(stack[i] < min){
            min = stack[i]
        }
    }
    return min;
}