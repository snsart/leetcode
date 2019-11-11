/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let check=Array.from({length:board.length},()=>Array.from({length:board[0].length},()=>false));
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]=="X"||check[i][j]){
                continue;
            }else{
                dfs(board,i,j,check);    
            }

        }
    }
    
};

function dfs(board,i,j,check){
  
    if(board[i][j]=="X") return false;
    if(board[i][j]=="O"&&check[i][j]) return true;
    
    if(i==0||i==board.length-1||j==0||j==board[0].length-1){
        check[i][j]=true;
        return true;
    }else{
        if(dfs(board,i+1,j,check)||dfs(board,i,j+1,check)){
            check[i][j]=true;
            return true;
        }
    }
    board[i][j]="X";
    check[i][j]=true;
    return false;
}