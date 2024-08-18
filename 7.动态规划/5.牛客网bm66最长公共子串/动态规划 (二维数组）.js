//最长公共子序列允许字符在原字符串中不连续出现，而最长公共子串要求子串在原字符串中是连续的。

//题目:https://www.nowcoder.com/practice/f33f5adc55f444baa0e0ca87ad8a6aac
/* 给定两个字符串str1和str2,输出两个字符串的最长公共子串
题目保证str1和str2的最长公共子串存在且唯一。  */

//动态规划
var longestCommonString = function(text1, text2) {
    let dp = Array.from({length:text1.length},()=>Array(text2.length).fill(-1))
    let max = 0
    let maxIndex = 0
    
    for(let i =0;i<text1.length;i++){
        for(let j =0;j<text2.length;j++){
            let row = i-1
            let col = j-1
            let topLeft = row <0 || col <0 ? 0:dp[row][col]
           
            if(text1[i] == text2[j]){

                dp[i][j] = topLeft + 1
                if(dp[i][j] > max){
                    maxIndex = i
                    max = dp[i][j]
                }
            }else{
                //子串和子序列的不同之处，
                //子串就直接=0，且整个dp数组中的最大值是最长子串
                //子序列=上和左的最大值，且dp[text1.length-1][text2.length-1]是最长自学列
                dp[i][j] = 0
            }


        }
    }
   return text1.slice(maxIndex-max+1,maxIndex+1)
}
console.log(longestCommonString("1AB2345CD","12345EF"))
console.log(longestCommonString("22222","22222"))
