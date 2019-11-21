### 题目
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

#### example1
```
Input:
11110
11010
11000
00000

Output: 1
```
#### example1
```
Input:
11000
11000
00100
00011

Output: 3
```

### 大意
给定一个二维数组，填充为1的位置代表陆地，填充为0的位置代表水，上下左右连接在一起的陆地组成了一个岛，求岛的数量

### 思路
深度优先搜索

