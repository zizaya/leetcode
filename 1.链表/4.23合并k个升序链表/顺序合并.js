/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    //递归-合并两个链表
    const mergeTwoNodes = (list1,list2)=>{
        if(list1 == null)return list2
        if(list2 == null)return list1
        if(list1.val <=list2.val){
            list1.next = mergeTwoNodes(list1.next,list2)
            return list1
        }
        if(list1.val > list2.val){
            list2.next = mergeTwoNodes(list1,list2.next)
            return list2
        }
    }
    //创建虚拟头部，分别合并lists里的链表
    let result = new ListNode(0)
    lists.forEach(n=>{
        result.next = mergeTwoNodes(result.next,n)
    })
    return result.next
}