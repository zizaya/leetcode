var quickOrder = (arr) =>{
    const func1 = (start,end) =>{
        if(start >= end)return
        let S = start
        let E = end
        let pivot = arr[start]
        while(start < end){
            while(start < end && arr[end] > pivot){
                end--
            }
            if(arr[end] <=pivot){
                arr[start] = arr[end]
                //start ++
            }
            while(start < end && arr[start] <=pivot){
                start ++
            }
            if(arr[start] > pivot){
                arr[end] = arr[start]
                //end--
            }
            if(start >= end){
                arr[start] = pivot
            }
        }
        func1(S,end-1)
        func1(end+1,E)
    }
    func1(0,arr.length-1)
    return arr
}

console.log(quickOrder([3,4,1,8,10,-2,7]))