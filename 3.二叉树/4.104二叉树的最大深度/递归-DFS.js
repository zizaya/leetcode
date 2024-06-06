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
 * @return {number}
 */

//要求 时间复杂度On,空间复杂度O1

//递归，遍历的时候传参数过去,时间On，空间On，因为递归要用到栈且用到了arr存储结果
var maxDepth = function(root) {
    let arr = []
    let count = 0
    const func1 = (root,count) =>{
        //当到底部，存储深度，
        //不用重置count，因为count作为参数传递时，每次递归都是将count作为私有变量使用，如果count不作为参数使用，那么就得重置count=0
        if(!root){
            arr.push(count)
            return
        }
        //count需放在最前面
        count++
        func1(root.left,count)
        func1(root.right,count)
    }
    func1(root,count)
    arr.sort((a,b)=>b-a)
    return arr[0]
};


//递归，时间On，空间On-O(logn)，因为递归要用到栈,优化了arr
var maxDepth = function(root) {
    let max = 0
    const func1 = (root,count) =>{
        //当到底部，存储深度，
        //不用重置count，因为count作为参数传递时，每次递归都是将count作为私有变量使用，如果count不作为参数使用，那么就得重置count=0
        if(!root){
            max = Math.max(count,max)
            return
        }
        //count需放在最前面
        count++
        func1(root.left,count)
        func1(root.right,count)
    }
    func1(root,0)
    return max
};
