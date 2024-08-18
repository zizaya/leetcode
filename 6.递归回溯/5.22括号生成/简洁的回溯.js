

/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯，另外一种简便写法
//跟重复字符串的区别，ab，b个数不能大于a。
var generateParenthesis = function(n) {
    let ans = []

    const func1 = (str,lnums,rnums) =>{

        if(str.length>=2*n){ //str跟字符串长度一样，返回
            ans.push(str.join(''))
            return
        }

        //左括号(小于n
        if(lnums<n){
            str.push("(")
            lnums++
            func1(str.slice(),lnums,rnums)
            //回溯
            str.pop()
            lnums--
        }
        //右括号)小于左括号(
        if(rnums<lnums){
            str.push(")")
            rnums++
            func1(str.slice(),lnums,rnums)
            //回溯
            str.pop()
            rnums--
            
        }
       
    }
    func1([],0,0)
    return ans
}
console.log(generateParenthesis(3))
