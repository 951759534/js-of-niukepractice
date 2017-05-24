/**
 * Created by K550jk on 2017/5/24.
 */
/*
*
* 从尾到头打印链表
* */
/*
* 输入一个链表，从尾到头打印链表每个节点的值。
*
* */
/*
* 解题思路 利用js的数组特性
* */
function printListFromTailToHead(head){
    if(!head){
        return [];
    };
    let reverse = [];
    while(head.next !== null){
        reverse.unshift(head.val);
        head = head.next;
    }
    reverse.unshift(head.val);
    return reverse;
}