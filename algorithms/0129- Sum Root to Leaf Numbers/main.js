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
var sumNumbers = function(root) {
    let helper=function(root,arr){
        arr.push(root.val);
        if(!root.left&&!root.right){
            sum+=arr.reduce((sum,value)=>{
                return sum*10+value;
            },0)
        }
        if(root.left){
            helper(root.left,arr);
        }
        if(root.right){
            helper(root.right,arr);
        }
        arr.pop();
    }
    
    if(!root) return 0;
    let arr=[];
    let sum=0;
    helper(root,arr);
    return sum;
};