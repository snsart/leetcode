/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let arr=[];
    tickets.sort((a,b)=>a[1]>b[1]?1:-1);
    let map=new Map();
    let pathSign=new Map();
    
    for(let i=0;i<tickets.length;i++){
        let key=tickets[i][0];
        let value=tickets[i][1];
        if(map.has(key)){
            map.get(key).push(value);
        }else{
            map.set(key,[value]);
        }
        pathSign.set(key+value,"white");
    }
    arr.push("JFK");
    dfs("JFK",pathSign,map,arr);
    return arr;
};

function dfs(from,pathSign,map,arr){
    if(map.has(from)){
        for(let to of map.get(from)){
            if(pathSign.get(from+to)=="white"){
                arr.push(to);
                pathSign.set(from+to,"black");
                dfs(to,pathSign,map,arr);
            }
        }
    }
    console.log(arr);
    if(arr.length==pathSign.size+1){
        return
    }else{
        let to=arr.pop();
        let from=arr[arr.length-1];
        if(pathSign.has(from+to)){
            pathSign.set(from+to,"white");
        }
    }
}