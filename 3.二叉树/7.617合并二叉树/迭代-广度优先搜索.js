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
//解法1：迭代-自己写的巨离谱打败5%-BFS广度优先遍历
//虽然但是，官解的BFS也很离谱
var mergeTrees = function(root1, root2) {
    if(!root1)return root2
    if(!root2)return root1
    let head = root1
    //根节点计算值
    root1.val = root1.val + root2.val
    //队列
    let queue = [[root1.left,root1.right],[root2.left,root2.right]]
    //父节点的队列
    let prevList = [root1]
    
    while(queue.length){
        let prevRoot = prevList.shift()
        let node1  = queue.shift()
        let node2 = queue.shift()

        //计算left节点的值
        let val1 = node1[0]?node1[0].val : 0
        let val2 = node2[0]?node2[0].val : 0
        let leftVal
        if(node1[0]==null &&  node2[0]==null){
            leftVal = null   
        }else{
            leftVal = val1+val2
        }
        

        //计算right节点的值
        val1 = node1[1]?node1[1].val : 0
        val2 = node2[1]?node2[1].val : 0
        let rightVal
        if(node1[1]==null &&  node2[1]==null){
            rightVal = null
        }else{
            rightVal = val1+val2
        }
        console.log(leftVal,rightVal)
        if(rightVal==null && leftVal ==null)continue

        //改变节点的值，并且赋给父节点
        if(leftVal!=null && prevRoot && prevRoot.left){
            prevRoot.left.val =  leftVal
        }else if(leftVal!=null&& prevRoot){
            prevRoot.left = new TreeNode(leftVal,null,null)
        }
        if( rightVal!=null&& prevRoot && prevRoot.right){
            prevRoot.right.val =  rightVal
        }else if(rightVal!=null&& prevRoot){
            prevRoot.right = new TreeNode(rightVal,null,null)
        }
        
       // 将其他子节点推进队列
        if(leftVal!=null || rightVal!=null){
           while(node1.length!=0 || node2.length!=0 ){
            let temp1 = node1.shift()
            let temp2 = node2.shift()

            let temp1Left = temp1? temp1.left:null
            let temp1Right = temp1? temp1.right:null
            let temp2Left = temp2? temp2.left:null
            let temp2Right = temp2? temp2.right:null
            queue.push([temp1Left,temp1Right],[temp2Left,temp2Right])
            
           }
            
        }
        //父节点也要维护队列
        if(prevRoot){
            prevList.push(prevRoot.left,prevRoot.right)
        }else{
            prevList.push(null,null)
        }
    }
    return head
};
