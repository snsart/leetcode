### 题目
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

#### example1
```
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
```

### 大意
计算两个数相除，答案取更靠近0的整数；

### 思路
其实就是求被除数里包含多少个除数，通过被除数不断地去减去除数，计算通过多少次能把被除数减完，为了加快计算效率，可以一次性减去多份的除数，代码实例中一次性减去的除数份数等于被除数的一半，时间复杂度由O(n)降为log2n。通过左移和右移运算可以直接计算一个数的2倍和一半。