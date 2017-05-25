/**
 * Created by K550jk on 2017/5/25.
 */
/*
*
* 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
*
* */
/*
* 解题思路: 假设跳1级台阶 有一种跳法  跳2级台阶 有两种跳法  跳3级台阶 有三种跳法 跳4级台阶 有五种跳法 跳5级台阶 有八种跳法 等等...
* */
function jumpFloor(number){
    let jumpArr = [1,2];
    for(let n = 2 ; n < number ; n++){
        jumpArr.push((jumpArr[jumpArr.length-1]+jumpArr[jumpArr.length - 2]));
    }
    return jumpArr[number-1];
}
console.log(jumpFloor(4));