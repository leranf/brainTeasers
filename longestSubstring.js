// Given a string, find the length of the longest substring without repeating characters.

// function longestSubstring(str) {
//   var longestStr = '';
//   var currStr = {
//     string: '',
//     chars: {}
//   };
//   for (var i = 0; i < str.length; i++) {
//     var currChar = str[i];
//     if (!currStr.chars.hasOwnProperty(currChar)) {
//       currStr.string += currChar;
//       currStr.chars[currChar] = i;
//     } else {
//       if (currStr.string.length > longestStr.length) {
//         longestStr = currStr.string;
//       }
//       currStr.string = currChar;
//       currStr.chars = {};
//       currStr.chars[currChar] = i;
//     }
//   }
//   if (currStr.string.length > longestStr.length) {
//     return [currStr.string, currStr.string.length];
//   } else {
//     return [longestStr, longestStr.length];
//   }
// }

function longestSubstring(str) {
  var longestLength = 0;
  var longestChars;

  function createUniqueStrings(chars, length, i) {
    if (length > longestLength) {
      longestLength = length;
      longestChars = chars;
    }

    if (str.length === i) {
      return;
    } else if (chars.hasOwnProperty(str[i])) {
      return;
    }

    chars[str[i]] = i;
    createUniqueStrings(chars, length + 1, i + 1);
  }

  for (var i = 0; i < str.length; i++) {
    createUniqueStrings({}, 0, i);
  }

  return longestLength;
}

console.log(longestSubstring('dvdf'));