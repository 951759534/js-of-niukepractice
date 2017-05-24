/**
 * Created by K550jk on 2017/5/24.
 */
/*
* 重建二叉树
* */
/*
* 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
* 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
* 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
* 则重建二叉树并返回。
* */
/*
* 解题思路 利用前序遍历和中序遍历的特性 前序遍历的第一个是rootNode
* 利用分而治之的思想 找到中序的rootNode的位置记为mid  mid左边的为树的左侧 右边为树的右侧
* 利用数组的slice方法
* 利用递归思想
* */
 function TreeNode(x) {
     this.val = x;
     this.left = null;
     this.right = null;
 }
function reConstructBinaryTree(pre, vin){
    if(!pre||pre.length===0){
        return;
    }
    let tree = new TreeNode(pre[0]);
    for(let i = 0; i < pre.length;i++){
        if(vin[i] === pre[0]){      /*找到中序遍历的rootNode*/
            tree.left = reConstructBinaryTree(pre.slice(1,i+1),vin.slice(0,i));
            tree.right = reConstructBinaryTree(pre.slice(i+1),vin.slice(i+1));
        }
    }
    return tree;
}
console.log(reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]));