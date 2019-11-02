/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    if(n===0) return [];
    if(n===1) return [[1]];
    
    let matrix=Array.from({length:n},()=>Array.from({length:n},()=>0));
    let min=0,max=n-1,num=1;
    while(min<=max){
        for(let i=min;i<=max;i++){
            matrix[min][i]=num;
            num++;
        }
        for(let i=min+1;i<=max;i++){
            matrix[i][max]=num;
            num++;
        }
        for(let i=max-1;i>=min;i--){
            matrix[max][i]=num;
            num++;
        }
        for(let i=max-1;i>=min+1;i--){
            matrix[i][min]=num;
            num++;
        }
        min+=1;
        max-=1;
    }
    return matrix;
    
};