/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var rob = function(nums) {
    if(nums.length ==1)return nums[0]
    let dp = [nums[0]]//dp[i]存放的是对于i位置上，能抢到的最大金额
    //dp[0] = nums[0]
    //dp[1] = nums[0] 或 0 + nums[1]
    //dp[2] :
    //当dp[1]取的是nums[0]，即跳过nums[1], dp[2]可以取nums[2] + dp[0]或者dp[1]，但由于dp[1] == nums[0] == dp[0],所以结果一定是nums[2] + dp[0] >= dp[1]
    //当dp[1]取的是0 + nums[1], dp[2]只能取nums[2] + dp[0]
    for(i=1;i<nums.length;i++){
        let temp = i==1 ? 0 : dp[i-2]//防止出现dp[1-2]报错
        dp[i] = Math.max(dp[i-1],temp+nums[i])//dp递推公式，原理看上面
    }
    return dp[dp.length-1]
};

console.log(rob([1,2,3,1]))
console.log(rob([2,1,1,2]))