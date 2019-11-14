/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let finish=Array.from({length:numCourses},ele=>"white");
    let map=new Map();
    for(let i=0;i<prerequisites.length;i++){
        let key=prerequisites[i][0];
        let value=prerequisites[i][1];
        if(map.has(key)){
            map.get(key).push(value);
        }else{
            map.set(key,[value]);
        }
    }
    let result=[];
    for(let i=0;i<numCourses;i++){  
        let unfinish=dfs(i,map,finish,result);
        if(unfinish){
            return [];
        }
    }
    return result;
};

function dfs(label,map,finish,result){
   
    
    if(finish[label]=="gray"){
        return true;
    }
    if(finish[label]=="black"){
        return false;
    }
    
    if(!map.has(label)){
        finish[label]="black";
        result.push(label);
        return false;
    }
    
    finish[label]="gray";
    for(let value of map.get(label)){
        let unfinish=dfs(value,map,finish,result);
        if(unfinish){
            return true;
        }
    }
    finish[label]="black";
    result.push(label);
    return false;
}