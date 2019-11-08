### 题目
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.<br>
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

#### example
```javascript
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

### 大意
给定两个非空链表，链表上的数字组成了两个非负整数，用链表的形式返回两个整数之和。整数上的数字是以逆序的方式存储在链表中的:个位->十位->百位->...

### 思路
维护三个指针：
指针pl1:指向第一条链表的当前结点<br>
指针pl2:指向第二条链表的当前结点<br>
指针curNode:指向新链表的最后一个结点<br>

对pl1和pl2指向的两个结点的值进行相加组成新的结点。在对值进行相加时注意考虑进位。