/*
* 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
 输入例子:
 square([1, 2])

 输出例子:
 [1, 4]
*
*
* */
    function square(arr) {
         var newArr = [];
         newArr = newArr.concat(arr);
         for(var i = 0; i< arr.length ; i++){
             newArr[i] *= newArr[i];
         }
         return newArr;
    }
    console.log(square([1, 2]));