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

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//迭代 时间O(n) 空间o(n)
var reverseList = function(head) {
    let prev = null
    while(head){
        //保存下一个节点
        let next = head.next
        //当前节点指向前一个节点
        head.next = prev
        //前一个节点移动到当前节点
        prev = head
        //当前节点移动到下一个节点
        head = next
    }
    //当head==null时，返回上一个节点，即反转链表的头
    return prev
};

console.log(reverseList( formatL([1,2,3,4,5])))