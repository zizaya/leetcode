/**
 * @param {number[]} cost
 * @return {number}
 */
//2.动态规划
//怎么想到动态规划：要取最后一位，或者倒数第二位的最小值，就说明有两种可能，那么就只是一次迭代不好取，那么就应该存储每个位置的最小值=》动态规划
var minCostClimbingStairs = function(cost) {
    let dp = []
   
    for(let i = 0;i<cost.length;i++){
        if(i<2){ //从下标0或者1开始都可以
            dp[i] = cost[i]
        }else{
            //最小花费就是，上两位的最小值+i的花费
            dp[i] = Math.min(dp[i-1],dp[i-2]) + cost[i]
        }

    }
    //返回最后两位中，小的那个的花费
    return Math.min(dp[cost.length-1],dp[cost.length-2])
 
};

//还可以继续优化，空间是On，因为跟结果有关的只有dp[i-1]和dp[i-2],所以可以dp只储存前两位



console.log(minCostClimbingStairs([10,15,20]))
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
console.log(minCostClimbingStairs([0,1,1,1]))
console.log(minCostClimbingStairs([0,2,2,1])) 