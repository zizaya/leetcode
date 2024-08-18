//要求：空间O1,时间On^2
//进阶：空间On,时间On
/**
 * @param {string} s
 * @return {string}
 */

//中心扩展算法,时间on^2,空间o1,枚举每一个中心点(可能是奇数中心，或者偶数中心)
var longestPalindrome = function(s) {
    //扩散函数
    const getPalLength = (left,right) =>{
        while(s[left] == s[right] && left>=0 && right<s.length){
            left--
            right++
        }
        return (right-left + 1)-2 //返回回文子串的长度
    }

    let start = end = 0
    for(let i = 0;i<s.length-1;i++){//枚举中心点
        let oddLength = getPalLength(i,i) //返回中心是一个字符的回文子串长度
        let evenLenght =  getPalLength(i,i+1) //返回中心是两个字符的回文子串长度
        let tempLength = Math.max(oddLength,evenLenght) //获取奇数或者偶数的最长回文子串长度
        if(end - start < tempLength){ //如果是目前最长的
            start = i - Math.floor((tempLength -1) /2) //计算子串开始位置(适配奇数和偶数情况)
            end = i  + Math.floor(tempLength / 2) //计算子串结束位置(适配奇数和偶数情况)
        }
    }
    return s.slice(start,end+1)
}
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd")) 
console.log(longestPalindrome("aacabdkacaa")) 
console.log(longestPalindrome("abcba"))
