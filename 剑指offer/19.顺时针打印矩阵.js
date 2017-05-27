/**
 * Created by K550jk on 2017/5/27.
 */
/*
*
* 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
* 例如，如果输入如下矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
* 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
* */
/*
* 1  2  3  4
* 5  6  7  8
* 9  10 11 12
* 13 14 15 16
* */
/*
* 解题思路:   4*4矩阵有2环   3*6矩阵有二环   则取最小的  一环分为上右下左 就是列数减环数 右是行数减环数不过起始位置是第二列
* */
function printMatrix(matrix) {
    let printArr=[];
    let row=matrix.length;
    let col=matrix[0].length;
    let circle=Math.ceil(((row<col?row:col)-1)/2);
    for(let i=0;i<circle;i++){
        for(let j=i;j<col-i;j++){
            printArr.push(matrix[i][j])
        }
        for(let k=i+1;k<row-i;k++){
            printArr.push(matrix[k][col-i-1])
        }
        for(let m=col-i-2;(m>=i)&&((row-i-1)!==i);m--)
        {
            printArr.push(matrix[row-i-1][m])
        }
        for(let n=row-i-2;(n>i)&&(col-i-1!==i);n--)
        {
            printArr.push(matrix[n][i])
        }
    }
    return printArr
}