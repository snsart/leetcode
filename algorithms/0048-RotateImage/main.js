/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 /* 非原址旋转 
 * 转换规则：
 * 列变行: 第j列=>第j行
 * 行边列：第i行=>第n-1-i列
 */
var rotateNonInplace = function(matrix) {
    let newmatrix=Array.from({length:matrix.length},()=>Array.from({length:matrix.length},()=>0));
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length;j++){
            newmatrix[j][matrix.length-1-i]=matrix[i][j];
        }
    }
    return newmatrix;
};


 /* 原址旋转:从外层到内层依次旋转每个数
 * 转换规则：
 * 列变行: 第j列=>第j行
 * 行边列：第i行=>第n-1-i列
 */
var rotate = function(matrix) {
    let mid=matrix.length/2>>0;
    for(let i=0;i<mid;i++){
        for(let j=i;j<matrix.length-1-i;j++){
            let temp=matrix[i][j];
            matrix[i][j]=matrix[matrix.length-1-j][i];
            matrix[matrix.length-1-j][i]=matrix[matrix.length-1-i][matrix.length-1-j];
            matrix[matrix.length-1-i][matrix.length-1-j]=matrix[j][matrix.length-1-i];
            matrix[j][matrix.length-1-i]=temp;
        }
    }
};

let matrix =[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];
rotate(matrix);
console.log(matrix);





