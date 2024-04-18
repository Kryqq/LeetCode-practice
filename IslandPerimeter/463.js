
var islandPerimeter = function (grid) {
   let count = 0;
   for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
         if (grid[row][col] == 1) {
            count += 4;
            if (row > 0 && grid[row - 1][col] == 1) {
               count -= 2;
            }
            if (col > 0 && grid[row][col - 1] == 1) {
               count -= 2;
            }
         }
      }
   }
   return count;
};

console.log(islandPerimeter([[0, 1]]));
