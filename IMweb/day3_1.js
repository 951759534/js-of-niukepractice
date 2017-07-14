/*
*
* 找出数组 arr 中重复出现过的元素
*
* */
function duplicates(arr) {
    var arrObj = {};
    var newArrObj = {};
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(!arrObj[arr[i]]){
            arrObj[arr[i]] = true;
        }else{
            if(!newArrObj[arr[i]]){
                newArr.push(arr[i]);
                newArrObj[arr[i]] = true;
            }
        }
    }
    return newArr;
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))