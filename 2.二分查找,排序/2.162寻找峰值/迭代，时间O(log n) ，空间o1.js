/**
 * @param {number[]} nums
 * @return {number}
 */
//要求时间复杂度为 O(log n) 

//解法1，迭代，时间O(log n) ，空间o1
//二分查找
var findPeakElement = function(nums) {
    let start = 0
    let end = nums.length -1
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        
        let midValue  = nums[mid]
        let beforeValue  = nums[mid-1]
        let lastValue = nums[mid+1]
        //mid值分别与mid-1和mid+1的值进行比较，如果mid-1或mid+1不存在，也算mid值最大
        if( (!beforeValue || midValue > beforeValue) && (!lastValue || midValue > lastValue))return mid

        //用if和elseif因为，当mid同时小于两边时，start和end同时改变，如[3,1,2]会导致错误
        //题目描述没有相等的数字相邻，所以可以不用有等于号
        if(midValue <= beforeValue){
            end = mid-1
        } else if(midValue <= lastValue){
            start = mid+1
        } 
    }
    return -1
    
};

console.log(findPeakElement([3,1,2]))