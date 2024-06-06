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
 * @return {number[][]}
 */
//广度优先遍历
var levelOrder = function(root) {
    if(!root)return []
    let queue = [[root]]
    let result = []
    while(queue.length){
        //shift出一个层级
        let arr = queue.shift()
        //存放子节点的暂时arr
        let children =  []
        //存放节点值的暂时arr
        let val = []
        arr.forEach(root => {
            //保存此层级每一个节点值
            val.push(root.val)
            //保存此层级每一个节点的left和right
            root.left && children.push(root.left)
            root.right && children.push(root.right)
        });
        //如果有子节点就存放此层级的子节点
        children.length && queue.push(children)
        //存放此层级的节点值
        result.push(val)
    
    }
    return result
};