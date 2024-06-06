
/**
 * @param {number[]} record
 * @return {number}
 */
//要求：时间复杂度为 O(nlog⁡n)，空间复杂度O(n)
//解法1，两个for循环，第一个固定要比较的值，第二个for遍历这个值的右边（超时）时间o（n二次方）
//解法2，归并排序（分治），原理是两个有序的数组，可以通过合并排序，算出逆序对的个数,详情：https://www.bilibili.com/video/BV1Qk4y1r7u5/ 
//      时间复杂度O（nlogn),空间复杂度O（n），就是归并排序的时间空间复杂度
//解法3，离散化树状数组，要了解前缀和，树状数组，时间复杂度为 O(nlog⁡n)，空间复杂度O(n)

//解法2，归并排序（分治），排序的过程中，通过比较两个有序数组，可以算出逆序个数
var reversePairs = function(record) {
    let result = 0
    //拆分数组至最小问题
    const split = (record) =>{
        //最小问题
        if(record.length<2)return record
        //拆分数组，注意slice不包括结束下标，所以下标+1
        let mid = Math.floor((record.length -1)/2)
        let left = record.slice(0,mid+1)
        let right = record.slice(mid+1,record.length)
        //递归，拆分至最小问题后，merge合并
        return merge(split(left),split(right))
    }
    //合并数组
    const merge = (list1,list2) =>{
        let arr = []
        //当list1和list2都有元素时
        while(list1.length !=0 && list2.length !=0){
            //逆序情况，list1[0]大于list2[0]，计算list1的数组个数，就是比list2[0]大的前几位数字的个数,也就是逆序对的个数
            if(list1[0] > list2[0]){
                arr.push(list2.shift())
                result += list1.length
            }
            //非逆序情况
            if(list1[0] <= list2[0]){
                arr.push(list1.shift()) 
            }
        }
        return arr.concat(list1).concat(list2)
    }
    split(record)
    return result
};
console.log(reversePairs([7,5,6,4]))
