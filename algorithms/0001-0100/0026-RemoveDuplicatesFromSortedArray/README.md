### 题目
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.<br>

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

#### example1
```
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```

### 大意
对已排序的数组去重，保证空间复杂度为O(1)

### 思路
定义一个下标，指向数组某位置，保证下标之前的数据都是去重的。