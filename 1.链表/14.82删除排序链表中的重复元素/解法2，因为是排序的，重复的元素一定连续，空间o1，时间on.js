/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//进阶，时间on，空间o1
//本题要求原链表，删除重复的元素，并不留下重复的元素
//解法1，值全部取出存在哈希中，再遍历一遍去重，空间on，时间on
//解法2，因为是排序的，双指针，只要fast==slow，就排除两个，空间o1，时间on

//解法2，因为是排序的，重复的元素一定连续，空间o1，时间on
var deleteDuplicates = function(head) {
    //创建dummy是防止第一个节点也是空节点
    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    let cur = head
    while(cur){
        
        if(cur.next && cur.val == cur.next.val){
            let temp = cur.val
            //如果cur.val == cur.next.val，那么遍历到不相等
            while(cur.next && cur.val == cur.next.val){
                cur  = cur.next
            }
            //如果cur.next == null，且还是cur.val的值，说明遍历到最后一个都相等
            if(cur.next ==null && cur.val == temp){
                prev.next = null
            }
        }else{
            //不相等，则拼接链表到prev
            prev.next = cur
            prev = prev.next
        }
        
        cur = cur.next
    }
    return dummy.next
}
console.log(deleteDuplicates(formatL([1,1,1])))