function longestPalindrome(str) {
  function isPalindrome(str) {
    var mid = Math.floor(str.length / 2);
    var lastIndex = str.length - 1;
    for (var i = 0; i <= mid; i++) {
      if (str[i] !== str[lastIndex - i]) {
        return false;
      }
    }
    return true;
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


