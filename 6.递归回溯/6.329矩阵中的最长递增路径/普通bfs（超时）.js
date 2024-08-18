/**
 * @param {number[][]} matrix
 * @return {number}
 */
//1.普通bfs,135/139用例超时
var longestIncreasingPath = function(matrix) {
    
    const BFS = (arr,row,col) =>{
        if(row <0 || row >matrix.length-1 || col<0 || col >matrix[0].length -1)return arr //边界返回
        if(arr[arr.length-1] < matrix[row][col] || arr.length==0){ //递增或者第一个元素，继续
            arr.push(matrix[row][col]) //arr添加数字

            //遍历
            let one = BFS(arr.slice(),row-1,col)
            let two = BFS(arr.slice(),row+1,col)
            let three = BFS(arr.slice(),row,col-1)
            let four = BFS(arr.slice(),row,col+1)
            //获取最长数组
            let max = []
            if(one.length >max.length)max = one
            if(two.length >max.length)max = two
            if(three.length >max.length)max = three
            if(four.length >max.length)max = four
            
            return max
        }else{
            return arr
        }
    
    }
    //获得最长的数组
    let ans = []
    for(let i =0 ;i<matrix.length;i++){
        for(let j =0 ;j <matrix[0].length;j++){
            let res = BFS([],i,j) //递归
            if(res.length > ans.length)ans = res //获得最长数组
            
        }
    }
    return ans.length
};



console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]))
console.log(longestIncreasingPath([[1,2,3],[6,5,4],[7,8,9]]))
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]]))
console.log(longestIncreasingPath([[1]]))
