### 题目
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.<br>
(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).<br>
You are given a target value to search. If found in the array return its index, otherwise return -1.<br>
You may assume no duplicate exists in the array.<br>
Your algorithm's runtime complexity must be in the order of O(log n).

#### example1
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

#### example2
```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

### 大意
给定一个按升序排列的旋转数组和一个值，从数组中查找该值，保证事件复杂度为O(log n)

### 思路
1. 折半查找
2. 升序数据的头尾将数组分为了两个区间，如上例4-7和0-2，通过判断中间点落在了那个区间来分步考虑。