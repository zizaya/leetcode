function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //创建一个dummy头部
    let dummy = new ListNode(null)
    let cur = dummy
    //遍历两个链表
    while(list1 && list2){
        //list1小于list2，就cur.next = list1
        if(list1.val<list2.val){
            cur.next = list1
            list1 = list1.next
        }else{
        //list2小于list1，就cur.next = list2
            cur.next = list2
            list2 = list2.next
        }
        //cur跳到结尾，继续遍历
        cur = cur.next
    }
    //判断list1和list2谁有剩余，cur.next = 剩余节点
    cur.next = list1==null? list2 : list1
    return dummy.next
};

console.log(mergeTwoLists(formatL([1,2,4]),formatL([1,3,4])))

