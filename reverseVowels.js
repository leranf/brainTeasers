var reverseVowels = function(string) {
  var vowels = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u',
    'A': 'A',
    'E': 'E',
    'I': 'I',
    'O': 'O',
    'U': 'U',
  };
  var letters = string.split('');
  vowelsFound = [];

  for (var i = 0; i < letters.length; i++) {
    if (vowels.hasOwnProperty(letters[i])) {
      vowelsFound.push([i, letters[i]]);
    }
  }

  var counter = 0;
  for (var i = vowelsFound.length - 1; i >= 0; i--) {
    var replaceIndex = vowelsFound[counter][0];
    letters[replaceIndex] = vowelsFound[i][1];
    counter++;
  }

  return letters.join('');

};

var result = reverseVowels('leetcode');
console.log(result);