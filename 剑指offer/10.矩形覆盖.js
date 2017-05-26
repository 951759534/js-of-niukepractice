/**
 * Created by K550jk on 2017/5/25.
 */
/*
*
* 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
* 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
*
* */
/*
* 解题思路: 覆盖2*1的矩形 有一种 覆盖2*2的矩形 有两种 覆盖2*3的 有三种  覆盖2*4的 有五种 覆盖2*5的 有八种 发现规律
* */
function rectCover(number){
    if(number <= 0){
        return 0;
    }
    let coverMethods = [1,2];
    for(let i = 2; i <= number ; i++){
        coverMethods.push(coverMethods[coverMethods.length - 1] + coverMethods [coverMethods.length - 2]);
    }
    return coverMethods[number - 1];
}