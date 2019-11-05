### 题目
Given two strings s and t , write a function to determine if t is an anagram of s.

* Note:<br>
All inputs will be in lowercase.<br>
The order of your output does not matter.

#### example1
```
Input: s = "anagram", t = "nagaram"
Output: true
```

### 大意
判断两个字符是否是同字异序词(包含相同的字符但顺序不同)

### 思路
对两个字符串的每个字符进行排序，排序后两个字符串一样，说明是同字异序词。

