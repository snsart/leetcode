/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node==null){
        return null;
    }
    
    let map=new Map();
    copy(map,node);
    
    map.forEach((node)=>{
        if(node.neighbors){
            let arr=[];
            for(let n of node.neighbors){
                arr.push(map.get(n));
            }
            node.neighbors=arr;
        } 
    })
    return map.get(node);
    
};

var copy=function(map,node){
    if(map.has(node)){
        return;
    }
    let newNode=new Node(node.val,node.neighbors);
    map.set(node,newNode);
    
    for(let n of node.neighbors){
        copy(map,n);
    }
}

/* 更好的写法 */
const cloneGraph2 = (node, cloned=new Map()) => {
    if (!cloned.has(node)) {
      const clone = new Node(node.val);
      cloned.set(node, clone);
      clone.neighbors = node.neighbors.map(n => cloneGraph(n, cloned));
    }
    return cloned.get(node);
};