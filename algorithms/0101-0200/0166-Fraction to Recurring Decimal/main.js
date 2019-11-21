/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let integer=Math.abs(numerator/denominator>>0);
    let decimal=Math.abs(numerator%denominator);
    let sign=numerator*denominator<0?"-":"";
    
    denominator=denominator>0?denominator:-1*denominator;
    let initdecimal=decimal;
    let deci="";
    let recurring=-1;//循环数开始的索引
    let map=new Map();
    let index=0;//每个小数的索引
    map.set(decimal,index);
    
    while(decimal!=0){
        decimal=decimal*10;
        deci+=decimal/denominator>>0
        decimal=decimal%denominator;
        if(map.has(decimal)){
            recurring=map.get(decimal);
            break;
        }
        index++;
        map.set(decimal,index);
    }
    if(recurring!=-1){
        return `${sign}${integer}.${deci.slice(0,recurring)}(${deci.slice(recurring)})`;
    }else{
        return initdecimal==0?`${sign}${integer}`:`${sign}${integer}.${deci}`
    }
    
};