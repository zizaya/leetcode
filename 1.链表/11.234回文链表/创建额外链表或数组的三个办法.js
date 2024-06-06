
//反转并且形成新链表，再将新链表和head对比，时间复杂度为O(n)，空间复杂度也是O(n)

var isPalindromeByNode = function(head) {
    //不能只是反转head，这样会导致head本身也被反转，无法后续遍历，要创建新的链表，将head.val赋给新节点
    const createReverseNode = (lists) =>{
        let cur = lists
        let dummy = new ListNode()
        while(cur){
            //cur节点插入到dummy和已经遍历的节点中间，形成反转链表
            let temp = dummy.next
            //cur.val形成的新节点
            let node = new ListNode(cur.val)
            //插入到dummy后面，其他节点前面
            dummy.next = node
            node.next = temp
            //继续遍历cur
            cur = cur.next
        }
        return dummy.next
    }
    //获得反转的新链表
    let reverseNode = createReverseNode(head)
    //遍历并比较head和反转新链表
    while(reverseNode && head){
        if(reverseNode.val != head.val)return false
        reverseNode = reverseNode.next
        head = head.next
    }
    //长度不同也不是回文链表
    if(head!==null || reverseNode!==null)return false
    return true
};

//官解--反正都是用到了空间n不如直接把值放到数组中，再双指针判断数组和链表
var isPalindromeByArray = function(head) {
    let arr = []
    let cur = head
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    cur = head
    for(let i = arr.length-1,j=0; i>=j; i--,j++){
        if(arr[i] != cur.val)return false
        cur = cur.next
    }
    return true
}

//官解--双指针判断数组和链表，不如只双指针判断数组
var isPalindromeByArray2 = function(head) {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    for(let i = arr.length-1,j=0; i>=j; i--,j++){
        if(arr[i] != arr[j])return false
    }
    return true
}

console.log(isPalindromeByArray2(formatL([1,2,2,1])))
//上面三个函数，时间复杂度空间复杂度都是on，没有太多区别，
//isPalindromeByArray2可能是更直观的选择，因为它直接使用数组的特性进行双指针比较，而无需反转链表，代码更为简洁。