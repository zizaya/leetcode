/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
//快慢指针-链表中总结过，长度和位置问题用快慢指针。

var kthToLast = function(head, k) {
    let slow = head
    let fast = head
    let count = 1
    //fast往前先移动k步，
    while(head && count <=k){
        fast = fast.next
        count ++ 
    }
    //fast和slow一起移动，当fast为null的时候，slow就是倒数第K个节点
    while(fast){
        fast = fast.next
        slow = slow.next
    }
    return slow.val
};

console.log(kthToLast(formatL([1,2,3,4,5]),2))//4