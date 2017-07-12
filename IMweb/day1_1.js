
/*
*
* 找出元素 item 在给定数组 arr 中的位置
 输出描述:
 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
*
* */

function indexOf(arr, item) {
    var index = -1;
    for(var i = 0;i<arr.length;i++){
        if(arr[i] === item){
            index = i;
        }
    }
    return index;
}