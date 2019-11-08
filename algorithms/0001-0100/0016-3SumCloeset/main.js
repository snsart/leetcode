/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
   
    let closest=Number.MAX_VALUE;
    nums.sort((a,b)=>a-b);
    
    for(let i=0;i<nums.length-2;i++){
        let left=i+1;
        let right=nums.length-1;
        while(left<right){
            let sum=nums[i]+nums[left]+nums[right];
            if(Math.abs(sum-target)<Math.abs(closest-target)){
                closest=sum;
                if(closest==target){
                    return sum;
                }
            }
            if(sum<target){
                left++;
            }else{
                right--;
            }
        }
    }
    return closest;
};