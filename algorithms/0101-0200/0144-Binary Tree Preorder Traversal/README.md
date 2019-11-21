### 题目
Given a binary tree, return the preorder traversal of its nodes' values.

#### example1
```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
```
Follow up: Recursive solution is trivial, could you do it iteratively?

### 大意
用迭代法实现二叉树的前序遍历

### 思路
使用栈，先把右边结点压入栈，再把左边结点压入栈，出栈时，将会先取到左结点。



