/**
 * Created by K550jk on 2017/5/26.
 */
/*
*
* 输入一个链表，反转链表后，输出链表的所有元素。
*
* */
/*
* 解题思路: 翻转链表  1->2->3->4->5  转换为5->4->3->2->1      该表链表的指向
* */
/*function ListNode(x){
 this.val = x;
 this.next = null;
 }*/
function ReverseList(pHead) {
   if(pHead === null) {
       return null;
   }
   let pre = null;
   let next = null;
   while(pHead !== null){
       next = pHead.next;  //保存下一链表
       pHead.next = pre;   //下一个链表指向 前一个节点
       pre = pHead;   //  保存翻转后的链表
       pHead = next;   // 指针下移
   }
   return pre;
}