/*
*
* 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
*
* */

function curtail(arr) {
    var newArr = [].concat(arr);
    newArr.shift();
    return newArr;
}
