/*
*
* 题目描述
 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
 输入例子:
 truncate([1, 2)

 输出例子:
 [1]
*
*
* */
function truncate(arr){
    var newArr = [];
    newArr = newArr.concat(arr);
    newArr.pop();
    return newArr;
}
var arr = [1, 2];
console.log(arr);
console.log(truncate(arr));