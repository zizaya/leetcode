/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//进阶，时间on，空间o1
//本题要求原链表，删除重复的元素，并不留下重复的元素
//解法1，值全部取出存在哈希中，再遍历一遍去重，空间on，时间on
//解法2，因为是排序的，双指针，只要fast==slow，就排除两个，空间o1，时间on

//解法2，因为是排序的，重复的元素一定连续，空间o1，时间on
var deleteDuplicates = function(head) {
    if(!head)return head
    //创建dummy是防止第一个节点也是空节点
    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy
    //让cur.next和cur.next.next对比，相等则一直遍历，不相等时，cur再移动
    while(cur.next && cur.next.next){
        //cur.next 与cur.next.next对比,相等则一直遍历到不相等，cur.next就一定是独立元素
        if(cur.next && cur.next.val ==cur.next.next.val ){
            let temp = cur.next.val
            while(cur.next && cur.next.val == temp){
                cur.next = cur.next.next
            }  
        }else{
            //cur移动到cur.next
            cur = cur.next
        }
        
        
    }
    return dummy.next
}
console.log(deleteDuplicates(formatL([1,2,3,3,4,4,5])))
