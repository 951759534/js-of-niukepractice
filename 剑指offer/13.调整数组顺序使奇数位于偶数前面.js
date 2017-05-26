/**
 * Created by K550jk on 2017/5/26.
 */
/*
* 输入一个整数数组，
* 实现一个函数来调整该数组中数字的顺序，
* 使得所有的奇数位于数组的前半部分，
* 所有的偶数位于位于数组的后半部分，
* 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
* */

/*
*        解题思路:分而治之思想
* */

        function reOrderArray(array){
            let prevArr = [];
            let nextArr = [];
            for(let i = 0; i < array.length ; i++){
                if(array[i]%2 !== 0){
                    prevArr.push(array[i]);
                }else{
                    nextArr.push(array[i]);
                }
            }
            return prevArr.concat(nextArr)
        }
        console.log(reOrderArray([9,3,2,1,4,6,8]))