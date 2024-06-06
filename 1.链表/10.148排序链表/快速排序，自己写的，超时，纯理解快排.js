/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//自己写的快速排序-笑死了好长啊还真的写出来了，但超过时间限制
 var sortList = function(head) {
    const split = (head) =>{
        if(head == null)return head
        let rightNode = new ListNode(null)
        let leftNode = new ListNode(null)
        let length =0
        let cur = head
        //计算出链表长度
        while(cur){
            cur = cur.next
            length ++
        }
        //计算出链表中间位置和中间值
        let mid = Math.floor((length-1)/2)
        let midNode
        cur = head
        length =0
        while(cur){
            if(length == mid)midNode = cur
            cur = cur.next
            length++
        }
        //将链表分为大于mid和小于mid两个链表
        cur = head
        length =0
        let right = rightNode
        let left = leftNode
        while(cur){
            if(length!= mid){
                if(cur.val<=midNode.val){
                    left.next = new ListNode(cur.val)
                    left = left.next
                }
                if(cur.val>midNode.val){
                    right.next =  new ListNode(cur.val)
                    right = right.next
                }

            }
            cur = cur.next
            length++
        }
        //合并递归
        return merge(split(leftNode.next),midNode,split(rightNode.next))
    }
    //合并的函数
    const merge=(left,mid,right)=>{
        let node = new ListNode()
        node.next = left ? left : mid
        while(left && left.next){
            left = left.next
        }
        if(left)left.next = mid
        mid.next = right
        return node.next
    }

    return split(head)

}