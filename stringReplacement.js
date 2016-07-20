function stringReplacement(str, replace, replaceWith) {
  var resultChars = [];
  var matchedChars = [];
  var strChars = str.split('');
  var replaceChars = replace.split('');
  var replaceWithChars = replaceWith.split('');
  var count = 0;
  strChars.forEach(function(char, i) {
    if (char === replaceChars[count]) {
      matchedChars.push(char);
      if (++count === replaceChars.length) {
        resultChars = resultChars.concat(replaceWithChars);
        matchedChars = [];
        count = 0;
      } else if (i === strChars.length - 1) {
        resultChars = resultChars.concat(matchedChars);
      }
    } else {
      if (count > 0) {
        resultChars = resultChars.concat(matchedChars);
        matchedChars = [];
        count = 0;
      } else {
        resultChars.push(char);
      }
    }
  });
  return resultChars.join('');
};

var str = 'hello world hello wor';
var replace = 'world';
var replaceWith = 'peoples';

console.log(stringReplacement(str, replace, replaceWith));