function longestPalindrome(str) {
  function isPalindrome(str) {
    var reverse = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reverse += str[i];
    }
    return str === reverse;
  }

  var longest = '';
  function createSubstr(substr, i) {
    if (substr.length > longest.length) {
      if (isPalindrome(substr)) {
        longest = substr;
      }
    }

    if (str.length === i) {
      return;
    }

    createSubstr(substr + str[i], i + 1);
  }
  for (var i = 0; i < str.length; i++) {
    createSubstr(str[i], i+1);
  }
  return longest;
}

console.log(longestPalindrome('babad'));


