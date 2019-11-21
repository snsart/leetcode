### 题目
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

#### example1
```
Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

### 大意
已知一棵二叉树，求从右边看所能看到的所有结点

### 思路
result存储结果，按中->右->左的顺序深度优先遍历二叉树，对每个结点判断其所在的层是否大于result的长度，若大于则需要加入result。
