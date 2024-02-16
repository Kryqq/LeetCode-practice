var findLeastNumOfUniqueInts = function (arr, k) {
   const map = {};

   for (const num of arr) {
      map[num] = (map[num] || 0) + 1;
   }

   const sorted = Object.values(map).sort((a, b) => a - b);
   console.log(sorted);
   let count = 0;
   for (let i = 0; i < sorted.length; i++) {
      if (k >= sorted[i]) {
         k -= sorted[i];

         sorted[i] = 0;
      }
      if (k <= sorted[i]) {
         sorted[i] - k;
         k = 0;
      }
      if (sorted[i] !== 0) count++;
   }
   return count;
};
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3));
