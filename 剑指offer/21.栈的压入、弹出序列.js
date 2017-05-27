/**
 * Created by K550jk on 2017/5/27.
 */
/*
*
* 输入两个整数序列，第一个序列表示栈的压入顺序，
* 请判断第二个序列是否为该栈的弹出顺序。
* 假设压入栈的所有数字均不相等。
* 例如序列1,2,3,4,5是某栈的压入顺序，
* 序列5,4,3,2,1是该压栈序列对应的一个弹出序列，
* 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
*
* */

function IsPopOrder(pushV, popV){
    if(pushV.length==0||popV.length==0) return false;
    let flagArr = [];

    for(let i = 0,j = 0;i<pushV.length;i++){
        flagArr.push(pushV[i]);
        while(j<popV.length&&flagArr[flagArr.length-1]===popV[j]){  //判断最后一个是弹出的第一个
            flagArr.pop();
            j++;
        }
    }
    return flagArr.length ===0 ? true : false;
}