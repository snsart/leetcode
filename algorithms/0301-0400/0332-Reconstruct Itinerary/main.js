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
        let value=tickets[i];
        if(map.has(key)){
            map.get(key).push(value);
        }else{
            map.set(key,[value]);
        }
        pathSign.set(value,"white");
    }
    dfs("JFK",pathSign,map,arr);
    return arr.reduce((total,ele)=>{
       return [...total,ele[1]]; 
    },[arr[0][0]]);
};

function dfs(from,pathSign,map,arr){
    if(map.has(from)){
        for(let ticket of map.get(from)){
            if(pathSign.get(ticket)=="white"){
                arr.push(ticket);
                pathSign.set(ticket,"black");
                dfs(ticket[1],pathSign,map,arr);
            }
        }
    }
    if(arr.length==pathSign.size){
        return
    }else{
        let ticket=arr.pop();
        pathSign.set(ticket,"white");
    }
}