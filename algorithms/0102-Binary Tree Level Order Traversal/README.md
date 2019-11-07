### 题目
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

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
  [9,20],
  [15,7]
]
```

### 大意
按层遍历二叉树

### 思路
一层一层的处理，用一个数组存储当前层的结点，当前层有结点存在时，存储当前层结点的值。然后通过遍历当前层每个结点的左孩子和右孩子得到下一层。




