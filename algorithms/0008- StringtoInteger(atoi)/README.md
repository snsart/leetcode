### 题目
mplement atoi which converts a string to an integer.<br>

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.<br>

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.<br>

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.<br>

If no valid conversion could be performed, a zero value is returned.

#### example1
```
Input: "42"
Output: 42
```
#### example2
```
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
```
#### example3
```
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
```
#### example4
```
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
```

### 大意
字符串转数字

### 思路
思路和ReverseInteger一样，按从高位到低位的顺序依次从字符串中获取所需的数字。可通过数组将字符映射为数字。