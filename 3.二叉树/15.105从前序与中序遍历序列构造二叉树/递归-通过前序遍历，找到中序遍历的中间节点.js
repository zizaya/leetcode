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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

//官解还有个迭代，代码很长不看


//递归，原理就是通过前序遍历，找到中序遍历的中间节点，将中序遍历分为left和right，进行递归
//时间ON，空间ON
var buildTree = function(preorder, inorder) {
    
    const  func1 = (preorder,inorder) =>{
        //最小子问题
        if(inorder.length == 0)return null //可能是没有左节点或者右节点
        if(inorder.length == 1){
            preorder.shift() //找到一个节点时，将前序遍历的对应子节点排除，方便之后寻找根节点
            return new TreeNode(inorder[0])
        }

        let firstVal = preorder.shift() //根节点的值
        let firstNode = new TreeNode(firstVal) //根节点

        //将传来的数组，分为left和right
        let index = inorder.indexOf(firstVal)
        let left = inorder.slice(0,index)
        let right = inorder.slice(index+1)

        //连接根节点，并且进行递归
        firstNode.left = func1(preorder,left)
        firstNode.right = func1(preorder,right)

        return firstNode
    }
    let root = func1(preorder,inorder)

    return root
};