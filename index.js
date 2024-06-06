/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = []
    const func1 = (i) =>{
        let temp = []
        //深拷贝nums
        for(let index in nums){
            if(index != i){
                let temp = nums[index]
                nums[index] = nums[i]
                nums[i]  =temp
            }
            temp.push(nums)
            
        }
        console.log(temp)
       return temp 
    }
    for(let i in nums){
        ans.concat(func1(i))
    }
    return ans
};
console.log(permute([1,2,3]))