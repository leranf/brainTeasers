function longestPalindrome(str) {
  function isPalindrome(str) {
    var reverse = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    return str === reverse;
  }

  var substrings = [];
  var longest = '';
  function createSubstr(substr, i) {
    if (substr.length) {
      substrings.push(substr);
    }

    if (str.length === i) {
      return;
    }

    createSubstr(substr + str[i], i + 1);
  }
  for (var i = 0; i < str.length; i++) {
    createSubstr('', i);
  }

  for (var i = 0; i < substrings.length; i++) {
    var currSubstr = substrings[i];
    if (currSubstr.length > longest.length && isPalindrome(currSubstr)) {
      longest = currSubstr;
    }
  }
  return longest;
}

console.log(longestPalindrome('babad'));


