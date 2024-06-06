
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

//迭代，时间On，空间On
//牛客网自己官解都是空间On，嗯说O1

var maxDepth = function(root) {
    if(!root)return 0
    let queue = [[root]]
    let max = 0
    while(queue.length){
        let arr = queue.shift()
        let temp = []
        arr.forEach(root => {
            root.left && temp.push(root.left)
            root.right && temp.push(root.right)
        });
        if(temp.length!=0){
            max ++ 
            queue.push(temp)
        }
    }
    return max
}; 
