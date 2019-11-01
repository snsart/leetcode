### 题目
Given an array of non-negative integers, you are initially positioned at the first index of the array.<br>
Each element in the array represents your maximum jump length at that position.<br>
Determine if you are able to reach the last index.<br>

#### example1
```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```
#### example2
```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

### 大意
已知一个由非负整数组成的数组，其中的数字代表在当前位置所能向后移动的最远距离，假设初始位置为0，求经过多次跳动后，是否能正好跳在最后一个位置。

### 思路
求在[0,index]区间所能跳出的最远距离，设[0,index-1]为longest，这[0,inde]为max(longest,longest>=index?index+nums[index]:0)，即分为能跳到index和不能跳到index两种情况。


