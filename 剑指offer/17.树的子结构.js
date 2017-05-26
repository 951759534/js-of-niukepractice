/**
 * Created by K550jk on 2017/5/26.
 */
/*
*
*
* 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
*
* */
/*
* 解题思路: 判断B是否为A的子结构   递归查询  新建一个方法 判断子节点的树是否相等
*
* */
    function HasSubtree(pRoot1, pRoot2) {
        if (pRoot1 === null || pRoot2 === null){
            return false;
        }
        return  isSubTree(pRoot1,pRoot2) ||
            HasSubtree(pRoot1.left, pRoot2)||
            HasSubtree(pRoot1.right, pRoot2);
    }
    function isSubTree(p,q) {
        if (q === null){
            return true;
        }
        if (p === null) {
            return false;
        }
        if (p.val === q.val) {
            return isSubTree(p.left,q.left) && isSubTree(p.right,q.right);
        }
    }
