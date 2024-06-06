/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right+= (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//解法1：递归
//解法2：迭代
//两种解法，时间On，空间On


//解法2：迭代，推根节点的节点值进栈
var inorderTraversal = function(root) {
    if(!root)return []
    let result = []
    let stack = [root]
    while(stack.length){
        root = stack.pop()
        //将节点push进栈，根节点只存储val
        root.right && stack.push(root.right)
        root.val != null && stack.push(root.val) //root.val必须指明不等于null，因为val有可能为0
        root.left && stack.push(root.left)
        
        //存入结果
        if(!root.left){
            //只判断等于null的才存储，因为root.val不等于null的说明还在向下遍历，
            root.val==null && result.push(root)
        }  
    }
    return result
};

//解法2:迭代，只推节点进栈（记这个）
var inorderTraversal = function(root) {
    if(!root)return []
    let result = []
    let stack = []
    while(stack.length || root){
        //遍历至没有左节点，期间的根节点推进栈
        while(root){
            stack.push(root)
            root = root.left 
        }
        //取出栈中节点，push进result
        root = stack.pop()
        result.push(root.val)
        //将节点变为右节点，继续遍历
        root = root.right
    }
    return result
};