/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max=0;
    for(let i=0;i<nums.length;i++){
        max=Math.max(max,max>=i?i+nums[i]:0);
    }
    return max>=nums.length-1
};
