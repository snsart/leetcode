### 题目
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

** Note:**<br>
All numbers (including target) will be positive integers.<br>
The solution set must not contain duplicate combinations.<br>

#### example1
```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

#### example2
```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

### 大意
给定一个数组和目标值，从数组中找出所有集合，使每个集合中的数的和等于目标值。

### 思路
backtrack:
本题可以转换为一个路径查找问题，可以把数组上的每个数想象成路径长度。然后以数组上的每个数为起点边，往后寻找一条路径，使路径之和为target。可以通过递归深度优先搜索每条边。