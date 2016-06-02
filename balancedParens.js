/*
* write a function that takes a string of text and returns true if
* the parentheses are balanced and false otherwise.
*
* Example:
*   balancedParens('(');  // false
*   balancedParens('()'); // true
*   balancedParens(')(');  // false
*   balancedParens('(())');  // true
*
* Step 2:
*   make your solution work for all types of brackets
*
* Example:
*  balancedParens('[](){}'); // true
*  balancedParens('[({})]');   // true
*  balancedParens('[(]{)}'); // false
*
* Step 3:
* ignore non-bracket characters
* balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
* balancedParens(' var hubble = function() { telescopes.awesome();'); // false
*
*/

var balancedParens = function(str) {
  var options = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  var stack = [];

  for (var i = 0; i < str.length; i++) {
    var currentChar = str[i];
    if (options[currentChar]) {
      stack.push(currentChar);
    } else if (currentChar === '}' || currentChar === ']' || currentChar === ')') {
      if (options[stack.pop()] !== currentChar) {
        return false;
      }
    }
  }

  return !stack.length;

};

console.log(balancedParens('(')); // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')(')); // false
console.log(balancedParens('(())'));  // true
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false