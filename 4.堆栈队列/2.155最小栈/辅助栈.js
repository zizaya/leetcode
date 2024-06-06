
//进阶：时间O1，空间On

//用另外一个栈保存最小值，当stack有push时，minStack同时push一个当前最小值进去
//pop的时候同理
var MinStack = function() {
    this.stack = []
    this.minStack = []
    this.min = Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if(val < this.min){
        this.min = val
    }
    this.minStack.push(this.min) //同时push最小值
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop() //同时pop最小值
    //注意当minStack为空时，min要设置为infinity
    this.min = this.minStack.length > 0?this.minStack[this.minStack.length-1] :Infinity

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let val = this.stack[this.stack.length-1]
    return val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */