/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//1.先排序，2.按照情况处理
//时间O(n log n) ，空间O(n)
var merge = function(intervals) {
    //数组排序(时间Onlogn)
    intervals.sort((a,b) => a[0]-b[0])
    //初始化res
    let res = [[intervals[0][0],intervals[0][1]]]
    //数组遍历(时间On)
    for(let i =1;i<intervals.length;i++){
        let left = intervals[i][0] 
        let right = intervals[i][1]
        let lastLeft = res[res.length-1][0] //res最后一位的left
        let lastRight = res[res.length-1][1]//res最后一位的right
        if(right <= lastRight)continue //新数组全部小于旧数组，则不操作
        if(left <=lastRight && right >lastRight){ //旧数组和新数组有交集，取[旧数组的left，新数组的right]
            res.pop()//pop旧数组
            res.push([lastLeft,right])
        }
        if(left > lastRight)res.push([left,right]) //新数组全部大于旧数组，则push进res
    }
    return res
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[0,4]]))
console.log(merge([[1,4],[0,1]]))
console.log(merge([[1,4],[0,0]]))
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]])) 
console.log(merge([[1,3],[2,6],[8,10],[1,18]]))

