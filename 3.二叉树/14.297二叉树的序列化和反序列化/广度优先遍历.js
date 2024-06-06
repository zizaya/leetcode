
//序列化和反序列化，要求时间ON,空间ON


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//序列化,时间ON,空间ON
var serialize = function(root) {
    let result = []
    let queue = [root]
    while(queue.length){
        let root = queue.shift()
        if(!root){
            result.push(null)
            continue
        } 
        result.push(root.val)
        queue.push(root.left)
        queue.push(root.right)
        
    }
    return result
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
//反序列化,时间ON,空间ON
var deserialize = function(data) {
    let row = 1
    let firstVal = data.shift()
    if(firstVal == null)return null
    let first = new TreeNode(firstVal) //根节点
    let queue = [first] //存放节点的队列
    while(data.length>0){  
        for(i = 0 ; i< Math.pow(2,row)/2;i++){ //循环 Math.pow(2,row)/2 次
            let root = queue.shift() //上一层的根节点
            let leftVal = data.shift() //左节点
            let rightVal = data.shift() //右节点
            if(leftVal != null){
                let leftNode = new TreeNode(leftVal)
                root.left =  leftNode
                queue.push(leftNode) //存放左节点
            }
            if(rightVal != null){
                let rightNode = new TreeNode(rightVal)
                root.right =  rightNode
                queue.push(rightNode)  //存放左节点
            }   
        }   
        row++
    }
    return first
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */