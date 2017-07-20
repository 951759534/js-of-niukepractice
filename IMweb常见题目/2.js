/**
 * Created by K550jk on 2017/7/20.
 */
function createUniqueRandomArray(n){
    var arr = [];
    var obj = {};
    for(var i = 0;i<100;i++){
            var num = Math.random()*n;
            if(!obj[num]){
                obj[num] = true;
                arr.push(num);
            }else{
                i--;
            }
    }
    return arr;
}
createUniqueRandomArray(1000)