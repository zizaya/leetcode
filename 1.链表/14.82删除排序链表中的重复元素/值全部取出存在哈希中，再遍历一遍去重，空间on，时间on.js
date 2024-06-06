/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//进阶，时间on，空间o1
//本题要求原链表，删除重复的元素，并不留下重复的元素
//解法1，值全部取出存在哈希中，再遍历一遍去重，空间on，时间on
//解法2，因为是排序的，双指针，只要fast==slow，就排除两个，空间o1，时间on

//解法1:重复的值全部取出存在哈希中，再遍历一遍去重，空间on，时间on
var deleteDuplicates = function(head) {
    if(!head)return head
    let arr = new Set()
    //将重复的值存到set里
    let cur = head
    while(cur){
        if(cur.next && cur.val == cur.next.val){
            arr.add(cur.val)
        }
        cur = cur.next
    }
    //重新遍历，重复的节点去掉,加dummy是防止第一个节点也是重复的
    let dummy = new ListNode()
    dummy.next = head
    cur = dummy
    while(cur){
        if(cur.next && arr.has(cur.next.val)){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }   
    
    return dummy.next
};