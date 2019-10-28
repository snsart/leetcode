### 题目
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

#### example1
```
Input: 121
Output: true
```
#### example2
```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

### 大意
判断一个整数是否时回文

### 思路
1. 排除一定不为回文的情况，比如负数,被10整除的数
2. 反转整数的后半段数字，看其和前半段是否相等，若相等，则是回文
可以对所有数字进行反转(题目0007)，然后进行比较，不过反转后的数字可能发生溢出。