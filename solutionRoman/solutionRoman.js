const map = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000,
};

function solution(roman) {
   let result = 0;

   for (let i = 0; i < roman.length; i++) {
      const current = map[roman[i]];
      const next = map[roman[i + 1]];

      if (current < next) {
         result = result - current;
      } else {
         result = result + current;
      }
   }
   return result;
}

console.log(solution('XIX'));
