/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//进阶，时间o(logn),空间o1

//解法1,递归，时间o(logn),空间o(logn)，因为递归要调用栈
var search = function(nums, target) {

    const func1 = (start,end) =>{
        //start大于end说明没有数据，
        if(start > end)return -1
        let mid = Math.floor((start+end)/2)
        //根据nums[mid]和target判定数组的区间
        if(nums[mid] == target)return mid
        if(nums[mid] > target)return func1(start,mid-1)
        if(nums[mid] < target)return func1(mid+1,end)
    }
    return func1(0,nums.length-1)
};