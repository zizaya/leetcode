//要求：空间On!,时间On!
/**
 * @param {string} s
 * @return {string}
 */


//回溯，以0-3个字符为一个整体的回溯
var restoreIpAddresses = function(s) {
    let ans = []
    const func1 = (segStart,arr) =>{
        //终止条件：当有4个ip，并且开始位置在结尾，返回结果
        if(arr.length == 4 && segStart == s.length){
            ans.push(arr.join('.'))
            return
        }
        //从segStart开始循环，3个字符为一个循环
        for(let i = segStart;i<segStart+3;i++){
            if(segStart>s.length)return //当开始位置超过字符位置，切断分支
            let str = s.slice(segStart,i+1) //获取切断的字符
            if(str.length>1 && str[0] == '0')return //字符长度大于1时，第一个字符为0的不要，切断分支
            if(+str <= 255 && +str >=0 ){
                arr.push(str)
                func1(i+1,arr) //递归
                arr.pop()  //回溯
                     
            }else{
                return //不符合0-255的字符，切断分支
            }
        }
    }
    
    func1(0,[]) //切断字符开始的索引，暂存的arr
    
    return ans
};
console.log(restoreIpAddresses("25525511135"))
console.log(restoreIpAddresses("0000"))
console.log(restoreIpAddresses("101023"))