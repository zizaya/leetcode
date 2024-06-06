/**
 * @param {ListNode} head
 * @return {boolean}
 */
//快慢指针，快head慢head，快head.next慢head，两种情况都可以相遇
//slow,fast起始指针不同
var hasCycle = function(head) {
    if(!head)return false
    let slow = head
    let fast = head.next
    while(head && fast && fast.next){
        if(slow == fast){
            return true
        }else{
            slow = slow.next
            fast = fast.next.next
        }
    }
    return false
};
//slow,fast起始指针相同
var hasCycle = function(head) {
    if(!head)return false
    let slow = head
    let fast = head
    while(head && fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            return true
        }
    }
    return false
};