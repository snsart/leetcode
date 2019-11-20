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
var largestValues = function(root) {
    if(!root) return [];
    let result=[root.val];
    let level=[root];
    let nextLevel=[];
    while(true){
        for(let node of level){
            if(node.left) nextLevel.push(node.left);
            if(node.right) nextLevel.push(node.right);
        }
        if(nextLevel.length===0){
            break;
        }
        let max=nextLevel[0].val;
        for(let node of nextLevel){
            max=Math.max(max,node.val);
        }
        result.push(max);
        level=nextLevel;
        nextLevel=[];
    }
    return result;
    
};
