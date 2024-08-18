/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//动态规划,标准的二维数组的dp，最长子序列就是二维数组的最左下角的值
var longestCommonSubsequence = function(text1, text2) {
    let dp = Array.from({length:text1.length},()=>Array(text2.length).fill(-1)) //创建一个二维数组，长宽是text1和text2的长度，填充-1
    for(let i =0;i<text1.length;i++){
        for(let j=0;j<text2.length;j++){
            //处理边界情况，i-1和j-1小于0的情况，dp[row][col]值取0
            let row = i-1
            let col = j-1
            let topLeft = row < 0 || col <0 ? 0 : dp[row][col]
            let top = row<0 ? 0 : dp[row][j]
            let left = col < 0 ? 0 : dp[i][col]
            //字符比较
            if(text1[i] == text2[j])dp[i][j] = topLeft + 1  //两个字符相等，则取：左上角对角线的值+1
            if(text1[i] != text2[j])dp[i][j] = Math.max(top,left) //两个字符不相等，则取：上一行相同索引，这一行前一个元素的最大值
            
        }
    }
    return dp[text1.length-1][text2.length-1] //最长子序列
};
console.log(longestCommonSubsequence("abcde","ace"))
console.log(longestCommonSubsequence("abc","abc"))
console.log(longestCommonSubsequence("abc","def"))
console.log(longestCommonSubsequence("abzxyqwe","zxyqwedab"))
console.log(longestCommonSubsequence("bsbininm","jmjkbkjkv"))
console.log(longestCommonSubsequence("oxcpqrsvwf","shmtulqrypy")) 
console.log(longestCommonSubsequence("pmjghexybyrgzczy","hafcdqbgncrcbihkd")) 
console.log(longestCommonSubsequence("aaaa","aa"))

