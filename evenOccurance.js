/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

function evenOccurrence(arr) {
  var occurances = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    occurances[num] = occurances[num] ? occurances[num]+1 : 1;
  }
  for (var key in occurances) {
    if (occurances[key] % 2 === 0) {
      return key;
    }
  }
  return null;
}

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4
