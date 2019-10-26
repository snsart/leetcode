### 题目
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
```
P   A   H   N
A P L S I I G
Y   I   R
```
And then read line by line: "PAHNAPLSIIGYIR"<br>
Write the code that will take a string and make this conversion given a number of rows:

#### example1
```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```
#### example2
```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
```

### 大意
给定一个"之"字形排列的字符串，按行输出所有字符

### 思路
为每一行创建一个字符串，然后从前往后遍历所有字符，检查每个字符属于第几行。假设为3行，则字符索引与行数的对应关系为:0,1,2,3,4,5,6...->0,1,2,1,0,1,2...