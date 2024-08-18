/**
 * @param {number[]} nums
 * @return {number}
 */

//动态规划，去掉nums[0]遍历一遍和去掉nums[nums.length-1]遍历一遍，取两个值中最大的那个
var rob = function(nums) {
    if(nums.length ==1)return nums[0]

    //去掉[nums.length-1]
    let dp1 = [nums[0]]
    for(i=1;i<nums.length-1;i++){//结尾是nums.length-2
        let temp = i==1 ? 0 : dp1[i-2]//防止出现dp[1-2]报错
        dp1[i] = Math.max(dp1[i-1],temp+nums[i])
    }

    //去掉nums[0]
    nums.shift()
    let dp2 = [nums[0]]
    for(i=1;i<nums.length;i++){
        let temp = i==1 ? 0 : dp2[i-2]//防止出现dp[1-2]报错
        dp2[i] = Math.max(dp2[i-1],temp+nums[i])
    }

   return Math.max(dp1[dp1.length-1],dp2[dp2.length-1])//取最大的值

};
/*  console.log(rob([2,3,2]))
 console.log(rob([1,2,3]))
console.log(rob([1,2,3,1])) 
console.log(rob([200,3,140,20,10])) 
console.log(rob([1,1,1,1])) 
console.log(rob([1,2,1,1]))
console.log(rob([1,1,1,2]))   */
console.log(rob([1,1,3,6,7,10,7,1,8,5,9,1,4,4,3]))
/* console.log(rob([1,3,6,7,10,7,1,8,5,9,1,4,4,3])) */
