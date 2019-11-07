### 题目
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

#### example1
Given binary tree [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
return its level order traversal as:
```
[
  [3],
  [20,9],
  [15,7]
]
```

### 大意
按层遍历二叉树，按之字形格式输出

### 思路
定义一个布尔变量标记输出方向




