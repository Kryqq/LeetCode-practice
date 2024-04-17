var timeRequiredToBuy = function (tickets, k) {
   let count = 0;
   while (tickets[k] != 0) {
      for (let i = 0; i < tickets.length; i++) {
         if (tickets[i] > 0) {
            tickets[i] -= 1;
            count++;
         }
         if (tickets[k] === 0) return count;
      }
   }
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
