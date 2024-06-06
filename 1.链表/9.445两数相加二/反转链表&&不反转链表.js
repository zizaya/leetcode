/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//1.不反转链表，就是把两个链表遍历后每个值放入栈中，从个位开始结果放入新链表，新链表放入时，将新节点指向null，上一个节点指向新节点
//2.反转链表后相加，从个位开始结果放入新链表，结尾反转新链表返回，
var addTwoNumbers = function(l1, l2) {
    //反转链表函数
    const reverse = (node) =>{
        let cur = node
        let prev = null

        while(cur){
            let temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }
        return prev
    }
    //反转链表，使之从个位开始对齐
    let list1 = reverse(l1)
    let list2 = reverse(l2)
    //注意，之所以不一次性计算所有节点的和，在把和变成链表，是因为，js只能存放一定的大小，再大会变成999e之类的表示，转成链表会出错
    //判断上一个节点是否是大于10
    let lastNodeAboveTen = false
    //存放结果的节点
    let resultNode =  new ListNode(null)
    let cur = resultNode
    while(list1 || list2){
        //得出list1和list2节点上的数值
        let num1 = list1 ? list1.val : 0
        let num2 = list2 ? list2.val : 0
        //计算两个节点的和
        let result = lastNodeAboveTen?num1 + num2 + 1:num1 + num2 
        //判断是否大于10（不可能大于20）,并且将和放入节点
        if(result >=10){ 
            cur.next = new ListNode(result-10)
            lastNodeAboveTen = true
        }else{
            cur.next = new ListNode(result)
            lastNodeAboveTen = false
        }
        cur = cur.next
        //遍历下一个节点
        if(list1)list1 = list1.next
        if(list2)list2 = list2.next
    }
    //当list1和list2都遍历完，如果上一个节点大于10，再push一个1
    if(lastNodeAboveTen){
        cur.next = new ListNode(1)
    }
    //反转resultnode
    return reverse(resultNode.next)
};

console.log(addTwoNumbers(formatL([7,2,4,3]),formatL([5,6,4])))