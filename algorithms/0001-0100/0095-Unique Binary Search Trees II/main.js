/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    return generate(1,n)
};

var generate=function(start,end){
    let arr=[];
    
    if(start>end){
        return [null];
    }
    
    for(let i=start;i<=end;i++){
        let lefts=generate(start,i-1);
        let rights=generate(i+1,end);
        for(let leftHead of lefts){
            for(let rightHead of rights){
                let node=new TreeNode(i);
                node.left=leftHead;
                node.right=rightHead;
                arr.push(node);
            }
        }
    }
    
    return arr;
}