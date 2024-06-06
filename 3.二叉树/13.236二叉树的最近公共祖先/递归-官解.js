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

//要求：时间On


//还有个存储父节点的办法

//递归，时间On，空间On
var lowestCommonAncestor = function(root, p, q) {
    //最小子问题
    if(root == null || root == p || root == q){
        return root
    }
    //递归
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)

    if(left && right)return root //对于一个节点来说，他的左右分别返回p和q，那么就是最近祖先

    return left ?? right  //归的过程中，如果一个节点，只有左或者右有，那么就是不为null的那边
}