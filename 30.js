/*
*
*
*
*
* 给定二进制字符串，将其换算成对应的十进制数字
 输入例子:
 base10('11000000')

 输出例子:
 192
*
*
*
*
* */
        function base10(str) {
              return parseInt(str,2);
        }
        console.log(base10('11000000'));