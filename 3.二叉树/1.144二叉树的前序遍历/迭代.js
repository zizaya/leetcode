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
//两种解法，时间On，空间On

//解法2：迭代
var preorderTraversal = function(root) {
    if(!root)return []
    let result = []
    let stack = [root]
    while(stack.length){
        let root = stack.pop()
        result.push(root.val)
        
        root.right && stack.push(root.right)
        root.left && stack.push(root.left)
    }
    return result
};