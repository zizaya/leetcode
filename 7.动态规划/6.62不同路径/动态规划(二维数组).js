//要求：空间复杂度 ONM，时间复杂度ONM
//进阶：空间复杂度 O1，时间复杂度O(min(N,M))

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//动态规划，原理是，边缘的格数最大路径都是1，有上和左的最大路径是上+左的和，时间ONM,空间ONM
var uniquePaths = function(m, n) {
    let dp = Array.from({length:m},()=>Array(n))
    for(let i =0 ;i<m;i++){
        for(let j=0;j<n;j++){
            if(i-1<0 || j-1 <0){ //边缘格数最大路径为1
                dp[i][j] = 1
            }else{//非边缘最大路径 = 上+左
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]
};

console.log(uniquePaths(3,7))