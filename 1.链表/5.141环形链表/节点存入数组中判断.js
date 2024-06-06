/**
 * @param {ListNode} head
 * @return {boolean}
 */
//将链表存到数组中（注意不能只存入val），遍历链表，如果节点相同就是环形
//时间on,空间on
var hasCycle = function(head) {
    let arr = []
    while(head){
        if(arr.indexOf(head)==-1){
            arr.push(head)
            head = head.next
        }else{
            return true
        }  
    }
    return false
};