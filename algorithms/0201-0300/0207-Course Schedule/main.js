/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let visitInfo=Array.from({length:numCourses},()=>"white");
    for(let i=0;i<numCourses;i++){
        let unfinish=dfs(i,visitInfo,prerequisites);
        if(unfinish){
            return false;
        }
    }
    return true;
};

function dfs(label,visitInfo,prerequisites){
    if(visitInfo[label]=="gray"){
        return true;
    }
    if(visitInfo[label]=="black"){
        return false;
    }
    visitInfo[label]="gray";
    let connect=prerequisites.filter(ele=>ele[0]==label);
    for(let i=0;i<connect.length;i++){
        let newLabel=connect[i][1];
        let unfinish=dfs(newLabel,visitInfo,prerequisites);
        if(unfinish){
            return true;
        }
    }
    visitInfo[label]="black";
    return false;
}