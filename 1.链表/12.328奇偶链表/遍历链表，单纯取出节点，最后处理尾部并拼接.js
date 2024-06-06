/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//自己写的办法-两个dummy分别连接遍历head之后的odd节点和even节点，
//因为遍历的时候没有改head本身的结构，所以最后要对尾部进行处理
var oddEvenList = function(head) {
    if(!head)return head
    //dummy1存放odd节点
    let dummy1 = new ListNode();
    //dummy2存放even节点
    let dummy2 = new ListNode()

    let cur1 = dummy1
    let cur2 = dummy2
    //odd指向头部，even指向下一个节点
    let odd = head
    let even = head.next
    while(even){
        //cur1拼接odd，并且遍历到尾部
        cur1.next = odd
        cur1 = cur1.next
        //cur2拼接even，并且遍历到尾部
        cur2.next = even
        cur2 = cur2.next
        //判断odd和even的next是否存在，不存在赋值为null，已画图判定这样可以
        odd = odd.next?odd.next.next:null
        even =even.next?even.next.next:null
    }
    //断开偶数节点的尾部其他节点
    cur2.next = null
    //当even为null时，可能后面还有一个odd，加上
    if(odd){
        cur1.next = odd
        cur1 = cur1.next
        
    }
    //拼接even到尾部
    cur1.next = dummy2.next
    return dummy1.next
};