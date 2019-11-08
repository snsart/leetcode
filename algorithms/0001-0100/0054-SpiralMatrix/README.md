### 题目
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

#### example1
```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```
#### example2
```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

### 大意
按螺旋顺序输出矩阵

### 思路
方法1：定义下标的前进方向，若下标指向的下一个位置超出边界或者已访问过，则按顺时针改变方法。<br>
方法2：按层储存，当外层存储完毕，缩小边界再依次存储内层。存储每一层时，把层按顺时针分为4个线性表。


