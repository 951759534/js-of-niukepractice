/*
*
* 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
 输入例子:
 prepend([1, 2], 10)

 输出例子:
 [10, 1, 2]
*
* */
function prepend(arr, item) {
        var newArr = [item];
        newArr = newArr.concat(arr);
        return newArr;
}

var arr = [1, 2];
console.log(arr);
console.log(prepend(arr, 10));