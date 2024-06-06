/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//归并排序，其中找出链表中间位置，此方法没用快慢指针，而是新建了节点，可用快慢指针，减少内存开销
 var sortList = function(head) {
    if(head == null) return head
    const split = (head) =>{
        if(head.next == null)return head
        
        let leftNode = new ListNode(null)
        let rightNode = new ListNode(null)
        let length =0
        let cur = head
        //计算出链表长度
        while(cur){
            cur = cur.next
            length ++
        }
        //计算出链表中间位置
        let mid = Math.floor((length-1)/2)

        //将链表分为两个链表
        let left = leftNode
        left.next = head
        left = left.next
        length = 0
        while(left && length<mid-1){
            left = left.next
            length ++ 
        }
        let right = rightNode
        
        right.next=left.next
        left.next = null
        
        

        //合并并且排序递归
        return merge(split(leftNode.next),split(rightNode.next))
    }
    //排序的函数
    const merge=(left,right)=>{
        if(left == null)return right
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