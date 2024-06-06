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

//广度优先遍历，1.算每层的节点数，是不是2的指数，2.最后一层(当queue不是2指数)，每个节点有右必须有左，当一个节点只有左时或为null，上一层剩下的父节点后面的子节点都必须为null
//广度优先遍历，只判断子节点,null也放入其中，1.如果提前出现了[null,null]（后面还有值）,或者[null,val]那么就是不完全 2.上一层有null，下面还有子节点
//深度优先遍历，中序遍历，1.计算层数，还要记录是左子树，右子树2.判断如果有右节点必须有左节点（有点麻烦，官解也没有）

//广度优先遍历，第一种解法
var isCompleteTree = function(root) {
    if(!root)return null
    let queue = [[root]]
    let row = 0
    while(queue.length){
        rootList = queue.shift()
        //层数
        row ++ 
        //存储子节点
        let temp = []
        rootList.forEach(root=>{
            //当节点存在再存入，以方便筛选是否是下一层
            root.left && temp.push(root.left)
            root.right && temp.push(root.right)
        })
        //最后一层或者不符合完全性
        if(temp.length != 2**row){ //^ 在JavaScript中实际上是按位异或运算符,表示2的指数用 1.2**row; 2.Math.pow(2,x)
            //还有子节点，就是不符合完全性
            let hasChild = false //注意forEach里的return并不能直接成为函数的return，使用外部变量接受，或者使用for循环
            temp.forEach(root=>{
                if(root.left || root.right)hasChild = true
            })
            if(hasChild)return false
            //最后一层，判断父节点
            while(rootList.length){
                let node = rootList.shift()
                //判断一个节点有右不能无左
                if(!node.left && node.right)return false
                //当一个节点只有左时或左右都为null,上一层剩下的父节点后面的子节点都必须为null
                if((node.left && !node.right) || (!node.left && !node.right)){
                    while(rootList.length){
                        let p = rootList.shift()
                        if(p.left || p.right)return false
                    }
                }    
            }
        }else{
            if(temp.length !=0)queue.push(temp)
        }
    }
    return true
};