/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    let i=click[0];
    let j=click[1];
    if(i<0||i>board.length-1||j<0||j>board[0].length-1){
        return board;
    };
    if(board[i][j]=="M"){
        board[i][j]="X";
    }
    if(board[i][j]=="E"){
        let num=0;
        let dir=[[1,1],[1,0],[1,-1],[0,1],[0,-1],[-1,1],[-1,0],[-1,-1]];
        for(let d of dir){
            let m=i+d[0],n=j+d[1];
            if(m>=0&&m<=board.length-1&&n>=0&&n<=board[0].length-1&&board[m][n]=="M"){
                num+=1;
            }
        }
        if(num>0){
            board[i][j]=""+num;
        }else{
            board[i][j]="B";
            for(let d of dir){
                let m=i+d[0],n=j+d[1];
                updateBoard(board,[m,n]);
            }
        }
    }
    return board;
};