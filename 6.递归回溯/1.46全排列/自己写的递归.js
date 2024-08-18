/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//递归（自己写的类似于回溯）,时间O(n!)，空间O(n! * n)，n！表示从1乘到n的所有自然数的乘积
var permute = function(nums) {
    let ans = []//存放结果的数组
    
    const func1 = (i,arr) =>{
        
        arr.push(nums[i])//存放数字
        if(arr.length >= nums.length){//长度等于原数组说明排列完毕
            ans.push(arr)
            return
        }else{
            for(let j = 0;j<nums.length;j++){
                //当数字在结果中不存在时，进行排列，注意用slice进行深拷贝，防止arr被修改
                if(arr.indexOf(nums[j])==-1)func1(j,arr.slice())//indexOf会导致性能不好
            }
        }
        
    }
  
    //对每个数字当做第一个，进行排列
    for(let i=0;i<nums.length;i++){
        func1(i,[])
    }
    return ans
};
console.log(permute([1,2,3]))
