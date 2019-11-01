/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=nums[0];
    let includeEnd=nums[0];
    for(let i=1;i<nums.length;i++){
        includeEnd=Math.max(includeEnd+nums[i],nums[i]);
        max=Math.max(max,includeEnd);
    }
    return max;
};