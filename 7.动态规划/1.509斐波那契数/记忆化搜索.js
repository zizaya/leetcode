/* 一般而言，兔子在出生两个月后，就有繁殖能力，一对兔子每个月能生出一对小兔子来。如果所有的兔子都不死，那么一年以后可以繁殖多少对兔子？
依次类推可以列出下表：
经过月数
0 1 2 3 4 5 6 7  8  9  10 11 12
总体对数
0 1 1 2 3 5 8 13 21 34 55 89 144
 */

//记忆化搜索，自顶向下
const memo_fibonacci = (n,memo) =>{
    if(n<2){ 
        return n
    }
    if(memo[n] !=-1)return memo[n] //当有搜索结果时，直接读取结果
    if(memo[n] == -1){//没有搜索结果，进行搜索，并且存入memo
        memo[n] =  memo_fibonacci(n-1,memo) + memo_fibonacci(n-2,memo)
        return memo[n]
    }
    
}
//提前规划好一个memo，存放结果
let memo = Array.from({length:5},()=>-1)//[-1, -1, -1, -1]
console.log(memo_fibonacci(4,memo)) //3

let memo2 = Array.from({length:11},()=>-1)
console.log(memo_fibonacci(10,memo2)) //55