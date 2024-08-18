/**
 * @param {string} queryIP
 * @return {string}
 */
//要求，空间On，时间On


//时间ON,空间O1
//正则表达式
var validIPAddress = function(queryIP) {
    let isIpv4 =  /^((2[0-5]{2}|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(2[0-5]{2}|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/.test(queryIP)
    let isIpv6 = /^(([a-fA-F0-9]){1,4}:){7}(([a-fA-F0-9]){1,4})$/.test(queryIP)
  //  console.log(isIpv4,isIpv6)
    return isIpv4 ? 'IPv4' : (isIpv6 ? 'IPv6' : "Neither")
};
 console.log(validIPAddress("172.16.254.1"))
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
console.log(validIPAddress("2001:0db8:85a3:00000:0:8A2E:0370:7334"))
console.log(validIPAddress("219.219.219.219"))
console.log(validIPAddress("256.256.256.256")) 
console.log(validIPAddress("1e1.4.5.6"))
console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"))
