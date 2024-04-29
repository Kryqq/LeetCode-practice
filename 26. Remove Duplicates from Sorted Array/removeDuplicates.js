var removeDuplicates = function (nums) {
   if (nums.length === 0) return 0;

   for (let i = 0; i < nums.length; ) {
      if (nums[i] === nums[i + 1]) {
         nums.splice(i, 1);
      } else {
         i++;
      }
   }
};
console.log(removeDuplicates([1, 1, 1, 1, 2]));
