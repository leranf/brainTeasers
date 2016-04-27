var reverseString = function(string) {
  var newString = '';
  for (var i = string.length - 1; i >=0; i--) {
    newString += string[i];
  }

  return newString;
};