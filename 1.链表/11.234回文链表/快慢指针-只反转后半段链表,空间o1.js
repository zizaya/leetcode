/**
 * @param {ListNode} head
 * @return {boolean}
 */
//你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
//使用快慢指针，只反转链表的后半段，所以不影响前半段链表的顺序，天才
var isPalindrome = function(head) {
    let slow = head
    let fast = head.next
    //双指针找到链表中间部分,即为slow的位置
    while(fast&& fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    //对于偶数个节点，slow.next完美匹配后半段，
    //对于奇数个节点，slow.next不包括中间那个
    let prev = null
    let cur = slow.next
    
    //反转后半段链表
    while(cur){
        let temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }
    console.log(head,prev)
    //比较head和反转的后半段的值，（此时head后半段已经是断掉的了，但其实head长度无所谓，比对时，只看反转的后半段链表的长度）
    while(prev && head){
        if(prev.val !=head.val)return false
        prev = prev.next
        head = head.next
    }
    return true
}

console.log(isPalindrome(formatL([1,2,2,1])))