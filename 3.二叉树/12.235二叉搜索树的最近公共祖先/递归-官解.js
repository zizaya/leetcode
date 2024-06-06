/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


//官解-递归,时间On，空间On
var lowestCommonAncestor = function(root, p, q) {
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left,p,q)
    }
    if(root.val <p.val && root.val < q.val){
        return lowestCommonAncestor(root.right,p,q)
    }

    return root
}