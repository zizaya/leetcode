/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//进阶，时间on，空间o1
//本题不要求原链表，删除重复的元素，并且留下一个重复的元素
//解法1，值全部取出存在set，自动去重，再遍历形成新链表，空间时间都是on
//解法2，因为是排序的，双指针，只要fast总>slow就行，空间o1，时间on
//直接解法2,
var deleteDuplicates = function(head) {
    if(!head)return head
    let slow = head
    let fast = head.next

    while(fast){
        //fast.val == slow.val，slow直接连接fast.next,fast后移，slow不动
        if(fast.val==slow.val){
            slow.next = fast.next
            fast = fast.next
        }else{
            //fast.val != slow.val，两个节点都后移
            fast = fast.next
            slow = slow.next
        }
        
    }
    return head
};
console.log(deleteDuplicates(formatL([1,2])))