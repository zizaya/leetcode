/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

//进阶：时间On，空间O1


//解法2：双指针，比较各个区间（.分隔）的大小，分为：用数组储存中间结果，用字符串储存中间结果，用数字储存中间结果，


//用数组储存中间结果
//时间复杂度O(N)，N 是版本号字符串的最大长度，空间复杂度：O(N)， N 是输入字符串的最大长度，主要是用于存储分割出来的数字片段所需的临时数组空间
var compareVersion = function(version1, version2) {
    let p1 = 0
    let p2 = 0
    
    //p1指针指向version1，p2指针指向version2
    while(p1<version1.length ||  p2<version2.length){
        //存放.间隔之间的数字 ，一定要放在里面，每次比较不相等的情况也释放num1和num2，优化空间，
        let num1 = []
        let num2 = []
        //p1,p2循环到.之前或结尾前
        while(version1[p1] != '.' && p1<version1.length){
            num1.push(version1[p1])
            p1 ++ 
        }
        while(version2[p2] != '.' && p2<version2.length){
            num2.push(version2[p2])
            p2 ++
        }

        //比较大小
        //arr.join()内不加‘’，会以逗号join
        if(+num1.join('') < +num2.join(''))return  -1
        if(+num1.join('') > +num2.join(''))return  1
        if(+num1.join('') == +num2.join('')){ //相等，则跳过.,进行下一个区间的对比
            p1 ++
            p2 ++
        }
    }
    //不用加，上面的条件从 && 变为 || 可以包括下面的情况
    //比较剩余版本号，如果有数字大于0，就是大于另一个版本号
   /*  while(p1 < version1.length){
        if(version1[p1] != '.' && version1[p1]> 0)return 1
        p1 +=1
    }
    while(p2 < version2.length){
        if(version2[p2] != '.' && version2[p2]> 0)return -1
        p2 +=1
    } */
    return 0

}

//用字符串储存中间结果
//用sum拼接字符串，其实字符串也占用空间，所以空间复杂度并没有优化，而且时间复杂度变高O(N)
//时间复杂度接近O(N^2)因为字符串拼接用的不是常数时间复杂度操作，而是每次拼接都会创建一个新的字符串，N 是版本号字符串的最大长度，空间复杂度：O(N)
var compareVersion = function(version1, version2) {
    let p1 = 0
    let p2 = 0
    
    //p1指针指向version1，p2指针指向version2
    while(p1<version1.length || p2<version2.length){
        //存放.间隔之间的和字，一定要放在里面，每次比较不相等的情况也释放sum1和sum2，优化空间，
        let sum1 = ''
        let sum2 = ''
        //p1,p2循环到.之前或结尾前
        while(version1[p1] != '.' && p1<version1.length){
            sum1 =  sum1 +  version1[p1]
            p1 ++ 
        }
        while(version2[p2] != '.' && p2<version2.length){
            sum2 = sum2 + version2[p2]
            p2 ++
        }

        //比较大小
        if(+sum1 < +sum2)return  -1
        if(+sum1 > +sum2)return  1
        if(+sum1 == +sum2){ //相等，则跳过.,进行下一个区间的对比
            p1 ++
            p2 ++
        }
    }
    //不用加，上面的条件从 && 变为 || 可以包括下面的情况
    //比较剩余版本号，如果有数字大于0，就是大于另一个版本号  
   /*  while(p1 < version1.length){
        if(version1[p1] != '.' && version1[p1]> 0)return 1
        p1 +=1
    }
    while(p2 < version2.length){
        if(version2[p2] != '.' && version2[p2]> 0)return -1
        p2 +=1
    } */
    return 0

}

//用数字储存中间结果 && 优化了条件判断 
//优化空间复杂度，将sum1和sum2每次使用完都重置为0，时间复杂度O(N)，N 是版本号字符串的最大长度，空间复杂度：O(1)
var compareVersion = function(version1, version2) {
    let p1 = 0
    let p2 = 0
    
    //p1指针指向version1，p2指针指向version2
    while(p1<version1.length || p2<version2.length){
        //存放.间隔之间的和字，放在这里，让每次比较后都释放sum1和sum2的值，而非只在sum1 == sum2里改变，就可以让空间复杂度变为O1
        //如果放在外面就是空间复杂度接近O(n)
        let sum1 = 0
        let sum2 = 0
        //p1,p2循环到.之前或结尾前
        while(version1[p1] != '.' && p1<version1.length){
            sum1 =  sum1* 10 +  version1[p1] //是字符串的拼接，下面要用+
            p1 ++ 
        }
        while(version2[p2] != '.' && p2<version2.length){
            sum2 = sum2*10 + version2[p2]
            p2 ++
        }

        //比较大小
        if(+sum1 < +sum2)return  -1
        if(+sum1 > +sum2)return  1
        if(+sum1 == +sum2){ //相等，则跳过.,进行下一个区间的对比
            p1 ++
            p2 ++   
        }
    }
    //不用加，上面的条件从 && 变为 || 可以包括下面的情况
    //比较剩余版本号，如果有数字大于0，就是大于另一个版本号  
   /*  while(p1 < version1.length){
        if(version1[p1] != '.' && version1[p1]> 0)return 1
        p1 +=1
    }
    while(p2 < version2.length){
        if(version2[p2] != '.' && version2[p2]> 0)return -1
        p2 +=1
    } */
    return 0

}
console.log(compareVersion("1.0","1.0.0.0"))
console.log(compareVersion("1.2","1.10"))
console.log(compareVersion("1.01","1.001"))
console.log(compareVersion("1.01.1","1.1"))
console.log(compareVersion("1.101","1.100001"))


