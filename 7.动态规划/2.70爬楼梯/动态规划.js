/**
 * @param {number} n
 * @return {number}
 */
//斐波那契的变种，就是开头几个数字和兔子不一样罢了
var climbStairs = function(n) {
    if(n <3)return n
    let dp = [0,1,2]
    for(let i =3;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};