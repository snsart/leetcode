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
var findBottomLeftValue = function(root) {
    let level=[root];
    let nextLevel=[];
    let result=root.val;
    while(level.length>0){
        for(let node of level){
            if(node.left){
                nextLevel.push(node.left);
            }
            if(node.right){
                nextLevel.push(node.right);
            }
        }
        if(nextLevel.length>0){
            result=nextLevel[0].val;
        }
        level=nextLevel;
        nextLevel=[];
    }
    return result;
};