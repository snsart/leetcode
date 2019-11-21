### 题目
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
If the fractional part is repeating, enclose the repeating part in parentheses.

* Note:<br>
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

#### example1
```
Input: numerator = 1, denominator = 2
Output: "0.5"
```
#### example2
```
Input: numerator = 2, denominator = 1
Output: "2"
```
#### example3
```
Input: numerator = 2, denominator = 3
Output: "0.(6)"
```

### 大意
分数转循环小数

### 思路
难点在小数部分的计算：针对每一位小数，分三种情况：
1. 若小数等于0，则小数部分结束
2. 若小数大于0，并且不等于以前计算出的任何小数，则需计算下一位小数，计算方式为当前小数*10，再除以分母的余数
3. 若小数大于0，并且等于以前计算出的某一位小数，说明是循环小数，从上一个相同的小数位置开始往后的小数为循环部分

为了判断计算的小数和前面的某一位小数是否相等，可以使用哈希表存储已计算出的小数（键为小数，值为小数的索引），然后判断哈希表中是否存在当前计算的小数

