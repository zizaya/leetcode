/**
 * @param {ListNode} head
 * @return {boolean}
 */

//时间on,空间on，递归是将函数推倒栈里，其实比新建链表数组差，因为在许多语言中，堆栈帧的开销很大
var isPalindrome = function(head) {
    //frontHead指向head
    let frontHead = head
    //将node递归到最后一个节点，为null时返回true
    const convertNode = (node) =>{
        //当非null时
        if(node != null){
            //递归node节点到最后一个节点，再执行下面的代码，即将函数从栈中调出
            //这里的return false是结果穿透，当有一个节点不匹配，穿透false
            if(!convertNode(node.next) ){
                return false
            }
            //主要用来判断是否回文的
            if(node.val != frontHead.val){
                return false
            }
            //当node遍历到最后一个节点，开始向上合并，frontHead指向head，并且逐渐next
            frontHead = frontHead.next
        }
        //最后一个节点的next为null时返回true，或者对于其他节点来说以上判断都不满足时
        return true
    }
    return convertNode(head)
}

console.log(isPalindrome(formatL([1,2,2,1])))

/* 执行5遍，
第一遍：null（倒数第一个节点的node.next），return true
第二遍：倒数第一个节点1，return true
第三遍：2，return true
第四遍：2，return true
第五遍：第一个节点1，return true
总体返回true */