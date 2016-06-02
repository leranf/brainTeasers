var words = [
  'hello',
  'world',
  'finish',
  'william',
  'leran',
  'brittany',
  'joseph',
  'brittanyish',
  'illiam'
];

var longestCommonSubstring = function (words) {
  var longestSubstring = '';
  words.forEach(function(word, index) {
    var wordsToCompareAgainst = words.slice(0);
    wordsToCompareAgainst.splice(index, 1);
    wordsToCompareAgainst.forEach(function(wordToCompare) {
      var shorterWord;
      var longerWord;
      if (word.length > wordToCompare.length) {
        shorterWord = wordToCompare;
        longerWord = word;
      } else {
        shorterWord = word;
        longerWord = wordToCompare;
      }
      for (var i = 0; i < shorterWord.length; i++) {
        for (var j = 0; j < longerWord.length; j++) {
          if (shorterWord[i] === longerWord[j]) {
            var substring = shorterWord[i];
            var count = 1;
            var shortIndex = i + 1;
            var longIndex = j + 1;
            while (shorterWord[shortIndex] === longerWord[longIndex] && shortIndex < shorterWord.length && longIndex < longerWord.length) {
              substring += shorterWord[shortIndex];
              count++;
              shortIndex++;
              longIndex++;
            }
            if (count > longestSubstring.length) {
              longestSubstring = substring;
            }
          }
        }
      }
    });
  });
  return [longestSubstring, longestSubstring.length];
};

console.log(longestCommonSubstring(words));