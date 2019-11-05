### 题目
Given an array of strings, group anagrams together.

* Note:<br>
All inputs will be in lowercase.<br>
The order of your output does not matter.

#### example1
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

### 大意
已知一个字符串数组，将异序词归为一组

### 思路
1. 对每个字符串进行排序，排序后相同的字符归为一组
2. 统计26个字符在每个字符串中出现的个数，每个字符出现次数都相同的字符串归为一组

