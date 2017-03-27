/*
*
* 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
 输入例子:
 concat([1, 2], ['a', 'b', 'c', 1])

 输出例子:
 [1, 2, 'a', 'b', 'c', 1]
* */
function concat(arr1, arr2){
    var newArr = [];
    newArr = newArr.concat(arr1,arr2);
    return newArr;
}
var arr1 = [1, 2],arr2= ['a', 'b', 'c', 1];
console.log(arr1,arr2);
console.log(concat(arr1, arr2));