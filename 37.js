/*
*
*
*
*
* 题目描述
 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false
 输入例子:
 containsRepeatingLetter('rattler')

 输出例子:
 true
*
*
*
*
* */
function containsRepeatingLetter(str){
  /*  var bflag = false;
    var reg = /[a-zA-Z]/;
    for(var i = 0; i<str.length;i++){
        if(reg.text(str.charAt(i))&&str.charAt(i)==str.charAt(i+1)){
            bflag = true;
            break;
        }
    }
    return bflag;*/
    return /([a-zA-Z])\1+/.test(str);
}