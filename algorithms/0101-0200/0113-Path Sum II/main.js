/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */

 /* 方法一：判断左右子树是否存在路径，若存在，则在每个路径前添加当前结点的值 */

var pathSum = function(root, sum) {
    if(root==null){
        return [];
    }
    if(!root.left&&!root.right){
        if(root.val==sum){
            return [[root.val]];
        }else{
            return [];
        }
    }
    
    let arrLeft=[],arrRight=[];
    
    if(root.left){
        arrLeft=pathSum(root.left,sum-root.val);
        if(arrLeft.length>0){
            for(let arr of arrLeft){
                arr.unshift(root.val);
            }
        }
    }
    if(root.right){
        arrRight=pathSum(root.right,sum-root.val);
        if(arrRight.length>0){
            for(let arr of arrRight){
                arr.unshift(root.val);
            }
        }
    }
    
    return [...arrLeft,...arrRight];      
};

 /* 方法二：栈方法 */

var pathSum2 = function(root, sum) {
    if(root==null){
        return [];
    }
    let result=[];
    
    let totalPath=function(root,sum,arr){
        arr.push(root.val);
        if(!root.left&&!root.right&&root.val==sum){
            result.push(arr.slice(0));
        }
        if(root.left) totalPath(root.left,sum-root.val,arr);
        if(root.right) totalPath(root.right,sum-root.val,arr);
        arr.pop();
    }
    totalPath(root,sum,[]);
    return result;
};
