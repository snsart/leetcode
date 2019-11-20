### 题目
Given a binary tree, find the leftmost value in the last row of the tree.

#### example1
```
Input:

    2
   / \
  1   3

Output:
1
```
#### example2
```
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
```

### 大意
找出二叉树中左下角的节点

### 思路
按层遍历

