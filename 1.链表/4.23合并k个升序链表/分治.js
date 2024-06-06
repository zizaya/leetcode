/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//分治
var mergeKLists = function(lists) {
    //合并两个链表
    const mergeTwoNodes = (list1,list2)=>{
        
        if(list1 == null) return list2
        if(list2 == null) return list1
        if(list1.val<=list2.val){
            list1.next = mergeTwoNodes(list1.next,list2)
            return list1
        }
        if(list1.val>list2.val){
            list2.next = mergeTwoNodes(list1,list2.next)
            return list2
        }
    }
    //递归链表
    const merge = (lists,first,last) =>{
        //最小子问题
        if(first == last)return lists[first]
        if(first > last)return null
        let mid = Math.floor((first+last)/2)
        //合并递归
        return mergeTwoNodes(merge(lists,first,mid),merge(lists,mid+1,last))
    }

    return merge(lists,0,lists.length-1)
}

console.log(mergeKLists([formatL([1,4,5]),formatL([1,3,4]),formatL([2,6])]))//11234456