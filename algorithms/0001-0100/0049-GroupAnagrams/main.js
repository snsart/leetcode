/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    while(strs.length>0){
        let ele=strs.pop();
        let sortele=ele.slice(0).split("").sort().join("");
        if(map.has(sortele)){
            map.get(sortele).push(ele);
        }else{
            map.set(sortele,[ele]);
        } 
    }
    
    let result=[];
    for(let value of map.values()){
        result.push(value);
    }
    return result;
};