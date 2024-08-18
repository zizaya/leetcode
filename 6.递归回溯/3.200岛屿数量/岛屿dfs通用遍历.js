
//岛屿的dfs遍历：https://leetcode.cn/problems/number-of-islands/solutions/211211/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //岛屿的dfs遍历，遍历过得就进行标记
    const func1 = (row,col) =>{
        if(!isBorder(row,col))return null //到边缘了
        if(grid[row][col] != '1'){
            return null //遍历过==2，或者海洋==0
            
        }
        grid[row][col] = '2' //标记遍历过的陆地
        
        func1(row-1,col)
        func1(row+1,col)
        func1(row,col-1)
        func1(row,col+1)
    }
    //判断是否是边缘
    const isBorder = (row,col) =>{
        return row >=0 && row <grid.length && col >=0 && col <grid[0].length
    }
    //岛屿的数量就是遍历的次数
    let nums=0
    for(let i =0 ; i<grid.length;i++){
        for(let j = 0 ;j<grid[0].length;j++){
            if(grid[i][j] == 1){
                func1(i,j)
                nums++
            }
            
        }
    }
    return nums
};

let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
let grid2 = [["1","1","1","1","0"],["1","1","0","0","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
let grid3 = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
console.log(numIslands(grid3))
//console.log(numIslands(grid2))