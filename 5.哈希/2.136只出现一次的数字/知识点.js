/* 
7种位运算的详细特性和示例：

与运算（AND）：
任何数和0做与运算，结果是0，即 x & 0 = 0。例如，5（101） & 0 = 0。
任何数和其自身做与运算，结果是自身，即 x & x = x。例如，5（101） & 5（101） = 5（101）。
或运算（OR）：
任何数和0做或运算，结果是自身，即 x | 0 = x。例如，5（101） | 0 = 5（101）。
任何数和其自身做或运算，结果是自身，即 x | x = x。例如，5（101） | 5（101） = 5（101）。
异或运算（XOR）：
任何数和0做异或运算，结果是自身，即 x ^ 0 = x。例如，5（101） ^ 0 = 5（101）。
任何数和其自身做异或运算，结果是0，即 x ^ x = 0。例如，5（101） ^ 5（101） = 0。
异或运算满足交换律和结合律，即 a ^ b ^ c = a ^ (b ^ c) = (a ^ b) ^ c。例如，5（101） ^ 3（011） ^ 4（100） = 5 ^ (3 ^ 4) = (5 ^ 3) ^ 4。
非运算（NOT）：
非运算会反转操作数的所有位。例如，~5（101） = 2（010）。
左移运算（SHL）：
左移n位等于乘以2的n次方，即 x << n = x * 2^n。例如，5（101） << 2 = 20（10100）。
左移运算不改变操作数的符号位。
逻辑右移运算（SHR）：
右移n位等于除以2的n次方，即 x >> n = x / 2^n。例如，20（10100） >> 2 = 5（101）。
逻辑右移运算会用0填充移位后产生的空位。
算术右移运算（SAR）：
算术右移运算会用符号位填充移位后产生的空位，因此它可以保持负数的符号。例如，对于负数-5（1011） >>> 2 = -2（1110）。
这些特性使得位运算在计算机科学和编程中有很多有趣和有用的应用。例如，我们可以用位运算来进行快速的乘法和除法运算，或者用异或运算来交换两个变量的值，等等。 */