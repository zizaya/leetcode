//要求：时间n，空间1

/**
 * @param {number[]} nums
 * @return {number}
 */
//要点：本题是从1-n，即一定是从数字1开始，如果不是从1，那么1就是最小正整数
//原地哈希，借助数组本身的值，通过负数是存在，正数是不存在进行判定
//置换

//原地哈希，借助数组本身的值，通过负数是存在，正数是不存在进行判定,时间n，空间1
var firstMissingPositive = function(nums) {
    //将所有的负数的值变为n+1,方便后续判定
    for(let i in nums){
        if(nums[i] <= 0)nums[i] = nums.length+1
    }
    //如果数字在[1,n]之间，就把数字对应索引的值变为负数
    for(let i in nums){
        if(nums[i] <= nums.length){
            let index = Math.abs(nums[i]) -1 //获得索引，如果索引小于n，就本身不是负数，把对应位置的数字变为负数，证明存在
            if(index < nums.length)nums[index] = -Math.abs(nums[index] ) 
        }
    }
    //正数的那个位置就是缺少的最小正整数,没缺少的返回nums.length+1
    for(let i in nums){
        if(nums[i]>0){
            return Number(i)+1
        }
    }
    return nums.length+1
};