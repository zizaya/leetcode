/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//快慢指针-官解数学推导，a=链表头到入口的长度（不包含入口），b=环形链表中的长度
/* 第一次相遇：
fast = slow + nb ,n是fast在环内走的了几遍,相遇时fast比slow多走了n次（整数）环形链表的长度b
fast = 2slow，fast是slow的两倍
推导出：slow = nb

假设有一个指针，从链表头部开始走，那么每次走到环形入口的步数是k=a+nb，
那么k =a + slow,即此时slow走a步就到达入口处。
解题思路：
在slow与fast第一次相遇的时候，fast移动到链表头，每次走一步,与slow相遇时就是入口节点 */
var detectCycle = function(head) {
    if(!head) return null
    let cur = head
    let slow = cur
    let fast = cur.next
    while(cur && fast && fast.next){
        //fast和slow第一次相遇，fast移动到head，slow也要移动一步跟fast对应
        if(slow == fast){
            fast = head
            slow = slow.next
            
            //fast移动a步（一步一步走） = slow移动a步 = 环形链表入口
            while(fast){
                if(fast == slow){
                    return fast
                }
                fast = fast.next
                slow = slow.next 
            }

        }else{
            slow = slow.next
            fast = fast.next.next
        }
    }
    return null
}
