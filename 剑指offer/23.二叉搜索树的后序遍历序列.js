/**
 * Created by K550jk on 2017/5/27.
 */
/*
*
*输入一个整数数组，
* 判断该数组是不是某二叉搜索树的后序遍历的结果。
* 如果是则输出Yes,否则输出No。
* 假设输入的数组的任意两个数字都互不相同。
*
*
* */
function VerifySquenceOfBST(sequence){
    let flag = false;
    if(sequence.length===0){
        return flag;
    }
    let length=sequence.length;
    let i = 0;
    while(length--){
       let r=sequence[length];
        while(sequence[i]<=r&&i<length){
            i++;
        }
        while((sequence[i]>r&&i<length)){
            i++;
        }
        if(i<length){
            return flag;
        }
    }
    return !flag;
}
