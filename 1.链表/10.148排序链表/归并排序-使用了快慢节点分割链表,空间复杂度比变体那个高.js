/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//归并排序+快慢指针找中点，节省了空间，时间O(n log n)，空间O(log n)
var sortList = function(head) {
    if(head == null) return head
    const split = (head) =>{
        if(head && head.next == null)return head
        let slow = head
        //因为从slow.next开始分割，所以fast=head会使2个节点的链表不能分割，可以自己画图理解
        let fast = head.next
        //计算出链表中间位置
        while(fast&&fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        //将链表分为两个链表
        let left = head
        let right  = slow.next
        slow.next = null
        //合并并且排序递归
        return merge(split(left),split(right))
    }
    //排序的函数
    const merge=(left,right)=>{
        if(left == null )return right
        if(right == null)return left
        
            if(left.val<=right.val){
                left.next = merge(left.next,right)
                return left
            }
            if(right.val<left.val){
                right.next = merge(left,right.next)
                return right
            } 
    }
    return split(head)

}