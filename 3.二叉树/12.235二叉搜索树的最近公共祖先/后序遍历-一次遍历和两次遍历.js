
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

//前序遍历，祖先往数组前面找，如果遍历的时候就处理，那么跟后序效率一样
//后序遍历，祖先往数组后面找，1.如果遍历的时候只是保存节点，那么后面只需要遍历一遍，2.遍历节点的时候就处理，也不是严格的后序或者前序，这个更效率

//后序遍历，祖先往数组后面找，两次遍历，遍历的时候只是保存节点，那么后面还需要遍历一遍
var lowestCommonAncestor = function(root, p, q) {
    if(!root)return null
    let stack = [root]
    let arr = []
    //后序遍历
    while(stack.length){
        root = stack.pop()
        arr.unshift(root.val)
        root.left && stack.push(root.left)
        root.right && stack.push(root.right)
    }

    let pIndex
    let qIndex
    let t = null
    //获取p和q的index,祖先需要 1.值位于p和q之间，2.后序中索引值大于p和q的索引。3.最后一个出现的才是祖先
    arr.forEach((val,index) =>{
        if(val == p.val)pIndex = index
        if(val == q.val)qIndex = index

        if(index > Math.max(pIndex,qIndex) && val<Math.max(q.val,p.val) && val > Math.min(q.val,p.val)){
            t = val
            
        }
    })
    //如果不存在这个祖先，那么p和q中索引值大的是祖先
    if(t == null){
        t = pIndex > qIndex ? p : q
    }else{
        t= new TreeNode(t)
    } 

    return t
};


//后序遍历，优化，一次遍历，遍历的时候存放符合条件的祖先（第一个复合条件的祖先就是最近的），找到p和q就可以停止了 ,
//前序遍历也可
var lowestCommonAncestor = function(root, p, q) {
    if(!root)return null
    let stack = [root]
    //存放p和q出现的顺序
    let pIndex = -1
    let qIndex = -1
    let count = 0 //循环次数
    let t = null
    //后序遍历
    while(stack.length){
        root = stack.pop()
        //最近祖先条件
        if(pIndex == -1 && qIndex == -1 && root.val<Math.max(q.val,p.val) && root.val > Math.min(q.val,p.val)){
            t = root.val
        }
        if(root.val == p.val )pIndex = count
        if(root.val == p.val )qIndex = count
        if(pIndex != -1  && qIndex != -1)return t  //p和q都找到，就可以退出遍历了
        root.left && stack.push(root.left)
        root.right && stack.push(root.right)
        count ++ 
    }
    //如果不存在这个祖先，那么p和q中先出现的是祖先
    if(t == null){
        t = pIndex < qIndex ? p : q
    }else{
        t= new TreeNode(t)
    } 

    return t
};