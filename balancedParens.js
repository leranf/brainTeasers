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
  var stack = [];

  var match = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  var openParens = {
    '[': '[',
    '(': '(',
    '{': '{',
  };

  var closeParens = {
    ']': ']',
    ')': ')',
    '}': '}'
  };

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (openParens[char]) {
      stack.push(char);
    } else if (closeParens[char]) {
      var opener = stack.pop();
      if (char !== match[opener]) {
        return false;
      }
    }
  }

  return !stack.length;

};

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens('var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false


