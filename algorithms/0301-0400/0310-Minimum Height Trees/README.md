### 题目
For an undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

#### example1
```
Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3 

Output: [1]
```

#### example2
```
Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5 

Output: [3, 4]
```
* Note:<br>

According to the definition of tree on Wikipedia: “a tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.”<br>
The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

### 大意
给一个无向无环图，选择任意结点作为根，这个图将形成一棵树。找出图中所有的结点，使以此结点为根的树高度最小。

### 思路
剪枝发：从外往内依次把最外层的叶子结点剪掉，最后剩下的一个或两个结点为根结点。

* 算法技巧总结：<br>
从一个集合中选择满足某种条件的子集合，有两种思维方式：
1. 增量法: 子集合初始状态为空，把原集合中满足条件的元素依次放入子集合。
2. 删减法：子集合初始状态包含所有元素，然后依次把不满足条件的元素删除。本例使用的为删除法。

