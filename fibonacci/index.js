const fib = (n, memo = {}) => {
   if (memo[n] !== undefined) return memo[n];
   if (n === 0) return 0;
   if (n === 1) return 1;
   memo[n] = fib(n - 1) + fib(n - 2);

   return memo[n];
};

console.log(fib(4));
