//要求，时间n，空间n
/**
 * @param {string} s
 * @return {number}
 */

//递归，时间n，空间n
var calculate = function(s) { 
    let i = 0
    const func1 = (s) =>{
        let ans = Infinity
        for(i;i<s.length;i++){ //会有空格  
            if(s[i] != ' '){
                if(!Number.isNaN(parseInt(s[i])) && ans ==Infinity ){ //如果ans没有被赋值初始值，将第一个数字赋值给ans
                    ans = Number(s[i])
                }else if(!Number.isNaN(parseInt(s[i])) && !Number.isNaN(ans)){ //如果ans有初始值，并且后序还是数字，说明是连续数字
                    ans = ans*10 +Number(s[i])
                }else if(s[i] == '+'){  //如果是加号
                    while(i <s.length-1){ 
                        i++
                        if(!Number.isNaN(parseInt(s[i]))){ //碰到数字就加给ans
                            let temp = Number(s[i])
                            while(i <s.length-1 && !Number.isNaN(parseInt(s[i+1]))){ //处理连续的数字
                                i++
                                temp = temp*10 + Number(s[i])
                            }
                            ans += temp
                            break
                        }
                        if(s[i] == '('){ //碰到(进入递归，出来的值相加
                            i++
                            ans += func1(s)
                            break
                        }
                    }
                }else if(s[i] == '-'){ //如果是减号
                    while(i <s.length-1){
                        i++
                        if(!Number.isNaN(parseInt(s[i]))){ //碰到数字就减给ans
                            let temp = Number(s[i])
                            while(i <s.length-1 && !Number.isNaN(parseInt(s[i+1]))){//处理连续的数字
                                i++
                                temp = temp*10 + Number(s[i])
                            }
                            if(ans != Infinity){ //处理1-(-2)中-2的一元运算符情况
                                ans -= temp
                            }else{
                                ans = -temp
                            }
                            break
                        }
                        if(s[i] == '('){ //碰到(进入递归，出来的值相减
                            i++
                            if(ans != Infinity){ //处理-(2+3)中一元运算符情况
                                ans -= func1(s)
                            }else{
                                ans = -func1(s)
                            }
                            break
                        }
                    }
                }else if(s[i] == '('){ //如果直接碰到(,直接进入递归,出来的值赋给ans
                    i++
                    ans = func1(s)
                }else if(s[i] == ')'){ //碰到),跳出递归
                    return ans
                }
            }
        }
        return ans //返回ans
    }
    return func1(s)
};
