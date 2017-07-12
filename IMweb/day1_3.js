/*
*
* 移除数组 arr 中的所有值与 item 相等的元素。
* 不要直接修改数组 arr，结果返回新的数组
*
*
* */

function remove(arr, item) {
        var newArr = [].concat(arr);
        for(var i = 0; i < newArr.length; i++){
            if(item === newArr[i]){
                newArr.splice(i,1);
                i--;
            }
        }
        return newArr;
}
console.log(remove([1, 2, 3, 4, 2], 2))