/**
 * Created by K550jk on 2017/5/24.
 */
/*在一个二维数组中，
每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个函数，
输入这样的一个二维数组和一个整数，
判断数组中是否含有该整数。*/
/*解题思路 从左下开始找 算法复杂度 m+n*/
function Find(target, array) {
    let flag=false;
    let col =  array.length-1;
    let row =  0;
    while(col>=0&&row<=array[col].length-1){
        if(target<array[col][row]){
            col--;
        }else if(target > array[col][row]){
            row++;
        }else{
            flag=true;
            break;
        }
    }
    return flag;
}