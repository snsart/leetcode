### 题目
Given a binary tree, flatten it to a linked list in-place.

#### example1
given the following tree:
```
    1
   / \
  2   5
 / \   \
3   4   6
```
The flattened tree should look like:
```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

### 大意
将二叉树转为链表

### 思路
递归：先将左右子树分别转为链表，再将两条链表合并



