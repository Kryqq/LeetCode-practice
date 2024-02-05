const firstUniqChar = function (s: string): number {
   const table = {};

   for (const char of s) {
      table[char] = table[char] ? table[char] + 1 : 1;
   }
   for (let i = 0; i < s.length; i++) {
      if (table[s[i]] === 1) {
         return i;
      }
   }
   return -1;
};

console.log(firstUniqChar('loveleetcode'));
