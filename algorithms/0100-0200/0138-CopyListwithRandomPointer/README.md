### 题目
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.<br>
Return a deep copy of the list.

#### example1
```
Input:
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
Node 1's value is 1, both of its next and random pointer points to Node 2.
Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
```

### 大意
深拷贝一个链表，链表中的结点存在两个指针，一个指向下一个结点，一个随机指向一个结点

### 思路
通过哈希表构建两个链表中结点之间的映射关系：
1. 复制每个结点，将复制出的结点存入哈希表中，键为原结点，值为复制出的结点。暂不更改复制结点的指针指向
2. 将哈希表中每个结点的指针指向哈希表中的值，即由指向键改为指向值



