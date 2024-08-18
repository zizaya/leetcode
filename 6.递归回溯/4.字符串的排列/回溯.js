//https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7?tpId=295&tqId=23291&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295
//题目链接（牛客网）

//回溯，加上字符串的处理
var permuteString = function(str) {
    let ans = []
    str = str.split('').sort().join('') //字符串的排序
    const func1 = (arr,used) =>{
        if(arr.length >= str.length){
            ans.push(arr)
            return
        }
        for(let i = 0 ;i<str.length;i++ ){
            if(used[i] || (used[i-1] && str[i-1] == str[i]))continue //或后面的判断是防止重复字符重复进入arr
            arr = arr.concat(str[i]) //字符串的粘接
            used[i] = true
            func1(arr,used) //用slice深拷贝arr，防止被其他递归修改
            used[i] = false
            arr = arr.slice(0,arr.length-1) //字符串的pop，slice不包含结束下标
        }
        

    }
    func1('',[])
    return ans
}

console.log(permuteString('aba')) //['aab', 'aba', 'baa']