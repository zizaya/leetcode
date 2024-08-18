/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//回溯，比起自己的递归，加了used数组，作为是否使用的标记
var permute = function(nums) {
    let ans = []//存放结果的数组
    
    const func1 = (arr,used) =>{

        if(arr.length >= nums.length){//长度等于原数组说明排列完毕
            ans.push(arr)
            return
        }else{
            for(let j = 0;j<nums.length;j++){
                if(used[j])continue //true则说明已经使用过
                arr.push(nums[j])//存放数字
                used[j] = true
                func1(arr.slice(),used) //递归
                used[j] = false //递归完毕，重新变为未使用
                arr.pop()//弹出数字
            }
        }
        
    }
  
    //开始进行回溯
    func1([],[])
    return ans
};

console.log(permute([1,2,3]))