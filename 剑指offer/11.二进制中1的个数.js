/**
 * Created by K550jk on 2017/5/25.
 */
/*
*
* 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
*
* */
function NumberOf1(n) {
    let binaryNum
    if(n === 0){
        return 0;
    }else if(n > 0){
         binaryNum = n.toString(2);
    }else if(n < 0){
         binaryNum = (n>>>0).toString(2);     //将负数转换为补码表示方法
    }
    return binaryNum.match(/1/g).length;
}