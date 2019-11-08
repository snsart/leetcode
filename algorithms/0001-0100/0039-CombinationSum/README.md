### 题目
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.<br>
The same repeated number may be chosen from candidates unlimited number of times.<br>

** Note:**<br>
All numbers (including target) will be positive integers.<br>
The solution set must not contain duplicate combinations.<br>

#### example1
```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```

#### example2
```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

### 大意
给定一个数组和目标值，从数组中找出所有集合，使每个集合中的数的和等于目标值。

### 思路
backtrack:
本题可以转换为一个路径查找问题，可以把数组上的每个数想象成路径长度。然后以数组上的每个数为起点边，往后寻找一条路径，使路径之和为target。可以通过递归深度优先搜索每条边。