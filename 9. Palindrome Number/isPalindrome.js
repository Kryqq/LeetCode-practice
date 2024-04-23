var isPalindrome = function (x) {
   let r = 0;
   let num = x;
   while (num > 0) {
      const digit = num % 10;

      r = r * 10 + digit;

      num = Math.floor(num / 10);

   }

   return x === r;
};

console.log(isPalindrome(121));
