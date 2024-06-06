/* function kuohao(s){
    let left = ["{","[","("]
    let stack = []
    for(let i of s){ //for of 复杂度？
        if(left.indexOf(i) > -1){
            stack.push(i)
        }else{
            let end = stack[stack.length -1]
            if(i == '}' && end == '{' || i == ']' && end == '[' || i == ')' && end == '(' ){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(kuohao('[{}]')) */

/* let arr = [1,2,3,4,5]
let str = 'hello world'

let arr2 = arr.map((value,index,array)=>{
     console.log(value) console.log(index)  console.log(array)
    
    return value+ 1
})
console.log(arr2)
console.log(arr) */

/* let arr = [{name:'rr',age:100},{name:"aa",age:90}]

let arr2 = arr.map((value)=>{
    let obj = {...value,age:value.age+1}
    return obj
})

console.log(arr2)
console.log(arr) */

/* let obj ={0:'a',1:'b',length:2}

let obj2 = obj.map(value=>{
    console.log(value)
}) */
/* let arr = [1,2,3]
let arr2 = [{name:'rr',age:100},{name:"aa",age:90}]
let arr3 = arr.filter((value,index,array) => {
     value +=1
});
 
console.log(arr3)  */
/* let arr = [1,2,3]
let arr2 = arr.findIndex((value,index,array)=>{
    return value>2
})
console.log(arr2)
console.log(arr) */


/* var removeDuplicates = function(s) {
    let stack = []
     for(let i of s){
        let end = stack[stack.length -1]
        if(end == i){
            stack.pop()
        }else{
            stack.push(i)
        }
     }
     return stack.join('')
};

console.log(removeDuplicates('abbaca')) */

/* var simplifyPath = function(path) {
    let stack = ['/']
    let end
    for(let i of path){
        end = stack[stack.length -1]
        if(end == '/' && i == '/'){
            //没有双斜杠
        }else if(end == '.' && i == '.'){
            //返回上一级
            stack.pop() //pop end=.
            if(stack.length == 1) continue
            stack.pop() //pop /
            let v = stack.pop() //pop path
            if(v != '/'){

                v = stack.pop()

            }
            
        }else if(end == '.' && i == '/'){
            //当前目录去掉
            stack.pop()
        }else{
            stack.push(i)
        }
    }
    //处理最后不能是/结尾
    if(stack[stack.length-1] == '/' && stack.length!=1){
        stack.pop()
    }
    //处理最后不能是.结尾
    if(stack[stack.length-1] == '.'){
        stack.pop()
    }
    return stack.join('')
}
console.log(simplifyPath("/a/../../b/../c//.//")) */

/* var simplifyPath = function(path) {
    let stack = []
    let end 
    //除去两个//，变成一个，好分隔路径
    for(let i of path){
        end = stack[stack.length -1]
        if(i == '/' && end == '/'){
        
        }else{
            stack.push(i)
        }
    }
    let str = stack.join('') //形成/分隔的路径
    let arr = str.split('/')  //形成路径组成的数组
    //console.log(arr)
    let stack2 = []
    //处理路径
    for(let i of arr){
        if(i == '..'){ //返回上级目录
            stack2.pop()
        }else if(i == '.'){ //当前目录不处理
            
        }else if(i == ''){ //arr中的空数组不处理

        }else{  //路径名存入
            stack2.push(i)
        }
    }
    //处理头部路径
    let result = stack2.join('/')
    result = '/' + result
    return result
    
}

console.log(simplifyPath("/a/./b/../../c/")) */

/* var simplifyPath = function(path) {


    let arr = path.split('/')  //形成路径组成的数组,//会除去 ['', 'a', '.', 'b', '..', '..', 'c', '']
    console.log(arr)
    let stack = []
    //处理路径
    // for(let i of arr){
    //    if(i == '..'){ //返回上级目录
    //        stack.pop()
    //    }else if(i == '.'){ //当前目录不处理
    //        
   //     }else if(i == ''){ //arr中的空数组不处理
    //
   //     }else{  //路径名存入
    //        stack.push(i)
    //    }
   // } 
    for(let i of arr){
        if(i && i == '..'){ //返回上级目录
            stack.pop()
        }else if( i && i != '.'){ //非空，不是当前目录，就存入路径
            stack.push(i)
        }
    }
    //处理头部路径
    let result = stack.join('/')
    result = '/' + result
    return result
    
}

console.log(simplifyPath("/a/./b/../../c/"))
*/
/* 
const myPromise=Promise.resolve(Promise.resolve('Promise!'))
function funcOne(){
    myPromise.then(res=>res).then(res=>console.log(res));
    setTimeout(() => {
        console.log('timeout!');
        
    }, 0);
    console.log('last line!');
}
async function funcTwo() {
    const res=await myPromise
    console.log(await res);
    setTimeout(() => {
        console.log('timeout');
        
    }, 0);
    console.log('last line');
}
funcOne()
funcTwo() */


/* 
输出：
last line !
promise!
promise!
last line 
tiemout!
timeout
 */

/* Promise.resolve('promise1').then(res=>{
    console.log(res)
    setTimeout(()=>{
        console.log('setTimeout1')
    })
})

setTimeout(()=>{
    console.log(111)
    Promise.resolve('promise2').then(res=>{
        console.log(res)
    })
}) */

//输出
/* 
promise1
111
promise2
setTimeout1 
*/

/* var RecentCounter = function() {
    this.stack = []
}; */

/*
 * @param {number} t
 * @return {number}
 */
/* RecentCounter.prototype.ping = function(t) {
    this.stack.push(t)
    let result = []
    for(let i of this.stack){
        if(i >= t-3000 && i<= t){
            result.push(i)
        }
    }
    return result.length
};

let r = new RecentCounter()
r.ping(1)
r.ping(10)
r.ping(100)
r.ping(3001)
r.ping(3002) */

/* var RecentCounter = function() {
    this.stack = []
}; */

/*
 * @param {number} t
 * @return {number}
 */
