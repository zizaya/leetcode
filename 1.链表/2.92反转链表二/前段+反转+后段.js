/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
//穿针引线：分为前段链表+反转链表+后段链表，时间on,空间o1
var reverseBetween = function(head, left, right) {
    let cur = head
    let count = 1
    while(cur && count<left-1){
        count++
        cur = cur.next
    }
    //保存反转链表前的一个节点,如果从头开始反转，就是null
    let prevNode = left == 1?null:cur
    while(cur && count<=right){
        count ++ 
        cur = cur.next
    }
    //保存反转链表的后一个节点
    let nextNode = cur

    //反转链表
    let node = prevNode?prevNode.next:head
    count = left
    let prev = nextNode //连接后段链表
    while(node && count<=right){
        count ++ 
        let temp = node.next
        node.next = prev
        prev = node
        node = temp
    }
    
    //返回结果
    if(left!=1){ 
        //前段链表连接反转链表
        prevNode.next = prev
        return head
    }else{
        //如从链表头部反转，返回反转链表的头部
        return prev
    }
  
};

console.log(reverseBetween(formatL([1,2,3,4,5]),2,4))
console.log(reverseBetween(formatL([5]),1,1))
console.log(reverseBetween(formatL([3,5]),1,1))
console.log(reverseBetween(formatL([3,5,6]),1,2))
console.log(reverseBetween(formatL([3,5,6]),2,3))