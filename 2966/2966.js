const divideArray = function (nums, k) {
   nums.sort((a, b) => a - b);

   let result = [];

   for (let i = 0; i < nums.length; i += 3) {
      if (Math.abs(nums[i] - nums[i + 2]) > k) {
         return [];
      }

      result.push([nums[i + 2], nums[i + 1], nums[i]]);
   }
   return result;
};

const arr = [1, 3, 4, 8, 7, 9, 3, 5, 1];

const num = 2;

console.log(divideArray(arr, num));
