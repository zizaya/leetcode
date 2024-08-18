//要求：空间O1,时间On^2
//进阶：空间On,时间On
/**
 * @param {string} s
 * @return {string}
 */

//动态规划,dp[i][j]存储的是i坐标和j坐标之间是不是回文子串,时间on^2,空间on^2
var longestPalindrome = function(s) {
    let dp = Array.from({length:s.length},()=>Array(s.length).fill(false))
    let max = 0
    let maxIndex = -1
    for(let i = s.length-1;i>=0;i--){ //i从str的尾部开始向前遍历
        for(let j = i ; j<s.length;j++){//j从i开始向后遍历
            //当两个位置的字符相等时，
            //如果j-i<=1说明是一个字符或者两个字符，所以是回文子串，
            //或者子串长度大于3时dp[i+1][j-1]是回文子串，那么dp[i][j]也是回文子串
            if(s[i] == s[j] && (j-i<=1 || dp[i+1][j-1])){
                dp[i][j] = true
                if(max < j-i+1){
                    max = j-i+1//记录最长的回文子串长度
                    maxIndex = i//记录最长的回文子串开始的位置
                }  
            }
        }
    }
    return s.slice(maxIndex,maxIndex+max) //截取回文子串，因为字符的操作很花费空间时间，所以最后截取即可
}
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd")) 
console.log(longestPalindrome("aacabdkacaa")) 
console.log(longestPalindrome("abcba"))