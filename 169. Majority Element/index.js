var majorityElement = function (nums) {
   let map = {};
   for (let num of nums) {
      map[num] = (map[num] || 0) + 1;
      if (map[num] > nums.length / 2) {
         return num;
      }
   }
};

nums = [3, 2, 3];

console.log(majorityElement(nums));
