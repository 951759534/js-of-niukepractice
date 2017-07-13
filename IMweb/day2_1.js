/*
*
*
* 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
*
* */

function append(arr, item) {
        var newArr = [].concat(arr);
        return [...newArr,item];
}