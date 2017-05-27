/**
 * Created by K550jk on 2017/5/27.
 */
/*
*
* 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
*
* */
/*
*
* 解题思路:  从左至右打印  借助一个数组
* */
function PrintFromTopToBottom(root){
    if(!root) return;
    let printArr = [root.val];
    let Arr = [root];
    while(Arr.length) {
        root=Arr.shift();
        if(root.left){
            printArr.push(root.left.val);
            Arr.push(root.left);
        }
        if(root.right){
            printArr.push(root.right.val);
            Arr.push(root.right);
        }
    }
    return printArr;
}