### 题目
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.<br>

Note:The solution set must not contain duplicate triplets.

#### example1
```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

### 大意
给定一个数组，从数组找出所有三个数之和为0的三元组

### 思路
暴力求解复杂度为O(n^3)。为了提高性能可以先对数组进行排序，然后遍历每个数v，从剩余的数中找出两个数，使其和为-v。在内部循环中通过设置头尾两个指针，一次可以考察两个数，复杂度为O(n^2)。