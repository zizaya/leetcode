//递归 ，时间0n，空间o1
var reverseList = function(head) {
    //递归返回条件
    if(head == null || head.next==null){
        return head
    }
    //返回链表。p是原本链表的尾部
    let p = reverseList(head.next)
    //反转链表，在[1,2,3,4,5]中，相当于5.next.next = 4, 4.next = null
    head.next.next = head
    head.next = null
    //返回反转链表的头部，即5
    return p
}
