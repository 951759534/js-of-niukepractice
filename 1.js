/*
* 题目描述
 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
 输入例子:
 append([1, 2],  10)

 输出例子:
 [1, 2, 10]
*
* */

function append(arr, item){
    var newArr = [];
    newArr = newArr.concat(arr);
    newArr.push(item);
    return newArr;
}
var arr = [1, 2];
console.log(arr);
console.log(append(arr,10));
