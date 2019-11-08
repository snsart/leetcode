/**
 * Given a string.find the length of the longest substring without repeating characters
 */

/* 动态规划算法 */ 

let lengthOfLongestSubstring1=function(str){
    let len=Array.from({length:str.length},()=>Array.from({length:str.length},()=>0));
    for(let i=0;i<str.length;i++){
        len[i][i]=1;
    }
    
    for(let l=1;l<str.length;l++){
        for(let i=0;i<str.length-l;i++){
            let j=i+l;
            let premax=len[i][j-1];
            if(len[j-premax][j-1]==premax){
                let c=str.charAt(j);
                //let substr=str.substring(j-premax,j);
                let index=str.indexOf(c,j-premax);
                if(index==-1||index>j-1){
                    len[i][j]=premax+1;
                }else{
                    len[i][j]=premax;
                }
            }else{
                len[i][j]=premax;
            }
        }
    }
    return len[0][str.length-1];
}



/* 暴力依次比较 */ 

let lengthOfLongestSubstring2 = function(str) {
    let ans=0;
    let len=str.length;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<=len;j++){
            if(allUnique(str,i,j)){
                ans=Math.max(ans,i,j);
            }
        }
    }
    return ans;
}

function allUnique(str,start,end){
    let set=new Set();
    for(let i=start;i<end;i++){
        let ch=str.charAt(i);
        if(set.has(ch)) return false;
        set.add(ch);
    }
    return true;
}


/* 最优解:sliding window */

let lengthOfLongestSubstring = function(str) {
    let ans=0;
    let len=str.length;
    let map=new Map();
    
    for(let i=0,j=0;j<len;j++){
       if(map.has(str.charAt(j))){
           i=Math.max(map.get(str.charAt(j)),i);
       }
        ans=Math.max(ans,j-i+1);
        map.set(str.charAt(j),j+1);
    }
    return ans;
}