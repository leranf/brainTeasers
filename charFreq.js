/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var charFreq = function(str) {
  var result = [];
  var chars = {};
  for (var i = 0; i < str.length; i++) {
    var current = str[i];
    chars[current] = chars[current] || 0;
    chars[current]++;
  }
  for (var key in chars) {
    result.push([key, chars[key]]);
  }
  result.sort(function(a,b) {
    if (a[1] === b[1]) {
      return a[0] > b[0];
    }
    return a[1] < b[1];
  });

  return result;
}

console.log(charFreq('mississippi'));
console.log(charFreq('miaaiaaippi'));
console.log(charFreq('mmmaaaiiibbb'));

