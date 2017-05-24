/**
 * Created by K550jk on 2017/5/24.
 */
/*
     把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
     输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
     例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
     NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
* */
/*
*
* 利用js数组的sort排序特性
* 第一个为数组的最小值
* */
function minNumberInRotateArray(rotateArray){
    if(rotateArray.length===0){
        return 0;
    }
    rotateArray.sort(function(){
            return Math.random() - 0.5;
    });
    return rotateArray;
}
console.log(minNumberInRotateArray([3,4,5,1,2]));