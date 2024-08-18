/**
 * @param {string} message
 * @return {string}
 */
//leetcode上这道题相似:https://leetcode.cn/problems/fan-zhuan-dan-ci-shun-xu-lcof/description/
//空间O2m，趋近于ON,m是单词数量，时间o2m+n,趋近于On，n是字符串数量，其中split是On，for是Om，slice是Om
//循环的是单词
var reverseMessage = function(message) {
    let arr = message.split(' ')//分割成数组，去掉前后空格
    let nums = arr.length //记录初始数组长度
    for(let i =nums-2;i>=0;i--){ //从结尾开始向前遍历，不能从开始向后，因为会导致i取值错误
        if(arr[i] == '')continue//去掉空格
        arr.push(arr[i])
    }
    arr = arr.slice(nums-1)//截取倒序的字符串
    return arr.join(' ').trim()
};

//偏向于题解，但是没有第一个高效,循环的是字符串
var reverseMessage = function(message) {
    message = message.trim()
    let res = []
    let end = message.length
    for(let i=message.length-1;i>=0;i--){ //之所以选择从尾部开始遍历，因为push操作比unshift操作需要的复杂度要小
        if(message[i] == ' '  ){
            res.push(message.slice(i+1,end))
            while(message[i] == ' '){
                i--
            }
            end = i+1
        }
        if(i == 0)res.push(message.slice(i,end))
    }
    return res.join(' ')
};
console.log(reverseMessage("the sky is blue"))
console.log(reverseMessage("a good   example"))