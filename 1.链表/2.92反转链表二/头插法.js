function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
* @param {ListNode} head
* @param {number} left
* @param {number} right
* @return {ListNode}
*/
//穿针引线：头插法 时间on,空间o1，虽然跟另一个一样，但是另外一个要遍历两边
var reverseBetween = function(head, left, right) {
  //创造一个头部，防止从头部开始反转出现错误
  let dummy = new ListNode(null)
  dummy.next = head
  //遍历到反转链表的前一个节点
  let count = 0
  let cur = dummy
  while(cur && count <left-1){
      count ++
      cur = cur.next
  }
  let prevNode = cur

  //链表的第一个节点
  cur = cur.next
  count ++
  //以[1,2,3,4,5]，left：2，right：4举例子
  //第一次循环：将3插入到1,2之间，13245
  //第二次循环：将4插入到1,3之间，14325 完成
  //其中prevNode是1，不变，cur是2，不变。
  while(cur && cur.next && count <right){
      count ++ 
      let temp = cur.next.next
      cur.next.next = prevNode.next
      prevNode.next = cur.next
      cur.next = temp
  }
  return dummy.next
}
console.log(reverseBetween(formatL([1,2,3,4,5]),2,4))
console.log(reverseBetween(formatL([5]),1,1))
console.log(reverseBetween(formatL([3,5]),1,1))
console.log(reverseBetween(formatL([3,5,6]),1,2))
console.log(reverseBetween(formatL([3,5,6]),2,3))
