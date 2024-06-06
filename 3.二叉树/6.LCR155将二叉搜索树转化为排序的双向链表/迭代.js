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

//迭代-时间On，空间On,
var treeToDoublyList = function(root) {
    //创建初始头部
    let prev =  new Node(null,null,null)
    let head = prev
    let stack = []
    while(stack.length || root){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        //连接链表
        let node = new Node(root.val,prev,null)
        prev.right = node
        prev = prev.right

        root = root.right

    }
    //尾部环形链表处理
    prev.right = head.right
    if(head.right) head.right.left = prev

    return head.right
}