/* RecentCounter.prototype.ping = function(t) {
    this.stack.push(t)
    while(this.stack[0] < t-3000){
        this.stack.shift()
    }
    
    return this.stack.length
};

let r = new RecentCounter()
r.ping(1)
r.ping(10)
r.ping(100)
r.ping(3001)
r.ping(3002) */
/* 
let arr = [1,2,3]
console.log(arr.shift())
console.log(arr.unshift(0)) */

/*
 * @param {ListNode} head
 * @return {boolean}
 */
/* var hasCycle = function(head) {
    let stack = []
    while(head){
        if(stack.indexOf(head) != -1){
            return true
        }else{
            stack.push(head)
        }
        head = head.next
    }
    return false
}; */

/* var hasCycle = function(head) {
    if(!head) return false
    let slow = head,fast = head.next
    while(fast != null && fast.next!=null){
        if(slow == fast){
            return true
        }
        slow = slow.next
        fast = fast.next.next
    }
    return false
}; */

//数组转成链表
let formatL = function(arr){
    if(arr.length == 0) return {} //数组长度为0，直接返回{}
    let format = function(index){
        let obj = {}
        obj.val = arr[index]  //链表的值，取自arr[]
        if(arr.length - 1 == index){ 
            obj.next = null  //当处于arr的最后一个值时，链表的next为null
        }else{
            obj.next = format(index+1)  //递归调用
        }
        return obj
    }
    return format(0)

}


/* var deleteDuplicates = function(head) {
    let stack = [] //存储链表的值
    let obj = head //头部指针赋给变量
    while(obj){
        if(stack.indexOf(obj.val)  == -1){ //不存在则push值进stack
            stack.push(obj.val)
            obj = obj.next
        }else{
            if( obj.next != null){ //存在且不是最后一个，就删除这个元素
                obj.val = obj.next.val
                obj.next = obj.next.next
            }else{ //存在且是最后一个，就val赋值为null，后续处理
                
                obj.val = null
                
            }
        }  
    }
    //如果最后val为null，删除最后一个元素
    let obj2 = head
    while(obj2){
        if(obj2.next && obj2.next.val == null){
            obj2.next = null
        }
        obj2 = obj2.next
    }
    //返回链表头部指针
    return head
}; */

/* var deleteDuplicates = function(head) {
    let cur = head
    while(cur.next){
        if(cur.val == cur.next.val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
} */

/* var reverseList = function(head) {
    
    let cur = head
    if(!head) return cur //如果链表没有数据
    let prev = null //存储cur的前一个元素
    let temp = null //存储cur的后一个元素
    //当cur.next 有值时
    while(cur.next){
        temp = cur.next  //存储后一个元素
        
        cur.next = prev  //cur指向前一个元素
        
        prev = cur   //前一个元素指向cur

        cur = temp  //cur指向后一个元素
        
    }

    cur.next = prev //cur.next为null是最后一个元素，使之指向前一个元素
    

    return cur  //返回反转后的第一个元素
    
}; */

/* var reverseList = function(head) {

    let cur = head
    let prev = null
    let temp = null
    while(cur){ //优化后，cur为null时，返回上一个节点prev即可
        temp = cur.next
        cur.next = prev
        
        prev = cur

        cur = temp
    }
    return prev
}

let list = formatL([1,2,3,4,5])
console.log(list) */
//console.log(reverseList(list))

/* class HashTable{
    constructor(){
        this.table = []  //哈希表
    }
    getHash(key){
        let hashCode = 0
        for(let i ;i <key.length ;i++){
            //string.charCodeAt(index),返回index位置的字符的Unicode编码
            //将这些编码值加起来
            hashCode += key.charCodeAt(i)
        }
        return hashCode
    }
    get(key){
        let code = this.getHash(key)
        return this.table[code]
    }
    set(key,value){
        let code = this.getHash(key)
        this.table[code] = value
    }
}

let hashTable = new HashTable()
hashTable.set('person','rr')
console.log(hashTable.get('person')) //rr */

/* 
var twoSum = function(nums, target) {
    let start = 0
    
    let end = nums.length -1
    let middle = Math.floor(end/2)
  
    while(start < middle){
        if(nums[start] + nums[middle]  != target){
            start += 1
        }
        if(nums[start] + nums[middle]  == target){
            return [start,middle]
        }
    }
    while(middle < end){
        if(nums[middle] + nums[end]  != target){
            end -= 1
        }
        if(nums[end] + nums[middle]  == target){
            return [middle,end]
        }
    }
 
}; */

/* var twoSum = function(nums, target) {
    let m = new Map()
    let temp
    for(let i =0 ;i<nums.length;i++){
        temp = target - nums[i]
        if(m.has(temp)){
            return[m.get(temp),i]
        }
        m.set(nums[i],i)
    }
}

console.log(twoSum([3,2,3],6)) */


//var containsDuplicate = function(nums) {
    //超时
    /* let stack = []
    for(let i of nums){
        if(stack.indexOf(i) != -1){
            return true
        }else{
            stack.push(i)
        }
    }
    return false */
/*     let s = new Set(nums)
    if(s.size != nums.length){
        return true
    }else{
        return false
    }
};

console.log(containsDuplicate([1,2,3,4]))
 */
/* 
var intersection = function(nums1, nums2) {
    let s2 = new Set(nums2)
    //set没有filter方法
    return [...new Set(nums1)].filter(s => s2.has(s))
    //return [...new Set( nums1.filter(s=>s2.has(s)) )]

};
console.log(intersection([1,2,2,1],[2,2])) */

/* let str ='aaaddndkjsjfsklfjslfjslssssaaa'

var findMostWord = function(str){
    let maxValue = 0
    let maxString = ''
    let map = new Map()
    //将str统计进map
    for(let s of str){
        if(map.has(s)){
            map.set(s,map.get(s)+1)
        }else{
            map.set(s,1)
        }
    }
    //找出最大的数字和字符串
    for(let [key,value] of map){
        if( value> maxValue){
            maxValue = value
            maxString = key
        }
    }
    return[maxString,maxValue]
}

console.log(findMostWord(str)) //['s',8] */

