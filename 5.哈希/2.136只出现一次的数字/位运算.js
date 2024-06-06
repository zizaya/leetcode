//要求：空间1，时间n
/**
 * @param {number[]} nums
 * @return {number}
 */
//哈希存出现次数
//集合存数字，后序数字相同则删除数字，最后留下来的就是单独元素
//排序后，取中位数，跟中位数不相等的那边是单独元素的所在的数组
//位运算，时间n，空间1
var singleNumber = function(nums) {
    let result
    for(let i=0;i<nums.length;i++){
        result = nums[i] ^ result
    }
    return result
};
console.log(singleNumber([4,1,2,1,2]))
