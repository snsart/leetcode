### 题目
Given an array of non-negative integers, you are initially positioned at the first index of the array.<br>
Each element in the array represents your maximum jump length at that position.<br>
Your goal is to reach the last index in the minimum number of jumps.<br>

#### example1
```
Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

### 大意
按数组上的数子从前向后跳，数字代表当前位置所能跳出的最远距离，求最少需要多少步到达尾部。

### 思路
max[a,b]存储从a到b的最短步数，将其初始化为1(能到达)或MAX_VALUE(无法到达)。<br>
动态规划，max[a,b]=max(max[a,b] max[a,x]+max[x,b])(a<x<b)


