/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let arr=Array.from({length:m+1},()=>Array.from({length:n+1},()=>0));
    
    for(let i=1;i<=m;i++){
        arr[i][1]=1;
    }
    for(let i=1;i<=n;i++){
        arr[1][i]=1;
    }
    
    for(let i=2;i<=m;i++){
        for(let j=2;j<=n;j++){
            arr[i][j]=arr[i-1][j]+arr[i][j-1];
        }
    }
    
    return arr[m][n];
};