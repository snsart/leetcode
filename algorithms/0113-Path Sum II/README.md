### 题目
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.<br>

Note: A leaf is a node with no children.

#### example1
Given the below binary tree and sum = 22,
```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```
return
```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

### 大意
给定一个二叉树和一个数sum，输出从根结点到叶节点路径之和为sum的所有路径

### 思路
栈方法：要跟踪一条递归树上的数据，可以使用栈数据结构，开始递归处理某个结点时将此结点压入栈，处理完毕后将该结点弹出栈



