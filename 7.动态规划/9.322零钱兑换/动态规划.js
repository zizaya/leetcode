/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//动态规划，dp保存的是每个总金额需要的最小硬币数，那么对于dp[amount] = Math.min(dp[amount-第一个硬币金额]，dp[amount-第二个硬币金额],……) + 1
var coinChange = function(coins, amount) {
    let dp = []
    for(let i = 0;i<=amount;i++){
        if(i ==0){//总金额为0时，不需要硬币
            dp[0] = 0
        }else{
            let min = Infinity
            for(let j =0;j<coins.length;j++){ //循环当amount=i时，dp[amount-第一个硬币金额]，dp[amount-第二个硬币金额],……金额中最小的硬币个数
                let temp = i-coins[j]
                if(temp>=0)min = min > dp[temp] ?dp[temp] : min //保存所有硬币中，需要的最小硬币个数
            }
            dp[i] = min + 1 //总金额=之前的最小硬币个数 + 1
        } 
        
    }
    let ans = !isFinite(dp[dp.length-1]) ? -1 : dp[dp.length-1] //如果是infinity那么就是没有合适的金币个数
    return ans
};

console.log(coinChange([1,2,5],11))
console.log(coinChange([2],3))
console.log(coinChange([1],0))