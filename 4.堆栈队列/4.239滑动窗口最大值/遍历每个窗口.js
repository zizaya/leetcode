//普通解法，单纯优化条件,时间On*k，空间ON,超时
//要求：时间ON,空间ON

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//普通解法，时间On*k，空间ON,超时
var maxSlidingWindow = function(nums, k) {
    let arr = [] //存放最大数值
    let max = -Infinity
    let queue = [] //滑动窗口

    //初始化队列
    for(let i =0 ; i <k;i++){
        let num = nums.shift()
        if(max < num)max = num
        queue.push(num)
        
    }

    //滑动窗口
    while(nums.length > 0 ){
        let num = nums.shift() //要添加的值
        let temp = queue.shift() //出窗口的值
        //要添加的值大于max，就赋值给max
        if(num >= max){
            max = num
        }else if(temp == max && k!=1){//shift出去的数据如果是最大值，就重新找
            
            max = num
            for(let i= 0 ;i<queue.length;i++){
                if(queue[i] >= max)max = queue[i]
            }
        }else if(k ==1){ //当窗口长度为1
            max = num
        }
        queue.push(num)
        arr.push(max)
    }
    return arr
}
