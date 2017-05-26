/**
 * Created by K550jk on 2017/5/26.
 */
/*
*
*
* 输入一个链表，输出该链表中倒数第k个结点。
*
* */

/*function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function FindKthToTail(head, k){
    let reverse = [];
    while(head){
        reverse.unshift(head);  //保存链表中的节点
        head = head.next;
    }
    return reverse[k-1];
}
