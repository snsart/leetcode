/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    for(let i=0;i<board.length;i++){
        if(board[i][0]=="O"){
            dfs(board,i,0);
        }
        if(board[i][board.length-1]=="O"){
            dfs(board,i,board.length-1);
        }
    }
    for(let i=0;i<board[0].length;i++){
        if(board[0][i]=="O"){
            dfs(board,0,i);
        }i
        if(board[board[0].lengt-1][i]=="O"){
            dfs(board,board[0].lengt-1,i);
        }
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]=="O"){
                board[i][j]="X";
            }
            if(board[i][j]="-"){
                board[i][j]="O";
            }
        }
    }
    
};

function dfs(board,i,j){
    if(i<0||i>board.length-1||j<0||j>board[0].length-1) return;
    if(board[i][j]!="O") return;
    if(board[i][j]=="O") board[i][j]="-";
    dfs(board,i-1,j);
    dfs(board,i+1,j);
    dfs(board,i,j-1);
    dfs(board,i,j+1);
}