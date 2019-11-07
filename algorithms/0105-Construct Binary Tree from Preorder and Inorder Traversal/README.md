### 题目
Given preorder and inorder traversal of a tree, construct the binary tree.<br>

* Note:<br>
You may assume that duplicates do not exist in the tree.

#### example1
Given
```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```
Return the following binary tree:
```
    3
   / \
  9  20
    /  \
   15   7
```

### 大意
已知前序遍历和中序遍历，构建二叉树

### 思路
二叉树的根节点一定是前序遍历的第一个结点，接下来求二叉树的左孩子和右孩子，可以使用递归。
在使用递归时需要先分别求出以左孩子和右孩子为根结点的前序遍历和中序遍历，下面为求解方法：
在中序遍历中，根结点将数组分成了左右两半，左半部分即为以左孩子为根结点的中序遍历，右半部分为右孩子为根结点的中序遍历。
在前序遍历中，从根结点开始，取出和左孩子所在的中序遍历相同数量的元素，即为左孩子的前序遍历，剩余的部分为右孩子的前序遍历。



