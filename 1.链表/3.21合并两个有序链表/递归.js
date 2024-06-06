//递归-时间o(n+m),空间o(n+m)
var mergeTwoLists = function(list1, list2) {
    //最小子问题
    if(list1 == null)return list2
    if(list2 == null)return list1
    //递归
    if(list1.val <= list2.val){
        list1.next = mergeTwoLists(list1.next,list2)
        return list1
    }
    if(list1.val > list2.val){
        list2.next = mergeTwoLists(list1,list2.next)
        return list2
    }

}

console.log(mergeTwoLists(formatL([1,2,4]),formatL([1,3,4])))