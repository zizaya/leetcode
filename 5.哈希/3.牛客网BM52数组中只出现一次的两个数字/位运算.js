//要求：空间1，时间n
/**
 * @param {number[]} nums
 * @return {number}
 */
//位运算，时间n，空间1
var twoSingleNumber = function(nums) {
    //计算出两个单独数字的异或结果
    let res = 0
    for(let n of nums){
        res ^= n
    }
    //根据1的位置，对两个单独数字进行分组
    let compare = 1
    while((res & compare) == 0){//找到compare对应res都为1的位置,就是两个元素不同的地方
        compare <<= 1
    }
    //根据compare和n中，某位的不同，区分a和b
    let a = 0
    let b = 0
    for(let n of nums){
        if((compare & n) ==0){
            a ^= n
        }else{
            b ^= n
        }
    }
    return a>b ? [b,a]:[a,b]
};
console.log(twoSingleNumber([1,6,1,3]))
