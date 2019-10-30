### 题目
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.<br>
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.<br>

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:<br>
```
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
```
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

#### example1
```
Input: "III"
Output: 3
```
#### example2
```
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```
#### example3
```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

### 大意
罗马数字转阿拉伯数字

### 思路
1. 使用字典存储Symbol
2. 从前往后分析每个罗马数字字符