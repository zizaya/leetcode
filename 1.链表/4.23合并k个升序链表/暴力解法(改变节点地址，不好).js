/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//暴力解法：把所有链表变成数组，排序后再转成链表
var mergeKLists = function(lists) {
    //存放链表数据的arr
    let arr = []
    //所有链表的数据push到arr中
    lists.forEach(list=>{
        while(list){
            arr.push(list.val)
            list = list.next
        }
    })
    //arr排序
    arr.sort((a,b)=>a-b)

    //转成链表
    const format = (arr)=>{
        let node = new ListNode(null)
        let cur = node
        for(let val of arr){
            cur.next = new ListNode(val)
            cur = cur.next
        }
        return node.next
        
    }
    return format(arr)
};