/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 */

/**  
 * 中心扩展法
 *
 * 分别以每个字符为中心求解回文
 */ 

let longestPalindrome=function(str){
    
    if(str.length==0||str.length==null){
        return "";
    }
    
    let longest;
    let max=0;
    
    for(let i=0;i<str.length;i++){
        
        //长度为奇数的情况
        let p=i-1,q=i+1;
        while(p>=0&&q<str.length&&str.charAt(p)==str.charAt(q)){
            p--;
            q++;
        }
        if(max<q-p-1){
            max=Math.max(max,q-p-1);
            longest=[p+1,q];
        }
           
        //长度为偶数的情况
        p=i,q=i+1;
        while(p>=0&&q<str.length&&str.charAt(p)==str.charAt(q)){
            p--;
            q++;
        }
        if(max<q-p-1){
            max=Math.max(max,q-p-1);
            longest=[p+1,q];
        }

    }

    return str.slice(longest[0],longest[1]);
}

