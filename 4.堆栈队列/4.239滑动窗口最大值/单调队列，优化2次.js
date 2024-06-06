//要求：时间ON,空间ON

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


//大根堆
//单调队列
//分块+预处理


//单调队列，队列中的值是从大到小排列的，时间On，空间On,执行时间:2000ms

var maxSlidingWindow = function(nums, k) {
    let dequeue = []
    let ans = []
    let max = nums[0]
    let queue = [nums[0]]
    //形成窗口，初始化单调队列
    for(let i =1 ;i<k;i++){
        if(max < nums[i]){
            max = nums[i]
            dequeue = []
        }else{
            while(dequeue.length > 0 && dequeue[dequeue.length-1] < nums[i]){
                dequeue.pop()
            }
            dequeue.push(nums[i])
        } 
        queue.push(nums[i])
    }
    ans.push(max)
    
    //滑动窗口
    for(i=k;i<nums.length;i++){
        let out = queue.shift()
        if(out == max )max = dequeue.length >0 ?dequeue.shift() : -Infinity //如果要删除的值为max，就把单调队列的第一个给max
            
        if(max < nums[i]){  //如果max小于要加入的值，重置单调队列
            max = nums[i]
            dequeue = []
        }else{
            while(dequeue.length > 0 && dequeue[dequeue.length-1] < nums[i]){ //nums[i]跟单调队列的最后一位对比，形成新的单调队列
                dequeue.pop()
            }
            dequeue.push(nums[i])
        }
        queue.push(nums[i])
        ans.push(max)
    }
    return ans
}



//单调队列，优化掉max， 队列中的值是从大到小排列的，时间On，空间On,执行时间:1900ms
var maxSlidingWindow = function(nums, k) {
    let dequeue = [nums[0]]
    let ans = []
    let queue = [nums[0]]
    //形成窗口，初始化单调队列
    for(let i =1 ;i<k;i++){
        while(dequeue.length > 0 && dequeue[dequeue.length-1] < nums[i]){
            dequeue.pop()
        }
        dequeue.push(nums[i])   
        queue.push(nums[i])
    }
    ans.push(dequeue[0])
    
    //滑动窗口
    for(i=k;i<nums.length;i++){
        let out = queue.shift()
        if(out == dequeue[0])dequeue.shift()
        while(dequeue.length > 0 && dequeue[dequeue.length-1] < nums[i]){ //nums[i]跟单调队列的最后一位对比，形成新的单调队列
            dequeue.pop()
        }
        dequeue.push(nums[i])
        queue.push(nums[i])
        ans.push(dequeue[0])
    }
    return ans
}



//单调队列，优化掉queue， 队列中的值是从大到小排列的，时间On，空间On,执行时间:600ms
var maxSlidingWindow = function(nums, k) {
    let dequeue = []
    let ans = []
    //形成窗口，初始化单调队列
    for(let i =0 ;i<k;i++){
        while(dequeue.length > 0 && dequeue[dequeue.length-1] < nums[i]){//nums[i]跟单调队列的最后一位对比，形成新的单调队列
            dequeue.pop()
        }
        dequeue.push(nums[i])   
    }
    ans.push(dequeue[0])
    
    //滑动窗口
    for(i=k;i<nums.length;i++){
        if(nums[i-k] == dequeue[0])dequeue.shift()
        while(dequeue.length > 0 && dequeue[dequeue.length-1] < nums[i]){ //nums[i]跟单调队列的最后一位对比，形成新的单调队列
            dequeue.pop()
        }
        dequeue.push(nums[i])
        ans.push(dequeue[0])
    }
    return ans
}