
//154寻找旋转排序数组中的最小值 II是元素可能重复
//153寻找旋转排序数组中的最小值 是元素不重复
//要求：时间复杂度为 O(log⁡n)，空间复杂度O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */

//二分查找-三种情况：1.全部升序，2.全部倒序，3.前半段升序，断崖，后半段升序，前半段数字大于后半段
//时间复杂度在 O(log n) 到 O(n)，空间复杂度 O(1)

//写了四种函数，第三种比较好

//index从头部开始
var findMin = function(nums) {
    if(nums.length==1)return nums[0]
    let start = 0
    let end = nums.length -1
    //result 设置为第一个值
    
    let index = 0
    let result = nums[index]
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        //result<mid，两种情况：1.全部升序，2.前半段升序（mid），断崖，后半段。
        //从mid+1向后寻找，能找到比result小的值第二种，找不到第一种
        if(result < nums[mid]){
            start = mid+1
        }
        //result==mid，四种情况：1.前半段升序（mid），断崖，后半段。2,前半段升序（mid），断崖，后半段。3.全部升序，4.全部降序
        //从第二位开始向后依次寻找,start需在result的后一位
        if(result == nums[mid]){
            index =  index +1 //result移动一位
            result = nums[index]
            start = index+1 //start移动两位  
        }
        //result > mid,两种情况：1.全部降序，2.前半段升序，断崖，后半段（mid）。
        //从mid-1向前寻找，能找到比result小的值第二种，找不到第一种
        if(result > nums[mid]){
            end = mid-1
            index = mid
            result = nums[mid] //result取小值
        }   
    }
    //判断降序
    if(nums[nums.length-1] < result){
        result = nums[nums.length-1]
    }
    return result
};

//优化掉result
var findMin = function(nums) {
    if(nums.length==1)return nums[0]
    let start = 0
    let end = nums.length -1
    //index 设置为第一个值
    let index = 0
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        //index<mid，两种情况：1.全部升序，2.前半段升序（mid），断崖，后半段。
        //从mid+1向后寻找，能找到比index小的值第二种，找不到第一种
        if(nums[index] < nums[mid]){
            start = mid+1
        }
        //index==mid，四种情况：1.前半段升序（mid），断崖，后半段。2,前半段升序（mid），断崖，后半段。3.全部升序，4.全部降序
        //从第二位开始向后依次寻找,start需在index的后一位
        if(nums[index] == nums[mid]){
            index =  index +1 //result移动一位
            start = index+1 //start移动两位  
        }
        //index > mid,两种情况：1.全部降序，2.前半段升序，断崖，后半段（mid）。
        //从mid-1向前寻找，能找到比index小的值第二种，找不到第一种
        if(nums[index] > nums[mid]){
            end = mid-1
            index = mid //index取小值的索引
        }   
    }
    //上面漏判断降序特殊情况。index= mid时会少掉最后一位
    if(nums[nums.length-1] < nums[index]){
        result = nums[nums.length-1]
    }
    return nums[index]
};


//index从最后一位开始（这一版本好理解，并且代码也好）
var findMin = function(nums) {
    if(nums.length==1)return nums[0]
    let start = 0
    let end = nums.length -1
    //index 设置为第一个值
    let index = nums.length -1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        //index<mid，两种情况：1.全部降序，2.前半段升序（mid），断崖，后半段。
        //从mid-1向后寻找，能找到比index小的值第二种，找不到第一种
        if(nums[index] < nums[mid]){
            start = mid+1
        }
        //index==mid，四种情况：1.前半段升序（mid），断崖，后半段。2,前半段升序（mid），断崖，后半段。3.全部升序，4.全部降序
        //从第二位开始向前依次寻找,end需在index的前一位
        if(nums[index] == nums[mid]){
            index =  index -1 //result移动一位
            end = index -1 //start移动两位  
        }
        //index > mid,两种情况：1.全部升序，2.前半段升序，断崖，后半段（mid）。
        //从mid+1向前寻找，能找到比index小的值第二种，找不到第一种
        if(nums[index] > nums[mid]){
            end = mid-1
            index = mid //index取小值的索引
        }   
    }
    return nums[index]
};


//优化掉index
var findMin = function(nums) {
    if(nums.length==1)return nums[0]
    let start = 0
    //以end值开始比较
    let end = nums.length -1
    while(start<end){ //不能等于，否则死循环，为什么
        let mid = Math.floor((start+end)/2)
        //end<mid，两种情况：1.全部降序，2.前半段升序（mid），断崖，后半段。
        //从mid-1向后寻找，能找到比end小的值第二种，找不到第一种
        if(nums[end] < nums[mid]){
            start = mid+1
        }
        //end==mid，四种情况：1.前半段升序（mid），断崖，后半段。2,前半段升序（mid），断崖，后半段。3.全部升序，4.全部降序
        //从第二位开始向前依次寻找
        if(nums[end] == nums[mid]){
            end =  end -1 //result移动一位
        }
        //end> mid,两种情况：1.全部升序，2.前半段升序，断崖，后半段（mid）。
        //从mid+1向前寻找，能找到比end小的值第二种，找不到第一种
        if(nums[end] > nums[mid]){
            end = mid //end取小值的索引
        }   
    }
    return nums[start]
};


console.log(findMin([1,3,5]))
console.log(findMin([5,1,3]))
console.log(findMin([5,3,1]))
console.log(findMin([3,3,1]))
console.log(findMin([10,1,10,10,10]))