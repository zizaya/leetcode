/**
 * @param {number[][]} matrix
 * @return {number}
 */

//2.普通bfs + 记忆化搜索,用memo标记此节点的最长路径，下次再遍历到此节点直接使用memo数值
var longestIncreasingPath = function(matrix) {
  
    const BFS = (arr,max,row,col,memo) =>{
        if(row <0 || row >matrix.length-1 || col<0 || col >matrix[0].length -1)return max//边界返回max
        
        if(arr[arr.length-1] < matrix[row][col] || arr.length==0){ //递增或者第一个元素，继续
            if(memo[row][col]!=0)return memo[row][col] //获取之前遍历的结果
            arr.push(matrix[row][col]) //arr添加数字
            //遍历
            let one = BFS(arr.slice(),max,row-1,col,memo)
            let two = BFS(arr.slice(),max,row+1,col,memo)
            let three = BFS(arr.slice(),max,row,col-1,memo)
            let four = BFS(arr.slice(),max,row,col+1,memo)
            //获取最长数组个长度+1
            memo[row][col] = Math.max(one,two,three,four,max) +1
            
            return memo[row][col]
        }else{
            return max
        }
    
    }
    //创建memo二维数组，初始化为0
    let memo = Array.from({length:matrix.length},()=>Array(matrix[0].length).fill(0))
    //获得最长的数组
    let res = 0
    for(let i =0 ;i<matrix.length;i++){
        for(let j =0 ;j <matrix[0].length;j++){
            
            res = Math.max(res,BFS([],0,i,j,memo)) //递归
            
        }
    }
    
    return res
};



console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]))
console.log(longestIncreasingPath([[1,2,3],[6,5,4],[7,8,9]]))
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]))
console.log(longestIncreasingPath([[1]]))