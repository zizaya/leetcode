//要求：空间1，时间n
/**
 * @param {number[]} nums
 * @return {number}
 */

//快速排序后，中位数就是多数元素，（堆排序才是o1，快排是ologn），超时
var majorityElement = function(nums) {
    const quickOrder = (start,end) =>{
        if(start >=end)return 
        let S = start
        let E = end
        let pivot = nums[start]
        while(start<end){
            while(start<end && nums[end] >= pivot){
                end--
            }
            if(nums[end] < pivot){
                nums[start] = nums[end]
            }
            while(start < end &&  nums[start] <= pivot){
                start++
            }
            if(nums[start] > pivot){
                nums[end] = nums[start]
            }

            if(start >= end){
                nums[start] = pivot
            }
        }
        quickOrder(S,end-1)
        quickOrder(end+1,E)
    }
    quickOrder(0,nums.length-1)
    let mid = Math.floor(nums.length/2)
    return nums[mid]
}