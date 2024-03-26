/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n==1){
        return ["()"];
    }
    var newParenth = [];
    for(var i=1;i<=n/2;i++){
        var p1= generateParenthesis(i);
        var p2= generateParenthesis(n-i);
        for(var j=0;j<p1.length;j++){
            for(var k=0;k<p2.length;k++){
                var o1 = p1[j];
                var o2 = p2[k];
                var n1 = o1+o2;
                var n2 = o2+o1;
                if(newParenth.indexOf(n1)==-1){
                    newParenth.push(n1);
                }
                if(newParenth.indexOf(n2)==-1){
                    newParenth.push(n2);
                }
                if(i==1){
                    var n3 = "("+o2+")";
                    newParenth.push(n3);
                }
            }
        }
    }
    return newParenth;
}  


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis2 = function(n) {
    function backTrack(S="",left=0,right=0){
        if(left+right==n*2){
            result.push(S);
            return;
        }
        if(left<n){
            backTrack(S+"(",left+1,right);
        }
        if(right<left){
            backTrack(S+")",left,right+1);
        }
    }
    var result = [];
    backTrack();
    return result;
}  