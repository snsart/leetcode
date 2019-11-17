/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    let map=new Map();
    return dfs(root,map);
};

function dfs(root,map){
    if(!root) return 0;
    
    if(map.has(root)){
        return map.get(root);
    }
    
    let left=root.left?dfs(root.left.left,map)+dfs(root.left.right,map):0;
    let right=root.right?dfs(root.right.left,map)+dfs(root.right.right,map):0;
    let value1=root.val+left+right;
    
    let value2=dfs(root.left,map)+dfs(root.right,map);
    
    let result=Math.max(value1,value2);
    map.set(root,result);
    
    return result;
}
