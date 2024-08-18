//要求：时间O(n*len),空间O1
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs[0].length ==0)return ''
    let index = 0
    //以第一个字符串为基准，遍历其他字符串
    while( index < strs[0].length ){
        //遍历其他字符串
        let common = strs[0][index]
        for(let i =1;i<strs.length;i++){
            if(strs[i][index] != common)return strs[0].slice(0,index) //最好结果是返回slice的结果，这样省去保存字符串的空间复杂度
        }
        index++
    }
    return strs[0]
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
//console.log(longestCommonPrefix(["flower","flow","flight"]))
