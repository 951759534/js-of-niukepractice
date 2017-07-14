/*
*
*
* 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等
*
* */
function fibonacci(n) {
    var arr = [1,1];
    for(var i = 1;i <=n;i++){
        arr.push(arr[i]+arr[i-1]);
    }
    return arr[n-1];
}
