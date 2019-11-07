/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root==null) return [];
    let levels=[];
    let currLevel=[root];
    while(currLevel.length>0){
        levels.push(currLevel.map(node=>node.val));
        let nextLevel=[];
        for(let node of currLevel){
            if(node.left) nextLevel.push(node.left);
            if(node.right) nextLevel.push(node.right);
        }
        currLevel=nextLevel;
    }
    return levels;
};

