var palindromePairs = function(words) {
  var result = [];
  var indexes = {};
  
  words.forEach(function(word, index) {
    indexes[word] = index;
  });

  var makesPalindrome = function(str1, str2) {
    var full = str1 + str2;
    var backIndex = full.length - 1;
    for (var i = 0; i < Math.floor(full.length/2); i++) {
      if (full[i] !== full[backIndex]) {
        return false;
      }
      backIndex--;
    }
    return true;
  };

  var findAllPals = function (string, strings) {
    strings.forEach(function(str) {
      if (makesPalindrome(string, str)) {
        result.push([indexes[string], indexes[str]]);
      }
    });
  };

  words.forEach(function(word, index) {
    var wordsToCompareAgainst = words.slice();
    wordsToCompareAgainst.splice(index, 1);
    findAllPals(word, wordsToCompareAgainst);
  });

  return result;
};

// var words = ["bat", "tab", "cat"]; // => [[0, 1], [1, 0]]
var words = ["abcd", "dcba", "lls", "s", "sssll"] // => [[0, 1], [1, 0], [3, 2], [2, 4]]
console.log(palindromePairs(words));
