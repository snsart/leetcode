### 题目
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

#### example1
```
Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
```

### 大意
给定一棵二叉树，输出从根结点到叶结点的所有路径

### 思路
深度优先遍历

