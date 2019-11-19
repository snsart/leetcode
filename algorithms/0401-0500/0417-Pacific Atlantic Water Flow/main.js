/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if(!matrix||matrix.length==0) return [];
    let linkPac=new Map();
    let linkAtla=new Map();
    let m=matrix.length;
    let n=matrix[0].length;
    
    for(let i=0;i<m;i++){
        linkPac.set(i+"&"+0,[i,0]);
        linkAtla.set(i+"&"+(n-1),[i,n-1]);
    }
    for(let i=1;i<n;i++){
        linkPac.set(0+"&"+i,[0,i]);
        linkAtla.set((m-1)+"&"+(i-1),[m-1,(i-1)])
    }
    
    for(let pos of linkPac.values()){
        search(pos,linkPac,matrix);
    }
    for(let pos of linkAtla.values()){
        search(pos,linkAtla,matrix);
    }
    
    let arr=Array.from(linkPac.values());  
    return arr.filter((ele,arr)=>{
        return linkAtla.has(ele[0]+"&"+ele[1]);
    })
};

function search(pos,link,matrix){
    
    //top
    let i=pos[0]-1;
    let j=pos[1];
    if(i>=0&&!link.has(i+"&"+j)&&matrix[i][j]>=matrix[i+1][j]){
        link.set(i+"&"+j,[i,j]);
    }
    
    //left
    i=pos[0];
    j=pos[1]-1;
    if(j>=0&&!link.has(i+"&"+j)&&matrix[i][j]>=matrix[i][j+1]){
        link.set(i+"&"+j,[i,j]);
    }
    
    //right
    i=pos[0];
    j=pos[1]+1;
    if(j<matrix[0].length&&!link.has(i+"&"+j)&&matrix[i][j]>=matrix[i][j-1]){
        link.set(i+"&"+j,[i,j]);
    }
    
    //bottom
    i=pos[0]+1;
    j=pos[1];
    if(i<matrix.length&&!link.has(i+"&"+j)&&matrix[i][j]>=matrix[i-1][j]){
        link.set(i+"&"+j,[i,j]);
    } 
}
