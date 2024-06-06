/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//要求：空间复杂度ON
//进阶：时间复杂度On，空间复杂度O1(原地操作)，
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//解法1：递归，时间复杂度为 O(n)，空间复杂度 O(log(n))- O(n)。
var invertTree = function(root) {
    const func1 = (root) =>{
        if(!root)return null
        let temp = root.right
        root.right = root.left
        root.left = temp
        func1(root.left)
        func1(root.right)

    }
    func1(root)
    return root
};