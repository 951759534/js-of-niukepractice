/*
*
* 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
 输入例子:
 findAllOccurrences('abcdefabc'.split(''), 'a').sort()

 输出例子:
 [0, 6]
*
*
* */
        function findAllOccurrences(arr, target) {
                var newArr = [];
                for(var i=0; i<arr.length;i++){
                    if(arr[i] == target){
                        newArr.push(i);
                    }
                }
                return newArr;
        }
        console.log(findAllOccurrences('abcdefabc'.split(''), 'a').sort());