/**
 * @param {string} str
 * @return {number}
 */
const MAX_VALUE=Math.pow(2,31)-1;
const MIN_VALUE=-Math.pow(2,31);

let myAtoi = function(str) {

    //删除首字母空格
    str=str.trim();
    if(str.length==0){
        return 0;
    }

    let init=str.charAt(0,1);
    let nums=["0","1","2","3","4","5","6","7","8","9"];

    //排除首字母不为数字的情况
    if(init!="-"&&init!="+"&&nums.indexOf(init)==-1){
        return 0;
    }
    
    let sign=1,num=0,currIndex=0;
    if(init=="-"){
        sign=-1;
        currIndex=1;
    }else if(init=="+"){
        currIndex=1;
    }
    
    while(currIndex<str.length){
        let ch=str.charAt(currIndex);
        let curNum=nums.indexOf(ch);
        
        if(curNum==-1){
            break;
        }
        if(sign==-1){
            curNum=-1*curNum;
        }      

        //处理溢出
        if(num>Math.floor(MAX_VALUE/10)||(num==Math.floor(MAX_VALUE/10)&&curNum>7)){
            return MAX_VALUE;
        }
        if(num<Math.ceil(MIN_VALUE/10)||(num==Math.ceil(MIN_VALUE/10)&&curNum<-8)){
            return MIN_VALUE;
        }
            
        num=num*10+curNum;
        currIndex++;
    }
    
    return num; 
};
