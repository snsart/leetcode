/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==1){
                num++;
                fps(grid,i,j);
            }
        }
    }
    return num;
    
};

function fps(grid,i,j){
    if(i<0||i>grid.length-1||j<0||j>grid[0].length-1) return;
    if(grid[i][j]==1){
        grid[i][j]=-1;
        fps(grid,i-1,j);
        fps(grid,i+1,j);
        fps(grid,i,j-1);
        fps(grid,i,j+1);
    }
}