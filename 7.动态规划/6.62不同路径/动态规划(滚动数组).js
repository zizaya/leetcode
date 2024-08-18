//要求：空间复杂度 ONM，时间复杂度ONM
//进阶：空间复杂度 O1，时间复杂度O(min(N,M))

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

//动态规划，进阶，改善空间复杂度，时间ONM,空间O(min(o,m))
var uniquePaths = function(m, n) {
    //由于dp[i][j]只跟i-1行和i行有关，所以，用滚动数组代替二维数组
    let dp = Array(n)
 
    for(let i =0 ;i<m;i++){
        for(let j=0;j<n;j++){

            if(i-1<0 || j-1 <0){ //边缘格数最大路径为1
                dp[j] = 1
            }else{//非边缘最大路径
                dp[j] = dp[j-1] + dp[j] //替换数组中的数字，类似于滚动
            }
        }
    }
    return dp[n-1]
};
console.log(uniquePaths(3,7))