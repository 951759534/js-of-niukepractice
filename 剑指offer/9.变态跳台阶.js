/**
 * Created by K550jk on 2017/5/25.
 */
/*
*
* 一只青蛙一次可以跳上1级台阶，
* 也可以跳上2级……它也可以跳上n级。
* 求该青蛙跳上一个n级的台阶总共有多少种跳法。
*
* */
/*
* 解题思路: 第1次是一种  第2次是两种   第3次是四种 第4次是 十六种  发现规律  是 2的n-1次方
*
* */
function jumpFloorII(number){
    if(number<0){
        return;
    }
    return Math.pow(2,number-1)
}