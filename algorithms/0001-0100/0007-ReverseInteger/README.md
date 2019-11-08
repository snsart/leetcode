### 题目
Given a 32-bit signed integer, reverse digits of an integer.

#### example1
```
Input: 123
Output: 321
```
#### example2
```
Input: -123
Output: -321
```

### 大意
已知一个32位有符号整数，翻转这个数

### 思路
栈方法：从低位到高位依次弹出每个数，添加至翻转数的个位，注意溢出