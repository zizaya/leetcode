/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//1.哈希表存储headA节点，遍历headB的节点是否存在headA中，时间o（m+n）,空间o（m）
//2.快慢链表-两条链条，有相交的节点，时间o（m+n），空间o（1）
/* 
链表a至相交节点的节点数 = a
链表b至相交节点的节点数 = b
相交节点到结尾的节点数 = c
两个指针：pointA跑a+c后指向pointB的头部，再跑b
         pointB跑b+c后指向pointA的头部，再跑a
         此时都跑了a+c+b,相遇在相交节点 
         如果不相交，则此时都在null
*/
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB)return null
    let pointA = headA
    let pointB = headB
    //当两者不等于时，继续循环，
    while(pointA != pointB){
        //pointA为null时，指向headB,注意不能是pointA.next == null就指向headB，如不相交，则无限循环永不指向null
        if(pointA == null){
            pointA = headB
        }else{
            pointA = pointA.next
        }

        //pointB为null时，指向headA
        if(pointB == null){
            pointB = headA
        }else{
            pointB = pointB.next  
        }          
    }
    //等于时，相交链表返回相交节点；不相交链表返回null
    return pointA
};
console.log(getIntersectionNode(formatL([1,3,5,7,9]),formatL([2])))
