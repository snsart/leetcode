/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if(numRows==1){
        return s;
    }
    
    let goingdown=false,curRow=0;
    let rows=[],result="";
    
    for(let i=0;i<numRows;i++){
        rows.push("");
    }
    
    //依次遍历每个字符，curRow跟踪当前字符属于哪一行，随着字符从左往右遍历， curRow会在0和numRows-1之间来回波动.

    for(let i=0;i<s.length;i++){
        let ch=s.charAt(i);
        rows[curRow]+=ch;
        
        if(curRow==numRows-1||curRow==0){
            goingdown=!goingdown;
        }
        curRow+=goingdown?1:-1;
    }
    
    for(let i=0;i<numRows;i++){
        result+=rows[i];
    }
    return result;
};