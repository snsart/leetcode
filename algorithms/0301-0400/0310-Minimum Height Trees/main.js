/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(!edges||n<2) return [0];
    let graph=[];
    for(let [x,y] of edges){
        graph[x]=graph[x]||[];
        graph[y]=graph[y]||[];
        graph[x].push(y);
        graph[y].push(x);
    }
    let leaves=[];
    graph.map((ele,index)=>ele.length===1&&leaves.push(index));
    while(n>2){
        n=n-leaves.length;
        let nextLeaves=[];
        for(let leave of leaves){
            let tmp=graph[leave].pop();
            graph[tmp].splice(graph[tmp].indexOf(leave),1);
            graph[tmp].length===1&&nextLeaves.push(tmp);
        }
        leaves=nextLeaves;
    }
    return leaves;
    
};