//要求：时间复杂度ONM

/**
 * @param {number[][]} grid
 * @return {number}
 */
//动态规划,二维数组，时间OMN,空间OMN
var minPathSum = function(grid) {
    let dp = Array.from({length:grid.length},()=>Array(grid[0].length))
    for(let i =0 ;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(i ==0 && j == 0){//第一个格子，不用处理
                dp[0][0] = grid[0][0]
            }else if(i-1<0){ //最上面一行，只加左边的数字
                dp[i][j] = dp[i][j-1] + grid[i][j]
            }else if(j-1<0){ //最左边一行，只加上面的数字
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }else{//其他格子，取上和左的最小值
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
            }
            
        }
    }
    return dp[grid.length-1][grid[0].length-1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])) //7
console.log(minPathSum([[1,2,3],[4,5,6]])) //12