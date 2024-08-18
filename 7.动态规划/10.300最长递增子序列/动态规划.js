/**
 * @param {number[]} nums
 * @return {number}
 */
//动态规划，dp[i]保存的是在i位置上，对于nums[i]的最长子序列长度
var lengthOfLIS = function(nums) {
    let dp = []
    let max = 1
    for(let i =0;i<nums.length;i++){
        if(i ==0){ //i==0，最长子序列是本身，所以==1
            dp[0] = 1
            continue
        }else{
            dp[i] = 0//初始化dp[i]
            for(let j =0;j<dp.length;j++){ //遍历dp，如果nums[j] < nums[i]，那么对于i位置的最长子序列就是=最大的dp[j] + 1
                if(nums[j] < nums[i])dp[i] = dp[i] < dp[j] ? dp[j] : dp[i]
            }
            dp[i] = dp[i] + 1 //最大的dp[j] + 1
            max = max < dp[i] ? dp[i] : max //记录所有dp中的最大数就是最长子序列的长度
        }
    }
    return max
};

/* console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))
console.log(lengthOfLIS([0,1,0,3,2,3]))
console.log(lengthOfLIS([7,7,7,7,7,7,7])) */
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]))
