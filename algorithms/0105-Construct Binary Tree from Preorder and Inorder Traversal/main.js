/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length==1){
        return new TreeNode(preorder[0]);
    }
    if(preorder.length==0){
        return null;
    }
    
    let node=new TreeNode(preorder[0]);
    let index=inorder.indexOf(preorder[0]);
    
    let leftPreorder=preorder.slice(1,index+1);
    let leftInorder=inorder.slice(0,index);  
    let rightPreorder=preorder.slice(index+1);
    let rightInorder=inorder.slice(index+1);
    
    node.left=buildTree(leftPreorder,leftInorder);
    node.right=buildTree(rightPreorder,rightInorder);
     
    return node;
};