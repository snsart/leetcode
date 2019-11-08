### 题目
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:<br>

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

#### example1
```
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
```

### 大意
判断一个9*9的数独是否合法，合法的条件为：
1. 每个数在每行只出现1次；
2. 每个数在每列只出现1次；
3. 每个数在每个3*3的子单元格只出现1次

### 思路
把数字1-9映射为棋盘中的位置，对于每个数，判断其所在的多个位置是否满足条件。


