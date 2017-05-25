/**
 * Created by K550jk on 2017/5/25.
 */
/*
*
* 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
 n<=39
*
* */
/*
*
*解题思路: 斐波那契数列 利用 数组存储斐波那契数列的每个值  F(n) = F(n-1) + F(n-2)
* */
function Fibonacci(n){
    if(n<=1){
        return n;
    }
    let FiboArr = [0,1];
    for(let i = 2; i<=n; i++){
        FiboArr[i] = FiboArr[i-1] + FiboArr[i - 2];
    }
    return FiboArr[n];
}