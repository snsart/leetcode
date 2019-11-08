/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-3;i++){
        
        for(let j=i+1;j<nums.length-2;j++){
            let s=target-nums[i]-nums[j];
            let head=j+1;
            let tail=nums.length-1;
            while(head<tail){
                if(nums[head]+nums[tail]==s){
                    result.push([nums[i],nums[j],nums[head],nums[tail]]);
                    head++;
                    tail--;
                    while(head<tail&&nums[head]==nums[head-1]){
                        head++;
                    }
                    while(head<tail&&nums[tail]==nums[tail+1]){
                        tail--;
                    }
                }else if(nums[head]+nums[tail]<s){
                    head++;
                }else{
                    tail--;
                }
            }
            
            while(j<nums.length-2&&nums[j]==nums[j+1]){
                j++;
            }
        }   
        
        while(i<nums.length-3&&nums[i]==nums[i+1]){
            i++;
        }
    }
    return result;
};