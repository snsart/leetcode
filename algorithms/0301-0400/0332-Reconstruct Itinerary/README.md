### 题目
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

1. If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
3. All airports are represented by three capital letters (IATA code).
4. You may assume all tickets form at least one valid itinerary.

#### example1
```
Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
```

#### example2
```
Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.
```

### 大意
给定一系列各个机场之间的飞机票，对这些飞机票进行排序，使上一张飞机票的终点是下一张的起点。

### 思路
深度优先遍历：对访问过的路线进行标记，当到达某个机场的时候，若此机场没有未访问过的路线，则检测是否所有路线都访问到了，若没有则回退至上一机场，访问上一机场的下一条路线。

