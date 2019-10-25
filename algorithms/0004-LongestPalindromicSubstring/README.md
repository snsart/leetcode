### 题目
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

#### example1
```javascript
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```
#### example2
```javascript
Input: "cbbd"
Output: "bb"
```

### 大意
给定一个字符串，求最长回文子序列

### 思路
1. 暴力求解：依次遍历每一个子字符串，判断其是否为回文。遍历所有子字符串为O(n^2)，判断是否为回文为O(n)，总共为O(n^3);
2. 动态规划：在判断字符串是否是回文时，可根据其包含的子字符串是否是回文来判断，即axa中，若x为回文，则axa为回文。遍历所有子字符串为O(n^2)，判断回文为O(1)，总共为O(n^2);
3. 中心扩展: 依次遍历每个中心点（含两字符之间的空格，共计2n-1个中心），从中心向两边扩展，判断是否是回文。时间复杂度为O(n^2);