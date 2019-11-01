/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length==0){
        return [];
    }
    let results=[];
    let m=matrix.length,n=matrix[0].length;
    let rangeX=n;
    let rangeY=m;
    let i=0,j=0;
    let direction="right";

    while(results.length<n*m){

        results.push(matrix[i][j]);
        
        let top=(m-rangeY)/2,left=(n-rangeX)/2,bottom=m-1-top,right=n-1-left;
        if(i==top+1&&j==left&&direction=="up"){
            rangeY-=2;
            rangeX-=2;
            top=(m-rangeY)/2,left=(n-rangeX)/2,bottom=m-1-top,right=n-1-left;
        }

        if(j-1<left&&i-1<top&&j+1<=right){
            direction="right"
        }else if(i-1<top&&j+1>right&&i+1<=bottom){
            direction="down"
        }else if(j+1>right&&i+1>bottom&&j-1>=left){
            direction="left"
        }else if(i+1>bottom&&j-1<left&&i-1>=top){
            direction="up"
        }

        switch(direction){
            case "right":
                j++;
                break;
            case "down":
                i++;
                break;
            case "left":
                j--;
                break;
            case "up":
                i--;
                break;
        }

    }
    return results;
};

let input=[
    []
];

console.log(spiralOrder(input));