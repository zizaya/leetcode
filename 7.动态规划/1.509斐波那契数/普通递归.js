/* 一般而言，兔子在出生两个月后，就有繁殖能力，一对兔子每个月能生出一对小兔子来。如果所有的兔子都不死，那么一年以后可以繁殖多少对兔子？
依次类推可以列出下表：
经过月数
0 1 2 3 4 5 6 7  8  9  10 11 12
总体对数
0 1 1 2 3 5 8 13 21 34 55 89 144
 */

//普通递归
const fibonacci = (n) =>{
    if(n<2){
        return n
    }else{
        return fibonacci(n-1)+ fibonacci(n-2)
    }
}
console.log(fibonacci(4)) //3
console.log(fibonacci(10)) //55