### 题目
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.<br>
Note: A leaf is a node with no children.

#### example1
Given the below binary tree and sum = 22,
```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

### 大意
给定一个二叉树和一个数sum，判断二叉树上是否存在一条路径，路径上的数的和为sum

### 思路
递归：判断子结点的值是否为sum-root.val



