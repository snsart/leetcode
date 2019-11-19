### 题目
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.

#### example1
```
Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
```

### 大意
给一个无向无环图，选择任意结点作为根，这个图将形成一棵树。找出图中所有的结点，使以此结点为根的树高度最小。

### 思路
剪枝发：从外往内依次把最外层的叶子结点剪掉，最后剩下的一个或两个结点为根结点。

* 算法技巧总结：<br>
从一个集合中选择满足某种条件的子集合，有两种思维方式：
1. 增量法: 子集合初始状态为空，把原集合中满足条件的元素依次放入子集合。
2. 删减法：子集合初始状态包含所有元素，然后依次把不满足条件的元素删除。本例使用的为删除法。

