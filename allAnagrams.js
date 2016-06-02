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
  var result = [];

  var recurse = function(current, optionsLeft) {
    if (!optionsLeft.length) {
      return result.push(current);
    }

    for (var i = 0; i < optionsLeft.length; i++) {
      recurse(current + optionsLeft[i], optionsLeft.slice(0,i).concat(optionsLeft.slice(i+1)));
    }

  };

  recurse('', str.split(''));
  return result;
};

console.log(allAnagrams('abc'));
