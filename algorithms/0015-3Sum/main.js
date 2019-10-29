/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    let triplets=[];
    nums.sort((a,b)=>a-b);
    
    for(let first=0;first<nums.length;first++){
        
        if(nums[first]>0){
            break;
        }
        
        let target=-1*nums[first];
        let head=first+1;
        let tail=nums.length-1;
        
        while(head<tail){
            let v=nums[head]+nums[tail];
            if(v==target){
                triplets.push([nums[first],nums[head],nums[tail]]);
                head++;
                tail--;
                while(head<tail&&nums[head-1]==nums[head]){
                    head++;
                }
                while(tail>head&&nums[tail+1]==nums[tail]){
                    tail--;
                }
            }else if(v>target){
                tail--;
            }else{
                head++;
            }
        }
        while(first<nums.length-1&&nums[first+1]==nums[first]){
            first++;
        }
    }
     
    return triplets;
};