/* var uniqueOccurrences = function(arr) {
    let m = new Map()
    for(let a of arr){
        m.set(a,(m.get(a) || 0) + 1)
    }
    return [...m.values()].length == new Set(m.values()).size
    

};

console.log(uniqueOccurrences([1,2,2,1,1,3])) */

/* let m = new Map()
m.set('a',1)
m.set('b',2)
console.log(m.values())
console.log(typeof m.values() ) */

/* var lengthOfLongestSubstring = function(s) {
    if(s.length <2 ) return s.length //0，1长度的字符串直接返回长度
    let start = 0
    let end = start + 1
    let stack = [s[start]] //存储字符的数组
    let stack2 = []  //存储长度的数组
    while(start < s.length && end < s.length){

        if(stack.indexOf(s[end]) != -1 ){ //end重复了
            stack2.push(end-start) //存储子串长度    
            
            //start指针后跳一位，重置stack和end
            start +=1
            stack = [s[start]]
            end = start +1
            
        }else{//end没有重复
            
            if(end == s.length -1){ //end是最后一位时，存储长度
                stack2.push(end-start+1)
            }

            stack.push(s[end]) //end没有重复，存入stack
            end +=1
        }
        
        
    }
    //存储的是字符串形式，所以不能直接stack2.sort()
    stack2.sort((a,b)=>{
        return a-b
    })
    return stack2[stack2.length -1]

};
 */

/* var lengthOfLongestSubstring = function(s) {
    let map = new Map() //存放字符和字符最新出现的位置
    let start = 0 //重复字符的后一位
    let num = 0 //最长子串的长度
    for(let index in s){
        //当出现重复子串时，start指针跳到上一个重复子串的位置的后一位，
        //后面的判断作用：如（abba）当b重复，start=2，读到最后一个a时，如不判断，start会等于1，就会出现错误
        if(map.has(s[index]) && map.get(s[index]) >= start){
            start = +map.get(s[index])+1
           
        }
        //更新字符，和字符出现的位置
        map.set(s[index],index)

        //Math.max，得出两个数字的大数
        num = Math.max(num,index-start+1)
        
    }
    return num
}
console.log(lengthOfLongestSubstring("sadfsafaefedssfsdsf")) */


/* var middleNode = function(head) {
    let length = 0
    let cur = head
    while(cur){ //得出链表的长度
        length += 1
        cur= cur.next
    }
    //let isHalf = length%2 == 1 ? 1 : true
    let half = Math.floor(length/2) + 1 //取得中间长度

    //得到中间节点
    length =0 
    while(length<half-1){
        length +=1
        head = head.next
    }
    return head
};
 */

/* var middleNode = function(head) {
    let slow = fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
let list = formatL([1,2,3,4,5,6])
console.log(middleNode(list))
 */

/*
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/* var getIntersectionNode = function(headA, headB) {
    //解法：1.两个while循环。2.转成数组，判断交集 3.反转两个链表
    //官方解法：1，一个链表转换为数组，另一个链表判断交叉点之后的值是否包含在内
    //官方解法：2.两个指针的超帅解法:
    //有交叉的节点：a=链表a的开头到交叉的长度，b=链表b开头到交叉的长度，m是两者共同的长度，a+m+b = b+m+a 指向 交叉的节点
    //没有交叉的节点：a=链表的a的长度，b=链表b的长度，a+b = b+a 指向null

    if(headA ==null || headB ==null) return {}

    let pa = headA
    let pb = headB

    while(pa != pb){ //相等有两种情况：相交时pa=pb=相交的节点，不相交时pa=pb=null

        //pa指向下一个节点，为空时指向headB的开头,注：不可以用pa.next == null判断，因为会使不相交的节点无限循环报错
        pa = pa == null? headB : pa.next 
        
        pb = pb == null? headA : pb.next

    }
    return pa

};

let list1 = formatL( [4,1,8,4,5])
let list2=  formatL([5,6,1,8,4,5])

console.log(getIntersectionNode(list1,list2)) */

/** 
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/* var reverseBetween = function(head, left, right) {
    let cur =head
    let index = 0
    let prev
    
    if(left == right) return head //如果链表长度为1，直接返回

    //将链表分为三段，前段链表+需要反转的链表+后段链表

    //获取前段列表的最后一个节点和反转的第一个节点
    while( index < left-1){
        prev = cur
        cur = cur.next
        index++

    }
    let before = prev //前段链表的最后一个
    let first = cur //反转的第一个节点
    
    //获取后段链表的第一个
    let i = index
    while( index < right-1){
        prev = cur
        cur = cur.next
        index++
    }
    let last = cur.next//后段链表的第一个
  
    //反转链表
    let temp
    prev = last
    while( i < right){
        temp = first.next
        first.next = prev

        prev = first
        first = temp
        i++
    }
   
    if(left != 1){ //如果反转的不是第一个，把前段链表的最后一个next指向给反转的第一个节点
        before.next = prev
        return head
    }else{
        return prev //如果反转的是第一个，直接返回反转后的第一个节点
    }
   
    
};
 */
//pre指向前段列表的最后一个，cur指向反转列表的第一个（不变），next指向要插入的节点
//12345--13245--14325 ,pre始终指向1，cur始终指向2，next会变
/* var reverseBetween = function(head, left, right) {
    let index = 0
    let node = head
    let prev =null
    //获取前段列表的最后一个
    while(index < left-1){
        prev = node
        node = node.next
        index++
    }

    //反转链表
    let cur = node
    let next = cur.next
    let temp
    //当链表长度为1
    if(left == right)return head
    if(left == 1){ //当从第一位开始反转
        while(index< right-1){
            temp = head
            cur.next = next.next
            next.next = temp

            head = next
            next= cur.next
            index++

        }
        return head
    }else{//当从非第一位开始反转
        while(index<right-1){
            temp = prev.next
            cur.next = next.next
            prev.next = next
            next.next = temp
            
            next = cur.next
           
            index ++ 
        }
        return head
    }
    
} */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


