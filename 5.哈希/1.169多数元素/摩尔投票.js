//要求：空间1，时间n
/**
 * @param {number[]} nums
 * @return {number}
 */

//众数，摩尔投票 ,空间1，时间n
//将第一个数字定位众数，从头开始遍历，如果是众数+1，不是-1，当投票数<=0时，众数重新定义为未遍历的第一个数字，最后vote>=1的就是众数
var majorityElement = function(nums) {
    let vote = 1 //投票
    let majority = nums[0] //众数
    for(let i=1;i<nums.length;i++){ //从1开始遍历
        if(vote<=0){ //当<=0时，重新定义众数，重置vote
            majority = nums[i]
            vote =1
            continue
        }
        //遍历并且投票
        if(nums[i] == majority){
            vote++
        }else{
            vote--
        }
    }
    return majority
}

//还可以用哈希表存储出现次数