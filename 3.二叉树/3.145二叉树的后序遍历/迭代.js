/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//解法1：递归
//解法2：迭代
//时间空间都是On

//解法2：迭代，推根节点的节点值进栈
var postorderTraversal = function(root) {
    if(!root) return []
    let result = []
    let stack = [root]
    while(stack.length){
        root = stack.pop()
        
        root.val !=null && stack.push(root.val)
        root.right && stack.push(root.right)
        root.left && stack.push(root.left)

        if(!root.left && !root.right){
            //只判断等于null的才存储，因为root.val不等于null的说明还在向下遍历，
            root.val == null && result.push(root)
        }
    }

    return result
};


//解法2：迭代，只推节点进栈（记这个）
var postorderTraversal = function(root) {
    if(!root) return []
    let result = []
    let stack = [root]
    while(stack.length){
        root = stack.pop()
        result.unshift(root.val)
        root.left && stack.push(root.left)
        root.right && stack.push(root.right)
    }

    return result
};

//解法2：迭代，只推节点进栈，只有unshift和shift（记这个）
var postorderTraversal = function(root) {
    if(!root)return []
    const stack = [root]
    const result = []
    while(stack.length){
        root = stack.shift()
        result.unshift(root.val)
        
        root.left && stack.unshift(root.left)
        root.right && stack.unshift(root.right)
 
    }
    return result
}