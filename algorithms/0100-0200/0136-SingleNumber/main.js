/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map=new Map();
    for(let i=0,len=nums.length;i<len;i++){
        if(map.has(nums[i])){
            map.delete(nums[i]);
        }else{
            map.set(nums[i],i);
        }
    }
    return [...map][0][0];
};

/* 方法2 */
var singleNumber2 = function(nums) {
   let a=0;
   for(let i=0,len=nums.length;i<len;i++){
       a^=nums[i];
   }
   return a;
};