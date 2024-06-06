/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
//要求：空间O1(原树上操作)，时间On

//递归-时间On，空间O(log n)至O(n)
var treeToDoublyList = function(root) {
    //创建初始头部
    let prev =  new Node(null,null,null)
    let head = prev
    //递归-中序遍历
    const func1 = (root) =>{
        if(!root)return 
        func1(root.left)
        //连接链表
        let node = new Node(root.val,prev,null)
        prev.right = node
        prev = prev.right

        func1(root.right)
    }
    func1(root)
    //尾部环形链表处理
    prev.right = head.right
    if(head.right) head.right.left = prev

    return head.right
}