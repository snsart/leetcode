### 题目
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

#### example1
![图片](./bst-tree.png)

```
BSTIterator iterator = new BSTIterator(root);
iterator.next();    // return 3
iterator.next();    // return 7
iterator.hasNext(); // return true
iterator.next();    // return 9
iterator.hasNext(); // return true
iterator.next();    // return 15
iterator.hasNext(); // return true
iterator.next();    // return 20
iterator.hasNext(); // return false
```
Note

next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.<br>
You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST when next() is called.

### 大意
实现一个迭代器，next()返回一棵二叉树中的最小值

### 思路

