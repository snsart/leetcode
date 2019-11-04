/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m=obstacleGrid.length,n=obstacleGrid[0].length;
    let arr=Array.from({length:m+1},()=>Array.from({length:n+1},()=>0));
    
    if(obstacleGrid[m-1][n-1]==1){
        arr[1][1]=0;
    }else{
        arr[1][1]=1;
    }
    
    for(let i=2;i<=m;i++){
        if(obstacleGrid[m-i][n-1]==1){
            arr[i][1]=0; 
        }else{
            arr[i][1]=arr[i-1][1];
        }
    }
    
    for(let i=2;i<=n;i++){
        if(obstacleGrid[m-1][n-i]==1){
            arr[1][i]=0; 
        }else{
            arr[1][i]=arr[1][i-1];
        }
    }
    
    for(let i=2;i<=m;i++){
        for(let j=2;j<=n;j++){
            if(obstacleGrid[m-i][n-j]==1){
                arr[i][j]=0;
            }else{
                let right=obstacleGrid[m-i][n-j+1]==0;
                let down=obstacleGrid[m-i+1][n-j]==0;
                if(right&&down){
                    arr[i][j]=arr[i][j-1]+arr[i-1][j];
                }else if(right){
                    arr[i][j]=arr[i][j-1];
                }else if(down){
                    arr[i][j]=arr[i-1][j];
                }else{
                    arr[i][j]=0;
                } 
            }
        }
    }
    
    return arr[m][n];
};

/* 更优雅的写法 */
var uniquePathsWithObstacles2 = function(obstacleGrid) {
    const n = obstacleGrid.length, 
          m = obstacleGrid[0].length;
    const dp = new Array(m).fill(0);
    dp[0] = 1;

    for (let row of obstacleGrid) {
        for (let i=0; i<m; i++) {
            if (row[i]) {
                dp[i] = 0;
            } else {
                dp[i] += (dp[i-1] || 0);
            }
        }
    }

    return dp[m-1];
};