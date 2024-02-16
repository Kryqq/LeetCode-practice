// var combinationSum = function (candidates, target) {
//    let index = 0;
//    let tempDataStruct = [];
//    let result = [];

//    function backtracking(index, target, tempDataStruct) {
//       console.log('target в 1 фунkции', target);
//       if (target === 0) {
//          result.push([...tempDataStruct]);
//          console.log(result);
//          return;
//       }

//       if (target < 0) {
//          return;
//       }
//       console.log('Заходим в цикл с', target, tempDataStruct);
//       for (let i = index; i < candidates.length; i++) {
//          tempDataStruct.push(candidates[i]);
//          console.log('до рекусрсии', i, target, '-', candidates[i], tempDataStruct);

//          backtracking(i, target - candidates[i], tempDataStruct); //
//          tempDataStruct.pop();
//          console.log('после', i, target, '-', candidates[i], tempDataStruct);
//       }
//    }
//    backtracking(index, target, tempDataStruct);
//    return result;
// };

// console.log(combinationSum([2, 3], 5));

function combinationSum(candidates, target) {
   let stack = [];
   let result = [];
   stack.push([0, target, []]);

   while (stack.length > 0) {
      console.log('do', stack);
      let [index, target, tempDataStruct] = stack.pop();
      console.log('posle', stack);

      if (target === 0) {
         result.push([...tempDataStruct]);
         console.log(result, 'result');
         continue;
      }

      if (target < 0 || index === candidates.length) {
         console.log(target, 'TARGET');
         continue;
      }

      stack.push([index + 1, target, tempDataStruct]);
      console.log('pervy push', stack);
      stack.push([index, target - candidates[index], [...tempDataStruct, candidates[index]]]);

      console.log('polny', stack);
      //  [
      //     [index + 1, target, tempDataStruct],
      //     [index, target - candidates[index], [...tempDataStruct, candidates[index]]],
      //  ];
   }

   return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));


// {
// 	"compilerOptions": {
// 	  "target": "ESNext",
// 	  "useDefineForClassFields": true,
// 	  "lib": ["DOM", "DOM.Iterable", "ESNext"],
// 	  "allowJs": false,
// 	  "skipLibCheck": true,
// 	  "esModuleInterop": false,
// 	  "allowSyntheticDefaultImports": true,
// 	  "strict": true,
// 	  "forceConsistentCasingInFileNames": true,
// 	  "module": "ESNext",
// 	  "moduleResolution": "Node",
// 	  "resolveJsonModule": true,
// 	  "isolatedModules": true,
// 	  "noEmit": true,
// 	  "jsx": "react-jsx"
// 	},
// 	"include": ["src", "vite.config.ts"],
//   "references": [
// 	{
// 	  "path": "./tsconfig.node.json"
// 	}
//    ]
//  }