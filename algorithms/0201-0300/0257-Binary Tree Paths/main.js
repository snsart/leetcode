/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    let paths=[];
    let stack=[];
    fps(paths,stack,root);
    return paths;
    
};
function fps(paths,stack,root){
    if(!root.left&&!root.right){
        let str="";
        for(let value of stack){
            str+=value+"->";
        }
        str+=root.val;
        paths.push(str);
        return;
    }
    
    stack.push(root.val);
    if(root.left){
        fps(paths,stack,root.left);
    }
    if(root.right){
        fps(paths,stack,root.right);
    }
    stack.pop();
}



