/*
*
* 统计数组 arr 中值等于 item 的元素出现的次数
 输入例子:
 count([1, 2, 6, 6, 3, 6, 3], 6)

 输出例子:
 3
*
*
* */
    function count(arr, item) {
            var count = 0;
            for(var i = 0; i< arr.length;i++){
                if(arr[i] == item){
                    count ++;
                }
            }
            return count;
    }
    console.log(count([1, 2, 6, 6, 3, 6, 3], 6));