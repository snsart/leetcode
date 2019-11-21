/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length==1){
        return new TreeNode(postorder[0]);
    }
    if(postorder.length==0){
        return null;
    }
    let node=new TreeNode(postorder[postorder.length-1]);
    let index=inorder.indexOf(postorder[postorder.length-1]);
    
    let leftPostorder=postorder.slice(0,index);
    let leftInorder=inorder.slice(0,index);  
    
    let rightPostorder=postorder.slice(index,postorder.length-1);
    let rightInorder=inorder.slice(index+1);
    
    node.left=buildTree(leftInorder,leftPostorder);
    node.right=buildTree(rightInorder,rightPostorder);
     
    return node;
    
};