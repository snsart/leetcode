### 题目
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

#### example1
```
Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

### 大意
已知整数n，求key为1到n的结点可形成的所有二叉搜索树

### 思路
递归求解:
设m为[1,n]中的任意一点，则以m为根的树的左子树为[1,m-1]中的任意一棵树，右子树为[m+1,n]中的任意一棵树。对[1,m-1]和[m+1,n]递归求解。




