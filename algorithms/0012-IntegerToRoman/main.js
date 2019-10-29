/**
 * @param {number[]} height
 * @return {number}
 */

/* 暴力求解 */

let maxArea = function(height) {
    let max=0;
    for(let i=0;i<height.length-1;i++){
        for(let j=0;j<height.length;j++){
            max=Math.max(max,(j-i)*Math.min(height[i],height[j]));
        }
    }
    return max;
};

/* 两点法:
* 1. 从最远的两点开始往中间移动，距离越远，包含的面积也可能越大
* 2. 移动高度最低的一边，这样才能保证移动后的容器面积有可能大于原面积
*/

var maxArea2 = function(height) {
    let maxarea=0,l=0,r=height.length-1;
    while(l<r){
        maxarea=Math.max(maxarea,Math.min(height[l],height[r])*(r-l));
        if(height[l]<height[r]){
            l++;
        }else{
            r--;
        }
    }
    return maxarea;
};