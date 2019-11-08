/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbols=["I","V","X","L","C","D","M"];
    let i=0,result="";
    
    while(num>0){
        let pop=num%10;
        num=num/10>>0;
        let symbol="";
        if(pop==4){
            symbol=symbols[i*2]+symbols[i*2+1];
        }else if(pop==9){
            symbol=symbols[i*2]+symbols[i*2+2];
        }else if(pop<4){
            symbol=new Array(pop+1).join(symbols[i*2]);
        }else{
            symbol=symbols[i*2+1]+new Array(pop-4).join(symbols[i*2]);
        }
        result=symbol+result;
        i++;
    }
    return result;
};