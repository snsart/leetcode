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
var zigzagLevelOrder = function(root) {
    if(root==null) return [];
    let levels=[];
    let currLevel=[root];
    let toRight=true;
    
    while(currLevel.length>0){
        let data=currLevel.map(node=>node.val);
        if(!toRight){data.reverse()};
        levels.push(data);
        let nextLevel=[];
        for(let node of currLevel){
            if(node.left) nextLevel.push(node.left);
            if(node.right) nextLevel.push(node.right);
        }
        currLevel=nextLevel;
        toRight=!toRight;
    }
    
    return levels;
};