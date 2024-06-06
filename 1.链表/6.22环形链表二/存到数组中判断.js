/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//节点存到数组中判断 时间on,空间on
var detectCycle = function(head) {
    let arr = []
    while(head){
        if(arr.indexOf(head)!=-1){
            return head
        }else{
            arr.push(head)
            head = head.next
        }
    }
    return head
};