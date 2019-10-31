/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results=[];
    candidates.sort((a,b)=>a-b);
    backtrack(candidates,target,results,[],0);
    return results;
    
};

var backtrack=function(candidates,target,results,path,index){
    if(target<0){return;}
    if(target==0){
        results.push([...path]);    
        return;
    }
    for(let i=index;i<candidates.length;i++){
        if(i>index&&candidates[i]==candidates[i-1]) {continue;}//忽略相同的路径
        path.push(candidates[i]);
        backtrack(candidates,target-candidates[i],results,path,i+1);
        path.pop();
    }
}

/*var isContain=function(results,path){
    for(let arr of results){
        if(isSame(arr,path)){
            return true;
        }
    }
    return false;

    function isSame(arr1,arr2){
        if(arr1.length!=arr2.length){
            return false;
        }
        for(let i=0;i<arr1.length;i++){
            if(arr1[i]!=arr2[i]){
                return false;
            }
        }
        return true;
    }
}*/

let nums=[1,1,1,1,5,6];

console.log(combinationSum(nums,8));