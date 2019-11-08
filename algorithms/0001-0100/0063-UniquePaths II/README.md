### 题目
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).<br>
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).<br>
Now consider if some obstacles are added to the grids. How many unique paths would there be?<br>
An obstacle and empty space is marked as 1 and 0 respectively in the grid.

#### example1
```
Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

### 大意
已知一个m*n的表格，表格中存在障碍物，求从左上角到右下角共有多少条路径。

### 思路
动态规划


