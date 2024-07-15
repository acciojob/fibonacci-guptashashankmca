function fibonacci(num) {
// your code here
	if(num==0){
		
		return 0;
	}
	if(num==1){
		
		return1;
	}
	let a = 0;
	let b = 1;
	let fib = 0;

	for (let i = 0; i<=num; i++) {
		fib = a + b;
		a = b;
		b = fib;
	}
	return fib;
}

module.exports = fibonacci;
