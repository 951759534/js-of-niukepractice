/**
 * Created by K550jk on 2017/5/24.
 */
/*
*
* */
/*
*
* 请实现一个函数，将一个字符串中的空格替换成“%20”。
* 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
* */
/*解题思路*/
function replaceSpace(str)
{
    let updateStr = str.replace(/\s/g,'%20');
    return updateStr
}