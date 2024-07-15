function fibonacci(num) {
// your code here
	function fibonacci(num) {
let a = 0, b = 1, fib;
 
if (num === 1 ||num==0) {
    return 0;
}
for (let i = 2; i <= num; i++) {
    fib = a + b;
    a = b;
    b = fib;
}
return a;
}
module.exports = fibonacci ;
}
module.exports = fibonacci;