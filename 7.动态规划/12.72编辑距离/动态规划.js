/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//动态规划，dp[i][j]保存的是word1[i-1]和word2[j-1]的最小操作
//具体题解：https://leetcode.cn/problems/edit-distance/solutions/853050/dai-ma-sui-xiang-lu-72-bian-ji-ju-chi-do-y87e/
var minDistance = function(word1, word2) {
    let dp = Array.from({length:word1.length+1},()=>Array(word2.length+1))
    for(let i=0;i<=word1.length;i++){
        dp[i][0] = i //初始化第一列
        for(let j=0;j<=word2.length;j++){
            if(i==0 || j==0){ //初始化第一行
                dp[0][j] = j 
                continue
            }
            if(word1[i-1] == word2[j-1]){ //如果相等，那么就等于word1[i-2]和word2[j-2]的最小操作
                dp[i][j] = dp[i-1][j-1] 
            }else{//如果不相等，在替换和添加（删除）上取最小
                //替换:dp[i-1][j-1] + 1
                //word1在i-1上添加一个元素，就相当于在word1[i-2]和word2[j-1]的最小操作上，在word1[i-1]上添加一个元素:dp[i-1][j] + 1
                //word2添加一个元素，操作含义同上:dp[i][j-1] + 1
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]) + 1
            }
            
        }
    }
    return dp[word1.length][word2.length]
};

console.log(minDistance("horse","ros"))
console.log(minDistance("intention","execution"))
