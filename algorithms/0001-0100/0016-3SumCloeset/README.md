### 题目
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

#### example1
```
Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

### 大意
给定一个数组和一个target，从数组找出所有三个数之和最接近target的三元组

### 思路
暴力求解复杂度为O(n^3)。为了提高性能可以先对数组进行排序，然后循环遍历每个数v，从剩余的数中找出剩余两个数，使三个数之和最接近target。在内部循环中通过设置头尾两个指针，一次可以考察两个数，复杂度为O(n^2)。