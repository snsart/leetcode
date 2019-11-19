/**
 * @param {number} n
 * @return {number}
 */

 //方法1:分两种情况:
 /*
 * 1. n为平方数，则返回1
 * 2. n不为平方数，则n拆分为x+y。即min(n)=min(x)+min(y),其中x从1到n-1;
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


//方法2：把n分解为n-k和k;其中k是一个小于n的平方数，则min(n)=1+min(n-k),其中min(0)=0;

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp=new Array(n+1);
    dp.fill(n);
    dp[0]=0;
    
    for(let i=1;i<=n;i++){
        for(let j=1;j*j<=i;j++){
            dp[i]=Math.min(dp[i],1+dp[i-j*j]);
        }
    }
    return dp[n];
};