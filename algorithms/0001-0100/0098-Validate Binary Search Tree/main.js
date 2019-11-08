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

 /* 方法一 */

var isValidBST = function(root) {
    if(root==null){
        return true;
    }
    let maxLeft=maxNode(root.left);
    let minRight=minNode(root.right);
    
    let leftIsValid=maxLeft?maxLeft.val<root.val:true;
    let rightIsValid=minRight?minRight.val>root.val:true;
    

    if(leftIsValid&&rightIsValid){
        if(isValidBST(root.left)&&isValidBST(root.right)){
            return true;
        }
    }

    return false;
};

function maxNode(node){
    while(node&&node.right){
        node=node.right
    }
    return node;
}

function minNode(node){
    while(node&&node.left){
        node=node.left;
    }
    return node;
}

/* 方法二 */

var isValidBST2 = function(root,min=null,max=null) {
    if(root==null){
        return true;
    }
    if(min&&root.val<=min.val) return false;
    if(max&&root.val>=max.val) return false;
    
    return isValidBST(root.left,min,root)&&isValidBST(root.right,root,max);
};
