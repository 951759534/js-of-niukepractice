/**
 * Created by K550jk on 2017/7/20.
 */
/*
*
* https://qq.com?pet=cat&age=2&like=fish
* */
function sernerlize(url){
    var reg = /^(http|https):\/\/.*(\?.*)$/
    var param = url.match(reg)[2];
   param = param.replace("?","{");
   param = param.replace(/\&/g,"',");
    param = param.replace(/=/g,":'");
    param = param +"'}";
    return param;
}
sernerlize("https://qq.com?pet=cat&age=2&like=fish")