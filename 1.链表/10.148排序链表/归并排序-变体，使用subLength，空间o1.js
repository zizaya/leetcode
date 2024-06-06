/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* 知识点：
问题：为什么下列代码，
        let next = cur.next;
        cur.next = null;
        cur = next;
     next不被cur.next=null影响
    而let prev = dummy，复制的就是dummy排序过的链表呢
答：
    next和prev都是指向链表的引用，
    第一段代码中，next =cur.next，cur.next指向了下一个节点，然后cur.next断开了与后续节点的连接，但next指向的节点并没有改变，所以cur.next=null影响不了next
    第二段代码中，pre = dummy,指向的也是引用，prev更改了，dummy也更改
    
    这涉及到，修改引用和修改共同指定对象的区别
    修改共同指定对象：改变对象自身的内容，增删改查（上面的pre=dummy,pre后续的增加节点）
    修改引用：修改了变量本身存储的地址，如指向另一个对象或者null （cur.next = null）*/

//归并排序，是变体，去掉了递归，时间O(n log n)，空间O(1)
var sortList = function(head) {
    const merge = (list1,list2) =>{
        if(list1 == null)return list2
        if(list2 == null)return list1
        if(list1.val<= list2.val){
            list1.next = merge(list1.next,list2)
            return list1
        }
        if(list1.val >list2.val){
            list2.next = merge(list1,list2.next)
            return list2
        }
    }
    if(head==null)return head
    //创建一个dummy头部，用来连接排序后的链表
    let dummy = new ListNode()
    dummy.next = head

    //获取链表的长度
    let cur = head
    let length = 0
    while(cur){
        cur = cur.next
        length++
    }
    //subLength是最小划分的链表个数，1,2,4,6这样变，从2个1节点链表排序一整个链表，到2个2节点链表排序一整个链表，直到subLength是链表的长度，可以余一点
    //根据数学归纳法，这样处理过的链表是排序的
    for(let subLength =1;subLength<=length;subLength=subLength*2){
        //prev指向每次遍历排序后的dummy，是一个指针的效果
        let prev = dummy
       //cur指针的作用：分割list1链表和list2链表，找到分割点
       //每遍历完一遍链表，subLength*2，cur指到dummy，是上一次遍历排序后的
        cur = dummy.next
        while(cur){
             //list1定义为cur存在的位置
            let list1 = cur
            //找到list1分割点
            for(let i=1;i<subLength && cur.next!==null;i++){
                cur = cur.next
            }
            //分割list1和后面的list2
            let next = cur.next
            cur.next = null
            cur = next
            //list2定义为分割点的下一个节点
            let list2 = cur
            //找到list2分割点,cur不为null
            for(let i=1;i<subLength && cur!=null&&cur.next!==null;i++){
                cur = cur.next
            }
            //分割list2和后面的节点
            if(cur){
                next = cur.next
                cur.next = null
                //cur移位到下一个需要分割节点
                cur = next
            }
            //prev.next连接排序后的list1和list2
            prev.next = merge(list1,list2)
            //移位prev指针到最后一位，等待连接新的排序后的节点
            while(prev.next){
                prev = prev.next
            }
        }
        
    }
    return dummy.next

}
console.log(sortList(formatL([4,2,1,3])))

