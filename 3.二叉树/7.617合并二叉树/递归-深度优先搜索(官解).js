

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

//进阶：时间On，空间O1 ，牛客网的要求，又来了，官解都做不到还在那叭叭

//解法3：官解-递归-深度优先遍历，时间O(min⁡(m,n))空间O(min(m,n))
var mergeTrees = function(root1, root2) {
    
    const func1 = (root1,root2) =>{

        if(!root1 && !root2)return null //必须加上null,否则节点类型错误，处理树形结构或对象时，返回null通常表示一个空的节点或不存在的引用
        if(!root1)return root2
        if(!root2)return root1
        root1.val = root1.val + root2.val
        root1.left = func1(root1.left,root2.left)
        root1.right = func1(root1.right,root2.right)
        return root1
    }
    let head = func1(root1,root2)

    return head
}
