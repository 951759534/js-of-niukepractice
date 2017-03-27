/*
* 找出数组 arr 中重复出现过的元素
 输入例子:
 duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort()

 输出例子:
 [1, 3, 4]
*
*
* */
    function duplicates(arr) {
            var newArr = [];
            var length = arr.length;
        for(var i = 0; i<length;i++){
            var item =  arr.pop();
            if(arr.indexOf(item) != -1 && newArr.indexOf(item)){
                newArr.push(item);
            }
        }
        return newArr;
    }
    console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]).sort());