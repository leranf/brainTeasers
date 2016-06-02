/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(str) {
  var chars = str.split('');
  var result = [];

  var create = function(anagram, left, options) {
    if (!left) {
      result.push(anagram);
      return;
    }

    for (var i = 0; i < options.length; i++) {
      newOptions = options.slice(0, i).concat(options.slice(i+1));
      create(anagram + options[i], left - 1, newOptions);
    }
  };

  create('', str.length, chars);
  return result;

};

console.log(allAnagrams('abc'));
