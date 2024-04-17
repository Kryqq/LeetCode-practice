const majorityElement = (arr) => {
   let majority = null;
   let count = 0;

   for (let num of arr) {
	 if (count === 0) {
		majority = num;
	 }
	 count += (num === majority) ? 1 : -1;
   }
   return majority
};

console.log(majorityElement([3, 2, 3]));
