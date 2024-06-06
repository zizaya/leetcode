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

//解法1：递归
var postorderTraversal = function(root) {
    let result = []
    const func1 = (root) =>{
        if(!root)return 
        func1(root.left)
        func1(root.right)
        result.push(root.val)
        
    }
    func1(root)
    return result
};