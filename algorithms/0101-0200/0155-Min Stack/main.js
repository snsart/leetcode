/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min=this.arr[0];
    for(let num of this.arr){
        if(num<min){
            min=num;
        }
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */