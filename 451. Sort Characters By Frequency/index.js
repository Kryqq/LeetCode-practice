const frequencySort = function (s) {
   const map = new Map();
   for (const char of s) {
      map[char] = (map[char] || 0) + 1;
   }
   const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);

   let str = '';
   for ([char, i] of sorted) {
      str += char.repeat(i);
	
   }
   
   return str
};

// const frequencySort = function (s) {

//    const count = s.split('').reduce((acc, char) => {
// 	   acc[char] = (acc[char] || 0) + 1;

//       return acc;

//    }, {});

//    const sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);

//    let str = '';
//    for (const char of sorted) {
//       str += char.repeat(count[char]);
//    }
// };

console.log(frequencySort('tree'));
