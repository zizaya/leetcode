
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


//解法2：迭代-自己写的DFS:深度优先遍历，时间复杂度为 O(m + n)，空间复杂度为 O(max(m, n))
var mergeTrees = function(root1, root2) {
    if(!root1)return root2
    if(!root2)return root1
    let head = root1
    
    let stack1 = [root1]
    let stack2 = [root2]
    //计算根节点的值
    root1.val = root1.val + root2.val
    //两个树一起深度遍历
    while(stack1.length || stack2.length){
        let root1 = stack1.pop()
        let root2 = stack2.pop()
        if(root1 && root2){
            //如果root1没有left，root2的赋值给他
            //如果root2有left，root2没有，不管
            //如果root1和root2都有left，val相加
            if(!root1.left &&  root2.left){
                root1.left = root2.left
            }else if(root1.left &&  root2.left){
                root1.left.val = root1.left.val + root2.left.val
                //只有root1和root2都有left分支，才继续遍历left分支下的子节点，进行相加或者赋值。否则，直接用一只树就行了
                stack1.push(root1.left)
                stack2.push(root2.left)

            }
            //right分支一样处理
            if(!root1.right && root2.right){
                root1.right = root2.right
            }else if(root1.right &&  root2.right){
                root1.right.val = root1.right.val + root2.right.val
                stack1.push(root1.right)
                stack2.push(root2.right)
            }
        }
    }
    return head
}