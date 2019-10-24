### 题目
Given a string, find the length of the longest substring without repeating characters.

#### example1
```javascript
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
```
#### example2
```javascript
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
#### example3
```javascript
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### 大意
给定一个字符串，求解其中没有重复字符的最长子串的长度

### 思路
#### sliding window
给定两个下标，一前一后组成一个window，window内字符不重复。window在字符串上从前往后滑动，在滑动过程中为了保证window里的字符不重复，window会不断伸缩。在滑动完成后，window最大时刻包含的字符数即为问题的解。