//要求：时间复杂度ON,空间复杂度ON

/**
 * @param {string} s
 * @return {number}
 */
//动态规划，类似于斐波那契
//对于dp[i],如果只是单字符，那么可以组合的次数为dp[i-1]
//如果只可以跟前面的字符组合，那么可以组合的次数为dp[i-2]
//当可以单字符，也可以跟前面的字符组合时，可以组合的次数为dp[i-1]+dp[i-2]
var numDecodings = function(s) {
    let dp = []
    
    for(let i =0 ;i<s.length;i++){
        if(i==0 ){//初始化第一个数字
            if(+s[0] == 0)return 0
            dp[0] = 1
        }else{
            if(+s[i] > 6 ){ //当s[i]>6,当前面的字符是1时，可以组合，否则不可以
                if(+s[i-1] == 1){//可以跟前面的字符组合
                    if(i-2<0)dp[i] = 2
                    if(i-2>=0)dp[i] = dp[i-2] + dp[i-1] 
                }else{//只能单字符
                    dp[i] = dp[i-1]
                }  
            }else if(+s[i] <=6 && +s[i] >0){//当0<s[i]<=6,当前面的字符是1和2时，可以组合，否则不可以
                if( +s[i-1] == 1 || +s[i-1] == 2 ){//可以跟前面的字符组合
                    if(i-2<0)dp[i] = 2
                    if(i-2>=0)dp[i] = dp[i-2] + dp[i-1] 
                }else{//只能单字符
                    dp[i] = dp[i-1] 
                }
            }else if(+s[i] == 0){//当s[i] == 0,当前面的字符不是1和2时，不可解析，
                if( +s[i-1] == 1 || +s[i-1] == 2 ){//只能跟前面的字符组合
                    let temp = i-2<0 ? dp[0]:dp[i-2]
                    dp[i] = temp                     
                }else{//不可编码
                    return 0
                }
            }
        }
    }
    return dp[dp.length-1]
};
console.log(numDecodings("261155971756562"))