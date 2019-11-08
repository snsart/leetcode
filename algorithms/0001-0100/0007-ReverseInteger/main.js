/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev=0;
    while(x!=0){
        let pop=x%10;
        x=x>0?Math.floor(x/10):Math.ceil(x/10);
        
        if(rev>Math.floor(Number.MAX_VALUE/10)||(rev==Math.floor(Number.MAX_VALUE/10)&&pop>7)){
           return 0;
        }
        if(rev<Math.ceil(-Number.MAX_VALUE/10)||(rev==Math.ceil(-Number.MAX_VALUE/10)&&pop<-8)){
           return 0;
        }
        rev=rev*10+pop;
    }
    return rev;
};