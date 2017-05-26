/**
 * Created by K550jk on 2017/5/26.
 */
/*
*
*
* 输入两个单调递增的链表，
* 输出两个链表合成后的链表，
* 当然我们需要合成后的链表满足单调不减规则。
*
*
* */
/*function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
/*
*
* 解题思路:   合成列表  比较当前节点哪个值大  将新的链表的next指向当前  即满足单调规则
* */
function merge(pHead1, pHead2){
    if(pHead1 === null || pHead2 === null) {
        return pHead1 || pHead2;
    }
    let merge = null;
    if(pHead1.val <= pHead2.val) {
        merge = pHead1;
        pHead1 = pHead1.next;
    }else {
        merge = pHead2;
        pHead2 = pHead2.next;
    }
    let current = merge;
    while (pHead1 !== null && pHead2 !== null) {
        if(pHead1.val <= pHead2.val) {
            current.next = pHead1;
            current = current.next;
            pHead1 = pHead1.next;
        }else {
            current.next = pHead2;
            current = current.next;
            pHead2 = pHead2.next;
        }
    }
    if(pHead1 !== null) {    //结束循环后出现未合并完的情况 将指针指向pHead1
        current.next = pHead1;
    }
    if(pHead2 !== null) {
        current.next = pHead2;
    }
    return merge;
}