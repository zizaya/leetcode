/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//回溯，跟无重复数字不同的是，1.对nums进行排序，2.是否继续的判断条件不一样
var permuteUnique = function(nums) {
    let ans = []//存放结果的数组
    nums.sort((a,b)=>a-b) //对nums进行排序,从而进行数字选择
    const func1 = (arr,used) =>{
    
        if(arr.length >= nums.length){//长度等于原数组说明排列完毕
            ans.push(arr)
            return
        }else{
            for(let j = 0;j<nums.length;j++){ //j是nums的索引

                //nums[j-1]是否跟nums[j]相同
                if(used[j] || ( used[j-1]  && nums[j-1] == nums[j]))continue //true则说明已经使用过

                arr.push(nums[j])//存放数字
                //标记为已使用
                used[j] = true
                func1(arr.slice(),used) //递归
                //标记为未使用
                used[j] = false //递归完毕，重新变为未使用
                arr.pop()//弹出数字 
                
            }
        }
        
    }
  
    //开始进行回溯，arr是每次排序的数组，used是是否使用的标记数组
    func1([],[])
    return ans
};


console.log(permuteUnique([1,3,3]))