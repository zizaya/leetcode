


var MyQueue = function() {
    this.inStack = []
    this.outStack = [] //后序输出的“队列”
};
/** 
 * @param {number} x
 * @return {void}
 */
//push时处理所有逻辑，
MyQueue.prototype.push = function(x) {
    //如果outStack有数据，全部放到inStack中，
    while(this.outStack.length>0){
        this.inStack.push(this.outStack.pop())
    }
    this.inStack.push(x) //inStack存入要push的数据
    //再将inStack的数据全部倒回outStack
    while(this.inStack.length>0){
        this.outStack.push(this.inStack.pop())
    }
    return
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
   
    return this.outStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  
    let val = this.outStack[this.outStack.length-1]
    
    return val
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  
    return this.outStack.length == 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */