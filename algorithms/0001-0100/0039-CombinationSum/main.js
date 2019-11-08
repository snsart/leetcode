/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let arr=[];
    candidates.sort((a,b)=>a-b);
    let nums=target/candidates[0]>>0;
    for(let i=1;i<=nums;i++){
        let iarr=findCombination(candidates,0,i,target);
        arr=[...arr,...iarr];
    }
    return arr;
};

/* 在candidates中找出从索引start开始的n个数，其和为target */

function findCombination(candidates,start,n,target){
    let arr=[];
  
    if(n==1){
        for(let i=start;i<candidates.length;i++){
            if(candidates[i]==target){
                arr.push([candidates[i]]);
            }
        }
    }else if(n>1){
        for(let i=start;i<candidates.length;i++){
            let newArr=findCombination(candidates,i,n-1,target-candidates[i]);
            for(let iarr of newArr){
                let sum=iarr.reduce((total,value)=>total+value);
                if(sum+candidates[i]==target){
                    iarr.push(candidates[i]);
                    arr.push(iarr);
                }
            }
        }
    }
    return arr;
}

//test
let nums=[3,2,6,7]
console.log(combinationSum(nums,11));



/* 更优雅的解决方案：backtrack（原路返回）
*
* 借助深度优先搜索的思想，从index开始测试以index为头的每条路径，如果满足条件则把路径加入最终结果，否则测试以index+1为头的另一条路径 
*/

const combinationSum2 = function(array, target) {
    const results = [];
    backtrack(array, target, results, [], 0);
    return results;
};

const backtrack = function(array, target, results, path, index) {
    if (target < 0) return;
    if (target === 0) { results.push([...path]); return; }
    for (let i=index; i<array.length; i++) {
        path.push(array[i]);
        backtrack(array, target-array[i], results, path, i);
        path.pop();
    }
}