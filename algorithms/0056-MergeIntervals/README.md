### 题目
Given a collection of intervals, merge all overlapping intervals.

#### example1
```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```
#### example2
```
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

### 大意
重叠区间合并

### 思路
先按区间终点排序，然后从后往前合并。通过判断后一个区间的起点是否小于前一个区间的终点来判断区间是否重叠。


