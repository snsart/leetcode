/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    var backTrack = function(nums){
        if(nums.length==1) return [nums];
        var last = nums.pop();
        var permutes = backTrack(nums);
        var newPermutes = [];
        for(var i=0;i<permutes.length;i++){
            var p = permutes[i];
            for(var j=0;j<=p.length;j++){
                var n = p.slice();
                n.splice(j,0,last)
                newPermutes.push(n);
            }
        }
        return newPermutes;
    }
    return backTrack(nums);
};