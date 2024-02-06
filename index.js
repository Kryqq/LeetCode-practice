var combinationSum = function (candidates, target) {
   let index = 0;
   let tempDataStruct = [];
   let result = [];

   function backtracking(index, target, tempDataStruct) {
      console.log(target);
      if (target === 0) {
         result.push([...tempDataStruct]);
         console.log(result);
         return;
      }

      if (target < 0) {
         return;
      }

      for (let i = index; i < candidates.length; i++) {
         tempDataStruct.push(candidates[i]);
         console.log('до рекусрсии', i, target, '-', candidates[i], tempDataStruct);

         backtracking(i, target - candidates[i], tempDataStruct); //
         tempDataStruct.pop();
         console.log('после', i, target, '-', candidates[i], tempDataStruct);
      }
   }
   backtracking(index, target, tempDataStruct);
   return result;
};

console.log(combinationSum([2, 3], 5));
