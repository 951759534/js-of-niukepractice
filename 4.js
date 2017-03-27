/*
*  删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
 输入例子:
 curtail([1, 2)

 输出例子:
 [2]
*
*
* */
        function curtail(arr) {
                var newArr = [];
                newArr = newArr.concat(arr);
                newArr.shift();
                return newArr;
        }
        var arr = [1, 2];
        console.log(arr);
        console.log(curtail(arr));