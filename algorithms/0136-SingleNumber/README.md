### 题目
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

* Note:<br>
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

#### example1
```
Input: [2,2,1]
Output: 1
```
#### example2
```
Input: [4,1,2,1,2]
Output: 4
```

### 大意
在一个数组中，除了一个数之外其它数都重复了两次。找出这一个数。

### 思路
1. 哈希表
2. 位运算：
两个相同的数异或运算之后为0;<br>
任何数和0异或运算后保持不变;<br>
可推出a^b^a=a^a^b=b;

