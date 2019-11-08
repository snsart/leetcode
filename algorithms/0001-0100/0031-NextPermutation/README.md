### 题目
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.<br>
If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).<br>
The replacement must be in-place and use only constant extra memory.

#### example1
Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
```
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
```

### 大意
给定一个数组，对此进行一次排序，生成下一个字典排序的数组，保证时间复杂度为O(n),空间复杂度为O(1)；

### 思路
1. 递减序已经是最大排序，无法再找出比它更大的排序，因此只能从递减序左侧的位置开始排序，比如[1,2,5,4,1]只能从2的位置开始排序，因为[5，4，1]无法再大了。
2. 从右至左遍历数组，找到递减序左侧第一个数，从右侧的递减序中找出一个比它稍大的数将其替换。比如[1,2,5,4,1]中2只能和4交换，变为[1,4,5,2,1]。
3. 替换之后，右侧的数依然是递减序，为了生成只大一轮的数组，需要对其进行翻转。[1,4,5,2,1]变为[1,4,1,2,5]，即[5,2,1]需要翻转。