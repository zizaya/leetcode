//要求，时间nlogk，空间n

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

//正确快排，且过程中不能通过k来限定条件
var smallestK = function(arr, k) {
    if(arr.length == 0)return []
    const func1 = (left,right) =>{
        if(left >= right)return
        let R = right
        let L = left
        let pivot = arr[left]
        while(left < right){
            while(left < right && arr[right] > pivot ){
                right --
            }
            if(arr[right] <=pivot){
                arr[left ] = arr[right]
            }
            while(left < right && arr[left] <= pivot){
                left ++
            }
            if(arr[left] > pivot){
                arr[right] = arr[left]
            }
            if(left >= right){
                arr[left] = pivot 
            }
        }
        /* if(right-1 - L >=k){
            func1(L,k)
        }else{  */
            func1(L,right-1)
            func1(right+1,R)
           // func1(right+1,R)
       // }
    }
    func1(0,arr.length-1)
    
    return arr.slice(0,k)
}
console.log(smallestK([1,3,5,7,2,4,6,8],4))