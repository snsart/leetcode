/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumpNums=Array.from({length:nums.length},()=>Array.from({length:nums.length},()=>0));
    
    for(let i=0;i<=nums.length-2;i++){
        for(let j=i+1;j<=nums.length-1;j++){
            if(i+nums[i]>=j){
                jumpNums[i][j]=1;
            }else{
                jumpNums[i][j]=Number.MAX_VALUE;
            }
        }       
    }

    for(let l=2;l<=nums.length-1;l++){
        for(let i=0;i<nums.length-l;i++){
            let j=i+l;
            for(let k=i+1;k<j;k++){
                if(jumpNums[i][k]<Number.MAX_VALUE&&jumpNums[k][j]<Number.MAX_VALUE){
                    jumpNums[i][j]=Math.min(jumpNums[i][j],jumpNums[i][k]+jumpNums[k][j]);
                }
            }
        }
    }
    return jumpNums[0][nums.length-1];
};

/* 求[0,j]只需要考虑[0,k]和[k,j] */

var jump2 = function(nums) {
    let jumpNums=Array.from({length:nums.length})
    jumpNums[0]=0;
    jumpNums[1]=1;

    for(let i=2;i<=nums.length-1;i++){
        let min=Number.MAX_VALUE;
        for(let k=1;k<i;k++){
            if(i<=nums[0]){
                min=1;
            }else{
                if(k+nums[k]>=i){
                    min=Math.min(min,jumpNums[k]+1);
                }
            }
        }
        jumpNums[i]=min;
    }
    return jumpNums[nums.length-1];
};


/* 方法三：
* 1. 记录起点所能到达的最远点A；
* 2. 在从起点到达A的过程中，不断记录在此区间所能到达的最远点B；
* 3. 到达A时，步数+1，含义是起点最多到A，之后的任意一点都需要多1步
* 4. A到B过程中。不断记录在此区间能到达的最远点C
* 5. 到达B时，步数+1，含义是要到达B点之后的任意点，都需要多走1步
* 6. 按此方法直到把所有点都扫描一遍
*/

var jump3 = function(nums) {
    let maxPositon=0,
        end=0,
        step=0;
    for(let i=0;i<nums.length-1;i++){
        maxPositon=Math.max(maxPositon,i+nums[i]);
        if(i==end){
            end=maxPositon;
            step++;
        }
    }
    return step;
};

let input=[2,3,1,1,4];
console.log(jump2(input));