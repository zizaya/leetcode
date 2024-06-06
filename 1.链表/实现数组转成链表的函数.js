//数组转成链表
let formatL = function(arr){
    if(arr.length == 0) return {} //数组长度为0，直接返回{}
    let format = function(index){
        let obj = {}
        obj.val = arr[index]  //链表的值，取自arr[]
        if(arr.length - 1 == index){ 
            obj.next = null  //当处于arr的最后一个值时，链表的next为null
        }else{
            obj.next = format(index+1)  //递归调用
        }
        return obj
    }
    return format(0)

}


function ListNode(val, next) {
    this.val = (val===undefined ? null : val)
    this.next = (next===undefined ? null : next)
}
