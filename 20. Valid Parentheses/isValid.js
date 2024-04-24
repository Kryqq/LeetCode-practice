var isValid = function (s) {
   const bracketsStack = [];

   for (let i = 0; i < s.length; i++) {
      console.log(bracketsStack);
      if (s[i] == '{') bracketsStack.push('}');
      else if (s[i] == '[') bracketsStack.push(']');
      else if (s[i] == '(') bracketsStack.push(')');
      else if (bracketsStack.pop() !== s[i]) return false;
   }
   return !bracketsStack.length;
};
console.log(isValid('{([])}'));
