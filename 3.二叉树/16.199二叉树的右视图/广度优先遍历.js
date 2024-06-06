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

//广度优先遍历，取每层最后一个节点，就是结果
var rightSideView = function(root) {
    if(!root)return []
    let queue = [[root]]
    let result = []
    while(queue.length>0){
        let rootList = queue.shift()
        let temp = []
        for(let i = 0;i<rootList.length;i++){
            rootList[i].left && temp.push(rootList[i].left)
            rootList[i].right && temp.push(rootList[i].right)
            if(i == rootList.length-1)result.push(rootList[i].val)
        }
        if(temp.length>0)queue.push(temp)
    }
    return result
}