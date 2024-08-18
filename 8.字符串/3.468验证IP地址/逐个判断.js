/**
 * @param {string} queryIP
 * @return {string}
 */
//要求，空间On，时间On


//时间ON,空间O1
var validIPAddress = function(queryIP) {
    let arr
    if(queryIP.length <15)arr = queryIP.split('.') //当长度<=15时，是ipv4
    if(queryIP.length >15)arr = queryIP.split(':')//当长度>=15时，是ipv6
    if(queryIP.length  == 15){//判断当长度==15时，是哪个
        if(queryIP[1] == ':'){
            arr = queryIP.split(':')
        }else{
            arr = queryIP.split('.')
        }
    }
    if(arr.length == 4){//当是ipv4时
        for(let i =0;i<4;i++){
            if(+arr[i] <0 || +arr[i] >255)return 'Neither' //需0<= num <=255
            if(+arr[i] !==0 && arr[i][0] == '0')return 'Neither'//不能有前置0
            if(+arr[i] == NaN)return 'Neither'//不能有字母
            //注意typeof +arr[i] + '',会先执行typeof +'arr[i]'，再执行+'',输出number，所以要typeof(+arr[i] + '')输出string
            //同理，由于数字没有length属性，所以要转换成字符串再计算长度
            if((+arr[i]+'').length != arr[i].length)return 'Neither' //不能有字母的特殊情况，比如1e1转换成number，会变成幂次方，防止这种转换
        }
        return "IPv4"
    }else if(arr.length == 8){//当是ipv6时
        for(let i=0;i<8;i++){
            if(arr[i].length <1 || arr[i].length > 4)return 'Neither' //字段长度：1<=字段长度<=4
            for(let j=0;j<arr[i].length;j++){//字段内容需要再0-9，a-f，A-F之中
                if(arr[i][j].charCodeAt(0) >= '0'.charCodeAt(0) && arr[i][j].charCodeAt(0) <= '9'.charCodeAt(0))continue
                if(arr[i][j].charCodeAt(0) >= 'a'.charCodeAt(0) && arr[i][j].charCodeAt(0) <= 'f'.charCodeAt(0))continue
                if(arr[i][j].charCodeAt(0) >= 'A'.charCodeAt(0) && arr[i][j].charCodeAt(0) <= 'F'.charCodeAt(0))continue
                return 'Neither'
            }
        }
        return "IPv6"
    }
    return 'Neither'
};
 console.log(validIPAddress("172.16.254.1"))
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
console.log(validIPAddress("256.256.256.256")) 
console.log(validIPAddress("1e1.4.5.6"))
console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"))