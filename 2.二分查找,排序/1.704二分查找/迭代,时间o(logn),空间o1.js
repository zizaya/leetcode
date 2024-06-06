/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//进阶，时间o(logn),空间o1

//解法2，迭代，时间o(logn),空间o1
var search = function(nums, target) {
    let start = 0
    let end = nums.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)

        if(nums[mid] == target)return mid
        if(nums[mid] < target)start = mid+1
        if(nums[mid] > target)end = mid-1

    }
    return -1
}
console.log(search([-1,0,3,5,9,12],12))