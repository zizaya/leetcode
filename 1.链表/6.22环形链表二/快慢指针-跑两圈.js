/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//快慢指针，自己想的非官解-第二次相遇，第一个出现2次的节点就是入口 时间o2n，空间on
var detectCycle = function(head) {
    if(!head)return null
    let slow = head
    let fast = head.next
    let count = 0
    let map = new Map()
    while(head && fast && fast.next){
        //存储节点出现次数
        let num = map.get(slow)?map.get(slow):0
        map.set(slow,num+1)
        //相遇
        if(slow == fast){
            count ++
            if(count == 2){//相遇两次
                for(let m of map){
                    console.log(m)
                    if(m[1] ==2)return m[0]
                }
            }
        }
        slow = slow.next
        fast = fast.next.next
    }
    return null
}