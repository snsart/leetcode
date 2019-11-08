/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    let targetLeft=-1,targetRight=-1;
    
    //折半查找左边界
    while(left<=right){
        let mid=((left+right)/2)>>0;
        if(nums[mid]==target&&(mid-1<0||nums[mid-1]!=target)){
            targetLeft=mid;
        }
        if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>=target){
            right=mid-1;
        }
    }
    if(targetLeft==-1){
        return [-1,-1];
    }
    
    left=targetLeft;
    right=nums.length-1;

    //折半查找右边界
    while(left<=right){
        let mid=((left+right)/2)>>0;
        if(nums[mid]==target&&(mid+1>nums.length-1||nums[mid+1]!=target)){
            targetRight=mid;
        }
        if(nums[mid]<=target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }
    }
    return [targetLeft,targetRight];
    
};