/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let arr=new Array(n+1);
    for(let i=1;i<=n;i++){
        let sqrt=Math.sqrt(i);
        if(sqrt==sqrt>>0){
            arr[i]=1;
            continue;
        }
        let min=Number.MAX_VALUE;
        for(let j=1,len=i/2>>0;j<=len;j++){
            min=Math.min(min,arr[i-j]+arr[j]);
        }
        
        arr[i]=min;   
    }
    
    return arr[n];
};


