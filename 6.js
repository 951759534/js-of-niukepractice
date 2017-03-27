/*
*
* 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
 输入例子:
 insert([1, 2, 3, 4, 5, 6], 'z', 2)

 输出例子:
 [1, 2, 'z', 3, 4, 5, 6]
*
* */

    function insert(arr, item, index) {
            var newArr = [];
            newArr = newArr.concat(arr);
            newArr.splice(index,0,item);
            return newArr;
    }
    var arr= [1, 2, 3, 4, 5, 6];
    console.log(arr);
    console.log(insert(arr, 'z', 2));