/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//直接把odd和even各自拼接成一条链表，并且不用额外写dummy
var oddEvenList = function(head) {
    if(!head)return head
    //直接把head.next当evenHead的头
    let evenHead = head.next
    let odd = head
    let even = head.next
    while(even && even.next){
        //直接把odd拼接成链表
        odd.next = even.next
        odd= odd.next
        //直接把even拼接成链表
        even.next = odd.next
        even = even.next
    }
    //拼接evenHead
    odd.next = evenHead
    return head
};
console.log(oddEvenList(formatL([1,2,3,4,5])))