/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//解法1：快排
//解法2：小根堆

//解法2：小根堆，时间nlogk，空间k，
var findKthLargest = function(nums, k) {
    let heap = new MinHeap()
    for(let num of nums){
        heap.insert(num)
        if(heap.size() > k)heap.extract()
    }
    
    return heap.peek()
};

class MinHeap{
    constructor(){
        this.heap = []
    }
    insert(val){
        this.heap.push(val)
        this.up(this.heap.length-1)
    }
    up(index){
        let parentIndex = this.getParentIndex(index)
        if(this.heap[index] < this.heap[parentIndex]){
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
    extract(){
        this.heap[0] = this.heap.pop()
        this.down(0)
    }
    down(index){
        let leftIndex = this.getLeftIndex(index)
        let rightIndex = this.getRightIndex(index)
        if(this.heap[index] > this.heap[leftIndex]){
            this.swap(index,leftIndex)
            this.down(leftIndex)
        }
        if(this.heap[index] > this.heap[rightIndex]){
            this.swap(index,rightIndex)
            this.down(rightIndex)
        }

    }
    getRightIndex(index){
        return 2*index +2
    }
    getLeftIndex(index){
        return 2*index +1
    }
    size(){
        return this.heap.length
    }
    peek(){
        return this.heap[0]
    }
}