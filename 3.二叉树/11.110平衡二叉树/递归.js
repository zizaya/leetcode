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
 * @return {boolean}
 */
//要求：时间复杂度ON，空间复杂度O1
//递归-自底向上
//递归-自顶向下 时间复杂度ON^2，空间复杂度ON

//任何一个子树也要是平衡二叉树
//解法1：递归-自底向上,时间复杂度ON，空间复杂度ON
var isBalanced = function(root) {
    let isBalanced = true
    //对左右子树分别计算深度的绝对值，如果有一个不平衡，记录
    const func1 = (root,max) =>{
        if(!root) return max //最小子问题，遍历到null开始返回

        let left = func1(root.left,max+1)
        let right = func1(root.right,max+1)
        max = Math.max(left,right)

        if(Math.abs(left-right)>1) isBalanced= false //判断深度
        
        return max 
    }
    func1(root,0)
    //任何一个子节点不平衡，就不是平衡二叉树
    if(!isBalanced)return false 
    return true
};
