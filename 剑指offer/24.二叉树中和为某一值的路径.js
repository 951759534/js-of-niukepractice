/**
 * Created by K550jk on 2017/5/27.
 */
/*
*
* 输入一颗二叉树和一个整数，
* 打印出二叉树中结点值的和为输入整数的所有路径。
* 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径
*
*
* */
let res, path;
function FindPath(root, expectNumber) {
    res = [];
    path = [];
    if(root === null) return [];
    cal(root, expectNumber);
    return path;
}
function cal(node, exn){
    res.push(node.val);
    if(node.val === exn && node.left === null && node.right === null){
        path.push(res.slice());
    }else{
        if(node.left!==null) cal(node.left, exn - node.val);
        if(node.right!==null) cal(node.right, exn - node.val);
    }
    res.pop();
}