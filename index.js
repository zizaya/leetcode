/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let length = num1.length<num2.length ? num1.length : num2.length
    let total = 0
    let loops = 1
    let isAdd = 0
    for(let i=length-1;i>=0;i--){
        num1[i] = num1[i] ? num1[i] : 0
        num2[i] = num2[i] ? num2[i] : 0
        console.log(num1[i],num2[i])
        let temp = (+num1[i] + +num2[i] + isAdd)%10
        isAdd = (+num1[i] + +num2[i] +isAdd) >=10 ? 1 :0
        total += temp*loops
        loops *=10
    }
    console.log(total)
};
console.log(addStrings("11","123"))