//要求，时间n，空间n
/**
 * @param {string} s
 * @return {number}
 */

//栈，将正负存入
var calculate = function(s) { 
    let ret = 0 //返回结果
    let stack = [1] //存放正负的栈，1是正，-1是负
    let sign = 1 //正负
    let i = 0
    while(i<s.length){
        if(s[i] == ' '){
            i++
        }else if(s[i] == '+'){
            sign = stack[stack.length-1]
            i++
        }else if(s[i] == '-'){
            sign = -stack[stack.length-1]
            i++
        }else if(s[i] == '('){
            stack.push(sign) //把括号前的正负存入
            i++
        }else if(s[i] == ')'){
            stack.pop() //删除括号前的正负
            i++
        }else{//处理数字
            let num = 0
            while(i<s.length && !Number.isNaN(parseInt(s[i])) && s[i] != ' '){
                num = num*10 + parseInt(s[i])
                i++
            }
            ret += sign*num
        }
    }
    return ret
}