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
var inorderTraversal = function(root) {
    let stack=[];
    let curr=root;
    let result=[];
    while(curr!=null||stack.length>0){
        while(curr!=null){
            stack.push(curr);
            curr=curr.left;
        }
        curr=stack.pop();
        result.push(curr.val);
        curr=curr.right;
    }
    return result;
};