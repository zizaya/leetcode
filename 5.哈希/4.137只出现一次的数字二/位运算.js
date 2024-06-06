/**
 * @param {number[]} nums
 * @return {number}
 */
//哈希表，存储每个数字出现的次数
//数字电路设计
//位运算，计算每位的总值，单独元素的值就是总值的除以3的余数

//位运算，由于题目确定是int32位的数字，计算每位的总值，单独元素的值就是总值的除以3的余数
var singleNumber = function(nums) {
    let ans = 0
     for(let i=0; i<32;i++ ){
         let total = 0
         for(let n of nums){ //计算数组中的每个元素，在ans的第i位上的总和
             total += n>>i & 1
         }
         ans |= total%3 <<i  //ans取余
     }
     return ans
 };
 console.log(singleNumber([0,1,0,1,0,1,99]))