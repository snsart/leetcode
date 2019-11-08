### 题目
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.<br>
Your algorithm's runtime complexity must be in the order of O(log n).<br>
If the target is not found in the array, return [-1, -1].<br>

#### example1
```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

#### example2
```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

### 大意
给定一个按升序排列的数组和一个值，查找该值在数组中所占的区间

### 思路
折半查找两个边界，注意查找的条件不是值，而是一个边界