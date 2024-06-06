
//要求：时间ON，空间ON
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
//深度优先遍历，先访问右节点，如果深度小于result.length,就是结果
//广度优先遍历，取每层最后一个节点，就是结果

//深度优先遍历，先访问右节点，如果深度小于result.length,就是结果
var rightSideView = function(root) {
    let result = []
    const func1 = (root,max)=>{
        if(!root)return
        if(result.length < max)result.push(root.val)
        func1(root.right,max+1)
        func1(root.left,max+1)
    }
    func1(root,1)
    return result
}
