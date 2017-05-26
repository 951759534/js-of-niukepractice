/**
 * Created by K550jk on 2017/5/26.
 */
/*
*
* 操作给定的二叉树，将其变换为源二叉树的镜像。
*
     输入描述:
         二叉树的镜像定义：源二叉树
         8
         /  \
         6   10
         / \  / \
         5  7 9 11
         镜像二叉树
         8
         /  \
         10   6
         / \  / \
         11 9 7  5
*
* */
/*
* 解题思路  利用递归 将左右子节点交换
* */
function Mirror(root){
    if(root === null){
        return;
    }
    if(root.left ===  null && root.right === null){
        return;
    }
    root.left = [root.right,root.right = root.left][0];
    if(root.left){
        Mirror(root.left);
    }
    if(root.right){
        Mirror(root.right);
    }
}