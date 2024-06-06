/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

//进阶：时间On，空间O1

//解法1：字符换转成数组，比较各个数组大小，时间复杂度O(min(M, N))，空间复杂度O(M + N)
//解法2：双指针

//解法1：字符换转成数组，比较各个数组大小，时间复杂度O(min(M, N))，空间复杂度O(M + N)
var compareVersion = function(version1, version2) {
    //字符串转成数组
    let arr1 = version1.split('.')
    let arr2 = version2.split('.')
    while(arr1.length && arr2.length){
        if(+arr1[0] < +arr2[0]){
            return -1
        }
        if(+arr1[0] > +arr2[0]){
            return 1
        }
        if(+arr1[0]  ==  +arr2[0]){
            arr1.shift()
            arr2.shift()
        }
    }
    //省下的元素比较
    let sumArr = arr1.concat(arr2)
    let sum = sumArr.reduce((sum,val)=>sum+val,0)
    //如果省下的数组和为0，那么就是相等
    if(sum == 0)return 0
    //不相等，则那个数组还有剩余，就是那个数组大
    return arr1.length > 0 ?  1 : -1
};