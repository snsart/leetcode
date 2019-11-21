/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let map=new Map();
    map.set(n,n);
    while(n!=1){
        let sum=0;
        while(n>0){
            sum+=(n%10)*(n%10);
            n=n/10>>0;
        }
        if(map.has(sum)){
            return false;
        }else{
            map.set(sum,sum);
            n=sum;
        }
    }
    return true;
};