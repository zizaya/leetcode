//要求：空间1，时间n
/**
 * @param {number[]} nums
 * @return {number}
 */

//分治，递归
var majorityElement = function(nums) {
    const func1 = (start,end) =>{
        if(start>=end)return nums[start]
        let mid = Math.floor((start+end)/2)
        let first = func1(start,mid)
        let last = func1(mid+1,end)
        if(first == last){ 
            return first
        }else{
            return compare(start,end,first,last)
        }
    }
    const compare = (start,end,first,last)=>{
        let n1 = 0
        let n2 =0
        for(let i = start;i<=end;i++){
            if(nums[i] == first){
                n1++
            }
            if(nums[i] == last){
                n2++
            }
        }
        return n1>n2 ? first:last
    }
    return func1(0,nums.length-1)
};