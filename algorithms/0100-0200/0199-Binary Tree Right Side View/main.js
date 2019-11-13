/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    let arr=[];
    dfs(root,arr,1);
    return arr;
};

function dfs(node,arr,level){
    if(level>arr.length){
        arr.push(node.val);
    }
    if(node.right){
        dfs(node.right,arr,level+1);
    }
    if(node.left){
        dfs(node.left,arr,level+1)
    }
}