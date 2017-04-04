/*
*
*
*
*
*
*
*
*给定字符串 str，检查其是否以元音字母结尾
 1、元音字母包括 a，e，i，o，u，以及对应的大写
 2、包含返回 true，否则返回 false
 输入例子:
 endsWithVowel('gorilla')

 输出例子:
 true
*
*
*
*
*
* */
function endsWithVowel(str){
    return /[a-e-i-o-u]$/i.test(str);
}