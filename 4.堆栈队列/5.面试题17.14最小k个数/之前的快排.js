//要求，时间nlogk，空间n

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//之前学的快排，这样是不对的，占用了很多空间
//快排,时间nlogn，空间n
var smallestK = function(arr, k) {
    
    const func1 = (arr)=>{
        if(arr.length <=1)return arr
        let midIndex = Math.floor(arr.length/2)
        let left = []
        let right = []
        for(let i in arr){
            if(i != midIndex){
                if(arr[i] <= arr[midIndex])left.push(arr[i])
                    if(arr[i] >= arr[midIndex])right.push(arr[i])
            } 
        }
        return func1(left).concat(arr[midIndex]).concat(func1(right))
    }
    let orderArr = func1(arr)
    return orderArr.slice(0,k)
};

//快排,快排的过程中，就进行输出结果，时间nlogn，空间n
var smallestK = function(arr, k) {
    
    const func1 = (arr,k)=>{
        if(arr.length <=k)return arr
        let midIndex = Math.floor(arr.length/2)
        let left = []
        let right = []
        for(let i in arr){
            if(i != midIndex){
                if(arr[i] <= arr[midIndex])left.push(arr[i])
                if(arr[i] > arr[midIndex])right.push(arr[i])
            } 
        }
        if(left.length >= k)return func1(left,k) //如果left数组大于k，只排序left即可
        return left.concat(arr[midIndex]).concat(func1(right,k-left.length-1)) //如果left数组小于k，则只排序right
        
    }
    return func1(arr,k)
};
//console.log(smallestK([1,3,5,7,2,4,6,8],4))
