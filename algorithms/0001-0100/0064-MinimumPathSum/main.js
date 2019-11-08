/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m=grid.length;
    let n=grid[0].length;
    
    let dp=Array.from({length:m},()=>Array.from({length:n},()=>0));
    
    dp[m-1][n-1]=grid[m-1][n-1];
    for(let i=m-2;i>=0;i--){
        dp[i][n-1]=dp[i+1][n-1]+grid[i][n-1];
    }
    for(let i=n-2;i>=0;i--){
        dp[m-1][i]=dp[m-1][i+1]+grid[m-1][i];
    }
    
    for(let i=m-2;i>=0;i--){
        for(let j=n-2;j>=0;j--){
            dp[i][j]=grid[i][j]+Math.min(dp[i+1][j],dp[i][j+1]);
        }
    }
    return dp[0][0];
};