//pre指向前段列表的最后一个，cur指向反转列表的第一个（不变），next指向要插入的节点
//12345--13245--14325 ,pre始终指向1，cur始终指向2，next会变
/* var reverseBetween = function(head, left, right) {
    //优化链表，设置一个头部，让链表从头开始反转也不会使pre.next为null
    const dummyNode = new ListNode('void')
    dummyNode.next = head

    let index = 0
    let node = head
    let prev =dummyNode
    //获取前段列表的最后一个
    while(index < left-1){
        prev = node
        node = node.next
        index++
    }


    //反转链表
    let cur = node
    let next = cur.next
    if(left == right)return head
    while(index<right-1){
        cur.next = next.next 
        next.next = prev.next
        prev.next = next
        next = cur.next
       
        index ++ 
    }
    return dummyNode.next
} */
//14325
/* let list = formatL( [1,2,3,4,5])
console.log(reverseBetween(list,2,4)) */
/* let list = formatL( [1,3,5])
console.log(reverseBetween(list,1,2)) */
/* let list = formatL( [1,3,5])
console.log(reverseBetween(list,1,3)) */



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//自己的思路，偶数链表抽出来，原链表去除偶数，最后合并
/* var oddEvenList = function(head) {
    if(head == null) return head //head为null时

    //储存偶数节点
    let node = new ListNode('void') 
    let nodehead = node

    let cur = head
    let prev = cur
    let index = 1
    while(cur){
        if(index % 2 !=1){
            //储存偶数节点
            nodehead.next = new ListNode(cur.val)
            nodehead = nodehead.next

            //将偶数节点从链表中去除
            prev.next = cur.next

            
        }else{
            //当奇数节点时，将奇数节点赋值给prev
            prev = cur
        } 
        
        cur = cur.next
        index++
    }
    prev.next = node.next
    return head
}; */

//官方的分离节点合并操作
/* var oddEvenList = function(head) {
    //如果head为null，返回head
    if(head == null)return head

    let odd = head
    let evenHead = head.next
    let even = head.next
    //具体操作（很帅）
    while(even!= null && even.next!=null){
        odd.next = even.next
        odd = odd.next

        even.next = odd.next
        even = even.next
    }

    odd.next = evenHead //拼接odd和even
    return head
}
let list = formatL( [1,2,3,4])
console.log(oddEvenList(list)) */



/* var MyStack = function() {
    this.stack = []
}; */

/** 
 * @param {number} x
 * @return {void}
 */
/* MyStack.prototype.push = function(x) {
    this.stack.push(x)
    //return x.length
}; */

/**
 * @return {number}
 */
/* MyStack.prototype.pop = function() {
    let length = this.stack.length
    let param
    for(let i=0;i<length-1;i++){
        param = this.stack.shift()
        this.stack.push(param)
    }
    return this.stack.shift()
};
 */
/**
 * @return {number}
 */
/* MyStack.prototype.top = function() {
    let length = this.stack.length
    let param
    for(let i=0;i<length;i++){
        param = this.stack.shift()
        this.stack.push(param)
    }
    return param
}; */

/**
 * @return {boolean}
 */
/* MyStack.prototype.empty = function() {
    return this.stack.length == 0
};
var obj = new MyStack()
obj.push('a')
obj.push('b')
console.log(obj.top())
console.log(obj) */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/* var spiralOrder = function(matrix) {
    let row = 0 //行指针
    let col = 0 //列指针
    let stack =[]
    let cl = matrix[0].length
    let rl = matrix.length
  
       
    while(row==0 && col<cl){
        console.log(matrix.shift(matrix[row][col]))
        //stack.push(matrix[row][col])
        col++ 
    }
    while(row>0&&row<matrix.length&& col == matrix[0]-1){
        stack.push(matrix[row][col])
        m ++
    }
    while(row == matrix.length && col>=0){
        stack.push(matrix[row][col])
        col--
    }
    while(row>0 && col == 0){
        stack.push(matrix[row][col])
        m--
    }

    return stack
};


console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) */
//console.log(spiralOrder([1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]))
//1-2-3-4-5
//6-7-8-9-10
//11-12-13-14-15
//16-17-18-19-20

