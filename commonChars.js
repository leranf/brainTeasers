/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

function commonChars(str1, str2) {
  var longerStr = str1.length > str2.length ? str1 : str2;
  var chars1 = {};
  var chars2 = {};
  var result = '';

  for (var i = 0; i < longerStr.length; i++) {
    if (str1[i]) {
      var char = str1[i];
      chars1[char] = char;
    }

    if (str2[i]) {
      var char = str2[i];
      chars2[char] = char;
    }
  }

  for (var key in chars1) {
    if (chars2[key]) {
      result += key;
    }
  }

  return result;

}

console.log(commonChars('acexivou', 'aegihobu'));