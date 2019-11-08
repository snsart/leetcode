### 题目
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

#### example1
```
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

### 大意
生成螺旋矩阵

### 思路
从外层向内层构建数据，没一层按 上->右->下->左 的顺序创建线性表。


