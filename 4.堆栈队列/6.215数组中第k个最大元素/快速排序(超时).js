/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//解法1：快排
//解法2：小根堆

//解法1：快排,时间n，空间logn
var findKthLargest = function(nums, k) {
    const func1 = (start,end) =>{
        if(start >= end)return nums[start]
        let S = start
        let E = end
        let randomIndex = Math.floor(start + Math.random()*(end-start + 1)) //随机化的枢轴
        let pivot = nums[randomIndex]
        //选择倒序排序
        while(start < end){
            while(start < end && nums[end] <= pivot){
                end--
            }
            if(nums[end] > pivot){
                nums[start] = nums[end]
            }
            while(start < end &&nums[start] >= pivot){
                start ++
            }
            if(nums[start] < pivot){
                nums[end] = nums[start]
            }
            if(start >= end){
                nums[start] = pivot
            }
        }
        //根据k的范围，选择递归哪个区间
        if(end == k-1){
            return pivot
        }
        if(end > k-1)return func1(S,end-1)
        if(end < k-1)return func1(end+1,E)
    }
    return func1(0,nums.length-1)
}

console.log(findKthLargest([3,2,1,5,6,4],2))
console.log(findKthLargest([99,99],1))
