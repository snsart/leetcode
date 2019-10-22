### 题目
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
#### example
```javascript
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### 大意
在数组中找到 2 个数之和等于给定值的数字，结果返回 2 个数字在数组中的下标。

### 思路
实现时间复杂度为O(n^2)的算法非常容易，为了使时间复杂度降为O(n)，可使用map将每个值映射为值的索引，然后按顺序遍历每个元素，查看map中是否存在给定值的另一半数据。