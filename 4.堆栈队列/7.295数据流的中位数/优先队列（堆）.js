//堆（优先队列），一个堆不行，需要两个堆，一个存放大值，一个存放小值
//二分搜索
//sort，回家种田法

//堆（优先队列），一个堆不行，需要两个堆，一个存放大值，一个存放小值
class Heap{
    constructor(type){
        //最小堆true，大堆false
        this.type = type
        this.heap = []
    }
    insert(val){
        this.heap.push(val)
        this.up(this.heap.length-1)
    }
    up(index){
        let parentIndex = this.getParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index] && this.type){
            this.swap(index,parentIndex)
            this.up(parentIndex)
        }else if(this.heap[parentIndex] < this.heap[index] && !this.type){
            this.swap(index,parentIndex)
            this.up(parentIndex)
        }
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    extract(){//删除根节点，并且返回根节点
        let val = this.heap[0]
        if(this.heap.length > 1){
            this.heap[0] = this.heap.pop()
            this.down(0)
        }else{
            this.heap = []
        }
        return val
    }
    down(index){
        let left = this.getLeftIndex(index)
        let right = this.getRightIndex(index)
        if(this.type && this.heap[left] < this.heap[index]){
            this.swap(index,left)
            this.down(left)
        }else if(!this.type && this.heap[left] > this.heap[index]){
            this.swap(index,left)
            this.down(left)
        }
        if(this.type && this.heap[right] < this.heap[index]){
            this.swap(index,right)
            this.down(right)
        }else if(!this.type && this.heap[right] > this.heap[index]){
            this.swap(index,right)
            this.down(right)
        }
    }
    getLeftIndex(index){
        return 2*index + 1
    }
    getRightIndex(index){
        return 2*index +2
    }
    size(){
        return this.heap.length
    }
    peek(){
        return this.heap[0]
    }
}


//以下实现优先队列，有两种
//第一种，自己写的，条件复杂
//第二种，根据题解优化，条件简单，效果相同

//第一种，判断条件比较复杂的堆
var MedianFinder = function() {
    this.minHeap = new Heap(true)//最小堆(存放大值)
    this.maxHeap = new Heap(false)//最大堆（存放小值）
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let s1= this.minHeap.size()
    let s2 = this.maxHeap.size()
    let minValue = this.minHeap.peek()
   // let maxValue = this.minHeap.peek()
    if(s1==0 && s2 == 0){ //当两个堆都没有值时，优先存入最小堆
        this.minHeap.insert(num)
    }else if(s2 == 0 && s1 !=0){ //当最小堆有值，最大堆没值
        if(num <= minValue){
            this.maxHeap.insert(num)
        }else if(num > minValue){
            this.maxHeap.insert(this.minHeap.extract())
            this.minHeap.insert(num)
        }
    }else if(s1!=0 && s2 != 0){ //当两个堆都有值时，判断推入哪个堆
        if(num >= minValue){
            this.minHeap.insert(num)
        }else{
            this.maxHeap.insert(num)
        }
    }
    this.order()//平衡两个堆
};
MedianFinder.prototype.order = function(){
    let s1= this.minHeap.size()
    let s2 = this.maxHeap.size()

    //平衡两个堆
    if(s2-s1 > 1){
        this.minHeap.insert(this.maxHeap.extract())
    }
    if(s1-s2 > 1){
        this.maxHeap.insert(this.minHeap.extract())
    }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let s1= this.minHeap.size()
    let s2 = this.maxHeap.size()
    if(s1 == s2){
        return (this.minHeap.peek() + this.maxHeap.peek())/2
    }else{
        if(s1>s2)return this.minHeap.peek()
        if(s1<s2)return this.maxHeap.peek()  
    }
    
};



//第二种，优化一下堆，时间logn，空间n
var MedianFinder = function() {
    this.minHeap = new Heap(true)//最小堆(存放大值)
    this.maxHeap = new Heap(false)//最大堆（存放小值）
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.minHeap.insert(num) //数据放入最小堆
    this.maxHeap.insert(this.minHeap.extract()) //然后最小堆的最小值放入最大堆
    if(this.maxHeap.size()> this.minHeap.size()){ //如果最大堆的长度大于最小堆的长度，往最小堆再推一个值
        this.minHeap.insert(this.maxHeap.extract())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let s1= this.minHeap.size()
    let s2 = this.maxHeap.size()

    if(s1 == s2){
        return (this.minHeap.peek() + this.maxHeap.peek())/2
    }else{
        return this.minHeap.peek()
        
    }
    
};