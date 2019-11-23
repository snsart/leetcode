/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack=[];
    let a,b,c;
    for(let i=0;i<tokens.length;i++){
        switch(tokens[i]){
            case "+":
                a=stack.pop();
                b=stack.pop();
                c=Number(a)+Number(b);
                stack.push(c);
                break;
            case "-":
                a=stack.pop();
                b=stack.pop();
                c=b-a;
                stack.push(c);
                break;
            case "*":
                a=stack.pop();
                b=stack.pop();
                c=a*b;
                stack.push(c);
                break;
            case "/":
                a=stack.pop();
                b=stack.pop();
                c=b/a>0?Math.floor(b/a):Math.ceil(b/a);
                stack.push(c);
                break;
            default:
                stack.push(tokens[i]);
        }
    }
    return stack[0];
};