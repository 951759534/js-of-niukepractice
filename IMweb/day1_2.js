
/*
*
*
* 计算给定数组 arr 中所有元素的总和
 输入描述:
 数组中的元素均为 Number 类型
*
* */

function sum(arr) {
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}