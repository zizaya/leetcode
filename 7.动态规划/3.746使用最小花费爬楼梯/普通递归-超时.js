/**
 * @param {number[]} cost
 * @return {number}
 */
//1.普通递归，超时
var minCostClimbingStairs = function(cost) {
    const func1 = (n,res) =>{
        if(n+2 >= cost.length)return res
        if(n+2 <cost.length){
            return Math.min(func1(n+1,res+cost[n+1]),func1(n+2,res+cost[n+2]))
        }
    
    }
    return Math.min(func1(0,cost[0]),func1(1,cost[1]))
 
};