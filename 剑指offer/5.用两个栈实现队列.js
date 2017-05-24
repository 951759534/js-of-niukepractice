/**
 * Created by K550jk on 2017/5/24.
 */
/*
*
* 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
*
* */
/*
* 队列 先进先出 对应数组中的push 和 shift
* */
let queue = [];
function push(node){
    queue.push(node)
}
function pop(){
    return queue.shift();
}