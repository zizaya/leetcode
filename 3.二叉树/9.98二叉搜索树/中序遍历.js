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
//递归,判定条件
//中序遍历，是否是升序数组

//中序遍历，是否是升序数组,时间复杂度为 O(n)，空间复杂度 O(n)
var isValidBST = function(root) {
    let result = []
    const func1 = (root) =>{
        if(!root) return null
        func1(root.left)
        result.push(root.val)
        func1(root.right)
    }
    func1(root)
    for(let i = 0 ;i<result.length-1;i++){
        if(result[i+1]-result[i] <=0)return false
    }
    return true
};



//中序遍历，是否是升序数组，优化空间，1.改成迭代。2.不用数组，用一个变量保存上一个节点的值，进行比较。
//时间复杂度为 O(n)，空间复杂度 O(n)
var isValidBST = function(root) {
    let lastVal = -Infinity
    let stack = []
    while(stack.length || root){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(lastVal >= root.val)return false
        lastVal = root.val
        root = root.right
    }
    return true
};