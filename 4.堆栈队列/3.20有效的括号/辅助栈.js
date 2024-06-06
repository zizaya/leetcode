//要求，时间ON，空间On
/**
 * @param {string} s
 * @return {boolean}
 */
//用一个栈辅助，放字符
var isValid = function(s) {
    let stack = []
    for(let char of s){
        //先配对，不配对，就push进栈，配对，就出栈
        if(char == ')' &&stack[stack.length-1] == '('){
            stack.pop()
        } else if(char == ']' &&stack[stack.length-1] == '['){
            stack.pop()
        }else if(char == '}' &&stack[stack.length-1] == '{'){
            stack.pop()
        }else{
            stack.push(char)
        }
    }
    return stack.length == 0
};
console.log(isValid("()]{}"))