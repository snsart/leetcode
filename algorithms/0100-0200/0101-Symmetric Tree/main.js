/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 /* 递归法 */
var isSymmetric = function(root) {
    if(!root) return true;
    return isSymmetricNode(root.left,root.right);
};

function isSymmetricNode(node1,node2){
    if(!node1&&!node2) return true;
    if(!node1||!node2) return false;
    if(node1.val!=node2.val) return false;
    return isSymmetricNode(node1.left,node2.right)&&isSymmetricNode(node1.right,node2.left);
}

/* 迭代法 */
var isSymmetric = function(root) {
    if(!root) return true;
    let level=[];
    let nextLevel=[];
    level.push(root);
    while(level.length>0){
        for(let i=0;i<level.length;i++){
            if(level[i]==null&&level[level.length-i-1]==null){
                continue;
            }
            if(level[i]==null||level[level.length-i-1]==null){
                return false;
            }
            if(level[i].val!=level[level.length-i-1].val){
                return false;
            }
            nextLevel.push(level[i].left,level[i].right);  
        }
        level=nextLevel;
        nextLevel=[];
    }
    return true;
};


