### 题目
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

#### example1
```
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

### 大意
在x轴[0,n]的位置上给定一系列垂直于x轴的线段，每两条线段组成一个容器，求这些容器中装水最多的容器的面积，

### 思路
1. 暴力求解
2. 两点法：从外层往内层遍历，每次遍历移动高度比较低的一边