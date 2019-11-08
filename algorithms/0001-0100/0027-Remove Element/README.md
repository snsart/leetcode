### 题目
Given an array nums and a value val, remove all instances of that value in-place and return the new length.<br>

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.<br>

The order of elements can be changed. It doesn't matter what you leave beyond the new length.<br>

#### example1
```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```

### 大意
移除数组中等于给定值的元素，空间复杂度为O(1);

### 思路
定义一个下标，指向数组某位置，保证下标之前的数据都是满足条件的。