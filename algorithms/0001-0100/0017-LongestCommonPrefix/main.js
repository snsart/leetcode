/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var index=0;
    var output = "";
    var valid=true;
    while(valid){
        if(index>=strs[0].length){
            valid = false;
            break;
        }
        var letter = strs[0][index];
        
        for(var i=1;i<strs.length;i++){
            var str = strs[i];
            if(index>=str.length||letter!=str[index]){
                valid = false;
                break;
            }
        } 
        if(valid){
            output+=letter;
            index++;
        }
    }
   return output;
};