let list = {
    val:'a',
    children:[
        {
            val:"b",
            children:[
                {val:'d',children:[]},
                {val:'e',children:[]}
            ]
        },
        {
            val:"c",
            children:[
                {val:'f',children:[]},
                {val:'g',children:[]}
            ]
        }
        
    ]
}
//深度优先遍历
/* const func1 = (root)=>{
    console.log(root.val)
    root.children.forEach(i=>{
        func1(i)
    })
}
func1(list) */
//广度优先遍历
/* 
const func2 = (root)=>{
    let queue =[]
    queue.push(root)
    while(queue.length != 0){
        let p = queue.shift()
        console.log(p.val)
        p.children.forEach(i=>{
            queue.push(i)
        })
    }
}
func2(list) */
let tree = {
    val:'1',
    left:{
        val:"2",
        left:{val:'4',left:null,right:null},
        right:{val:'5',left:null,right:null}

    },
    right:{
        val:"3",
        left:{val:'6',left:null,right:null},
        right:{val:'7',left:null,right:null}
    }
}
let tree2 = {
    val:'1',
    left:{
        val:"2",
        left:{val:'4',left:null,right:null},
        right:{val:'5',left:null,right:null}

    },
    right:{
        val:"3",
        left:{val:'6',left:null,right:null},
        right:{val:'7',left:null,right:null}
    }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var preorderTraversal = function(root) {
    let arr = []
    if(!root) return arr
    const func1 = (tree)=>{
        arr.push(tree.val)
        tree.left&&func1(tree.left)
        tree.right&&func1(tree.right)
    }

    func1(root)
    return arr
}; */
/* var preorderTraversal = function(root) {
    let arr = []
    const func1 = (tree)=>{
        if(tree){
            arr.push(tree.val)
            func1(tree.left)
            func1(tree.right)
        } 
    }

    func1(root)
    return arr
}; */

/* var preorderTraversal = function(root) {

    let arr = [] 
    let right = [] //存放右节点的栈
    while( root ){ 
        arr.push(root.val)//输出左子树的左节点
        root.right && right.push(root.right) //右子树和右节点存入栈
        root = root.left ==null ? right.pop(): root.left //当没有左节点，就pop右节点的栈
    }
    return arr
}

var preorderTraversal = function(root) {
    if(!root) return []
    let arr =[]
    let stack =[root]
    while(stack){
        let o = stack.pop()
        arr.push(o.val)
        o.right && stack.push(o.right)
        o.left && stack.push(o.left)
    }
    return arr
}
console.log(preorderTraversal(tree)) */

/* let arr = [1,2,3,4,5,6,7]

let s1 = arr.slice()
let s2 = arr.slice(2)
let s3 = arr.slice(2,3)
let s4 = arr.slice(-2)
console.log(arr)// [1, 2, 3, 4, 5, 6, 7]
console.log(s1)// [1, 2, 3, 4, 5, 6, 7]
console.log(s2)// [3, 4, 5, 6, 7]
console.log(s3)//[3]
console.log(s4)//[6, 7] */

/* let str ='12345'
console.log(str.slice(2,3))
console.log(str) */

/* let arr = [1,2,3,4,5,6,7] */
/* let s1= arr.splice(2)
console.log(s1)//[3, 4, 5, 6, 7]
console.log(arr)//[1, 2] */

/* let s1= arr.splice(2,1)
console.log(s1)//[3]
console.log(arr)//[1, 2, 4, 5, 6, 7] */

/* let s1= arr.splice(2,1,'in','in2')
console.log(s1)//[3]
console.log(arr)//[1, 2, 'in', 'in2', 4, 5, 6, 7] */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var inorderTraversal = function(root) {
    let stack = []
    const func1 = (tree) =>{
       if(tree){
        tree.left && func1(tree.left)
        stack.push(tree.val)
        tree.right && func1(tree.right)
       }
    }
    func1(root)
    return stack
}; */


/* var inorderTraversal = function(root) {
    if(!root)return []
    let arr = []
    let stack =[root]
    while(stack.length){
        let p = stack.pop()
        p.right && stack.push(p.right) //右节点放入栈
        if(p.left || p.right){ //如果有左右节点，根节点的值放入栈
            stack.push(p.val)
        } 
        p.left && stack.push(p.left) //左节点放入栈
        if(!p.left && !p.right){ //如果没有左右节点（最底层的左节点/根节点的值）,输出到arr
            p.val!=null?arr.push(p.val):arr.push(p)
        }
    }
    return arr
}

var inorderTraversal = function(root) {
    let arr = []
    let stack = []
    let tree = root
    while(stack.length || tree!=null){
        while(tree ){//循环到最底层的左节点的left，第一次：tree = null
            stack.push(tree)
            tree = tree.left
        }
        tree = stack.pop()//pop出tree的的根节点,第一次：tree=最底层的左节点
        arr.push(tree.val) //第一次：存放最底层左节点
        tree = tree.right//第一次：tree=null（左节点的right）
    }
    return arr
}
console.log(inorderTraversal(tree))//['4', '2', '5', '1', '6', '3', '7'] */
/* var inorderTraversal = function(root) {
    let arr =[]
    let stack = []
    while(root!=null){ //防止存入的root.val为0时，判断为false
        root.right && stack.push(root.right) //右节点放入栈
        if(root.left || root.right) stack.push(root.val) //根节点处理后放入栈
        
        if(!root.left && !root.right){ //当是根节点或者底层节点时，输出到arr
           root.val == null?arr.push(root):arr.push(root.val)
        }
        root = root.left == null ?stack.pop():root.left //root向左节点遍历
        
    }
    return arr
}
console.log(inorderTraversal(tree))//['4', '2', '5', '1', '6', '3', '7'] */
/* 

var postorderTraversal = function(root) {
    let arr = []
    const func1 = (tree) =>{
        if(tree){
            func1(tree.left)
            func1(tree.right)
            arr.push(tree.val)
        }
        
    }
    func1(root)
    return arr
};
console.log(postorderTraversal(tree))//4,5,2,6,7,3,1 */

/* var postorderTraversal = function(root) {
    let arr = []
    let stack = []
    while(root){
        (root.right || root.left) &&stack.push(root.val) //如果有左右节点，放入stack
        root.right && stack.push(root.right) //右节点放入栈
       // root.left && stack.push(root.left)
         if(!root.left && !root.right){ //如果没有左右节点，输出（可能是底层的节点/处理过的根节点）
            root.val == null?arr.push(root):arr.push(root.val)
         }
         root = (root.left ==null)?stack.pop(): root.left//root向右下靠拢
    }
    return arr
} */
//console.log(postorderTraversal(tree))//4,5,2,6,7,3,1

/* var postorderTraversal = function(root) {
    if(!root) return []
    let arr = []
    let stack = [root]
    while(stack.length){
        let p = stack.pop()
        arr.unshift(p.val)
        
        p.left && stack.push(p.left)
        p.right && stack.push(p.right)
    }
    return arr
}
console.log(postorderTraversal(tree))//4,5,2,6,7,3,1 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
/* var minDepth = function(root) {
    if(!root) return 0
    let min = 1
    let dep = 0
    let arr = []
    let stack = []
   // let tree = root
    const func1 = (root) =>{
        if(root.left || root.right){
            min += 1
            stack.push(root.val)
            root.left && func1(root.left)
            root.right && func1(root.right)
            if(root.left && root.right) {
                dep = 0
            }else{
                if(stack.indexOf(root.val) == -1){
                    dep +=1
                }
                
            }
           // console.log(root.val,dep,min)
        }else{
            console.log(dep,min)
            min = min-dep
            arr.push(min)
        }     
    }
    
    func1(root)
    console.log(arr)
    let a = arr.map((value,index)=>{
        let i = Math.floor(index/2)
        return value = value - i
    })
   // console.log(a)
    return a.sort()[0]
   //return arr.sort()[0]
};
console.log(minDepth(tree)) */
/* 
var minDepth = function(root) {
    let arr = []
    const func1 = (root) =>{
        if(root.left || root.right){
            root.left && func1(root.left)
            arr.push(root.val)
            root.right && func1(root.right)
        }else{
            arr.push(root.val)
        }
    }
    
    func1(root) //arr = ['4', '2', '5', '1', '6', '3', '7']
    console.log(arr)
    let rootNum = arr.indexOf(root.val)
    let arr2 = []
     while(root){
        if(root.left== null && root.right == null){
            let index = arr.indexOf(root.val)
            arr2.push(Math.abs(rootNum-index)+1)
        }

    } 
    console.log(arr2)
    //return arr
}
console.log(minDepth(tree))  */

/* var minDepth = function(root) {
    if(!root)return 0
    let s = new Set()
   // m.set(root,1)
    let dep = 1
    const func1 = (root,dep) =>{
        if(root.left || root.right){
            dep += 1
            root.left && func1(root.left,dep)
            root.right && func1(root.right,dep)
        }else{
            console.log(root)
            s.add(dep)
        }
    }
    func1(root,dep)
    let arr = Array.from(s)
    arr.sort((a,b)=>a-b)
   return arr[0]
    
}
console.log(minDepth(tree)) */

/* let s = new Set([1,2.3])
console.log([...s]) */

/**
 * @param {TreeNode} root
 * @return {number}
 */
/* var maxDepth = function(root) {
    if(!root)return 0
    let s = new Set()
   // m.set(root,1)
    let dep = 1
    const func1 = (root,dep) =>{
        if(root.left || root.right){
            dep += 1
            root.left && func1(root.left,dep)
            root.right && func1(root.right,dep)
        }else{
            console.log(root)
            s.add(dep)
        }
    }
    func1(root,dep)
    let arr = Array.from(s)
    arr.sort((a,b)=>a-b)
   return arr[arr.length-1]
};
console.log(maxDepth(tree)) */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* var invertTree = function(root) {
    let temp
    const func1 = (root) =>{
        if(root){
            temp = root.left
            root.left = root.right
            root.right = temp
            func1(root.left)
            func1(root.right)
        }
    }
   func1(tree)
   return root
};
console.log(invertTree(tree)) */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/* var isSameTree = function(p, q) {
    let isSame = 0
    const func1 = (p,q) =>{
        if(p && q){
            isSame = p.root.val == q.root.val ? isSame : isSame+=1
            func1(p.left,q.left)
            func1(p.right,q.right)
        }else if((!p && q)|| (p && !q)){
            isSame++
        }
    }
    func1(p,q)
    return isSame == 0
};
console.log(isSameTree(tree,tree2)) */

/* let i = 0
//i = i+=1
i= i++
console.log(i)
console.log(i) */

class MiniHeap{
    constructor(){
        this.heap = [] //堆的结构
    }
    //堆插入数据
    insert(val){ 
        this.heap.push(val)
        this.up(this.heap.length-1)
    }
    //获取父节点的索引
    getParentIndex(index){ 
        return Math.floor((index-1)/2)
    }
    //获取左节点的索引
    getLeftIndex(index){ 
        return 2*index +1
    }
    //获取右节点的索引
    getRightIndex(index){
        return 2*index +2
    }
    //交换两个索引位置的值
    swap(i1,i2){
        let temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp

    }
    //结构上升，用于最小堆的添加
    up(index){
        let parentIndex= this.getParentIndex(index)
        if(this.heap[parentIndex] > this.heap[index]){
            this.swap(parentIndex,index)
            this.up(parentIndex)
        }
    }
    //结构下坠，用于最小堆的删除根节点
    down(index){
        let leftIndex = this.getLeftIndex(index)
        let rightIndex = this.getRightIndex(index)
        if(this.heap[index] > this.heap[leftIndex]){
            this.swap(index,leftIndex)
            this.down(leftIndex)
        }
        if(this.heap[index] > this.heap[rightIndex]){
            this.swap(index,rightIndex)
            this.down(rightIndex)
        }
    }
    //删除根节点
    extract(){
        this.heap[0] = this.heap.pop()
        this.down(0)
    }
    //获取堆顶
    peek(){
        return this.heap[0]
    }
    //获取堆的长度
    size(){
        return this.heap.length
    }
    
}
/* 
let arr = new MiniHeap()
arr.insert(3)
arr.insert(2)
arr.insert(5)
arr.insert(9)
arr.insert(10)
console.log(arr.heap)//[2, 3, 5, 9, 10]

arr.extract()
console.log(arr.heap)// [3, 9, 5, 10]
console.log(arr.peek())//3
console.log(arr.size())//4 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/* var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>{
        return a-b
    })
    return nums[nums.length-k]
};
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6],2)) */

/* let arr = [4,6,2,6,8,9]
arr.sort()
console.log(arr) //[2,4,6,6,8,9]
 */

/* var findKthLargest = function(nums, k) {
    let arr = new MiniHeap()
    for(let i of nums){
        arr.insert(i)
        if(arr.size() > k)arr.extract()
    }
    console.log(arr)
    return arr.peek()
}
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6],2))  */

/* var bubbleSort = (arr) =>{
    //i用来计算循环次数
    for(let i =0;i<arr.length -1;i++){ //i<长度减一，因为要和后一步对比
        for(let j =0;j<arr.length -1 -i;j++){ //j<长度减一，也是要和后一步对比;减去i是为了去除已经计算出来的i个最大值
            //常规换位
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))//[2, 3, 6, 8, 9] */

/* var selectOrder = (arr) =>{
    //用来存放最小值的索引
    let minIndex
    //循环的次数
    for(let i =0 ;i<arr.length -1;i++){ //i<长度减一，因为j是i的后一步
        minIndex = i
        for(let j= i+1;j<arr.length;j++){//j是需要对比的元素
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        //常规换位：一次循环之后，使最小值放在未排序的第一位
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectOrder(arr))//[2, 3, 6, 8, 9] */

/* var insertOrder = (arr) =>{
    //i是没有排序过的元素索引第一个位置
    for(let i =1;i<arr.length;i++){
        //temp储存要进行插入的元素
        let temp = arr[i] 
        //j是排序过的元素的最后一位
        let j = i -1 
        //从后往前遍历已经排序的元素
        while(j>=0 && arr[j] < temp){
            arr[j+1] = arr[j] //排序过的元素往后移动一位
            j-- //继续往前遍历
        }
        arr[j+1] = temp //j此时是小于插入元素的位置，所以要j+1位置插入此元素
    }
    return arr
}
//let arr =[5,4,3,2,1]
let arr =[1,2,3,4,5]
console.log(insertOrder(arr))//[1, 2, 3, 4, 5] */

/* var mergeOrder = (arr) =>{
    //如果arr长度小于1，返回arr
    if(arr.length <2) return arr 
    //计算出左数组和右数组
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)
    //用来存放排序结果
    let resultArr = []
    //将两个数组比较并且合并
    const merge = (left,right) =>{
       
        //当left和right都不为0时，因为本身是从小到大的顺序，所以只用比较第0位的大小，将小的元素放进resultArr，继续比较
        while(left.length > 0 &&  right.length > 0){
            resultArr.push(left[0]<=right[0] ? left.shift() : right.shift())
        }
        //当数组不为偶数个时，会有一个数组还有一个元素，concat进结果
        return resultArr.concat(left).concat(right)
    }
    
    //mergeOrder先将数组递归拆分，merge再递归合并
    return merge(mergeOrder(leftArr),mergeOrder(rightArr))
}

let arr =[5,4,3,2,1,6,7,4,5,8,9,10]
console.log(mergeOrder(arr))//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */

/* var quickOrder = (arr) =>{
    //数组小于2，就返回arr
    if(arr.length < 2) return arr
    //获取中间数
    let midIndex = Math.floor(arr.length/2)
    let midValue = arr.splice(midIndex,1)[0]
    //用来存放小于中间数的数组
    let left = []
    //用来存放大于中间数的数组
    let right = []
    //循环arr，填充left和right
    for(let i =0;i<arr.length;i++){
        if(arr[i]<midValue){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    //left数组递归+中间数+right数组递归
    return quickOrder(left).concat([midValue]).concat(quickOrder(right))
}
let arr =[5,4,3,2,1,6,7,4,5,8,9,10]
console.log(quickOrder(arr))//[1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10] */

/* var binarySearch = (arr,target) =>{
    let start = 0
    let end = arr.length -1
    while(start<=end){
        let midIndex = Math.floor((start+end)/2)
        let middleValue = arr[midIndex]
        //中间数等于目标，return结果
        if(middleValue == target){
            return midIndex
        }
        //中间数大于目标，移动end指针到中间数
        if(middleValue >target){
           // start = 0
            end = midIndex //start不用变
        }
        //中间数小于目标，移动start指针到中间
        if(middleValue <target){
            //end不用变，且start要=midIndex+1，因为用的Math.floor，不加一永远取不到最后一位数
            start = midIndex +1 
        }
        
    }
    return -1
}
let arr =[1,2,3,4,5,6,7,8,9,10]
console.log(binarySearch(arr,10))//9 */



/* var fxx  = ()=>{
    const drink =['水','茶','奶','柠檬茶']
    const stapleFood =['面条','米饭']
    const lunchMeal = ['鸡公煲','肯德基','米线','菜饭','热干面','瓦罐汤','烧烤']

    let result = Math.floor(Math.random()*drink.length)
    let result2 = Math.floor(Math.random()*stapleFood.length)
    let result3 = Math.floor(Math.random()*lunchMeal.length)

    console.log(`fxx今天吃<${lunchMeal[result3]}>，喝<${drink[result]}>，主食可以选择<${stapleFood[result2]}>`)
}
fxx()
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* var majorityElement = function(nums) {
    //用来计算一个数组中，某个数字出现的次数
    const countMajority = (start,end,target) =>{
        let count =0
        for(let i = start;i<=end;i++){
            if(nums[i] == target) count++
        }
        return count
    }
    //用来拆分递归数组
    const majority = (start,end)=>{
        //拆分成一个元素
        if(start == end)return nums[start]

        //获取左数组和右数组的众数
        let mid = Math.floor((start+end)/2)
        let lm = majority(start,mid)
        let rm = majority(mid+1,end)

        //如果左数组的众数=右数组的众数，那么返回这个众数
        if(lm == rm)return lm

        //如果不相等，计算数组中，两个数谁是众数，并返回
        let l_count = countMajority(start,end,lm)
        let r_count = countMajority(start,end,rm)
        return l_count > r_count ? lm : rm
    }
    return majority(0,nums.length-1)
};
//console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3])) */

/* var fbnc =(n) =>{
    if(n == 0) return 0
    if(n> 0 && n <3) return 1
    
    return fbnc(n-1) + fbnc(n-2)
}
console.log(fbnc(8)) //21

var fbnc = (n) =>{
    let res = [0,1,1]
    for(let i =3;i<=n;i++){
        res[i] = res[i-1] + res[i-2] //自然地push进去了
    }
    return res[n]
}
console.log(fbnc(8)) //21 */
/* 
let arr =[1,2]
arr[2] = 3
console.log(arr) */

/**
 * @param {number} n
 * @return {number}
 */
/* var climbStairs = function(n) {
    let res = [0,1,2]
    for(let i=3;i<=n;i++){
        res[i] =res[i-1]+res[i-2]
    }
    return res[n]
}; */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* var rob = function(nums) {
    if(nums.length ==0)return 0
    let res = [0,nums[0]]
    for(let i =2;i<=nums.length;i++){
        res[i] = Math.max(res[i-1],res[i-2]+nums[i-1])
    }
    return res[nums.length]
}; */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* var canJump = function(nums) {
    //当数组为1时，不用跳跃也是成功
   if(nums.length ==1)return true
    //记录跳跃失败的次数
    let countNo = 0
    for(let n=0;n<nums.length-1;n++){//从0开始遍历到倒数第二位尝试跳跃
        //index是跳跃到位置的索引
        let index = n
        //当index小于最后一位索引时，继续跳跃
        while(index<nums.length-1){
            index=nums[index]+ index
            //当跳跃到的位置，值为0时，且不为最后一位，就无法完成跳跃
            if(nums[index] == 0 && index!=nums.length-1){
                countNo++
                break
            }
        }
        
    }
    return countNo != nums.length-1
};
 */
/* var canJump = function(nums) {
    //当数组为1时，不用跳跃也是成功
   if(nums.length ==1)return true
    //记录跳跃失败的次数
    let countNo = 0
    //arr记录前面所有步骤可以走的最大距离
    let arr = []
    for(let n=0;n<nums.length-1;n++){//从0开始遍历到倒数第二位尝试跳跃
        //index是跳跃到位置的索引
        let index = n
        //记录每个位置可以走的最大距离
        arr.push(index+nums[index])
        //处理nums中间的0是否是死路
        if(nums[index] == 0 ){
           if(arr.filter(i=>i>index).length == 0){
                return false
            }
        }
        //当index小于最后一位索引时，继续跳跃
        while(index<nums.length-1){
            index=nums[index]+ index
            //当跳跃到的位置，值为0时，且不为最后一位，就无法完成跳跃
            if(nums[index] == 0 && index!=nums.length-1){
                countNo++
                break
            }
        }
        
    }
    return countNo != nums.length-1
}; */
/* var canJump = function(nums) {
    //当数组小于等于1时，不用跳跃也是成功
   if(nums.length <=1)return true
    //arr记录前面所有步骤可以走的最大距离
    let arr = []
    //从0开始遍历到倒数第二位尝试跳跃
    for(let index=0;index<nums.length-1;index++){
        //记录每个位置可以走的最大距离
        arr.push(index+nums[index])
        //处理nums中间的0是否是死路
        if(nums[index] == 0 ){
           if(arr.filter(i=>i>index).length == 0){
                return false
            }
        }     
    }
    return true
}; */
/* var canJump = function(nums) {
    //当数组小于等于1时，不用跳跃也是成功
   if(nums.length <=1)return true
    //存储前面可以走的最大跳跃数
    let max = 0
    //从0开始遍历到倒数第二位尝试跳跃
    for(let index=0;index<nums.length-1;index++){
        //记录每个位置可以走的最大距离
        max = Math.max(index+nums[index],max)
        //处理nums中间的0是否是死路
        if(nums[index] == 0 && index >= max)return false    
    }
    return true
};
console.log(canJump([1,2])) */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
/* var findContentChildren = function(g, s) {
    //对两个数组进行排序
    let arr = g.sort((a,b)=>a-b)
    let brr = s.sort((a,b)=>a-b)
    //count是可以满足小孩的数量
    let count = 0
    //遍历饼干，当可以满足一个小孩时，跳到下一个小孩
    brr.forEach(biscuit=>{
        if(biscuit >=arr[count]){
            count++
        }
    })
    return count
};
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
/* var maxProfit = function(prices) {
    let buy = 0
    let total = 0
    
    while(buy<prices.length){
        for(let d=buy;d<prices.length;d++){
            if(prices[d] > prices[buy]){
                //当天价格-买入天的价格
                let temp = prices[d]-prices[buy]
                //如果有收益
                if(temp > 0){
                    total =  temp + total
                    buy = d
                }
                //如果没收益
                if(temp<=0){
                    buy = d
                }
            }
        }
        buy++
    }
    
   
    return total
}; */
/* 之前写了两种方法（不对）：
    1.今天有收益，直接卖出，并且buy =today，只会算出哪两天之间买卖收益最大
    2.今天有收益，直接卖出，并且buy = today+1，也不对
正确的写法：
    1.今天有收益，那么计算明天和后天之间是否递增， 递增就不买，直到下降之前买
    今天没有收益，那么买入日变成明天
    */
/* var maxProfit = function(prices) {
    //买入日
    let buy = 0
    //总收益
    let total = 0
    
    while(buy<prices.length-1){
        //明天和今天的差额
        let profit = prices[buy+1] - prices[buy]
        //卖出日
        let sell =buy+1
        //股票下降，买入日延后
        if(profit <= 0)buy++
        
        //股票上涨
        if(profit>0){
            //计算卖出日
            for(let d = buy+1;d<prices.length-1;d++){
                let temp = prices[d+1]-prices[d]
                if(temp<0 ){//明天下降，今天卖出
                    sell = d
                    break
                }
                if(temp>0){//明天上涨，继续遍历到下降或者最后一天
                    sell = d+1
                }
            }
            //如果最后一天都在涨，最后一天卖
            if(sell>prices.length){
                total = total+ prices[prices.length-1]-prices[buy]
                return total
            }else{//其他，算出下降前一天的收益，买入日延后
                total = total + prices[sell]-prices[buy]
                buy = sell + 1
            }
        }
    }
        
    return total
}; */
//优化;其实只算两天之间收益之和就行了
var maxProfit = function(prices) {
    let total = 0 
    for(let d= 0;d<prices.length-1;d++){
        if(prices[d+1] > prices[d]){
            total = total + prices[d+1]-prices[d]
        }
    }
    return total
}
console.log(maxProfit( [7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([1,2]))