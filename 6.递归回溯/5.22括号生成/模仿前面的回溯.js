

/**
 * @param {number} n
 * @return {string[]}
 */
//回溯。当n>=8时会超时,写法太复杂
var generateParenthesis = function(n) {
    let ans = []

    //生成括号字符串
    let parenthesis = ''
    for(let i =0;i<n;i++)parenthesis = parenthesis.concat('(')
    for(let i =0;i<n;i++)parenthesis = parenthesis.concat(')')

    const func1 = (str,used,lnums,rnums) =>{

        if(str.length >= 2*n){ //str跟字符串长度一样，返回
            ans.push(str.join(''))//将数组变成字符串
            return
        }

        for(let i =0;i<n*2 ;i++){
            if(used[i] || (used[i-1] && parenthesis[i] == parenthesis[i-1]))continue //处理使用过的，或者防止重复

            //记录左括号和右括号的个数
            if(parenthesis[i] == '(')lnums++ 
            if(parenthesis[i] == ')'){
                if(rnums>=lnums)continue// ）数量需要小于（
                rnums++
            }
            //添加括号和标记
            str.push(parenthesis[i])
            used[i] = true

            func1(str,used,lnums,rnums)//递归

            //减去左括号和右括号的个数
            if(parenthesis[i] == '(')lnums--
            if(parenthesis[i] == ')')rnums--
            //减去括号和标记
            str.pop()
            used[i] = false

        }
    }
    func1([],[],0,0)
    return ans
};
console.log(generateParenthesis(3))