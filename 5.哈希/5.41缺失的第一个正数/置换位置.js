//要求：时间n，空间1

/**
 * @param {number[]} nums
 * @return {number}
 */
//要点：本题是从1-n，即一定是从数字1开始，如果不是从1，那么1就是最小正整数
//原地哈希，借助数组本身的值，通过负数是存在，正数是不存在进行判定
//置换


//置换，遍历数字，如果不是对应的n，就置换到该有的位置,时间n，空间1
var firstMissingPositive = function(nums) {
    for(let i in nums){
        //置换，三个条件，前两个判断数字是不是在该在的位置，最后一个，防止要交换的两个位置数字相同，防止死循环，如[1,1]
        while(nums[i] > 0 && nums[i] != Number(i)+1 && nums[i] !=nums[nums[i]-1]){
            let temp = nums[i]
            nums[i] = nums[nums[i]-1]
            nums[temp-1] = temp
        }
    }
    //正数的那个位置就是缺少的最小正整数,没缺少的返回nums.length+1
    for(let i in nums){
        if(nums[i] != Number(i)+1)return Number(i)+1
    }
    return nums.length+1
}
console.log(firstMissingPositive([1,1]))


